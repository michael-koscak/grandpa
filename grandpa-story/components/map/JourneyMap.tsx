'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { 
  locations, 
  journeySegments, 
  getLocationById,
  MapLocation,
  JourneySegment,
} from '@/lib/mapData';
import { journeyNarratives, JourneyNarrative } from '@/lib/journeyNarrative';
import { MAPBOX_TOKEN, MAP_STYLE, FLY_TO_OPTIONS } from '@/lib/mapConfig';
import MapMarker from './MapMarker';
import MapPopup from './MapPopup';
import MapPanel from './MapPanel';
import StoryPanel from './StoryPanel';
import { createRoot, Root } from 'react-dom/client';

if (MAPBOX_TOKEN) {
  mapboxgl.accessToken = MAPBOX_TOKEN;
}

export default function JourneyMap() {
  const searchParams = useSearchParams();
  const initialSegment = searchParams.get('segment');
  
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<Map<string, { marker: mapboxgl.Marker; root: Root }>>(new Map());
  const popupRef = useRef<mapboxgl.Popup | null>(null);
  
  const [activeSegments, setActiveSegments] = useState<Set<string>>(
    new Set(journeySegments.map(s => s.id))
  );
  const [activeLocation, setActiveLocation] = useState<MapLocation | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState<string | null>(null);
  
  // Story mode state
  const [storyMode, setStoryMode] = useState(false);
  const [currentSegmentIndex, setCurrentSegmentIndex] = useState(0);
  const [currentSubRegionIndex, setCurrentSubRegionIndex] = useState(0);
  const [showStoryPanel, setShowStoryPanel] = useState(false);

  const currentSegment: JourneySegment | null = storyMode ? journeySegments[currentSegmentIndex] : null;
  const currentNarrative: JourneyNarrative | null = currentSegment ? journeyNarratives[currentSegment.id] : null;
  
  // Get current sub-region if segment has them
  const hasSubRegions = currentSegment?.subRegions && currentSegment.subRegions.length > 0;
  const currentSubRegion = hasSubRegions ? currentSegment!.subRegions![currentSubRegionIndex] : null;

  // Add journey path lines
  const addJourneyPaths = useCallback(() => {
    if (!map.current) return;

    journeySegments.forEach((segment) => {
      const coordinates = segment.locations
        .map((id) => getLocationById(id)?.coordinates)
        .filter((c): c is [number, number] => c !== undefined);

      if (coordinates.length < 2) return;

      try {
        if (!map.current!.getSource(`path-${segment.id}`)) {
          map.current!.addSource(`path-${segment.id}`, {
            type: 'geojson',
            data: {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'LineString',
                coordinates,
              },
            },
          });

          map.current!.addLayer({
            id: `path-${segment.id}`,
            type: 'line',
            source: `path-${segment.id}`,
            layout: {
              'line-join': 'round',
              'line-cap': 'round',
            },
            paint: {
              'line-color': segment.color,
              'line-width': 3,
              'line-opacity': 0.7,
              'line-dasharray': [2, 1],
            },
          });
        }
      } catch (err) {
        console.error('Error adding path:', segment.id, err);
      }
    });
  }, []);

  // Initialize map - start with Slovenia focus
  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    if (!MAPBOX_TOKEN) {
      setMapError('Mapbox token is missing.');
      return;
    }

    try {
      // Start focused on Slovenia
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: MAP_STYLE,
        center: [14.5, 46.1],
        zoom: 7,
      });

      map.current.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

      map.current.on('load', () => {
        setMapLoaded(true);
        addJourneyPaths();
        
        if (initialSegment && journeySegments.find(s => s.id === initialSegment)) {
          setTimeout(() => {
            startStoryModeAt(initialSegment);
          }, 500);
        }
      });

      map.current.on('error', (e) => {
        console.error('Mapbox error:', e);
      });

      map.current.once('idle', () => {
        if (!mapLoaded) {
          setMapLoaded(true);
          addJourneyPaths();
        }
      });

    } catch (err) {
      console.error('Error initializing map:', err);
      setMapError(err instanceof Error ? err.message : 'Failed to initialize map');
    }

    return () => {
      markersRef.current.forEach(({ marker, root }) => {
        root.unmount();
        marker.remove();
      });
      markersRef.current.clear();
      map.current?.remove();
      map.current = null;
    };
  }, [addJourneyPaths, initialSegment]);

  // Update path visibility and styling
  useEffect(() => {
    if (!map.current || !mapLoaded) return;

    journeySegments.forEach((segment, index) => {
      const layerId = `path-${segment.id}`;
      try {
        if (map.current!.getLayer(layerId)) {
          const isActive = activeSegments.has(segment.id);
          const isCurrent = storyMode && index === currentSegmentIndex;
          
          map.current!.setLayoutProperty(layerId, 'visibility', isActive ? 'visible' : 'none');
          
          if (isActive) {
            map.current!.setPaintProperty(layerId, 'line-width', isCurrent ? 4 : 2);
            map.current!.setPaintProperty(layerId, 'line-opacity', isCurrent ? 0.9 : (storyMode ? 0.2 : 0.5));
          }
        }
      } catch {
        // Layer might not exist yet
      }
    });
  }, [activeSegments, mapLoaded, storyMode, currentSegmentIndex]);

  // Add/update markers
  useEffect(() => {
    if (!map.current || !mapLoaded) return;

    const visibleLocationIds = new Set<string>();
    activeSegments.forEach((segmentId) => {
      const segment = journeySegments.find((s) => s.id === segmentId);
      segment?.locations.forEach((id) => visibleLocationIds.add(id));
    });

    markersRef.current.forEach(({ marker, root }, id) => {
      if (!visibleLocationIds.has(id)) {
        root.unmount();
        marker.remove();
        markersRef.current.delete(id);
      }
    });

    visibleLocationIds.forEach((id) => {
      if (markersRef.current.has(id)) return;

      const location = getLocationById(id);
      if (!location) return;

      const el = document.createElement('div');
      el.className = 'marker-container';
      
      const root = createRoot(el);
      root.render(
        <MapMarker
          location={location}
          isActive={activeLocation?.id === id}
          onClick={() => handleMarkerClick(location)}
        />
      );

      const marker = new mapboxgl.Marker({ element: el, anchor: 'center' })
        .setLngLat(location.coordinates)
        .addTo(map.current!);

      markersRef.current.set(id, { marker, root });
    });
  }, [activeSegments, mapLoaded, activeLocation]);

  // Update markers when active location changes
  useEffect(() => {
    markersRef.current.forEach(({ root }, id) => {
      const location = getLocationById(id);
      if (!location) return;
      
      root.render(
        <MapMarker
          location={location}
          isActive={activeLocation?.id === id}
          onClick={() => handleMarkerClick(location)}
        />
      );
    });
  }, [activeLocation]);

  const handleMarkerClick = (location: MapLocation) => {
    setActiveLocation(location);

    if (popupRef.current) {
      popupRef.current.remove();
    }

    const popupContainer = document.createElement('div');
    const popupRoot = createRoot(popupContainer);
    popupRoot.render(
      <MapPopup
        location={location}
        onClose={() => {
          popupRef.current?.remove();
          setActiveLocation(null);
        }}
      />
    );

    popupRef.current = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
      offset: 20,
      maxWidth: 'none',
    })
      .setLngLat(location.coordinates)
      .setDOMContent(popupContainer)
      .addTo(map.current!);

    map.current!.flyTo({
      center: location.coordinates,
      zoom: Math.max(map.current!.getZoom(), 10),
      ...FLY_TO_OPTIONS,
    });
  };

  const handleToggleSegment = (segmentId: string) => {
    setActiveSegments((prev) => {
      const next = new Set(prev);
      if (next.has(segmentId)) {
        next.delete(segmentId);
      } else {
        next.add(segmentId);
      }
      return next;
    });
  };

  // Fly to a segment's focus region (or sub-region)
  const flyToSegmentRegion = useCallback((segment: JourneySegment, subRegionIndex?: number) => {
    if (!map.current) return;

    let center: [number, number];
    let zoom: number;

    // If there are sub-regions and one is specified, use that
    if (segment.subRegions && segment.subRegions.length > 0 && subRegionIndex !== undefined) {
      const subRegion = segment.subRegions[subRegionIndex];
      center = subRegion.center;
      zoom = subRegion.zoom;
    } else {
      // Otherwise use the main focus region
      center = segment.focusRegion.center;
      zoom = segment.focusRegion.zoom;
    }

    map.current.flyTo({
      center,
      zoom,
      ...FLY_TO_OPTIONS,
    });
  }, []);

  const handleFlyToSegment = (segmentId: string) => {
    const segment = journeySegments.find((s) => s.id === segmentId);
    if (!segment) return;

    if (!activeSegments.has(segmentId)) {
      setActiveSegments((prev) => new Set([...prev, segmentId]));
    }
    
    // Enter story mode for this segment
    const index = journeySegments.findIndex(s => s.id === segmentId);
    if (index !== -1) {
      setStoryMode(true);
      setCurrentSegmentIndex(index);
      setCurrentSubRegionIndex(0);
      setShowStoryPanel(true);
      
      // Fly to segment's focus region (or first sub-region if available)
      if (segment.subRegions && segment.subRegions.length > 0) {
        flyToSegmentRegion(segment, 0);
      } else {
        flyToSegmentRegion(segment);
      }
    }
  };

  const startStoryModeAt = (segmentId: string) => {
    const segment = journeySegments.find(s => s.id === segmentId);
    const index = journeySegments.findIndex(s => s.id === segmentId);
    if (index !== -1 && segment) {
      setStoryMode(true);
      setCurrentSegmentIndex(index);
      setCurrentSubRegionIndex(0);
      setShowStoryPanel(true);
      
      if (segment.subRegions && segment.subRegions.length > 0) {
        flyToSegmentRegion(segment, 0);
      } else {
        flyToSegmentRegion(segment);
      }
    }
  };

  const handleShowAll = () => {
    setStoryMode(false);
    setShowStoryPanel(false);
    setActiveSegments(new Set(journeySegments.map((s) => s.id)));
    
    if (map.current) {
      // Show overview centered on Europe/Atlantic
      map.current.flyTo({
        center: [-20, 45],
        zoom: 2.5,
        ...FLY_TO_OPTIONS,
      });
    }
  };

  const handleStartGuidedJourney = () => {
    setStoryMode(true);
    setCurrentSegmentIndex(0);
    setCurrentSubRegionIndex(0);
    setShowStoryPanel(true);
    setActiveSegments(new Set(journeySegments.map(s => s.id)));
    
    const firstSegment = journeySegments[0];
    if (firstSegment.subRegions && firstSegment.subRegions.length > 0) {
      flyToSegmentRegion(firstSegment, 0);
    } else {
      flyToSegmentRegion(firstSegment);
    }
  };

  const handleNextSegment = () => {
    const segment = journeySegments[currentSegmentIndex];
    
    // If segment has sub-regions and we're not at the last one, go to next sub-region
    if (segment.subRegions && currentSubRegionIndex < segment.subRegions.length - 1) {
      const nextSubIndex = currentSubRegionIndex + 1;
      setCurrentSubRegionIndex(nextSubIndex);
      flyToSegmentRegion(segment, nextSubIndex);
    }
    // Otherwise, go to next segment
    else if (currentSegmentIndex < journeySegments.length - 1) {
      const nextIndex = currentSegmentIndex + 1;
      setCurrentSegmentIndex(nextIndex);
      setCurrentSubRegionIndex(0);
      
      const nextSegment = journeySegments[nextIndex];
      if (nextSegment.subRegions && nextSegment.subRegions.length > 0) {
        flyToSegmentRegion(nextSegment, 0);
      } else {
        flyToSegmentRegion(nextSegment);
      }
    }
  };

  const handlePrevSegment = () => {
    const segment = journeySegments[currentSegmentIndex];
    
    // If segment has sub-regions and we're not at the first one, go to previous sub-region
    if (segment.subRegions && currentSubRegionIndex > 0) {
      const prevSubIndex = currentSubRegionIndex - 1;
      setCurrentSubRegionIndex(prevSubIndex);
      flyToSegmentRegion(segment, prevSubIndex);
    }
    // Otherwise, go to previous segment (and its last sub-region if applicable)
    else if (currentSegmentIndex > 0) {
      const prevIndex = currentSegmentIndex - 1;
      setCurrentSegmentIndex(prevIndex);
      
      const prevSegment = journeySegments[prevIndex];
      if (prevSegment.subRegions && prevSegment.subRegions.length > 0) {
        const lastSubIndex = prevSegment.subRegions.length - 1;
        setCurrentSubRegionIndex(lastSubIndex);
        flyToSegmentRegion(prevSegment, lastSubIndex);
      } else {
        setCurrentSubRegionIndex(0);
        flyToSegmentRegion(prevSegment);
      }
    }
  };

  const handleCloseStoryPanel = () => {
    setShowStoryPanel(false);
    setStoryMode(false);
  };

  // Calculate total steps (segments + sub-regions)
  const getTotalSteps = () => {
    return journeySegments.reduce((total, seg) => {
      return total + (seg.subRegions ? seg.subRegions.length : 1);
    }, 0);
  };

  const getCurrentStep = () => {
    let step = 0;
    for (let i = 0; i < currentSegmentIndex; i++) {
      const seg = journeySegments[i];
      step += seg.subRegions ? seg.subRegions.length : 1;
    }
    step += currentSubRegionIndex + 1;
    return step;
  };

  // Check if we can go next/prev
  const canGoNext = () => {
    const segment = journeySegments[currentSegmentIndex];
    if (segment.subRegions && currentSubRegionIndex < segment.subRegions.length - 1) return true;
    return currentSegmentIndex < journeySegments.length - 1;
  };

  const canGoPrev = () => {
    if (currentSubRegionIndex > 0) return true;
    return currentSegmentIndex > 0;
  };

  // Get current region description
  const getCurrentRegionDescription = () => {
    if (!currentSegment) return '';
    if (currentSubRegion) return currentSubRegion.name;
    return currentSegment.focusRegion.description;
  };

  if (mapError) {
    return (
      <div className="w-full h-full bg-paper flex items-center justify-center">
        <div className="text-center max-w-md p-6">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
            <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-ink mb-2">
            Map Error
          </h3>
          <p className="text-ink-muted text-sm font-[family-name:var(--font-source-sans)]">
            {mapError}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="relative w-full" 
      style={{ height: '100%', minHeight: 'calc(100vh - 64px)' }}
    >
      {/* Map container */}
      <div 
        ref={mapContainer} 
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
        }}
      />
      
      {/* Control panel */}
      <div className="relative z-10">
        <MapPanel
          activeSegments={activeSegments}
          onToggleSegment={handleToggleSegment}
          onFlyToSegment={handleFlyToSegment}
          onShowAll={handleShowAll}
          onStartGuidedJourney={handleStartGuidedJourney}
        />
      </div>

      {/* Story Panel - shows narrative context */}
      <StoryPanel
        narrative={currentNarrative}
        segment={currentSegment}
        subRegionName={getCurrentRegionDescription()}
        isVisible={showStoryPanel}
        onClose={handleCloseStoryPanel}
        onNextSegment={handleNextSegment}
        onPrevSegment={handlePrevSegment}
        hasNext={canGoNext()}
        hasPrev={canGoPrev()}
        currentStep={getCurrentStep()}
        totalSteps={getTotalSteps()}
      />

      {/* Loading overlay */}
      {!mapLoaded && (
        <div className="absolute inset-0 bg-paper flex items-center justify-center z-20">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-ink-muted font-[family-name:var(--font-source-sans)]">
              Loading map...
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

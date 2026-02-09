'use client';

import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import Link from 'next/link';
import 'mapbox-gl/dist/mapbox-gl.css';
import { getLocationById, locationColors, MapLocation } from '@/lib/mapData';
import { MAPBOX_TOKEN, MAP_STYLE, HAS_MAPBOX_TOKEN } from '@/lib/mapConfig';

if (typeof window !== 'undefined' && HAS_MAPBOX_TOKEN) {
  mapboxgl.accessToken = MAPBOX_TOKEN;
}

interface MiniMapProps {
  locations: string[];
  width?: number;
  height?: number;
  showViewFullMapLink?: boolean;
  className?: string;
  // New props for better control
  center?: [number, number];
  zoom?: number;
  lineColor?: string;
  showLabels?: boolean;
  segmentId?: string;
  animatePath?: boolean;
}

export default function MiniMap({ 
  locations: locationIds, 
  width = 300, 
  height = 220,
  showViewFullMapLink = true,
  className = '',
  center: overrideCenter,
  zoom: overrideZoom,
  lineColor = '#8B4513',
  showLabels = true,
  segmentId,
  animatePath = true,
}: MiniMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const animationRef = useRef<number | null>(null);

  const resolvedLocations = locationIds
    .map(id => getLocationById(id))
    .filter((loc): loc is MapLocation => loc !== undefined);

  useEffect(() => {
    if (!HAS_MAPBOX_TOKEN || map.current || !mapContainer.current || resolvedLocations.length === 0) return;

    try {
      const coords = resolvedLocations.map(l => l.coordinates);
      
      let center: [number, number];
      let zoom: number;

      if (overrideCenter && overrideZoom) {
        center = overrideCenter;
        zoom = overrideZoom;
      } else if (coords.length === 1) {
        center = coords[0];
        zoom = 10;
      } else {
        // Calculate center of all points
        const lngSum = coords.reduce((sum, c) => sum + c[0], 0);
        const latSum = coords.reduce((sum, c) => sum + c[1], 0);
        center = [lngSum / coords.length, latSum / coords.length];
        
        // Calculate appropriate zoom with padding
        const lngs = coords.map(c => c[0]);
        const lats = coords.map(c => c[1]);
        const lngRange = Math.max(...lngs) - Math.min(...lngs);
        const latRange = Math.max(...lats) - Math.min(...lats);
        const maxRange = Math.max(lngRange, latRange);
        
        if (maxRange > 100) zoom = 1.5;
        else if (maxRange > 50) zoom = 2.5;
        else if (maxRange > 20) zoom = 3.5;
        else if (maxRange > 10) zoom = 4.5;
        else if (maxRange > 5) zoom = 5.5;
        else if (maxRange > 2) zoom = 7;
        else if (maxRange > 1) zoom = 8;
        else zoom = 10;
      }

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: MAP_STYLE,
        center,
        zoom,
        interactive: false,
        attributionControl: false,
      });

      map.current.on('load', () => {
        setMapLoaded(true);

        if (!map.current) return;

        // If multiple locations, draw path between them
        if (resolvedLocations.length > 1) {
          const lineCoords = resolvedLocations.map(l => l.coordinates);
          
          if (animatePath) {
            // Animated path drawing
            const fullLine: GeoJSON.Feature<GeoJSON.LineString> = {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'LineString',
                coordinates: lineCoords,
              },
            };

            map.current!.addSource('mini-path', {
              type: 'geojson',
              data: {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'LineString',
                  coordinates: [lineCoords[0]], // start with just first point
                },
              },
            });

            // Background path (faint, shows full route)
            map.current!.addSource('mini-path-bg', {
              type: 'geojson',
              data: fullLine,
            });

            map.current!.addLayer({
              id: 'mini-path-bg',
              type: 'line',
              source: 'mini-path-bg',
              layout: {
                'line-join': 'round',
                'line-cap': 'round',
              },
              paint: {
                'line-color': lineColor,
                'line-width': 1.5,
                'line-opacity': 0.15,
                'line-dasharray': [2, 2],
              },
            });

            // Animated foreground path
            map.current!.addLayer({
              id: 'mini-path',
              type: 'line',
              source: 'mini-path',
              layout: {
                'line-join': 'round',
                'line-cap': 'round',
              },
              paint: {
                'line-color': lineColor,
                'line-width': 2.5,
                'line-opacity': 0.8,
              },
            });

            // Animate the path drawing
            const totalPoints = 60;
            let currentPoint = 0;

            function interpolateAlongLine(coords: [number, number][], t: number): [number, number][] {
              if (t <= 0) return [coords[0]];
              if (t >= 1) return coords;
              
              // Calculate total distance
              let totalDist = 0;
              const segDists: number[] = [];
              for (let i = 1; i < coords.length; i++) {
                const dx = coords[i][0] - coords[i-1][0];
                const dy = coords[i][1] - coords[i-1][1];
                const d = Math.sqrt(dx*dx + dy*dy);
                segDists.push(d);
                totalDist += d;
              }
              
              const targetDist = t * totalDist;
              let accumulated = 0;
              const result: [number, number][] = [coords[0]];
              
              for (let i = 0; i < segDists.length; i++) {
                if (accumulated + segDists[i] >= targetDist) {
                  const remaining = targetDist - accumulated;
                  const frac = remaining / segDists[i];
                  const lng = coords[i][0] + frac * (coords[i+1][0] - coords[i][0]);
                  const lat = coords[i][1] + frac * (coords[i+1][1] - coords[i][1]);
                  result.push([lng, lat]);
                  return result;
                }
                accumulated += segDists[i];
                result.push(coords[i+1]);
              }
              
              return coords;
            }

            function animate() {
              currentPoint++;
              const t = Math.min(currentPoint / totalPoints, 1);
              const easedT = 1 - Math.pow(1 - t, 3); // easeOutCubic
              
              const interpolated = interpolateAlongLine(lineCoords, easedT);
              
              const source = map.current?.getSource('mini-path') as mapboxgl.GeoJSONSource;
              if (source) {
                source.setData({
                  type: 'Feature',
                  properties: {},
                  geometry: {
                    type: 'LineString',
                    coordinates: interpolated,
                  },
                });
              }
              
              if (t < 1) {
                animationRef.current = requestAnimationFrame(animate);
              }
            }

            // Start animation after a short delay
            setTimeout(() => {
              animationRef.current = requestAnimationFrame(animate);
            }, 300);
          } else {
            // Static path
            map.current!.addSource('mini-path', {
              type: 'geojson',
              data: {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'LineString',
                  coordinates: lineCoords,
                },
              },
            });

            map.current!.addLayer({
              id: 'mini-path',
              type: 'line',
              source: 'mini-path',
              layout: {
                'line-join': 'round',
                'line-cap': 'round',
              },
              paint: {
                'line-color': lineColor,
                'line-width': 2.5,
                'line-opacity': 0.7,
                'line-dasharray': [2, 1],
              },
            });
          }
        }

        // Add markers with labels
        resolvedLocations.forEach((location, index) => {
          if (!map.current) return;
          const color = locationColors[location.type];
          const isEndpoint = index === 0 || index === resolvedLocations.length - 1;
          const markerSize = isEndpoint ? 20 : 14;
          
          // Create marker element
          const el = document.createElement('div');
          el.style.width = `${markerSize}px`;
          el.style.height = `${markerSize}px`;
          el.innerHTML = `
            <svg width="${markerSize}" height="${markerSize}" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                fill="${color}"
                stroke="#fff"
                stroke-width="1.5"
              />
              <circle cx="12" cy="9" r="3" fill="#fff" opacity="0.9" />
            </svg>
          `;

          const marker = new mapboxgl.Marker({ element: el, anchor: 'bottom' })
            .setLngLat(location.coordinates)
            .addTo(map.current!);

          // Add label for endpoints or single-location maps
          if (showLabels && (isEndpoint || resolvedLocations.length <= 3)) {
            // Extract short name (city only)
            const shortName = location.name.split(',')[0].split('—')[0].trim();
            
            const labelEl = document.createElement('div');
            labelEl.style.cssText = `
              background: rgba(44, 36, 22, 0.85);
              color: #F5F1E8;
              font-size: 10px;
              font-family: var(--font-source-sans), sans-serif;
              font-weight: 500;
              padding: 2px 6px;
              border-radius: 3px;
              white-space: nowrap;
              pointer-events: none;
              box-shadow: 0 1px 3px rgba(0,0,0,0.2);
              margin-top: 2px;
            `;
            labelEl.textContent = shortName;

            new mapboxgl.Marker({ element: labelEl, anchor: 'top' })
              .setLngLat(location.coordinates)
              .addTo(map.current!);
          }
        });
      });
    } catch (error) {
      console.error('Error initializing MiniMap:', error);
      setMapLoaded(false);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      try {
        map.current?.remove();
        map.current = null;
      } catch (error) {
        console.error('Error cleaning up map:', error);
      }
    };
  }, [resolvedLocations.map(l => l.id).join(','), overrideCenter?.join(','), overrideZoom, lineColor, animatePath, showLabels]);

  if (resolvedLocations.length === 0) {
    return null;
  }

  // If no Mapbox token, show placeholder
  if (!HAS_MAPBOX_TOKEN) {
    return (
      <div 
        className={`relative rounded-lg overflow-hidden border border-context-border bg-paper-dark ${className}`}
        style={{ width, height }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
          <svg className="w-8 h-8 text-ink-muted mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p className="text-xs text-ink-muted font-[family-name:var(--font-source-sans)]">
            {resolvedLocations.length === 1 ? resolvedLocations[0].name : 'Map locations'}
          </p>
        </div>
        {showViewFullMapLink && (
          <Link
            href="/map"
            className="absolute top-2 right-2 bg-paper/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-[family-name:var(--font-source-sans)] text-ink-light hover:text-accent transition-colors shadow-sm"
          >
            View map →
          </Link>
        )}
      </div>
    );
  }

  const mapLink = segmentId 
    ? `/map?segment=${segmentId}` 
    : `/map?location=${locationIds.join(',')}`;

  return (
    <div 
      className={`relative rounded-lg overflow-hidden border border-context-border ${className}`}
      style={{ width: '100%', height }}
    >
      <div ref={mapContainer} className="w-full h-full" />
      
      {/* Loading state */}
      {!mapLoaded && (
        <div className="absolute inset-0 bg-paper-dark flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-accent border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Location name overlay for single locations */}
      {resolvedLocations.length === 1 && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/60 to-transparent p-2">
          <p className="text-paper text-xs font-[family-name:var(--font-source-sans)] font-medium truncate">
            {resolvedLocations[0].name}
          </p>
        </div>
      )}

      {/* View full map link */}
      {showViewFullMapLink && (
        <Link
          href={mapLink}
          className="absolute top-2 right-2 bg-paper/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-[family-name:var(--font-source-sans)] text-ink-light hover:text-accent transition-colors shadow-sm"
        >
          View map →
        </Link>
      )}
    </div>
  );
}

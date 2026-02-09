'use client';

import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import Link from 'next/link';
import 'mapbox-gl/dist/mapbox-gl.css';
import { getLocationById, locationColors, MapLocation } from '@/lib/mapData';
import { MAPBOX_TOKEN, MAP_STYLE, HAS_MAPBOX_TOKEN } from '@/lib/mapConfig';

if (HAS_MAPBOX_TOKEN) {
  mapboxgl.accessToken = MAPBOX_TOKEN;
}

interface MiniMapProps {
  locations: string[];
  width?: number;
  height?: number;
  showViewFullMapLink?: boolean;
  className?: string;
}

export default function MiniMap({ 
  locations: locationIds, 
  width = 300, 
  height = 200,
  showViewFullMapLink = true,
  className = ''
}: MiniMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  const resolvedLocations = locationIds
    .map(id => getLocationById(id))
    .filter((loc): loc is MapLocation => loc !== undefined);

  useEffect(() => {
    if (!HAS_MAPBOX_TOKEN || map.current || !mapContainer.current || resolvedLocations.length === 0) return;

    // Calculate center and zoom
    const coords = resolvedLocations.map(l => l.coordinates);
    
    let center: [number, number];
    let zoom: number;

    if (coords.length === 1) {
      center = coords[0];
      zoom = 10;
    } else {
      // Calculate center of all points
      const lngSum = coords.reduce((sum, c) => sum + c[0], 0);
      const latSum = coords.reduce((sum, c) => sum + c[1], 0);
      center = [lngSum / coords.length, latSum / coords.length];
      
      // Calculate appropriate zoom
      const lngs = coords.map(c => c[0]);
      const lats = coords.map(c => c[1]);
      const lngRange = Math.max(...lngs) - Math.min(...lngs);
      const latRange = Math.max(...lats) - Math.min(...lats);
      const maxRange = Math.max(lngRange, latRange);
      
      if (maxRange > 50) zoom = 2;
      else if (maxRange > 20) zoom = 4;
      else if (maxRange > 10) zoom = 5;
      else if (maxRange > 5) zoom = 6;
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

      // Add markers
      resolvedLocations.forEach(location => {
        const color = locationColors[location.type];
        
        // Create simple marker element
        const el = document.createElement('div');
        el.style.width = '16px';
        el.style.height = '16px';
        el.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
              fill="${color}"
              stroke="#fff"
              stroke-width="1.5"
            />
            <circle cx="12" cy="9" r="3" fill="#fff" opacity="0.9" />
          </svg>
        `;

        new mapboxgl.Marker({ element: el, anchor: 'bottom' })
          .setLngLat(location.coordinates)
          .addTo(map.current!);
      });

      // If multiple locations, draw line between them
      if (resolvedLocations.length > 1) {
        const lineCoords = resolvedLocations.map(l => l.coordinates);
        
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
            'line-color': '#8B4513',
            'line-width': 2,
            'line-opacity': 0.6,
            'line-dasharray': [2, 1],
          },
        });
      }
    });

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, [resolvedLocations]);

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

  return (
    <div 
      className={`relative rounded-lg overflow-hidden border border-context-border ${className}`}
      style={{ width, height }}
    >
      <div ref={mapContainer} className="w-full h-full" />
      
      {/* Loading state */}
      {!mapLoaded && (
        <div className="absolute inset-0 bg-paper-dark flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-accent border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Location name overlay */}
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
          href="/map"
          className="absolute top-2 right-2 bg-paper/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-[family-name:var(--font-source-sans)] text-ink-light hover:text-accent transition-colors shadow-sm"
        >
          View map →
        </Link>
      )}
    </div>
  );
}

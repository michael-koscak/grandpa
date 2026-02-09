'use client';

import { MapLocation, locationColors } from '@/lib/mapData';
import { MARKER_SIZE } from '@/lib/mapConfig';

interface MapMarkerProps {
  location: MapLocation;
  isActive?: boolean;
  size?: 'default' | 'active' | 'mini';
  onClick?: () => void;
}

export default function MapMarker({ 
  location, 
  isActive = false, 
  size = 'default',
  onClick 
}: MapMarkerProps) {
  const color = locationColors[location.type];
  const markerSize = MARKER_SIZE[size];
  const activeScale = isActive ? 1.2 : 1;
  const finalSize = markerSize * activeScale;

  return (
    <div
      onClick={onClick}
      className={`
        relative cursor-pointer transition-transform duration-200
        ${isActive ? 'z-10' : 'z-0'}
      `}
      style={{ 
        width: finalSize, 
        height: finalSize,
        marginLeft: -finalSize / 2,
        marginTop: -finalSize / 2,
      }}
    >
      {/* Outer ring for active state */}
      {isActive && (
        <div 
          className="absolute inset-0 rounded-full animate-ping opacity-30"
          style={{ backgroundColor: color }}
        />
      )}
      
      {/* Main marker */}
      <svg
        width={finalSize}
        height={finalSize}
        viewBox="0 0 24 24"
        fill="none"
        className="drop-shadow-md"
      >
        {/* Pin shape */}
        <path
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
          fill={color}
          stroke="#fff"
          strokeWidth="1.5"
        />
        {/* Inner circle */}
        <circle
          cx="12"
          cy="9"
          r="3"
          fill="#fff"
          opacity="0.9"
        />
      </svg>
      
      {/* Year badge */}
      {isActive && (
        <div 
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap
                     bg-ink text-paper text-xs font-[family-name:var(--font-source-sans)] 
                     px-2 py-0.5 rounded shadow-md"
        >
          {location.year}
        </div>
      )}
    </div>
  );
}

// Static marker for non-interactive use
export function StaticMarker({ color, size = 24 }: { color: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
        fill={color}
        stroke="#fff"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="9" r="3" fill="#fff" opacity="0.9" />
    </svg>
  );
}

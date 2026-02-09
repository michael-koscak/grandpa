'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { getLocationById } from '@/lib/mapData';

const MiniMap = dynamic(() => import('@/components/map/MiniMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-48 bg-paper-dark rounded-lg border border-context-border flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

interface InlineMapLocationProps {
  locationIds: string[];
  title?: string;
  description?: string;
  className?: string;
}

export default function InlineMapLocation({ 
  locationIds, 
  title,
  description,
  className = ''
}: InlineMapLocationProps) {
  // Get location details
  const locations = locationIds
    .map(id => getLocationById(id))
    .filter(loc => loc !== undefined);

  if (locations.length === 0) return null;

  // Auto-generate title if not provided
  const displayTitle = title || (
    locations.length === 1 
      ? locations[0].name 
      : `${locations[0].name} to ${locations[locations.length - 1].name}`
  );

  return (
    <div className={`my-6 p-4 rounded-xl border border-context-border bg-gradient-to-br from-paper to-context-bg ${className}`}>
      <div className="grid md:grid-cols-[2fr,3fr] gap-4">
        {/* Left: Info */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2">
            <svg 
              className="w-5 h-5 text-accent" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
              />
            </svg>
            <span className="text-xs font-[family-name:var(--font-source-sans)] font-medium text-accent uppercase tracking-wider">
              Location
            </span>
          </div>

          <h4 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-ink mb-2">
            {displayTitle}
          </h4>

          {description && (
            <p className="text-sm text-ink-light font-[family-name:var(--font-source-serif)] mb-3 leading-relaxed">
              {description}
            </p>
          )}

          {/* Location details */}
          {locations.length === 1 && locations[0].description && (
            <p className="text-sm text-ink-light font-[family-name:var(--font-source-serif)] mb-3 leading-relaxed italic">
              {locations[0].description}
            </p>
          )}

          <Link
            href={`/map?location=${locationIds.join(',')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-[family-name:var(--font-source-sans)] font-medium text-accent hover:text-accent-dark transition-colors"
          >
            <span>Explore on full map</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>

        {/* Right: Map */}
        <div className="relative">
          <MiniMap 
            locations={locationIds}
            height={200}
            showViewFullMapLink={false}
            className="shadow-sm"
          />
        </div>
      </div>
    </div>
  );
}

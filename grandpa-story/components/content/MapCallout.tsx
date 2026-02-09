'use client';

import Link from 'next/link';
import { journeyNarratives, chapterToSegments } from '@/lib/journeyNarrative';
import { journeySegments } from '@/lib/mapData';

interface MapCalloutProps {
  chapterNumber: number;
}

export default function MapCallout({ chapterNumber }: MapCalloutProps) {
  const relevantSegmentIds = chapterToSegments[chapterNumber] || [];
  const primarySegmentId = relevantSegmentIds[0];
  const narrative = primarySegmentId ? journeyNarratives[primarySegmentId] : null;
  const segment = journeySegments.find(s => s.id === primarySegmentId);

  if (!narrative || !segment) return null;

  return (
    <div className="my-8 p-5 rounded-xl border border-context-border bg-gradient-to-br from-context-bg to-paper">
      <div className="flex items-start gap-4">
        {/* Map Icon */}
        <div 
          className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${segment.color}15` }}
        >
          <svg 
            className="w-6 h-6" 
            style={{ color: segment.color }}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <div 
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: segment.color }}
            />
            <span className="text-xs font-[family-name:var(--font-source-sans)] font-medium text-ink-muted uppercase tracking-wider">
              {narrative.period}
            </span>
          </div>
          
          <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-ink mb-1">
            {narrative.title}
          </h3>
          
          <p className="text-sm text-ink-light font-[family-name:var(--font-source-serif)] mb-3">
            {narrative.summary}
          </p>

          <Link
            href={`/map?segment=${primarySegmentId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-[family-name:var(--font-source-sans)] font-medium text-accent hover:text-accent-dark transition-colors"
          >
            <span>Explore on map</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

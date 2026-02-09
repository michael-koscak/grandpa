'use client';

import Link from 'next/link';
import { MapLocation, locationColors, getChapterSlugForChapter } from '@/lib/mapData';

interface MapPopupProps {
  location: MapLocation;
  onClose: () => void;
}

export default function MapPopup({ location, onClose }: MapPopupProps) {
  const color = locationColors[location.type];
  const chapterSlug = getChapterSlugForChapter(location.chapter);

  return (
    <div className="bg-paper rounded-lg shadow-xl border border-context-border overflow-hidden min-w-[280px] max-w-[320px]">
      {/* Header */}
      <div 
        className="px-4 py-3 flex items-center justify-between"
        style={{ backgroundColor: `${color}15` }}
      >
        <div className="flex items-center gap-2">
          <div 
            className="w-3 h-3 rounded-full" 
            style={{ backgroundColor: color }}
          />
          <span 
            className="text-xs font-[family-name:var(--font-source-sans)] font-medium uppercase tracking-wider"
            style={{ color }}
          >
            {location.type.replace('_', ' ')}
          </span>
        </div>
        <button 
          onClick={onClose}
          className="text-ink-muted hover:text-ink transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="px-4 py-3">
        <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-ink mb-1">
          {location.name}
        </h3>
        <p className="text-ink-muted text-sm font-[family-name:var(--font-source-sans)] mb-3">
          {location.year}
        </p>
        <p className="text-ink-light text-sm font-[family-name:var(--font-source-serif)] leading-relaxed">
          {location.description}
        </p>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 bg-paper-dark/50 border-t border-context-border">
        <Link
          href={`/chapters/${chapterSlug}`}
          className="inline-flex items-center gap-2 text-accent text-sm font-[family-name:var(--font-source-sans)] font-medium hover:text-accent-dark transition-colors"
        >
          Read Chapter {location.chapter}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

'use client';

import Link from 'next/link';
import { JourneyNarrative } from '@/lib/journeyNarrative';
import { JourneySegment } from '@/lib/mapData';

interface StoryPanelProps {
  narrative: JourneyNarrative | null;
  segment: JourneySegment | null;
  subRegionName?: string;
  isVisible: boolean;
  onClose: () => void;
  onNextSegment?: () => void;
  onPrevSegment?: () => void;
  hasNext: boolean;
  hasPrev: boolean;
  currentStep: number;
  totalSteps: number;
}

export default function StoryPanel({
  narrative,
  segment,
  subRegionName,
  isVisible,
  onClose,
  onNextSegment,
  onPrevSegment,
  hasNext,
  hasPrev,
  currentStep,
  totalSteps,
}: StoryPanelProps) {
  if (!isVisible || !narrative || !segment) return null;

  return (
    <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:bottom-4 md:w-96 z-20">
      <div className="bg-paper/95 backdrop-blur-sm rounded-xl shadow-xl border border-context-border overflow-hidden">
        {/* Region indicator - prominently shows WHERE you are */}
        <div 
          className="px-4 py-3"
          style={{ backgroundColor: `${segment.color}20` }}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: segment.color }}
              />
              <span 
                className="text-xs font-[family-name:var(--font-source-sans)] font-semibold uppercase tracking-wider"
                style={{ color: segment.color }}
              >
                {narrative.period}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-ink-muted hover:text-ink transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Current Region - Large and clear */}
          <div className="flex items-center gap-2">
            <svg 
              className="w-5 h-5 flex-shrink-0" 
              style={{ color: segment.color }}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-ink">
              {subRegionName || segment.focusRegion.description}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-ink mb-1">
            {narrative.title}
          </h3>
          <p className="text-sm text-ink-muted font-[family-name:var(--font-source-sans)] mb-3">
            {narrative.summary}
          </p>
          
          <p className="text-sm text-ink-light font-[family-name:var(--font-source-serif)] leading-relaxed mb-4 line-clamp-4">
            {narrative.details}
          </p>

          {/* Key Events - Compact */}
          <div className="mb-4 p-3 bg-paper-dark/50 rounded-lg">
            <h4 className="text-xs font-[family-name:var(--font-source-sans)] font-semibold text-ink-muted uppercase tracking-wider mb-2">
              Key Events
            </h4>
            <ul className="space-y-1">
              {narrative.keyEvents.slice(0, 3).map((event, i) => (
                <li 
                  key={i}
                  className="text-xs text-ink-light font-[family-name:var(--font-source-sans)] flex items-start gap-2"
                >
                  <span style={{ color: segment.color }}>•</span>
                  {event}
                </li>
              ))}
              {narrative.keyEvents.length > 3 && (
                <li className="text-xs text-ink-muted font-[family-name:var(--font-source-sans)]">
                  +{narrative.keyEvents.length - 3} more...
                </li>
              )}
            </ul>
          </div>

          {/* Read Chapter Link */}
          <Link
            href={`/chapters/${narrative.chapterLink.slug}`}
            className="inline-flex items-center gap-2 text-sm font-[family-name:var(--font-source-sans)] font-medium text-accent hover:text-accent-dark transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Read the full story
          </Link>
        </div>

        {/* Navigation Footer */}
        <div className="px-4 py-3 bg-paper-dark/50 border-t border-context-border">
          <div className="flex items-center justify-between">
            <button
              onClick={onPrevSegment}
              disabled={!hasPrev}
              className={`
                flex items-center gap-1 text-sm font-[family-name:var(--font-source-sans)] font-medium
                ${hasPrev ? 'text-ink-light hover:text-ink' : 'text-ink-muted/50 cursor-not-allowed'}
                transition-colors
              `}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>

            {/* Progress indicator */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 mb-1">
                {Array.from({ length: totalSteps }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 rounded-full transition-all ${
                      i + 1 === currentStep 
                        ? 'w-4 bg-accent' 
                        : i + 1 < currentStep 
                          ? 'w-2 bg-accent/50'
                          : 'w-2 bg-ink-muted/30'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-ink-muted font-[family-name:var(--font-source-sans)]">
                {currentStep} of {totalSteps}
              </span>
            </div>

            <button
              onClick={onNextSegment}
              disabled={!hasNext}
              className={`
                flex items-center gap-1 text-sm font-[family-name:var(--font-source-sans)] font-medium
                ${hasNext ? 'text-accent hover:text-accent-dark' : 'text-ink-muted/50 cursor-not-allowed'}
                transition-colors
              `}
            >
              Next
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

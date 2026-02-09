'use client';

import { useState } from 'react';
import Link from 'next/link';
import { journeySegments, locationColors, LocationType } from '@/lib/mapData';
import { StaticMarker } from './MapMarker';

interface MapPanelProps {
  activeSegments: Set<string>;
  onToggleSegment: (segmentId: string) => void;
  onFlyToSegment: (segmentId: string, subRegionId?: string) => void;
  onShowAll: () => void;
  onStartGuidedJourney?: () => void;
  currentStorySegmentId?: string | null;
  currentSubRegionId?: string | null;
}

const locationTypeLabels: Record<LocationType, string> = {
  origin: 'Birthplace',
  family: 'Family Origins',
  home: 'Home',
  detention: 'Detention',
  refugee: 'Refugee Camp',
  journey: 'Transit',
  arrival: 'Arrival',
  military: 'Military',
  work: 'Work',
};

export default function MapPanel({ 
  activeSegments, 
  onToggleSegment, 
  onFlyToSegment,
  onShowAll,
  onStartGuidedJourney,
  currentStorySegmentId,
  currentSubRegionId,
}: MapPanelProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showLegend, setShowLegend] = useState(false);

  return (
    <>
      {/* Desktop Panel */}
      <div className={`
        hidden md:block absolute top-4 left-4 z-10
        bg-paper/95 backdrop-blur-sm rounded-xl shadow-xl border border-context-border
        transition-all duration-300 overflow-hidden
        ${isCollapsed ? 'w-12' : 'w-72'}
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-context-border">
          {!isCollapsed && (
            <>
              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-ink">
                  The Journey
                </h2>
                <p className="text-ink-muted text-xs font-[family-name:var(--font-source-sans)]">
                  1930 – 1992
                </p>
              </div>
              <Link
                href="/"
                className="text-ink-muted hover:text-accent transition-colors"
                title="Back to site"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </Link>
            </>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`text-ink-muted hover:text-ink transition-colors ${isCollapsed ? 'mx-auto' : ''}`}
          >
            <svg 
              className={`w-5 h-5 transition-transform ${isCollapsed ? 'rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        {!isCollapsed && (
          <>
            {/* Journey Segments with inline sub-regions */}
            <div className="p-3 space-y-0.5 max-h-[50vh] overflow-y-auto">
              {journeySegments.map((segment) => {
                const isCurrent = currentStorySegmentId === segment.id;
                const hasSubRegions = segment.subRegions && segment.subRegions.length > 0;
                return (
                  <div key={segment.id}>
                    <button
                      onClick={() => onFlyToSegment(segment.id)}
                      className={`
                        w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all
                        ${isCurrent 
                          ? 'bg-paper-dark ring-1 ring-accent/40 shadow-sm' 
                          : 'hover:bg-paper-dark/60'
                        }
                      `}
                    >
                      <div 
                        className={`w-3.5 h-3.5 rounded-full flex-shrink-0 border-2 transition-all ${
                          isCurrent ? 'border-white shadow-md scale-110' : 'border-white/70 shadow-sm'
                        }`}
                        style={{ backgroundColor: segment.color }}
                      />
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-[family-name:var(--font-source-sans)] font-medium truncate transition-colors ${
                          isCurrent ? 'text-ink' : 'text-ink-light'
                        }`}>
                          {segment.name}
                        </p>
                        <p className="text-xs text-ink-muted">
                          {segment.years}
                        </p>
                      </div>
                      {/* Arrow indicator - rotates when expanded */}
                      <svg className={`w-4 h-4 flex-shrink-0 transition-all ${
                        isCurrent ? 'text-accent' : 'text-ink-muted/40'
                      } ${isCurrent && hasSubRegions ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* Sub-regions - shown when segment is active */}
                    {isCurrent && hasSubRegions && (
                      <div className="ml-5 pl-3 py-1 border-l-2 space-y-0.5" style={{ borderColor: `${segment.color}50` }}>
                        {segment.subRegions!.map((subRegion) => {
                          const isActiveSub = currentSubRegionId === subRegion.id;
                          return (
                            <button
                              key={subRegion.id}
                              onClick={(e) => {
                                e.stopPropagation();
                                onFlyToSegment(segment.id, subRegion.id);
                              }}
                              className={`
                                w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-left transition-all
                                ${isActiveSub 
                                  ? 'bg-paper-dark' 
                                  : 'hover:bg-paper-dark/40'
                                }
                              `}
                            >
                              <div 
                                className={`w-2 h-2 rounded-full flex-shrink-0 transition-all ${
                                  isActiveSub ? 'scale-125' : ''
                                }`}
                                style={{ 
                                  backgroundColor: isActiveSub ? segment.color : `${segment.color}80`,
                                }}
                              />
                              <span className={`text-xs font-[family-name:var(--font-source-sans)] transition-colors ${
                                isActiveSub ? 'text-ink font-medium' : 'text-ink-light'
                              }`}>
                                {subRegion.name}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Start Guided Journey */}
            {onStartGuidedJourney && (
              <div className="px-3 pt-3">
                <button
                  onClick={onStartGuidedJourney}
                  className="w-full py-3 px-4 bg-accent text-paper rounded-lg font-[family-name:var(--font-source-sans)] font-medium text-sm hover:bg-accent-dark transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Start Guided Journey
                </button>
              </div>
            )}

            {/* Actions */}
            <div className="p-3 border-t border-context-border flex gap-2 mt-2">
              <button
                onClick={onShowAll}
                className="flex-1 py-2 px-3 text-sm font-[family-name:var(--font-source-sans)] font-medium text-accent hover:bg-accent/10 rounded-lg transition-colors"
              >
                Show All
              </button>
              <button
                onClick={() => setShowLegend(!showLegend)}
                className="py-2 px-3 text-sm font-[family-name:var(--font-source-sans)] text-ink-muted hover:text-ink hover:bg-paper-dark rounded-lg transition-colors"
              >
                Legend
              </button>
            </div>

            {/* Legend */}
            {showLegend && (
              <div className="p-4 border-t border-context-border bg-paper-dark/50">
                <h3 className="text-xs font-[family-name:var(--font-source-sans)] font-medium text-ink-muted uppercase tracking-wider mb-3">
                  Location Types
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {(Object.entries(locationColors) as [LocationType, string][]).map(([type, color]) => (
                    <div key={type} className="flex items-center gap-2">
                      <StaticMarker color={color} size={16} />
                      <span className="text-xs text-ink-light font-[family-name:var(--font-source-sans)]">
                        {locationTypeLabels[type]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Mobile Bottom Sheet */}
      <MobilePanel
        activeSegments={activeSegments}
        onToggleSegment={onToggleSegment}
        onFlyToSegment={onFlyToSegment}
        onShowAll={onShowAll}
        currentStorySegmentId={currentStorySegmentId}
        currentSubRegionId={currentSubRegionId}
      />
    </>
  );
}

function MobilePanel({ 
  activeSegments, 
  onFlyToSegment,
  onShowAll,
  currentStorySegmentId,
  currentSubRegionId,
}: MapPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`
      md:hidden fixed bottom-0 left-0 right-0 z-10
      bg-paper/95 backdrop-blur-sm rounded-t-2xl shadow-xl border-t border-context-border
      transition-all duration-300
      ${isExpanded ? 'h-[60vh]' : 'h-auto'}
    `}>
      {/* Handle */}
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full py-3 flex flex-col items-center"
      >
        <div className="w-10 h-1 bg-ink-muted/30 rounded-full mb-2" />
        <div className="flex items-center gap-2">
          <h2 className="font-[family-name:var(--font-playfair)] text-base font-semibold text-ink">
            The Journey
          </h2>
          <svg 
            className={`w-4 h-4 text-ink-muted transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </div>
      </button>

      {/* Quick Actions - horizontally scrollable pills */}
      {!isExpanded && (
        <div className="px-4 pb-4 flex gap-2 overflow-x-auto">
          {journeySegments.map((segment) => {
            const isCurrent = currentStorySegmentId === segment.id;
            return (
              <button
                key={segment.id}
                onClick={() => onFlyToSegment(segment.id)}
                className={`
                  flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-full
                  border transition-all
                  ${isCurrent
                    ? 'border-accent/40 bg-paper-dark shadow-sm'
                    : activeSegments.has(segment.id)
                      ? 'border-context-border bg-paper-dark'
                      : 'border-transparent opacity-60'
                  }
                `}
              >
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: segment.color }}
                />
                <span className="text-xs font-[family-name:var(--font-source-sans)] font-medium text-ink whitespace-nowrap">
                  {segment.name}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-4 pb-4 overflow-y-auto flex-1">
          <div className="flex justify-between items-center mb-4">
            <Link
              href="/"
              className="text-accent text-sm font-[family-name:var(--font-source-sans)] font-medium"
            >
              ← Back to site
            </Link>
            <button
              onClick={onShowAll}
              className="text-accent text-sm font-[family-name:var(--font-source-sans)] font-medium"
            >
              Show All
            </button>
          </div>

          <div className="space-y-0.5">
            {journeySegments.map((segment) => {
              const isCurrent = currentStorySegmentId === segment.id;
              const hasSubRegions = segment.subRegions && segment.subRegions.length > 0;
              return (
                <div key={segment.id}>
                  <button
                    onClick={() => {
                      onFlyToSegment(segment.id);
                      if (!hasSubRegions) setIsExpanded(false);
                    }}
                    className={`
                      w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all
                      ${isCurrent
                        ? 'bg-paper-dark ring-1 ring-accent/40 shadow-sm'
                        : 'hover:bg-paper-dark/60'
                      }
                    `}
                  >
                    <div 
                      className="w-4 h-4 rounded-full flex-shrink-0"
                      style={{ backgroundColor: segment.color }}
                    />
                    <div className="flex-1">
                      <p className={`text-sm font-[family-name:var(--font-source-sans)] font-medium ${
                        isCurrent ? 'text-ink' : 'text-ink-light'
                      }`}>
                        {segment.name}
                      </p>
                      <p className="text-xs text-ink-muted">
                        {segment.years}
                      </p>
                    </div>
                    <svg className={`w-4 h-4 flex-shrink-0 transition-all ${
                      isCurrent ? 'text-accent' : 'text-ink-muted/40'
                    } ${isCurrent && hasSubRegions ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Sub-regions */}
                  {isCurrent && hasSubRegions && (
                    <div className="ml-5 pl-3 py-1 border-l-2 space-y-0.5" style={{ borderColor: `${segment.color}50` }}>
                      {segment.subRegions!.map((subRegion) => {
                        const isActiveSub = currentSubRegionId === subRegion.id;
                        return (
                          <button
                            key={subRegion.id}
                            onClick={() => {
                              onFlyToSegment(segment.id, subRegion.id);
                              setIsExpanded(false);
                            }}
                            className={`
                              w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-left transition-all
                              ${isActiveSub 
                                ? 'bg-paper-dark' 
                                : 'hover:bg-paper-dark/40'
                              }
                            `}
                          >
                            <div 
                              className={`w-2 h-2 rounded-full flex-shrink-0 transition-all ${
                                isActiveSub ? 'ring-2 ring-offset-1 ring-offset-paper' : ''
                              }`}
                              style={{ 
                                backgroundColor: isActiveSub ? segment.color : `${segment.color}80`,
                              }}
                            />
                            <span className={`text-xs font-[family-name:var(--font-source-sans)] transition-colors ${
                              isActiveSub ? 'text-ink font-medium' : 'text-ink-light'
                            }`}>
                              {subRegion.name}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

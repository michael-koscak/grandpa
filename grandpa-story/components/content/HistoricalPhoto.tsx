'use client';

import { useState } from 'react';
import Image from 'next/image';

interface HistoricalPhotoProps {
  title: string;
  imageUrl: string;
  caption: string;
  credit?: string;
  year?: string;
  sourceUrl?: string;
  className?: string;
}

export default function HistoricalPhoto({
  title,
  imageUrl,
  caption,
  credit,
  year,
  sourceUrl,
  className = ''
}: HistoricalPhotoProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      {/* Main photo card */}
      <div className={`my-8 ${className}`}>
        <div className="relative rounded-lg overflow-hidden bg-paper-dark border-2 border-context-border shadow-sm">
          {/* Photo - using object-contain to show full image */}
          <div 
            className="relative w-full bg-paper-dark cursor-pointer group"
            style={{ minHeight: '300px' }}
            onClick={() => setIsLightboxOpen(true)}
          >
            <Image
              src={imageUrl}
              alt={title}
              width={1280}
              height={960}
              className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 680px"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-paper/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-sm font-[family-name:var(--font-source-sans)] text-ink font-medium">
                    View larger
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Caption area with archival styling */}
          <div className="p-4 bg-gradient-to-b from-context-bg to-paper-dark border-t border-context-border">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <h4 className="font-[family-name:var(--font-playfair)] text-base font-semibold text-ink mb-1">
                  {title}
                  {year && (
                    <span className="ml-2 text-sm font-normal text-ink-muted font-[family-name:var(--font-source-serif)]">
                      ({year})
                    </span>
                  )}
                </h4>
                <p className="text-sm text-ink-light font-[family-name:var(--font-source-serif)] leading-relaxed">
                  {caption}
                </p>
                <div className="flex items-center gap-3 mt-2">
                  {credit && (
                    <p className="text-xs text-ink-muted font-[family-name:var(--font-source-sans)]">
                      {credit}
                    </p>
                  )}
                  {sourceUrl && (
                    <>
                      <span className="text-ink-muted">•</span>
                      <a
                        href={sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-accent hover:text-accent-dark font-[family-name:var(--font-source-sans)] underline inline-flex items-center gap-1"
                      >
                        View source
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </>
                  )}
                </div>
              </div>
              
              {/* Archival stamp effect */}
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-accent/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-paper/20 hover:bg-paper/30 transition-colors flex items-center justify-center"
            aria-label="Close"
          >
            <svg className="w-6 h-6 text-paper" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative max-w-6xl w-full">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-contain"
                sizes="(max-width: 1536px) 100vw, 1536px"
              />
            </div>
            <div className="mt-4 bg-paper/90 backdrop-blur-sm rounded-lg p-4">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-ink mb-1">
                {title}
                {year && <span className="ml-2 text-base font-normal text-ink-muted">({year})</span>}
              </h3>
              <p className="text-base text-ink-light font-[family-name:var(--font-source-serif)]">
                {caption}
              </p>
              {credit && (
                <p className="text-sm text-ink-muted font-[family-name:var(--font-source-sans)] mt-2">
                  {credit}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

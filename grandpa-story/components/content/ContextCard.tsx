'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Source {
  name: string;
  url?: string;
}

interface ContextCardProps {
  title: string;
  subtitle?: string;
  content: string;
  sources?: Source[];
  imageUrl?: string;
  imageCaption?: string;
  type?: 'history' | 'geography' | 'culture' | 'person';
  isVisible: boolean;
}

const typeConfig = {
  history: {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Historical Context',
    color: '#8B4513',
  },
  geography: {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Geography',
    color: '#4A7C59',
  },
  culture: {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    label: 'Culture & Society',
    color: '#6B4423',
  },
  person: {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    label: 'Historical Figure',
    color: '#5C5346',
  },
};

export default function ContextCard({
  title,
  subtitle,
  content,
  sources,
  imageUrl,
  imageCaption,
  type = 'history',
  isVisible,
}: ContextCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const config = typeConfig[type];

  if (!isVisible) return null;

  const isLongContent = content.length > 300;
  const displayContent = isExpanded || !isLongContent 
    ? content 
    : content.slice(0, 280) + '...';

  return (
    <div 
      className="my-6 rounded-xl border border-context-border overflow-hidden bg-gradient-to-br from-context-bg to-paper animate-fade-in"
    >
      {/* Header */}
      <div 
        className="px-4 py-3 flex items-center gap-2 border-b border-context-border"
        style={{ backgroundColor: `${config.color}10` }}
      >
        <div 
          className="w-6 h-6 rounded-md flex items-center justify-center"
          style={{ backgroundColor: `${config.color}20`, color: config.color }}
        >
          {config.icon}
        </div>
        <span 
          className="text-xs font-[family-name:var(--font-source-sans)] font-semibold uppercase tracking-wider"
          style={{ color: config.color }}
        >
          {config.label}
        </span>
      </div>

      {/* Image if provided */}
      {imageUrl && (
        <div className="relative aspect-video bg-paper-dark">
          <Image
            src={imageUrl}
            alt={imageCaption || title}
            fill
            className="object-cover"
          />
          {imageCaption && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/70 to-transparent p-3">
              <p className="text-paper text-xs font-[family-name:var(--font-source-sans)]">
                {imageCaption}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-4">
        <h4 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-ink mb-1">
          {title}
        </h4>
        {subtitle && (
          <p className="text-sm text-ink-muted font-[family-name:var(--font-source-sans)] mb-3">
            {subtitle}
          </p>
        )}
        <p className="text-sm text-ink-light font-[family-name:var(--font-source-serif)] leading-relaxed">
          {displayContent}
        </p>
        
        {isLongContent && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 text-sm font-[family-name:var(--font-source-sans)] font-medium text-accent hover:text-accent-dark transition-colors"
          >
            {isExpanded ? 'Show less' : 'Read more'}
          </button>
        )}
      </div>

      {/* Sources */}
      {sources && sources.length > 0 && (
        <div className="px-4 py-3 bg-paper-dark/50 border-t border-context-border">
          <p className="text-xs text-ink-muted font-[family-name:var(--font-source-sans)] mb-1">
            Sources:
          </p>
          <div className="flex flex-wrap gap-2">
            {sources.map((source, i) => (
              source.url ? (
                <a
                  key={i}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-accent hover:text-accent-dark font-[family-name:var(--font-source-sans)] underline"
                >
                  {source.name}
                </a>
              ) : (
                <span key={i} className="text-xs text-ink-muted font-[family-name:var(--font-source-sans)]">
                  {source.name}
                </span>
              )
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

'use client';

import { useState, useRef, useEffect } from 'react';

interface AnnotationProps {
  term: string;
  children: React.ReactNode;
  definition: string;
  type?: 'place' | 'term' | 'person' | 'event' | 'date';
  year?: string;
  isVisible: boolean;
}

const typeStyles = {
  place: {
    color: 'text-emerald-700',
    bg: 'bg-emerald-50/50',
    border: 'border-emerald-300/60',
    badge: 'bg-emerald-50 text-emerald-700',
    icon: '📍',
  },
  term: {
    color: 'text-amber-700',
    bg: 'bg-amber-50/50',
    border: 'border-amber-300/60',
    badge: 'bg-amber-50 text-amber-700',
    icon: '📖',
  },
  person: {
    color: 'text-blue-700',
    bg: 'bg-blue-50/50',
    border: 'border-blue-300/60',
    badge: 'bg-blue-50 text-blue-700',
    icon: '👤',
  },
  event: {
    color: 'text-rose-700',
    bg: 'bg-rose-50/50',
    border: 'border-rose-300/60',
    badge: 'bg-rose-50 text-rose-700',
    icon: '⚡',
  },
  date: {
    color: 'text-purple-700',
    bg: 'bg-purple-50/50',
    border: 'border-purple-300/60',
    badge: 'bg-purple-50 text-purple-700',
    icon: '📅',
  },
};

export default function Annotation({
  term,
  children,
  definition,
  type = 'term',
  year,
  isVisible,
}: AnnotationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<'above' | 'below'>('below');
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const style = typeStyles[type];

  useEffect(() => {
    if (isOpen && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      setPosition(spaceBelow < 200 ? 'above' : 'below');
    }
  }, [isOpen]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        tooltipRef.current && 
        !tooltipRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  // If context mode is off, just render children normally
  if (!isVisible) {
    return <>{children}</>;
  }

  return (
    <span className="relative inline">
      <span
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={`
          cursor-help relative
          ${style.color} ${style.bg} hover:${style.bg.replace('/50', '/70')}
          border-b-2 border-dotted ${style.border}
          transition-all duration-200 rounded-sm px-1 py-0.5 -mx-0.5
          font-medium
        `}
      >
        {children}
      </span>

      {/* Tooltip */}
      {isOpen && (
        <span
          ref={tooltipRef}
          className={`
            absolute z-50 w-72 p-0 
            bg-paper rounded-lg shadow-xl border border-context-border
            animate-fade-in block
            ${position === 'above' ? 'bottom-full mb-2' : 'top-full mt-2'}
            left-1/2 -translate-x-1/2
          `}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {/* Arrow */}
          <span 
            className={`
              absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-paper border-context-border rotate-45 block
              ${position === 'above' 
                ? 'bottom-0 translate-y-1/2 border-r border-b' 
                : 'top-0 -translate-y-1/2 border-l border-t'
              }
            `}
          />

          {/* Header */}
          <span className="px-3 py-2 border-b border-context-border flex items-center gap-2">
            <span className="text-base">{style.icon}</span>
            <span className="flex-1 min-w-0">
              <span className="block font-[family-name:var(--font-source-sans)] font-semibold text-ink text-sm truncate">
                {term}
              </span>
              {year && (
                <span className="block text-xs text-ink-muted font-[family-name:var(--font-source-sans)]">
                  {year}
                </span>
              )}
            </span>
            <span className={`text-xs px-2 py-0.5 rounded-full font-[family-name:var(--font-source-sans)] font-medium ${style.badge}`}>
              {type}
            </span>
          </span>

          {/* Definition */}
          <span className="block px-3 py-2">
            <span className="block text-sm text-ink-light font-[family-name:var(--font-source-serif)] leading-relaxed">
              {definition}
            </span>
          </span>
        </span>
      )}
    </span>
  );
}

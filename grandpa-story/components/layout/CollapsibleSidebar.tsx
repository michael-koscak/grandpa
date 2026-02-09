'use client';

import { useState } from 'react';
import ChapterNav from './ChapterNav';

export default function CollapsibleSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle button - always visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          fixed left-0 top-1/2 -translate-y-1/2 z-30
          hidden lg:flex items-center gap-2
          bg-paper/95 backdrop-blur-sm border border-context-border
          rounded-r-lg shadow-lg
          transition-all duration-300
          ${isOpen ? 'translate-x-72' : 'translate-x-0'}
        `}
        style={{ 
          writingMode: isOpen ? 'horizontal-tb' : 'vertical-rl',
          textOrientation: 'mixed',
        }}
      >
        <div className={`
          flex items-center gap-2 px-2 py-3
          ${isOpen ? 'flex-row' : 'flex-col'}
        `}>
          <svg 
            className={`w-4 h-4 text-ink-muted transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-xs font-[family-name:var(--font-source-sans)] font-medium text-ink-muted">
            {isOpen ? '' : 'Chapters'}
          </span>
        </div>
      </button>

      {/* Sidebar */}
      <aside 
        className={`
          hidden lg:block fixed left-0 top-16 bottom-0 w-72 z-20
          border-r border-context-border bg-paper/95 backdrop-blur-sm
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="h-full overflow-y-auto p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-ink">
              Chapters
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-ink-muted hover:text-ink transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ChapterNav onNavigate={() => setIsOpen(false)} />
        </div>
      </aside>

      {/* Overlay for mobile-like close behavior */}
      {isOpen && (
        <div 
          className="hidden lg:block fixed inset-0 bg-ink/10 z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

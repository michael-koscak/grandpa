'use client';

interface ContextToggleProps {
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
}

export default function ContextToggle({ enabled, onToggle }: ContextToggleProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-context-bg rounded-xl border border-context-border mb-8">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
          <svg 
            className="w-5 h-5 text-accent" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <div>
          <p className="font-[family-name:var(--font-source-sans)] font-medium text-ink text-sm">
            Historical Context
          </p>
          <p className="text-xs text-ink-muted font-[family-name:var(--font-source-sans)]">
            Show background info & annotations
          </p>
        </div>
      </div>
      
      <button
        onClick={() => onToggle(!enabled)}
        className={`
          relative w-12 h-7 rounded-full transition-colors duration-200
          ${enabled ? 'bg-accent' : 'bg-ink-muted/30'}
        `}
        role="switch"
        aria-checked={enabled}
      >
        <span
          className={`
            absolute top-1 left-1 w-5 h-5 rounded-full bg-paper shadow-sm
            transition-transform duration-200
            ${enabled ? 'translate-x-5' : 'translate-x-0'}
          `}
        />
      </button>
    </div>
  );
}

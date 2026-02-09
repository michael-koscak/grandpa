'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { chapters } from '@/lib/chapters';

interface ChapterNavProps {
  className?: string;
  onNavigate?: () => void;
}

export default function ChapterNav({ className = '', onNavigate }: ChapterNavProps) {
  const pathname = usePathname();

  return (
    <nav className={`${className}`}>
      <h2 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-ink mb-4 px-2">
        Chapters
      </h2>
      <ol className="space-y-1">
        {chapters.map((chapter, index) => {
          const isActive = pathname === `/chapters/${chapter.slug}`;
          
          return (
            <li key={chapter.slug}>
              <Link
                href={`/chapters/${chapter.slug}`}
                onClick={onNavigate}
                className={`
                  group flex items-start gap-3 px-3 py-2.5 rounded-lg
                  transition-all duration-200
                  ${isActive 
                    ? 'bg-accent/10 border-l-2 border-accent' 
                    : 'hover:bg-paper-dark border-l-2 border-transparent'
                  }
                `}
              >
                <span 
                  className={`
                    flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center
                    text-xs font-[family-name:var(--font-source-sans)] font-medium
                    transition-colors duration-200
                    ${isActive 
                      ? 'bg-accent text-paper' 
                      : 'bg-paper-dark text-ink-muted group-hover:bg-accent/20 group-hover:text-accent'
                    }
                  `}
                >
                  {index + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p 
                    className={`
                      font-[family-name:var(--font-source-sans)] text-sm font-medium leading-tight
                      ${isActive ? 'text-accent' : 'text-ink-light group-hover:text-ink'}
                    `}
                  >
                    {chapter.title}
                  </p>
                  <p className="text-xs text-ink-muted mt-0.5 truncate">
                    {chapter.yearRange}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

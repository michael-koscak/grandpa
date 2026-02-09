import Link from 'next/link';
import { chapters, Chapter } from '@/lib/chapters';

interface ChapterPaginationProps {
  currentSlug: string;
}

export default function ChapterPagination({ currentSlug }: ChapterPaginationProps) {
  const currentIndex = chapters.findIndex(c => c.slug === currentSlug);
  const prevChapter: Chapter | undefined = currentIndex > 0 ? chapters[currentIndex - 1] : undefined;
  const nextChapter: Chapter | undefined = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : undefined;

  return (
    <nav className="mt-16 pt-8 border-t border-context-border">
      <div className="flex flex-col sm:flex-row items-stretch gap-4">
        {/* Previous Chapter */}
        <div className="flex-1">
          {prevChapter ? (
            <Link
              href={`/chapters/${prevChapter.slug}`}
              className="group block h-full p-4 rounded-lg border border-context-border hover:border-accent/30 hover:bg-context-bg transition-all duration-200"
            >
              <div className="flex items-center gap-2 text-ink-muted text-sm font-[family-name:var(--font-source-sans)] mb-1">
                <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous Chapter
              </div>
              <p className="font-[family-name:var(--font-playfair)] text-ink font-medium group-hover:text-accent transition-colors">
                {prevChapter.title}
              </p>
            </Link>
          ) : (
            <Link
              href="/"
              className="group block h-full p-4 rounded-lg border border-context-border hover:border-accent/30 hover:bg-context-bg transition-all duration-200"
            >
              <div className="flex items-center gap-2 text-ink-muted text-sm font-[family-name:var(--font-source-sans)] mb-1">
                <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to
              </div>
              <p className="font-[family-name:var(--font-playfair)] text-ink font-medium group-hover:text-accent transition-colors">
                Home
              </p>
            </Link>
          )}
        </div>

        {/* Next Chapter */}
        <div className="flex-1">
          {nextChapter ? (
            <Link
              href={`/chapters/${nextChapter.slug}`}
              className="group block h-full p-4 rounded-lg border border-context-border hover:border-accent/30 hover:bg-context-bg transition-all duration-200 text-right"
            >
              <div className="flex items-center justify-end gap-2 text-ink-muted text-sm font-[family-name:var(--font-source-sans)] mb-1">
                Next Chapter
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="font-[family-name:var(--font-playfair)] text-ink font-medium group-hover:text-accent transition-colors">
                {nextChapter.title}
              </p>
            </Link>
          ) : (
            <div className="h-full p-4 rounded-lg border border-context-border bg-context-bg/50 text-right">
              <p className="text-ink-muted text-sm font-[family-name:var(--font-source-sans)] mb-1">
                End of Memoir
              </p>
              <p className="font-[family-name:var(--font-playfair)] text-ink-light font-medium italic">
                &ldquo;And life goes on&mdash;&rdquo;
              </p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

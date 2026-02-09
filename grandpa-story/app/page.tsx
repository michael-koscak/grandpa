import Link from 'next/link';
import { chapters } from '@/lib/chapters';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 lg:py-32">
        {/* Decorative background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-light/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-[680px] mx-auto px-4 sm:px-6 text-center">
          {/* Title Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-8 animate-fade-in">
            <span className="text-accent text-sm font-[family-name:var(--font-source-sans)] font-medium">
              A Family Memoir
            </span>
            <span className="text-accent/50">•</span>
            <span className="text-ink-muted text-sm font-[family-name:var(--font-source-sans)]">
              1930 – 1999
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight mb-6 animate-fade-in delay-1">
            My Life Story
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-ink-light font-[family-name:var(--font-source-serif)] mb-4 animate-fade-in delay-2">
            by Mark F. Koscak
          </p>

          {/* Description */}
          <p className="text-ink-muted text-lg font-[family-name:var(--font-source-serif)] max-w-lg mx-auto mb-10 animate-fade-in delay-3">
            A journey from Slovenia through war and exile, across the Atlantic to America—documenting the Koscak family&apos;s origin and history.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in delay-4">
            <Link
              href="/chapters/origins-and-family-roots"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white rounded-lg font-[family-name:var(--font-source-sans)] font-medium text-lg hover:bg-accent-dark transition-colors duration-200 shadow-lg shadow-accent/20"
            >
              Begin Reading
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Decorative Element */}
          <div className="mt-16 flex items-center justify-center gap-4 text-ink-muted animate-fade-in delay-5">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-context-border" />
            <span className="text-sm font-[family-name:var(--font-source-sans)]">October 1992</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-context-border" />
          </div>
        </div>
      </section>

      {/* Epigraph */}
      <section className="py-12 bg-paper-dark/50 border-y border-context-border">
        <div className="max-w-[600px] mx-auto px-4 sm:px-6 text-center">
          <blockquote className="font-[family-name:var(--font-source-serif)] text-lg sm:text-xl text-ink-light italic leading-relaxed">
            &ldquo;This is at the urging of my son Mark, who asked me to document the Koscak family&apos;s origin and history and to describe some of the more memorable events in my life.&rdquo;
          </blockquote>
          <cite className="block mt-4 text-ink-muted text-sm font-[family-name:var(--font-source-sans)] not-italic">
            — Opening lines of the memoir
          </cite>
        </div>
      </section>

      {/* Chapter List */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-ink text-center mb-12">
            Eight Chapters of a Life
          </h2>

          <div className="grid gap-4 sm:gap-6">
            {chapters.map((chapter, index) => (
              <Link
                key={chapter.slug}
                href={`/chapters/${chapter.slug}`}
                className="group relative flex items-start gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl border border-context-border hover:border-accent/30 hover:bg-context-bg transition-all duration-300"
              >
                {/* Chapter Number */}
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-paper-dark group-hover:bg-accent/10 flex items-center justify-center transition-colors duration-300">
                  <span className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-bold text-ink-muted group-hover:text-accent transition-colors duration-300">
                    {index + 1}
                  </span>
                </div>

                {/* Chapter Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-[family-name:var(--font-playfair)] text-lg sm:text-xl font-semibold text-ink group-hover:text-accent transition-colors duration-200">
                        {chapter.title}
                      </h3>
                      <p className="text-ink-light text-sm sm:text-base mt-1 font-[family-name:var(--font-source-serif)]">
                        {chapter.subtitle}
                      </p>
                    </div>
                    <span className="flex-shrink-0 text-ink-muted text-sm font-[family-name:var(--font-source-sans)] bg-paper-dark px-3 py-1 rounded-full">
                      {chapter.yearRange}
                    </span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 self-center text-ink-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-200">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Preview */}
      <section className="py-16 bg-paper-dark/50 border-t border-context-border">
        <div className="max-w-[680px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-semibold text-ink mb-6">
            A Journey Across Continents
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-[family-name:var(--font-source-sans)]">
            <span className="px-3 py-1.5 bg-paper border border-context-border rounded-full text-ink-light">
              Ljubljana, Slovenia
            </span>
            <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <span className="px-3 py-1.5 bg-paper border border-context-border rounded-full text-ink-light">
              Kellerberg, Austria
            </span>
            <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <span className="px-3 py-1.5 bg-paper border border-context-border rounded-full text-ink-light">
              New York Harbor
            </span>
            <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <span className="px-3 py-1.5 bg-paper border border-context-border rounded-full text-ink-light">
              Chicago, Illinois
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

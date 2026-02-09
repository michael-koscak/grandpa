import { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'About | My Life Story',
  description: 'About this memorial website for Mark F. Koscak\'s life memoir.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <article className="flex-1 py-12 sm:py-16 lg:py-20">
        <div className="max-w-[680px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-12 text-center">
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-ink mb-4">
              About This Memoir
            </h1>
            <p className="text-ink-light text-lg font-[family-name:var(--font-source-serif)]">
              Preserving a family&apos;s story for future generations
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-ink max-w-none font-[family-name:var(--font-source-serif)] text-[1.0625rem] leading-[1.8]">
            <section className="mb-10">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-ink mb-4">
                The Original Document
              </h2>
              <p className="text-ink-light mb-4">
                This memoir was written by Mark F. Koscak in October 1992, at the urging of his son Mark. 
                It was later updated in January 1999 with news of additional grandchildren and family milestones.
              </p>
              <p className="text-ink-light mb-4">
                The text presented here is verbatim from the original document—every word, every phrase, 
                exactly as it was written. We believe the author&apos;s own voice is the most precious thing 
                to preserve.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-ink mb-4">
                Mark F. Koscak
              </h2>
              <p className="text-ink-light mb-4">
                Born November 23, 1930, in Ljubljana, Slovenia (then part of the Kingdom of Yugoslavia), 
                Mark lived through some of the 20th century&apos;s most turbulent events: World War II, 
                communist takeover, refugee camps, and immigration to America.
              </p>
              <p className="text-ink-light mb-4">
                His story is one of resilience, family, and the immigrant experience—a journey from 
                war-torn Europe to the American Midwest, where he built a life, raised a family, 
                and served his adopted country.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-ink mb-4">
                This Website
              </h2>
              <p className="text-ink-light mb-4">
                This interactive memorial was created to make Mark&apos;s memoir accessible to family members 
                and future generations. It presents the original text in a readable format, organized 
                into chapters for easier navigation.
              </p>
              <p className="text-ink-light mb-4">
                Future enhancements may include historical context for the events mentioned, 
                interactive maps of the journey from Slovenia to America, family photographs, 
                and additional research on the places and times described.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-ink mb-4">
                A Note on Names
              </h2>
              <p className="text-ink-light mb-4">
                Throughout the memoir, you&apos;ll notice that many family members have both Slovenian 
                and Americanized names. Mark (originally Marko) notes these changes, reflecting 
                the immigrant experience of adapting to a new country while maintaining connections 
                to heritage.
              </p>
            </section>
          </div>

          {/* Decorative Divider */}
          <div className="divider my-12">
            <svg className="w-6 h-6 text-accent/50" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-ink-muted mb-6 font-[family-name:var(--font-source-serif)]">
              Ready to read the memoir?
            </p>
            <Link
              href="/chapters/origins-and-family-roots"
              className="inline-flex items-center gap-3 px-6 py-3 bg-accent text-paper rounded-lg font-[family-name:var(--font-source-sans)] font-medium hover:bg-accent-dark transition-colors duration-200"
            >
              Start with Chapter 1
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}

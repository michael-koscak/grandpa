import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { chapters, getChapterBySlug } from '@/lib/chapters';
import { chapterContent, getUpdateStartIndex } from '@/lib/chapter-content';
import { getChapterContext } from '@/lib/chapterContext';
import ChapterHeader from '@/components/content/ChapterHeader';
import ChapterContent from '@/components/content/ChapterContent';
import ChapterPagination from '@/components/content/ChapterPagination';
import ProgressBar from '@/components/content/ProgressBar';
import MapCallout from '@/components/content/MapCallout';
import CollapsibleSidebar from '@/components/layout/CollapsibleSidebar';
import Footer from '@/components/layout/Footer';

interface ChapterPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return chapters.map((chapter) => ({
    slug: chapter.slug,
  }));
}

export async function generateMetadata({ params }: ChapterPageProps): Promise<Metadata> {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);
  
  if (!chapter) {
    return {
      title: 'Chapter Not Found',
    };
  }

  return {
    title: `${chapter.title} | My Life Story`,
    description: chapter.subtitle,
  };
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);
  const content = chapterContent[slug];
  const contextData = getChapterContext(slug);

  if (!chapter || !content) {
    notFound();
  }

  const updateStartIndex = getUpdateStartIndex(slug);
  const hasUpdate = updateStartIndex !== -1;

  return (
    <>
      <ProgressBar />
      <CollapsibleSidebar />
      
      <div className="min-h-screen flex flex-col">
        {/* Main Content - full width now that sidebar is overlay */}
        <article className="flex-1 py-12 sm:py-16 lg:py-20">
          <div className="max-w-[680px] mx-auto px-4 sm:px-6 lg:px-8">
            <ChapterHeader
              number={chapter.number}
              title={chapter.title}
              subtitle={chapter.subtitle}
              yearRange={chapter.yearRange}
            />

            <ChapterContent
              paragraphs={content}
              contextData={contextData}
              hasUpdate={hasUpdate}
              updateStartIndex={updateStartIndex}
            />

            {/* Map integration callout */}
            <MapCallout chapterNumber={chapter.number} />

            <ChapterPagination currentSlug={slug} />
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}

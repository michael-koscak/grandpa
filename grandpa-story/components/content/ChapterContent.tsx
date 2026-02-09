'use client';

import { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import MemoirText from './MemoirText';
import ContextToggle from './ContextToggle';
import ContextCard from './ContextCard';
import Annotation from './Annotation';
import HistoricalPhoto from './HistoricalPhoto';
import { ChapterContextData } from '@/lib/chapterContext';

const InlineMapLocation = dynamic(() => import('./InlineMapLocation'), {
  ssr: false,
  loading: () => (
    <div className="my-6 p-4 rounded-xl border border-context-border bg-paper-dark h-48 flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

interface ChapterContentProps {
  paragraphs: string[];
  contextData: ChapterContextData | null;
  hasUpdate: boolean;
  updateStartIndex: number;
}

export default function ChapterContent({
  paragraphs,
  contextData,
  hasUpdate,
  updateStartIndex,
}: ChapterContentProps) {
  const [contextMode, setContextMode] = useState(true); // Default to ON

  // Process paragraphs to add annotations
  const processedParagraphs = useMemo(() => {
    if (!contextData || !contextMode) {
      return paragraphs.map(p => ({ text: p, annotations: [] as string[] }));
    }

    return paragraphs.map(paragraph => {
      const annotations: string[] = [];
      
      // Find which annotation keys appear in this paragraph
      Object.keys(contextData.annotations).forEach(key => {
        if (paragraph.toLowerCase().includes(key.toLowerCase())) {
          annotations.push(key);
        }
      });

      return { text: paragraph, annotations };
    });
  }, [paragraphs, contextData, contextMode]);

  // Render paragraph with annotations highlighted
  const renderParagraph = (text: string, annotations: string[]) => {
    if (!contextMode || annotations.length === 0 || !contextData) {
      return text;
    }

    let result: (string | React.ReactNode)[] = [text];

    annotations.forEach(key => {
      const annotationData = contextData.annotations[key];
      if (!annotationData) return;

      result = result.flatMap((segment, segIdx) => {
        if (typeof segment !== 'string') return segment;

        const regex = new RegExp(`(${key})`, 'gi');
        const parts = segment.split(regex);

        return parts.map((part, partIdx) => {
          if (part.toLowerCase() === key.toLowerCase()) {
            return (
              <Annotation
                key={`${segIdx}-${partIdx}-${key}`}
                term={annotationData.term}
                definition={annotationData.definition}
                type={annotationData.type}
                year={annotationData.year}
                isVisible={contextMode}
              >
                {part}
              </Annotation>
            );
          }
          return part;
        });
      });
    });

    return result;
  };

  // Get context cards that should appear after a specific paragraph
  const getContextCardsAfter = (paragraphIndex: number) => {
    if (!contextData || !contextMode) return [];
    return contextData.contextCards.filter(card => card.afterParagraph === paragraphIndex);
  };

  // Get photos that should appear after a specific paragraph
  const getPhotosAfter = (paragraphIndex: number) => {
    if (!contextData || !contextMode) return [];
    return contextData.photos?.filter(photo => photo.afterParagraph === paragraphIndex) || [];
  };

  // Get inline maps that should appear after a specific paragraph
  const getMapsAfter = (paragraphIndex: number) => {
    if (!contextData || !contextMode) return [];
    return contextData.inlineMaps?.filter(map => map.afterParagraph === paragraphIndex) || [];
  };

  return (
    <>
      {/* Context Toggle - only show if chapter has context data */}
      {contextData && (
        <ContextToggle enabled={contextMode} onToggle={setContextMode} />
      )}

      <MemoirText>
        {processedParagraphs.map((para, index) => {
          const contextCards = getContextCardsAfter(index);
          const photos = getPhotosAfter(index);
          const maps = getMapsAfter(index);
          
          // Check if this is where the 1999 update starts
          if (hasUpdate && index === updateStartIndex) {
            return (
              <div key={index}>
                {/* Update Header */}
                <div className="my-12 py-8 border-y border-context-border text-center">
                  <p className="text-ink-muted text-sm font-[family-name:var(--font-source-sans)] uppercase tracking-wider mb-2">
                    Update
                  </p>
                  <p className="font-[family-name:var(--font-playfair)] text-xl text-ink font-semibold">
                    January 1999
                  </p>
                </div>
                <p>{renderParagraph(para.text, para.annotations)}</p>
                {contextCards.map(card => (
                  <ContextCard
                    key={card.id}
                    title={card.title}
                    subtitle={card.subtitle}
                    content={card.content}
                    type={card.type}
                    sources={card.sources}
                    imageUrl={card.imageUrl}
                    imageCaption={card.imageCaption}
                    isVisible={contextMode}
                  />
                ))}
                {photos.map(photo => (
                  <HistoricalPhoto
                    key={photo.id}
                    title={photo.title}
                    imageUrl={photo.imageUrl}
                    caption={photo.caption}
                    credit={photo.credit}
                    year={photo.year}
                  />
                ))}
                {maps.map(map => (
                  <InlineMapLocation
                    key={map.id}
                    locationIds={map.locationIds}
                    title={map.title}
                    description={map.description}
                  />
                ))}
              </div>
            );
          }

          return (
            <div key={index}>
              <p>{renderParagraph(para.text, para.annotations)}</p>
              {contextCards.map(card => (
                <ContextCard
                  key={card.id}
                  title={card.title}
                  subtitle={card.subtitle}
                  content={card.content}
                  type={card.type}
                  sources={card.sources}
                  imageUrl={card.imageUrl}
                  imageCaption={card.imageCaption}
                  isVisible={contextMode}
                />
              ))}
              {photos.map(photo => (
                <HistoricalPhoto
                  key={photo.id}
                  title={photo.title}
                  imageUrl={photo.imageUrl}
                  caption={photo.caption}
                  credit={photo.credit}
                  year={photo.year}
                  sourceUrl={photo.sourceUrl}
                />
              ))}
              {maps.map(map => (
                <InlineMapLocation
                  key={map.id}
                  locationIds={map.locationIds}
                  title={map.title}
                  description={map.description}
                />
              ))}
            </div>
          );
        })}
      </MemoirText>
    </>
  );
}

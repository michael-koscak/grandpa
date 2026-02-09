# Supporting Content Guide

## Current Status (Updated)

**Fully Implemented Features:**
- ✅ Context Mode Toggle (defaults to ON)
- ✅ Inline Annotations with wavy underlines and background tint
- ✅ Context Cards (historical background sidecards)
- ✅ Historical Photos with lightbox and source links
- ✅ Inline Maps (embedded Mapbox mini-maps)
- ✅ All map links open in new tabs

**Chapters with Content:**
- ✅ **Chapter 1 (Origins & Family Roots)** - COMPLETE
  - 3 historical photos (Ljubljana, Ravne, Slovenian family)
  - 1 inline map (3 family origin locations)
  - 2 context cards (Austro-Hungarian Empire, Leather Crafting)
  - 8 annotations (Ljubljana, Kingdom of Yugoslavia, Austro-Hungarian empire, 1st World War, tuberculosis, apprenticeship, King's Guard, Slovenian language)
- ✅ **Chapter 4 (Communist Takeover & Loss)** - Has content (2 context cards, 9 annotations)
- ⏳ **Chapters 2, 3, 5, 6, 7, 8** - Ready for content

## What We Built

A layered, non-intrusive system for adding historical context, photos, and maps to the memoir without overwhelming the reading experience.

## The Four Content Types

### 1. **Inline Annotations** (Lightest Touch)
Quick definitions that appear on hover—perfect for terms, places, and historical references.

**Example from Chapter 1:**
- "Austro-Hungarian Empire" → shows brief definition on hover
- "Kingdom of Yugoslavia" → quick context
- "Tuberculosis" → why it was deadly in the 1920s

**How it works:**
- Only visible when Context Mode is ON
- Subtle dotted underline
- Hover to see definition in a tooltip

### 2. **Context Cards** (Medium Weight)
Deeper historical background that appears as sidecards alongside the memoir text.

**Example from Chapter 1:**
- "The Austro-Hungarian Empire" - full explanation of the empire
- "The Leather Crafting Tradition" - details about grandfather's craft

**How it works:**
- Appear after specific paragraphs when Context Mode is ON
- Beautiful card design with sources/citations
- Don't interrupt reading flow

### 3. **Historical Photos** (Visual Enrichment)
Archival-style photos with captions and credits that make history tangible.

**Example from Chapter 1:**
- Ljubljana 1920s cityscape - shows the capital where Mark was born
- Ravne na Koroškem street scene - mother's bilingual border town
- Slovenian family in traditional dress - illustrating rural family life

**How it works:**
- Full image displayed (no cropping)
- Click to open in lightbox for larger view
- "View source" link to Wikimedia Commons page
- Credits and dates included
- Archival styling with aged paper effect
- Only shown when Context Mode is ON

**Image URLs:**
- Must be direct image URLs from Wikimedia Commons (ending in .jpg, .png)
- Format: `https://upload.wikimedia.org/wikipedia/commons/.../filename.jpg`
- Add corresponding source page URL for attribution

### 4. **Inline Map Locations** (Interactive Geography)
Small embedded maps showing locations without leaving the page.

**Example from Chapter 1:**
- "Family Origins in Slovenia" - shows Ljubljana, Zagrad, and Ravne with pins

**How it works:**
- Shows multiple locations with pins and connecting lines
- Interactive mini-map with location details
- Link to explore on full map page
- Only shown when Context Mode is ON

## The Context Mode Toggle

At the top of each chapter, readers can toggle between:
- **ON** (default): All supporting content appears (annotations, photos, maps, context cards)
- **OFF**: Pure memoir text, clean reading experience

**Updated:** Context Mode now defaults to ON so readers see the enriched experience immediately.

## How to Add Content to a Chapter

All content is defined in `/lib/chapterContext.ts`. Here's the structure:

```typescript
export const chapter1Context: ChapterContextData = {
  // Context cards (historical background)
  contextCards: [
    {
      id: 'austro-hungarian-empire',
      title: 'The Austro-Hungarian Empire',
      subtitle: '1867-1918',
      content: `Full explanation here...`,
      type: 'history',
      sources: [
        { name: 'Encyclopedia Britannica', url: '...' }
      ],
      afterParagraph: 4, // Show after 4th paragraph
    },
  ],
  
  // Photos
  photos: [
    {
      id: 'ljubljana-1920s',
      title: 'Ljubljana in the 1920s',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Postcard_of_Ljubljana_view_1920.jpg',
      caption: 'Description here...',
      credit: 'Wikimedia Commons',
      year: 'circa 1920',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Postcard_of_Ljubljana_view_1920.jpg',
      afterParagraph: 1, // Show after 1st paragraph
    },
  ],
  
  // Inline maps
  inlineMaps: [
    {
      id: 'slovenia-family-origins',
      locationIds: ['ljubljana', 'zagrad', 'ravne'],
      title: 'Family Origins in Slovenia',
      description: 'Brief description...',
      afterParagraph: 2, // Show after 2nd paragraph
    },
  ],
  
  // Annotations (inline definitions)
  annotations: {
    'Ljubljana': {
      term: 'Ljubljana',
      definition: 'The capital and largest city of Slovenia...',
      type: 'place',
    },
    'tuberculosis': {
      term: 'Tuberculosis',
      definition: 'In the early 20th century...',
      type: 'term',
    },
  },
};
```

## Current Status

**Chapters with content:**
- ✅ Chapter 1 (Origins & Family Roots) - 2 context cards, 1 photo, 1 map, 8 annotations
- ✅ Chapter 4 (Communist Takeover & Loss) - 2 context cards, 9 annotations
- ⏳ Chapters 2, 3, 5, 6, 7, 8 - Ready for content

## Next Steps

1. **Review Chapter 1** - Visit http://localhost:3000/chapters/origins-and-family-roots
   - Toggle Context Mode ON to see all features
   - Check UX: Is it engaging but not overwhelming?

2. **Add More Content** - Use the ChatGPT research JSON as a guide:
   - Convert photo suggestions to actual Wikimedia Commons images
   - Add more annotations for key terms
   - Create context cards for major historical events

3. **Expand to Other Chapters** - Chapter 4 already has good content, chapters 2-8 await

## Design Philosophy

**The memoir text is sacred.** All supporting content:
- Is opt-in (Context Mode toggle)
- Never interrupts reading flow
- Feels like exploring a family archive
- Uses warm, archival color palette
- Includes proper citations and credits

## Components Created

- `HistoricalPhoto.tsx` - Photo display with lightbox
- `InlineMapLocation.tsx` - Embedded map component
- `Annotation.tsx` - Inline term definitions (existing, updated)
- `ContextCard.tsx` - Sidebar context panels (existing, updated)
- `ChapterContent.tsx` - Main renderer (updated to handle all types)

## Tips for Adding Content

**For Annotations:**
- Keep definitions SHORT (1-2 sentences max)
- Focus on terms readers might not know
- Don't annotate everything—be selective

**For Context Cards:**
- 3-5 paragraphs is ideal
- Always include sources
- Place them where they add value, not just everywhere

**For Photos:**
- Use public domain images (Wikimedia Commons is great)
- Include proper credits
- Write captions that connect to the memoir

**For Maps:**
- Show 1-3 locations together to tell a story
- Include brief descriptions
- Link locations that are mentioned in the same paragraph

# Project Status - Grandpa's Life Story Interactive Memorial

**Last Updated:** February 2026

## 🎯 Project Overview

An interactive memorial website presenting Mark F. Koscak's handwritten memoir (1930-1992) with layered historical context, maps, photos, and annotations. Built with Next.js 14, TypeScript, Tailwind CSS, and Mapbox GL JS.

**Live Dev Server:** http://localhost:3000

---

## ✅ Completed Features

### Core Infrastructure
- ✅ Next.js 14 (App Router) with TypeScript
- ✅ Custom design system (warm archival aesthetic)
- ✅ 8 chapter structure with MDX content
- ✅ Responsive layout with collapsible sidebar
- ✅ Progress bar and chapter navigation

### Supporting Content System
- ✅ **Context Mode Toggle** - Defaults to ON, shows/hides all supporting content
- ✅ **Inline Annotations** - Wavy underline with background tint, hover tooltips
- ✅ **Context Cards** - Historical background sidecards with sources
- ✅ **Historical Photos** - Full images with lightbox, source links to Wikimedia
- ✅ **Inline Maps** - Embedded Mapbox mini-maps (open full map in new tab)

### Map Features
- ✅ Full interactive map at `/map` with Mapbox GL JS
- ✅ Journey segments with color coding
- ✅ Guided journey mode with narrative panels
- ✅ Custom markers and location popups
- ✅ Sub-region navigation for detailed exploration
- ✅ Links from chapters open map in new tab

### UX Enhancements
- ✅ Context Mode defaults to ON
- ✅ All external links open in new tabs
- ✅ Photos show full image (no cropping)
- ✅ Source attribution for all photos
- ✅ Annotations have clear visual indicators
- ✅ Smooth hover effects and transitions

---

## 📊 Content Status by Chapter

| Chapter | Annotations | Context Cards | Photos | Maps | Status |
|---------|-------------|---------------|--------|------|--------|
| 1. Origins & Family Roots | 8 | 2 | 3 | 1 | ✅ **COMPLETE** |
| 2. Childhood in Vizmarje | - | - | - | - | 📋 Research prompt ready |
| 3. War & Occupation | - | - | - | - | ⏳ Pending |
| 4. Communist Takeover | 9 | 2 | - | - | ✅ Partial |
| 5. Refugee Years | - | - | - | - | ⏳ Pending |
| 6. Journey to America | - | - | - | - | ⏳ Pending |
| 7. Building a New Life | - | - | - | - | ⏳ Pending |
| 8. Family & Career | - | - | - | - | ⏳ Pending |

---

## 🗂️ Key Files & Structure

### Content Management
```
/lib/chapterContext.ts       - All supporting content data
/lib/chapter-content.ts       - Verbatim memoir text
/lib/chapters.ts              - Chapter metadata
/lib/mapData.ts               - Location coordinates and journey data
```

### Components
```
/components/content/
  - Annotation.tsx            - Inline term definitions
  - ContextCard.tsx           - Historical context panels
  - HistoricalPhoto.tsx       - Photo display with lightbox
  - InlineMapLocation.tsx     - Embedded map component
  - ChapterContent.tsx        - Main renderer for all content types
  - ContextToggle.tsx         - Show/hide supporting content

/components/map/
  - JourneyMap.tsx            - Full interactive Mapbox map
  - MiniMap.tsx               - Small embedded map
  - MapPanel.tsx              - Map control panel
  - StoryPanel.tsx            - Narrative context during guided mode
```

### Supporting Docs
```
/SUPPORTING-CONTENT-GUIDE.md          - How to add content
/PROJECT-STATUS.md                    - This file
/chapters-txt/                        - Export folder for processing
  - chapter-1-origins-and-family-roots.txt
  - chapter-2-research-prompt.md      - Prompt for ChatGPT research
  - ch1.txt                           - Research results for Chapter 1
```

---

## 🎨 Design System

**Color Palette:**
- Paper: `#F5F1E8` (warm cream background)
- Ink: `#2C2416` (dark brown text)
- Accent: `#8B4513` (saddle brown for links/highlights)

**Fonts:**
- Display: Playfair Display
- Body: Source Serif Pro
- UI: Source Sans Pro

**Visual Style:**
- Archival, respectful, timeless
- Like exploring a family heirloom
- Subtle textures and warm tones
- Generous spacing for readability

---

## 🔧 Technical Notes

### Environment Variables Required
```
NEXT_PUBLIC_MAPBOX_TOKEN=your_token_here
```

### Image Hosting
- Using Wikimedia Commons for historical photos
- Direct image URLs configured in `next.config.ts`
- Format: `https://upload.wikimedia.org/wikipedia/commons/.../filename.jpg`

### Map Configuration
- Mapbox GL JS v2.x
- Custom markers and popups
- Journey path with segments
- Focus regions for better zoom levels

### Build & Deploy
```bash
npm run dev     # Development server (http://localhost:3000)
npm run build   # Production build
npm run start   # Production server
```

---

## 📝 Next Steps for Chapter 2

1. **Run Research Prompt:**
   - Use `/chapters-txt/chapter-2-research-prompt.md`
   - Give to ChatGPT Deep Research or similar AI
   - Save output as `ch2.txt`

2. **Add Content to Code:**
   - Open `/lib/chapterContext.ts`
   - Add `chapter2Context` similar to `chapter1Context`
   - Include in `getChapterContext()` function

3. **Test & Iterate:**
   - Visit chapter 2 page
   - Toggle Context Mode
   - Check all photos, maps, annotations work
   - Verify source links

---

## 🎯 Overall Goals

- **Primary:** Present grandfather's memoir with rich historical context
- **UX:** Engaging but never overwhelming
- **Design:** Archival feel, like a family treasure
- **Content:** All context is opt-in, sourced, and educational
- **Sharing:** Family can explore and learn together

---

## 📚 Resources

- **Project Plan:** `/grandpa-story-project-plan.md`
- **Original Memoir:** `/grandpa-story.txt`
- **Phase 1 Prompt:** `/cursor-prompt-phase1.md`
- **Phase 4 Prompt:** `/cursor-prompt-phase4-map.md`

---

## 🤝 Workflow for Adding Chapters

1. Create research prompt (see `chapter-2-research-prompt.md` as template)
2. Get AI to research historical context, find photos, suggest annotations
3. Add data to `lib/chapterContext.ts`
4. Test in browser
5. Iterate on UX and content placement
6. Move to next chapter

**Pattern established with Chapter 1 - repeat for remaining chapters!**

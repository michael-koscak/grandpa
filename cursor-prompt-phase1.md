# Cursor Starter Prompt for Grandpa's Life Story

Copy everything below the line into Cursor, with your two files attached:
1. `grandpa-story-project-plan.md` (the plan I gave you)
2. `grandpa-story.txt` (or PDF) — the original memoir

---

I'm building an interactive memorial website for my grandfather's life story. I've attached:

1. **Project plan** — Full tech specs, design system, component library, and phased roadmap
2. **Original memoir** — The complete text (must remain unedited within chapters)

## Phase 1: Foundation MVP

Build a beautiful, readable Next.js site with the memoir organized into 8 chapters. This should be deployable standalone—annotations and historical context come in later phases.

### Tech Stack
- Next.js 14+ (App Router)
- TypeScript  
- Tailwind CSS
- Ready for Vercel deployment

### Chapter Splits

Break the memoir at these exact points (text within each chapter stays verbatim):

| Ch | Title | Starts at text... |
|----|-------|-------------------|
| 1 | Origins & Family Roots | "This is at the urging of my son Mark..." |
| 2 | Childhood in Vizmarje | "About 1935, our family moved to a village of Vizmarje..." |
| 3 | War & Occupation | "World War II started in Europe in 1939..." |
| 4 | Communist Takeover & Loss | "In the spring of 1945, the Allies were defeating Germany..." |
| 5 | Refugee Years | "During that time I worked in the camp's food supply warehouse..." |
| 6 | Journey to America | "In August of 1951 we packed up our few belongings..." |
| 7 | Building a New Life | "My first job in Chicago was with Hines Lumber company..." |
| 8 | Family & Career | "On January 7, 1956, I married my fiancee, Wally Tiedmann..." |

Include the 1999 Update at the end of Chapter 8.

### Design (from project plan)

**Aesthetic:** Archival, respectful, timeless—like a family heirloom, not a portfolio piece.

**Colors:**
- Paper background: `#F5F1E8`
- Ink/text: `#2C2416`
- Ink light: `#5C5346`  
- Accent: `#8B4513`

**Typography:**
- Display: Playfair Display
- Body/Memoir: Source Serif Pro or Literata
- UI elements: Source Sans Pro
- Memoir text: ~17px, line-height 1.8
- Max prose width: 680px

### Pages to Create

1. **`/`** — Landing page with title, brief intro, "Begin Reading" button
2. **`/chapters/[slug]`** — Individual chapter pages
3. **`/about`** — Placeholder about page

### Components Needed

- `<Header>` — Site title, simple nav
- `<ChapterNav>` — Shows all chapters, highlights current
- `<MemoirText>` — Styled container for verbatim memoir text
- `<ProgressBar>` — Reading progress at top
- `<ChapterPagination>` — Previous/Next links at bottom

### Project Structure

```
/app
  /chapters/[slug]/page.tsx
  layout.tsx
  page.tsx
/components
  /layout
  /content
/content
  /chapters (MDX files, one per chapter)
/styles
  globals.css
```

### NOT in This Phase
- No annotations/tooltips (Phase 2)
- No historical context sidebars (Phase 3)
- No maps (Phase 4)
- No timeline (Phase 5)
- No photos (Phase 6)

### Deliverable

A working Next.js project I can run with `npm run dev` and deploy to Vercel. The memoir should be pleasant to read with smooth chapter navigation.

Start by setting up the project structure, then create the components and pages.

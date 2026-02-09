# Grandpa's Life Story — Interactive Memorial Website

## Project Plan & Development Guide

**Project Owner:** Mike Koscak  
**Subject:** Mark F. Koscak (1930-?) — Life memoir written October 1992, updated January 1999  
**Document Purpose:** Comprehensive reference for building this project across multiple AI sessions

---

## Table of Contents

1. [Project Vision](#1-project-vision)
2. [Content Architecture](#2-content-architecture)
3. [Development Phases](#3-development-phases)
4. [Chapter Breakdown & Research Topics](#4-chapter-breakdown--research-topics)
5. [Technical Specifications](#5-technical-specifications)
6. [Design System](#6-design-system)
7. [Component Library](#7-component-library)
8. [AI Prompt Templates](#8-ai-prompt-templates)
9. [Research Reference Guide](#9-research-reference-guide)
10. [Media & Asset Checklist](#10-media--asset-checklist)

---

## 1. Project Vision

### Overview
An interactive web experience presenting Mark F. Koscak's handwritten memoir verbatim, enriched with layered historical context, maps, timelines, and archival imagery. The design honors the personal nature of the story while helping modern readers understand the historical events that shaped it.

### Core Principles

| Principle | Implementation |
|-----------|----------------|
| **Original text is sacred** | Memoir appears exactly as written, never edited or paraphrased |
| **Context is optional** | Historical overlays are discoverable but never interrupt reading flow |
| **Progressive enhancement** | Site works as simple readable memoir; enhancements layer on top |
| **Respectful tone** | Design feels like a family heirloom, not a flashy portfolio piece |
| **Incrementally buildable** | Can ship MVP with just text; add features over time |

### Success Criteria
- [ ] Memoir is fully readable with excellent typography
- [ ] Historical context available for all major events/places/terms
- [ ] Journey visualized on interactive map
- [ ] Timeline shows personal events against world history
- [ ] Mobile-friendly and accessible
- [ ] Shareable with extended family

---

## 2. Content Architecture

### Primary Content Layers

```
┌─────────────────────────────────────────────────────────────┐
│  LAYER 1: Original Memoir Text (MVP)                        │
│  - Verbatim transcription                                   │
│  - Clean typography, chapter navigation                     │
│  - Publishable standalone                                   │
├─────────────────────────────────────────────────────────────┤
│  LAYER 2: Inline Annotations                                │
│  - Highlighted terms → hover/click for definition           │
│  - Place names → mini-map preview                           │
│  - Dates → timeline position indicator                      │
├─────────────────────────────────────────────────────────────┤
│  LAYER 3: Contextual Sidebars                               │
│  - Historical background panels                             │
│  - "What was happening in the world" sections               │
│  - Sourced from encyclopedias, archives                     │
├─────────────────────────────────────────────────────────────┤
│  LAYER 4: Rich Media                                        │
│  - Interactive journey map                                  │
│  - Photo galleries with captions                            │
│  - Document scans (if available)                            │
│  - Audio narration (future)                                 │
├─────────────────────────────────────────────────────────────┤
│  LAYER 5: Deep Dives                                        │
│  - Full-page historical essays                              │
│  - Family tree visualization                                │
│  - Source bibliography                                      │
└─────────────────────────────────────────────────────────────┘
```

### Chapter Structure

Each chapter will have this data model:

```typescript
interface Chapter {
  id: string;
  title: string;
  subtitle: string;
  yearRange: [number, number];
  originalText: string;  // Verbatim memoir content
  
  // Layer 2: Annotations
  annotations: {
    term: string;
    type: 'place' | 'person' | 'event' | 'term' | 'date';
    shortDefinition: string;
    coordinates?: [lat, lng];  // For places
    deepDiveId?: string;  // Links to Layer 5 content
  }[];
  
  // Layer 3: Contextual sidebars
  historicalContext: {
    title: string;
    content: string;
    sources: Source[];
  }[];
  
  // Layer 4: Media
  media: {
    type: 'photo' | 'map' | 'document';
    src: string;
    caption: string;
    date?: string;
  }[];
  
  // Metadata
  locations: string[];  // For map journey
  keyDates: { date: string; event: string }[];
}
```

---

## 3. Development Phases

### Phase 1: Foundation (MVP)
**Goal:** Publishable site with just the memoir text  
**Time estimate:** 1-2 sessions

- [ ] Set up Next.js project with Tailwind
- [ ] Create typography system (see Design System section)
- [ ] Build chapter layout component
- [ ] Transcribe all memoir text into MDX files
- [ ] Create chapter navigation (sidebar + progress)
- [ ] Basic responsive design
- [ ] Deploy to Vercel

**Deliverable:** Live URL with readable memoir

---

### Phase 2: Annotation System
**Goal:** Inline annotations for terms, places, dates  
**Time estimate:** 2-3 sessions

- [ ] Create annotation data schema
- [ ] Build `<Annotation>` component (hover/click reveal)
- [ ] Style annotation cards (definition, mini-map, etc.)
- [ ] Mark up Chapter 1-2 with annotations
- [ ] Create annotation JSON files for each chapter
- [ ] Iterate on UX (tooltip vs. sidebar vs. modal)

**Deliverable:** First two chapters fully annotated

---

### Phase 3: Historical Context Panels
**Goal:** Sidebar/overlay panels with sourced historical background  
**Time estimate:** 3-4 sessions (research heavy)

- [ ] Design context panel component
- [ ] Research and write context for each chapter (see Section 4)
- [ ] Add source citations with links
- [ ] Create toggle for "show/hide context" mode
- [ ] Ensure context doesn't interrupt reading flow

**Deliverable:** All chapters have historical context panels

---

### Phase 4: Interactive Map
**Goal:** Visual journey from Slovenia → Austria → USA  
**Time estimate:** 2-3 sessions

- [ ] Set up Mapbox GL JS
- [ ] Create location dataset with coordinates
- [ ] Build animated journey path
- [ ] Add location markers with popup info
- [ ] Create "map view" mode for full-screen exploration
- [ ] Add mini-map to place annotations

**Deliverable:** Interactive map showing grandfather's journey

---

### Phase 5: Timeline
**Goal:** Personal events against world history backdrop  
**Time estimate:** 1-2 sessions

- [ ] Design timeline component
- [ ] Create dual-track layout (personal / world events)
- [ ] Add interactivity (click to jump to chapter)
- [ ] Include key dates from research

**Deliverable:** Interactive timeline visualization

---

### Phase 6: Media Integration
**Goal:** Photos, documents, archival images  
**Time estimate:** 2-3 sessions

- [ ] Gather family photos (coordinate with relatives)
- [ ] Source historical photos (Wikimedia, archives)
- [ ] Build photo gallery component with lightbox
- [ ] Add captions and date metadata
- [ ] Integrate photos into chapter layouts

**Deliverable:** Photo-enriched chapters

---

### Phase 7: Polish & Enhancement
**Goal:** Production-quality experience  
**Time estimate:** 2-3 sessions

- [ ] Add scroll-triggered animations
- [ ] Optimize performance (lazy loading, image optimization)
- [ ] Accessibility audit (WCAG AA)
- [ ] SEO and social sharing meta
- [ ] Family sharing features (comments? guestbook?)
- [ ] Print stylesheet for physical keepsake

**Deliverable:** Polished, shareable memorial site

---

## 4. Chapter Breakdown & Research Topics

### Chapter 1: Origins & Family Roots (1904-1935)

**Memoir content covers:**
- Father Marko (Mirko) born 1904 in Zagrad pri Skocjanu
- Mother Marija born 1907 in Ravne na Koroškem
- Grandparents' occupations (metal worker, horse gear tradesman)
- 14 children in father's family
- Parents met at leather goods factory in Ljubljana
- Marriage September 8, 1929
- Mark born November 23, 1930 in Ljubljana

**Key terms to annotate:**
- Ljubljana (capital of Slovenia, population ~100,000)
- Austro-Hungarian Empire (dissolved 1918)
- Kingdom of Yugoslavia (formed 1918)
- Slovenian language (Slavic, distinct from Serbian/Croatian)
- Apprenticeship system in trades
- Yugoslav army / King's guard

**Historical context to research:**
| Topic | Research Questions | Suggested Sources |
|-------|---------------------|-------------------|
| Slovenia 1900-1930 | What was daily life like? Economy? | Encyclopedia Britannica, Slovenian archives |
| Austro-Hungarian collapse | How did WWI affect the region? | Academic sources, WWI histories |
| Kingdom of Yugoslavia | How was it formed? Tensions? | Encyclopedia, academic papers |
| Leather trade | What did craftsmen produce? Guild system? | Trade history sources |
| Ljubljana 1920s-30s | Photos, city life, culture | Slovenian digital archives |

**Map locations:**
- Ljubljana, Slovenia (46.0569, 14.5058)
- Zagrad pri Skocjanu (45.8833, 15.0333)
- Ravne na Koroškem (46.5444, 14.9519)

---

### Chapter 2: Childhood in Vizmarje (1935-1941)

**Memoir content covers:**
- Family moved to Vizmarje (house #88), suburb of Ljubljana
- House owned by great-aunt Fani (worked in Cairo for British)
- Father started leather goods business with apprentices
- Mark started school 1937 in St. Vid (30-min walk)
- Sister Mary born April 29, 1935
- Brother John born March 26, 1941
- Religious education from parish priests

**Key terms to annotate:**
- Vizmarje pri St. Vidu (village/suburb)
- Public school system in Yugoslavia
- Roman Catholic education
- Leather goods trade/craft
- Apprenticeship system

**Historical context to research:**
| Topic | Research Questions | Suggested Sources |
|-------|---------------------|-------------------|
| Yugoslav education 1930s | School structure, curriculum, language | Academic sources |
| Catholic Church in Slovenia | Role in society, education | Religious history |
| Pre-war Yugoslav economy | Small business, trade | Economic histories |
| Daily life 1930s Slovenia | What did childhood look like? | Oral histories, archives |

**Map locations:**
- Vizmarje pri St. Vidu (46.0667, 14.5167)
- St. Vid (school location)

---

### Chapter 3: War & Occupation (1941-1945)

**Memoir content covers:**
- WWII started in Europe 1939
- Germany and Italy declared war on Yugoslavia 1941
- Italian occupation first ("thousands of soldiers")
- Germans replaced Italians ("two soldiers on sidecar motorbike")
- Schools converted to German language, German teachers
- Mark learned German in school
- Germany invaded Russia 1942
- Communist resistance (Tito's Partisans) began
- Nationalists allied with Germans/Italians
- Civil war between factions

**Key terms to annotate:**
- Axis powers (Germany, Italy alliance)
- Italian occupation of Slovenia
- German occupation / Germanization
- Josip Broz Tito
- Yugoslav Partisans (communist resistance)
- Slovenian Home Guard (Domobranci)
- Yugoslav civil war

**Historical context to research:**
| Topic | Research Questions | Suggested Sources |
|-------|---------------------|-------------------|
| Invasion of Yugoslavia (April 1941) | How fast? What happened to civilians? | WWII histories, Britannica |
| Italian occupation of Ljubljana Province | Duration, policies, treatment of Slovenes | Academic papers |
| German occupation policies | Germanization, forced labor, schools | Holocaust Museum, academic |
| Tito's Partisans | Who were they? Tactics? Allied support? | WWII histories |
| Slovenian Home Guard | Why did they ally with Axis? Controversy? | Academic sources (sensitive topic) |
| Yugoslav civil war | Casualties, atrocities on all sides | Academic sources |

**Map locations:**
- Ljubljana Province occupation zone
- Key WWII sites in Slovenia

**RESEARCH NOTE:** This is a sensitive and complex topic. The Slovenian civil war involved atrocities on multiple sides. Research should be balanced and sourced from academic/encyclopedic sources.

---

### Chapter 4: Communist Takeover & Loss (1945-1946)

**Memoir content covers:**
- Spring 1945: Allies defeating Germany, Germans retreated
- Communists took over the country
- New regime required all men to report to neighboring town
- Father arrested, jailed as "enemy of regime"
- Mark and mother visited, could only see father waving from far away
- Father "looked very pale and weak"
- Told father died in prison
- Guard pointed to unmarked spot behind fence as burial site
- Never saw body or belongings
- Learned prisoners were "starved severely and beaten daily"
- Secret police began picking up whole families at night
- January 1946: Officials came at night, family given minutes to pack
- Held in lockups in Ljubljana and Maribor for months
- Deported to Austria by train
- Told to claim German descent to be accepted

**Key terms to annotate:**
- Communist takeover of Yugoslavia (May 1945)
- Political prisoners / enemies of the regime
- OZNA (Yugoslav secret police)
- Forced deportations
- Post-war political killings in Slovenia

**Historical context to research:**
| Topic | Research Questions | Suggested Sources |
|-------|---------------------|-------------------|
| Communist takeover May 1945 | How did Tito consolidate power? | Academic histories |
| Post-war killings in Slovenia | Kočevski Rog massacres, scale, who was targeted | Academic sources, Slovenian archives |
| Who was considered an "enemy"? | Home Guard members, collaborators, anti-communists, others | Academic sources |
| OZNA secret police | Methods, night arrests, detention system | Academic sources |
| Forced deportations from Slovenia | How many expelled? Where? Why? | Academic sources |
| Volksdeutsche expulsions | Ethnic Germans expelled from Yugoslavia | Encyclopedia, academic |

**RESEARCH NOTE:** This is the most historically significant and sensitive chapter. Mark's father was almost certainly killed in the post-war political purges that killed tens of thousands in Slovenia. The family's deportation was part of systematic expulsion of perceived enemies. Research should be thorough and sourced from reputable academic/archival sources. Key search terms: "post-war killings Slovenia," "Kočevski Rog," "Yugoslav political repression 1945."

**Map locations:**
- Ljubljana (detention)
- Maribor (detention)
- Route to Austrian border

---

### Chapter 5: Refugee Years (1946-1951)

**Memoir content covers:**
- Family accepted into Austria (British occupation zone)
- Mother's German language skills helped
- Kellerberg Displaced Persons Camp for 5 years
- Mark worked in camp food supply warehouse (earned extra rations)
- Last 2 years: worked for British Army at Lake Wörthersee resort hotel
- Earned small salary doing housekeeping
- Mother worked to get family approved for immigration
- Options: Argentina, Australia, Canada, USA
- "Nobody was eager to take a woman with three young children"
- Catholic Relief Organization sponsored family
- Accepted for immigration to USA (first choice)
- Mother "deserves all the credit and all our love"

**Key terms to annotate:**
- Displaced Persons (DP) camps
- British occupation zone of Austria
- Kellerberg DP Camp
- Lake Wörthersee / Velden
- Catholic Relief Services
- US Displaced Persons Act (1948)
- Immigration sponsorship system

**Historical context to research:**
| Topic | Research Questions | Suggested Sources |
|-------|---------------------|-------------------|
| DP camps in Austria | How many? Conditions? Administration? | UNHCR, Holocaust Museum |
| Kellerberg camp specifically | Location, size, photos if available | Archives, academic |
| British occupation of Austria | Duration, policies, relationship with DPs | Post-war histories |
| US immigration policy 1948-1951 | Displaced Persons Act, quotas, requirements | Library of Congress, academic |
| Catholic Relief Services | Role in refugee resettlement | CRS archives, histories |
| Refugee experience 1945-1951 | Daily life, uncertainty, waiting | Oral history collections |

**Map locations:**
- Kellerberg, Austria (near Villach) (46.6167, 13.8500)
- Lake Wörthersee / Velden (46.6167, 14.0333)

---

### Chapter 6: Journey to America (1951)

**Memoir content covers:**
- August 1951: Packed belongings, traveled to Bremerhaven, Germany
- Boarded USS General Muir (Navy troop carrier)
- Journey took 7-8 days
- Passed through bad storm, everyone seasick
- Mark translated ship commander's announcements (knew some English)
- Arrived New York Harbor
- "Awed by the size of the city, tall buildings, automobile traffic"
- Salvation Army provided coffee and doughnuts
- Catholic Relief gave $20, put family on train to Chicago
- "Did not know a soul in Chicago"
- Two young men from Slovenian community met them at station
- Arranged temporary stays with strangers
- Within days, arranged small apartment rental

**Key terms to annotate:**
- Bremerhaven (embarkation port)
- USS General Muir (troop transport ship)
- New York Harbor / Ellis Island era context
- Salvation Army refugee services
- Chicago Slovenian community (Cermak & Damen area)

**Historical context to research:**
| Topic | Research Questions | Suggested Sources |
|-------|---------------------|-------------------|
| USS General Muir | Ship details, refugee transport voyages | Naval records |
| Post-war immigration ships | What was the journey like? | Immigration histories |
| Arrival in New York 1951 | Process, what did immigrants see? | Ellis Island archives |
| Chicago 1951 | What was the city like? Economy? | Chicago history |
| Slovenian community in Chicago | Where? How established? Churches? | Ethnic community histories |
| Refugee resettlement process | First days, finding housing/work | Oral histories |

**Map locations:**
- Bremerhaven, Germany (53.5396, 8.5809)
- Atlantic crossing route
- New York Harbor (40.6892, -74.0445)
- Chicago, IL — Cermak & Damen area (41.8520, -87.6764)

---

### Chapter 7: Building a New Life (1951-1956)

**Memoir content covers:**
- First job: Hines Lumber Company (one day only)
- Second job: Glider Trailer Company (cabinet making)
- Attended DeVry school of electronics at night (18 months)
- 1952: Became TV technician at Admiral Company
- November 1953: Drafted into US Army (Service #US 55449878)
- Basic training: Fort Leonard Wood, Missouri (8 weeks)
- Radio training: Fort Knox, Kentucky (8 weeks)
- Shipped to Korea (5 months) — anti-aircraft battalion near Seoul
- Summer 1954: Transferred to Camp Drake, Tokyo, Japan
- Became US citizen in Tokyo
- Won car in raffle ($2100 value) — sold to Japanese dealer
- Converted yen to dollars through fellow soldiers
- Moved to Nagoya, Japan
- September 1955: Returned to USA, released from Army
- Summer 1952: Met Wally Tiedmann at German picnic, Riverview Park
- Engaged fall 1953

**Key terms to annotate:**
- Admiral Corporation (TV manufacturer)
- DeVry Institute
- US Army draft (1950s)
- Korean War (ended July 1953)
- Camp Drake, Japan
- Naturalization (US citizenship)
- Riverview Amusement Park, Chicago

**Historical context to research:**
| Topic | Research Questions | Suggested Sources |
|-------|---------------------|-------------------|
| 1950s Chicago economy | Jobs available, immigrant opportunities | Chicago history |
| Television industry 1950s | Admiral, Motorola, boom era | Tech histories |
| Korean War | Timeline, US involvement, conditions | Military histories |
| US military in Japan 1950s | Occupation, bases, daily life | Military histories |
| Naturalization process 1950s | How did immigrants become citizens? | Immigration history |
| Chicago immigrant communities | German, Slovenian, Lithuanian | Ethnic histories |

**Map locations:**
- Chicago work locations
- Fort Leonard Wood, MO (37.7131, -92.1297)
- Fort Knox, KY (37.8910, -85.9565)
- Korea (near Seoul)
- Camp Drake, Tokyo, Japan (35.7796, 139.6998)
- Nagoya, Japan (35.1815, 136.9066)
- Riverview Park, Chicago (41.9397, -87.6889)

---

### Chapter 8: Family & Career (1956-1992)

**Memoir content covers:**
- January 7, 1956: Married Wally Tiedmann at St. Stephen's Church
- Reception at Rainbow Gardens (Armitage & Pulaski)
- Honeymoon: Train trip to Phoenix, Arizona
- First apartment: 3500 West Wabansia
- Wally worked at Admiral, Mark at Motorola
- Moved to 1521 N. Avers — son Mark born (Columbus Hospital)
- 1957: Sister Mary married Wally's brother John (3 sons: John, Jim, Victor)
- January 1959: Purchased home at 3629 Scott Street, Franklin Park
- June 25, 1963: Daughter Jane born (Gottlieb Hospital)
- August 18, 1965: Son Ed born (Gottlieb Hospital)
- 1962: Started at Naval Ordnance Plant, Forest Park (electronics mechanic)
- 1971: Plant moved to Seattle; Mark stayed, joined Army Ammunition Procurement in Joliet
- 1973: Joined FAA as Management Analyst
- Children attended East Leyden High School, Northern Illinois University
- Family attended Maria Goretti Catholic Church, Schiller Park
- Mark (son) moved to Nashville, worked for CNA Insurance
- September 19, 1987: Jane married Mark Bedard, moved to Carol Stream
- May 12, 1990: Ed married Kathy Watry, moved to St. Louis
- August 23, 1992: First grandchild Michael Mark Koscak born
- December 22, 1994: Mother Mary Koscak died
- December 30, 1995: Mark retired from FAA (36 years federal service)
- Subsequent grandchildren: Eric Andrew (1994), Matthew Edward (1996), Thomas Joshua (1997)

**Key terms to annotate:**
- Motorola (Chicago manufacturer)
- Naval Ordnance Plant, Forest Park
- FAA (Federal Aviation Administration)
- Franklin Park, IL
- East Leyden High School
- Northern Illinois University

**Historical context to research:**
| Topic | Research Questions | Suggested Sources |
|-------|---------------------|-------------------|
| 1950s-60s Chicago suburbs | Growth, character, family life | Local histories |
| Federal employment 1960s-90s | Career paths, benefits, stability | Government histories |
| Post-war American Dream | Home ownership, family, career | Social histories |
| Catholic parish life | Role in suburban communities | Religious histories |

**Map locations:**
- Franklin Park, IL (41.9314, -87.8656)
- All Chicago-area locations mentioned

---

## 5. Technical Specifications

### Recommended Stack

```
Framework:      Next.js 14+ (App Router)
Language:       TypeScript
Styling:        Tailwind CSS + custom CSS for typography
Content:        MDX (Markdown with components)
Animations:     Framer Motion
Maps:           Mapbox GL JS
Deployment:     Vercel
```

### Project Structure

```
/grandpa-story
├── /app
│   ├── layout.tsx           # Root layout with nav
│   ├── page.tsx             # Landing/intro page
│   ├── /chapters
│   │   ├── /[slug]
│   │   │   └── page.tsx     # Chapter template
│   ├── /map
│   │   └── page.tsx         # Full journey map
│   ├── /timeline
│   │   └── page.tsx         # Interactive timeline
│   └── /about
│       └── page.tsx         # About the project
│
├── /components
│   ├── /layout
│   │   ├── Header.tsx
│   │   ├── ChapterNav.tsx
│   │   ├── ProgressBar.tsx
│   │   └── Footer.tsx
│   ├── /content
│   │   ├── MemoirText.tsx       # Styled original text
│   │   ├── Annotation.tsx       # Inline annotation trigger
│   │   ├── AnnotationCard.tsx   # Popup/sidebar content
│   │   ├── ContextPanel.tsx     # Historical context sidebar
│   │   └── PhotoGallery.tsx
│   ├── /map
│   │   ├── JourneyMap.tsx
│   │   ├── LocationMarker.tsx
│   │   └── MiniMap.tsx
│   └── /timeline
│       └── Timeline.tsx
│
├── /content
│   ├── /chapters              # MDX files for each chapter
│   │   ├── 01-origins.mdx
│   │   ├── 02-childhood.mdx
│   │   └── ...
│   ├── /context               # Historical context markdown
│   │   ├── slovenia-history.md
│   │   ├── wwii-occupation.md
│   │   └── ...
│   └── /data
│       ├── annotations.json   # All annotation data
│       ├── locations.json     # Map coordinates
│       └── timeline.json      # Timeline events
│
├── /public
│   ├── /images
│   │   ├── /family            # Family photos
│   │   ├── /historical        # Historical images
│   │   └── /documents         # Document scans
│   └── /fonts
│
├── /lib
│   ├── mdx.ts                 # MDX utilities
│   └── types.ts               # TypeScript interfaces
│
└── /styles
    └── globals.css            # Custom typography, etc.
```

### Key Technical Decisions

| Decision | Recommendation | Rationale |
|----------|----------------|-----------|
| Content format | MDX | Allows embedding React components in text |
| State management | React Context | Simple needs, no Redux required |
| Map library | Mapbox GL JS | Best for journey visualization |
| Animation | Framer Motion | Good scroll-triggered animation support |
| Hosting | Vercel | Seamless Next.js deployment |

---

## 6. Design System

### Aesthetic Direction

**Tone:** Respectful, timeless, personal, archival  
**Inspiration:** Family heirloom, leather-bound journal, museum exhibit  
**NOT:** Flashy, trendy, corporate, generic

### Color Palette

```css
:root {
  /* Primary - Warm paper tones */
  --color-paper: #F5F1E8;
  --color-paper-dark: #E8E1D4;
  
  /* Text - Aged ink */
  --color-ink: #2C2416;
  --color-ink-light: #5C5346;
  --color-ink-muted: #8B8478;
  
  /* Accents - Archival */
  --color-accent: #8B4513;      /* Saddle brown - leather reference */
  --color-accent-light: #D4A574;
  
  /* Context/overlay backgrounds */
  --color-context-bg: #F9F7F3;
  --color-context-border: #D4CFC4;
  
  /* Map/interactive elements */
  --color-map-path: #6B4423;
  --color-map-marker: #C4541A;
}
```

### Typography

```css
/* Display/Headlines - Something with character */
--font-display: 'Playfair Display', Georgia, serif;

/* Body text - Highly readable, slight warmth */
--font-body: 'Source Serif Pro', 'Iowan Old Style', Georgia, serif;

/* UI/Navigation - Clean but not cold */
--font-ui: 'Source Sans Pro', system-ui, sans-serif;

/* Memoir text - Could use a slightly different treatment */
--font-memoir: 'Literata', 'Source Serif Pro', Georgia, serif;

/* Scale */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1.0625rem; /* 17px - slightly larger for readability */
--text-lg: 1.25rem;    /* 20px */
--text-xl: 1.5rem;     /* 24px */
--text-2xl: 2rem;      /* 32px */
--text-3xl: 2.5rem;    /* 40px */
```

### Spacing & Layout

```css
/* Max content width */
--max-width-prose: 680px;      /* Memoir text */
--max-width-content: 1200px;   /* With sidebars */

/* Generous margins for readability */
--spacing-page: clamp(1rem, 5vw, 4rem);

/* Line height for memoir text */
--leading-memoir: 1.8;
```

### Visual Elements

**Paper texture:** Subtle noise/grain overlay on backgrounds  
**Borders:** Thin, muted, suggesting aged paper edges  
**Shadows:** Soft, minimal, suggesting depth not flashiness  
**Photos:** Subtle sepia tint option, soft rounded corners  
**Annotations:** Subtle underline (dotted or wavy), not harsh highlight

---

## 7. Component Library

### Core Components to Build

#### Phase 1 (MVP)

| Component | Purpose | Priority |
|-----------|---------|----------|
| `<ChapterLayout>` | Page wrapper for chapters | P0 |
| `<MemoirText>` | Styled verbatim memoir content | P0 |
| `<ChapterNav>` | Sidebar navigation between chapters | P0 |
| `<ProgressBar>` | Reading progress indicator | P1 |
| `<Header>` | Site header with title | P0 |

#### Phase 2 (Annotations)

| Component | Purpose | Priority |
|-----------|---------|----------|
| `<Annotation>` | Inline trigger (underlined term) | P0 |
| `<AnnotationCard>` | Popup content for annotation | P0 |
| `<PlaceAnnotation>` | Annotation with mini-map | P1 |
| `<DateAnnotation>` | Annotation with timeline snippet | P1 |

#### Phase 3 (Context)

| Component | Purpose | Priority |
|-----------|---------|----------|
| `<ContextPanel>` | Sidebar with historical context | P0 |
| `<ContextToggle>` | Show/hide context mode | P0 |
| `<SourceCitation>` | Formatted source reference | P1 |
| `<ContextCard>` | Inline expandable context | P1 |

#### Phase 4 (Map)

| Component | Purpose | Priority |
|-----------|---------|----------|
| `<JourneyMap>` | Full interactive map | P0 |
| `<LocationMarker>` | Clickable map pin | P0 |
| `<JourneyPath>` | Animated travel route | P1 |
| `<MiniMap>` | Small map for annotations | P1 |

#### Phase 5 (Timeline)

| Component | Purpose | Priority |
|-----------|---------|----------|
| `<Timeline>` | Main timeline visualization | P0 |
| `<TimelineEvent>` | Individual event marker | P0 |
| `<DualTrack>` | Personal + world events | P1 |

#### Phase 6 (Media)

| Component | Purpose | Priority |
|-----------|---------|----------|
| `<PhotoGallery>` | Grid of images | P0 |
| `<Lightbox>` | Full-screen image view | P0 |
| `<PhotoCaption>` | Styled caption with date | P1 |
| `<DocumentViewer>` | Scanned document display | P2 |

---

## 8. AI Prompt Templates

Use these templates when working with AI assistants (Claude, Cursor) on specific parts of the project.

### Template: Project Context (Include at Start of Sessions)

```
I'm building an interactive memorial website for my grandfather's life story.

KEY CONTEXT:
- Subject: Mark F. Koscak (1930-?), Slovenian immigrant to USA
- Content: His memoir written in 1992 (attached/provided separately)
- Tech stack: Next.js 14, TypeScript, Tailwind, Framer Motion, Mapbox

DESIGN PRINCIPLES:
- Original memoir text is sacred (never edit)
- Historical context is layered and optional
- Tone: Respectful, timeless, archival (not flashy)
- Must be incrementally buildable

[Then add specific request below]
```

### Template: Component Development

```
[Include project context above]

I need to build the [COMPONENT NAME] component.

PURPOSE: [What it does]

BEHAVIOR:
- [Interaction 1]
- [Interaction 2]

DESIGN REQUIREMENTS:
- [Visual requirement 1]
- [Visual requirement 2]
- Match the project's archival/respectful aesthetic
- Use the color palette: paper (#F5F1E8), ink (#2C2416), accent (#8B4513)

Please create this component with TypeScript and Tailwind.
```

### Template: Historical Research

```
I'm researching historical context for my grandfather's memoir.

CHAPTER: [Chapter name]
TIME PERIOD: [Years]
LOCATION: [Place]

SPECIFIC TOPICS I NEED:
1. [Topic 1] - Need: [brief summary / detailed essay / timeline]
2. [Topic 2] - Need: [brief summary / detailed essay / timeline]

REQUIREMENTS:
- Use authoritative sources (encyclopedias, academic, archives)
- Provide citations I can link to
- Keep explanations accessible for general readers
- Avoid editorializing on sensitive historical topics
- Note any areas of historical debate/controversy

Output format: [Markdown for website / JSON for annotation data / prose summary]
```

### Template: Content Writing

```
[Include project context above]

I need to write [TYPE OF CONTENT] for [CHAPTER/SECTION].

ORIGINAL MEMOIR TEXT (for reference):
"""
[Paste relevant memoir excerpt]
"""

TASK:
[Describe what content is needed]

TONE REQUIREMENTS:
- Respectful, not sensationalized
- Informative but not overwhelming
- Should complement, not overshadow, the original memoir

LENGTH: [Word count or scope]

FORMAT: [Markdown / MDX / JSON]
```

### Template: Design Feedback

```
[Include project context above]

I've built [COMPONENT/PAGE] and need design feedback.

CURRENT IMPLEMENTATION:
[Describe or paste code]

CONCERNS:
- [Concern 1]
- [Concern 2]

GOALS:
- Match the archival/respectful aesthetic
- Ensure readability of memoir text is primary
- [Other specific goals]

Please review and suggest improvements.
```

---

## 9. Research Reference Guide

### Priority Research Topics

| Priority | Topic | Complexity | Method |
|----------|-------|------------|--------|
| **P0** | Post-war killings in Slovenia (1945) | High | Deep Research |
| **P0** | Displaced Persons camps in Austria | Medium | Web search + archives |
| **P0** | US Displaced Persons Act & immigration | Medium | Library of Congress |
| **P1** | Italian/German occupation of Slovenia | Medium | Encyclopedia + academic |
| **P1** | Tito's Partisans vs. Home Guard | High (sensitive) | Academic sources |
| **P1** | Kellerberg DP Camp specifically | Medium | Archives, may be limited |
| **P2** | Kingdom of Yugoslavia formation | Low | Encyclopedia |
| **P2** | Chicago Slovenian community | Low | Local history |
| **P2** | Korean War context | Low | Standard histories |

### Recommended Sources

**General Reference:**
- Encyclopedia Britannica (reliable overview)
- Wikipedia (good starting point, follow citations)

**WWII & Holocaust:**
- US Holocaust Memorial Museum (ushmm.org)
- Yad Vashem archives

**Immigration:**
- Library of Congress immigration resources
- Ellis Island archives
- Catholic Relief Services historical records

**Slovenian History:**
- Slovenian National Archives (limited English)
- Academic papers via Google Scholar
- Books: "Slovenia 1945" by John Corsellis

**Military:**
- National Archives (military records)
- Army Heritage Center

### Research Output Formats

**For annotations (brief):**
```json
{
  "term": "Displaced Persons camp",
  "shortDefinition": "Temporary settlements established after WWII to house millions of refugees...",
  "sources": [
    { "name": "USHMM", "url": "..." }
  ]
}
```

**For context panels (medium):**
```markdown
## The Displaced Persons Crisis

After World War II ended in 1945, Europe faced an unprecedented refugee crisis...

[3-5 paragraphs, 300-500 words]

### Sources
- [Source 1](url)
- [Source 2](url)
```

**For deep dives (full page):**
- 1000-2000 words
- Multiple sections with headers
- Images if available
- Comprehensive source list
- Suitable for standalone page

---

## 10. Media & Asset Checklist

### Family Photos to Gather

- [ ] Grandpa Mark — childhood (if any exist)
- [ ] Grandpa Mark — young adult / military
- [ ] Grandpa Mark — wedding photo
- [ ] Grandpa Mark — with family
- [ ] Grandmother Wally — any available
- [ ] Great-grandmother Mary Koscak
- [ ] Great-grandfather Mirko (if any exist — unlikely given circumstances)
- [ ] Family homes (Franklin Park, Slovenia if any)
- [ ] Extended family gatherings
- [ ] Original memoir document (scan of handwritten pages if available)

### Historical Images to Source

**Note:** Use only public domain or properly licensed images

| Topic | Potential Sources |
|-------|-------------------|
| Ljubljana 1930s | Wikimedia Commons, Slovenian archives |
| WWII occupation of Slovenia | Wikimedia, USHMM |
| DP camps in Austria | USHMM, UNHCR archives |
| Post-war refugee ships | Naval History, Wikimedia |
| 1950s Chicago | Chicago History Museum (check licensing) |
| Korean War | National Archives |

### Maps to Create

- [ ] Slovenia overview (showing key locations)
- [ ] WWII occupation zones
- [ ] DP camp locations in Austria
- [ ] Journey route: Slovenia → Austria → Germany → USA
- [ ] Chicago area locations
- [ ] Military service locations (Korea, Japan)

### Documents to Scan (if available)

- [ ] Original memoir typed pages
- [ ] Immigration documents
- [ ] Naturalization certificate
- [ ] Military discharge papers
- [ ] Wedding certificate
- [ ] Any family documents from Slovenia

---

## Appendix A: Full Location Coordinates

```json
{
  "locations": [
    {
      "name": "Ljubljana, Slovenia",
      "coordinates": [46.0569, 14.5058],
      "chapters": [1, 2, 4],
      "notes": "Birthplace, capital of Slovenia"
    },
    {
      "name": "Vizmarje pri St. Vidu",
      "coordinates": [46.0667, 14.5167],
      "chapters": [2, 3, 4],
      "notes": "Childhood home, house #88"
    },
    {
      "name": "Zagrad pri Skocjanu",
      "coordinates": [45.8833, 15.0333],
      "chapters": [1],
      "notes": "Father's birthplace"
    },
    {
      "name": "Ravne na Koroškem",
      "coordinates": [46.5444, 14.9519],
      "chapters": [1],
      "notes": "Mother's birthplace"
    },
    {
      "name": "Maribor, Slovenia",
      "coordinates": [46.5547, 15.6459],
      "chapters": [4],
      "notes": "Detention location before deportation"
    },
    {
      "name": "Kellerberg, Austria",
      "coordinates": [46.6167, 13.8500],
      "chapters": [5],
      "notes": "DP Camp location, 5 years"
    },
    {
      "name": "Velden am Wörthersee, Austria",
      "coordinates": [46.6167, 14.0333],
      "chapters": [5],
      "notes": "British Army resort, work location"
    },
    {
      "name": "Bremerhaven, Germany",
      "coordinates": [53.5396, 8.5809],
      "chapters": [6],
      "notes": "Embarkation port"
    },
    {
      "name": "New York Harbor",
      "coordinates": [40.6892, -74.0445],
      "chapters": [6],
      "notes": "Arrival in America"
    },
    {
      "name": "Chicago - Cermak & Damen",
      "coordinates": [41.8520, -87.6764],
      "chapters": [6, 7],
      "notes": "Slovenian community, first home area"
    },
    {
      "name": "Fort Leonard Wood, MO",
      "coordinates": [37.7131, -92.1297],
      "chapters": [7],
      "notes": "Army basic training"
    },
    {
      "name": "Fort Knox, KY",
      "coordinates": [37.8910, -85.9565],
      "chapters": [7],
      "notes": "Radio communications training"
    },
    {
      "name": "Seoul, South Korea",
      "coordinates": [37.5665, 126.9780],
      "chapters": [7],
      "notes": "Military service, ~5 months"
    },
    {
      "name": "Camp Drake, Tokyo, Japan",
      "coordinates": [35.7796, 139.6998],
      "chapters": [7],
      "notes": "Military service, became US citizen here"
    },
    {
      "name": "Nagoya, Japan",
      "coordinates": [35.1815, 136.9066],
      "chapters": [7],
      "notes": "Military service"
    },
    {
      "name": "Franklin Park, IL",
      "coordinates": [41.9314, -87.8656],
      "chapters": [8],
      "notes": "Family home from 1959"
    }
  ]
}
```

---

## Appendix B: Timeline Events (Draft)

### Personal Events

| Date | Event | Chapter |
|------|-------|---------|
| Nov 23, 1930 | Mark born in Ljubljana | 1 |
| Sep 8, 1929 | Parents married | 1 |
| ~1935 | Family moves to Vizmarje | 2 |
| 1937 | Mark starts school | 2 |
| Apr 29, 1935 | Sister Mary born | 2 |
| Mar 26, 1941 | Brother John born | 2 |
| 1941 | Italian occupation begins | 3 |
| 1941 | German occupation replaces Italian | 3 |
| Spring 1945 | Father arrested | 4 |
| 1945 | Father dies in prison | 4 |
| Jan 1946 | Family deported to Austria | 4 |
| 1946-1951 | Kellerberg DP Camp | 5 |
| Aug 1951 | Depart Bremerhaven | 6 |
| Aug 1951 | Arrive New York | 6 |
| 1951 | First jobs in Chicago | 7 |
| Summer 1952 | Meets Wally | 7 |
| Nov 1953 | Drafted into Army | 7 |
| 1954 | Service in Korea | 7 |
| 1954 | Becomes US citizen in Tokyo | 7 |
| Sep 1955 | Released from Army | 7 |
| Jan 7, 1956 | Marries Wally | 8 |
| Jan 1959 | Moves to Franklin Park | 8 |
| 1962 | Starts at Naval Ordnance Plant | 8 |
| 1973 | Joins FAA | 8 |
| Dec 30, 1995 | Retires from FAA | 8 |

### World Events (Context)

| Date | Event | Relevance |
|------|-------|-----------|
| 1918 | WWI ends, Austria-Hungary dissolves | Slovenia becomes part of Yugoslavia |
| 1918 | Kingdom of Yugoslavia formed | Context for birthplace |
| Sep 1, 1939 | WWII begins in Europe | |
| Apr 6, 1941 | Axis invades Yugoslavia | Occupation begins |
| Jun 22, 1941 | Germany invades USSR | Partisan resistance intensifies |
| May 8, 1945 | VE Day, WWII ends in Europe | Communist takeover |
| 1945-46 | Post-war killings in Slovenia | Father's death |
| 1948 | US Displaced Persons Act | Enables immigration |
| Jul 27, 1953 | Korean War armistice | Just before Mark's service |

---

## Document Revision History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | [Current] | Initial comprehensive plan |

---

*This document serves as the master reference for building Grandpa's Life Story interactive memorial website. Update as the project evolves.*

# AI Prompt: Implement Chapter 2 Supporting Content

## Project Context

I'm building an interactive memorial website for my grandfather's memoir. **Chapter 1 is complete** and working beautifully. Now I need to implement **Chapter 2: Childhood in Vizmarje (1935-1941)** following the exact same pattern.

The supporting content system includes:
- **Inline Annotations** - Terms with wavy underlines that show tooltips on hover
- **Context Cards** - Historical background panels with sources
- **Historical Photos** - Full images with lightbox and source links
- **Inline Maps** - Embedded Mapbox mini-maps

**All content appears when Context Mode is ON (default).**

---

## Files to Review

Please read these files to understand the current implementation:

1. **PROJECT-STATUS.md** - Overall project status and architecture
2. **SUPPORTING-CONTENT-GUIDE.md** - How the content system works
3. **lib/chapterContext.ts** - Where all supporting content data lives (see `chapter1Context` as reference)
4. **chapters-txt/ch2.txt** - Research results for Chapter 2 (attached below)

---

## Chapter 2 Research Data (ch2.txt)

```json
[
  {
    "type": "photo",
    "title": "Village Church and School, Slovenia (circa 1930)",
    "placement": "The school also provided about two hours of religious training each week, given by the parish priests.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Petrov%C4%8De.jpg",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Petrov%C4%8De.jpg",
    "credit": "Wikimedia Commons",
    "year": "circa 1930"
  },
  {
    "type": "photo",
    "title": "Bata Shoe Factory in Borovo (1938)",
    "placement": "My father started his own business in Vizmarje, producing leather goods.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Ba%C5%A5a_factory,_Borovo,_Yugoslavia,_26_Sept_1938._%284237252612%29.jpg",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Ba%C5%A5a_factory,_Borovo,_Yugoslavia,_26_Sept_1938._%284237252612%29.jpg",
    "credit": "Wikimedia Commons",
    "year": "1938"
  },
  {
    "type": "photo",
    "title": "Rural Road and Farmhouse, Prekmurje (1935)",
    "placement": "I remember moving into our new home. I liked the area and the friends that I made there.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/80/Cesta_in_hi%C5%A1a_v_okolici_Hotize_1935.jpg",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Cesta_in_hi%C5%A1a_v_okolici_Hotize_1935.jpg",
    "credit": "Wikimedia Commons",
    "year": "1935"
  },
  {
    "type": "context",
    "title": "Daily Life in a Slovenian Village (1930s)",
    "placement": "About 1935, our family moved to a village of Vizmarje...",
    "summary": "During the 1930s, most Slovenians lived in rural villages, relying on small-scale farming and family labor. Across the Kingdom of Yugoslavia, about three-quarters of the population worked in agriculture, usually as subsistence peasants. Slovenian villagers typically owned modest plots of land and often supplemented farm income with seasonal work or traditional crafts. Community life was close-knit and centered around the local church and family. Education was more accessible in Slovenia than in other parts of Yugoslavia – fewer than 10% of Slovenes were illiterate (compared to over 80% in some regions). Even so, many children in remote areas still had limited schooling. Life in a 1930s Slovene village was humble and hard-working, but marked by strong community ties and rich cultural traditions.",
    "link": "https://en.wikipedia.org/wiki/Kingdom_of_Yugoslavia"
  },
  {
    "type": "context",
    "title": "Craftsmen and Small Businesses in Interwar Yugoslavia",
    "placement": "He was a very accomplished craftsman in his trade.",
    "summary": "In the interwar Kingdom of Yugoslavia, industrialization was limited, and many goods were made by skilled artisans in small workshops. Manufacturing was concentrated in a few cities, while elsewhere craftsmen – such as shoemakers, tailors, leatherworkers – produced for local markets. Slovenia was relatively industrialized for the era (nearly half of new factories opened in Yugoslavia between 1919 and 1938 were in Slovenian lands), but much of the economy still depended on cottage industries. Master craftsmen often took on apprentices who lived with the family and learned the trade by working alongside the master. These apprenticeships kept traditional skills alive. A family-run leather goods workshop, for example, would handcraft items like shoes, belts, or bags, with the master's expertise passed down to the next generation. Such small businesses and tradesmen were the backbone of the local economy before large-scale factories became common.",
    "link": "https://en.wikipedia.org/wiki/Kingdom_of_Yugoslavia"
  },
  {
    "type": "context",
    "title": "Public School and Religious Instruction in the 1930s",
    "placement": "I started school in 1937 in St. Vid. I walked to school...",
    "summary": "Education in the 1930s Kingdom of Yugoslavia was organized as a public system, but opportunities varied by region. A 1929 law established compulsory public schooling – eight years of primary education (split into 4 lower and 4 upper years) – free for all children. In practice, rural areas often lagged behind cities in access. Slovenia enjoyed a high literacy rate and a well-attended school system for the time. Schools taught a standard curriculum, and importantly, they also included religious education. Around two hours per week were typically set aside for faith instruction in public schools. In predominantly Catholic villages like St. Vid, parish priests would come to the school to teach catechism and religious studies. This ensured children received moral and spiritual lessons alongside academic subjects. Such blending of public and religious education was common until the mid-20th century, reinforcing the influence of the Church in community life.",
    "link": "https://en.wikipedia.org/wiki/Kingdom_of_Yugoslavia"
  },
  {
    "type": "annotation",
    "term": "Vizmarje",
    "placement": "moved to a village of Vizmarje",
    "summary": "Vizmarje (Vižmarje) is a small settlement in the northwestern part of Ljubljana, Slovenia, historically a separate village.",
    "link": "https://en.wikipedia.org/wiki/Vi%C5%BEmarje"
  },
  {
    "type": "annotation",
    "term": "St. Vid",
    "placement": "school in 1937 in St. Vid",
    "summary": "St. Vid (Šentvid) is a district of Ljubljana in Slovenia. Formerly an independent village in the Upper Carniola region, it was incorporated into the city in 1974.",
    "link": "https://en.wikipedia.org/wiki/%C5%A0entvid_(Ljubljana)"
  },
  {
    "type": "annotation",
    "term": "Ljubljana",
    "placement": "10 kilometers from Ljubljana",
    "summary": "Ljubljana is the capital and largest city of Slovenia.",
    "link": "https://en.wikipedia.org/wiki/Ljubljana"
  },
  {
    "type": "annotation",
    "term": "apprenticeship",
    "placement": "a couple of apprentices who stayed with him to learn the trade",
    "summary": "An apprenticeship is a system of training a new practitioner of a trade through on-the-job experience under a skilled master.",
    "link": "https://simple.wikipedia.org/wiki/Apprenticeship"
  },
  {
    "type": "annotation",
    "term": "leather goods",
    "placement": "producing leather goods",
    "summary": "Leather goods are products made from leather (animal hides), such as footwear, belts, bags, and other accessories.",
    "link": "https://en.wikipedia.org/wiki/Leather"
  },
  {
    "type": "annotation",
    "term": "public school",
    "placement": "It was a public school.",
    "summary": "A public school is a school operated by the government. In 1930s Yugoslavia, public primary education was state-funded, free, and made compulsory by law.",
    "link": "https://en.wikipedia.org/wiki/Education_in_the_Kingdom_of_Yugoslavia"
  },
  {
    "type": "annotation",
    "term": "religious training",
    "placement": "religious training each week, given by the parish priests",
    "summary": "Religious training refers to faith-based education (such as Catholic catechism). In 1930s Yugoslav schools, about two hours per week were set aside for religious instruction by clergy.",
    "link": "https://en.wikipedia.org/wiki/Catechism"
  },
  {
    "type": "annotation",
    "term": "Egypt (British colony)",
    "placement": "Egypt was a British colony.",
    "summary": "Egypt was under British colonial rule in the late 19th and early 20th centuries (effectively from 1882 until 1956).",
    "link": "https://en.wikipedia.org/wiki/History_of_Egypt_under_British_rule"
  },
  {
    "type": "annotation",
    "term": "Cairo",
    "placement": "British official in Cairo, Egypt",
    "summary": "Cairo is the capital of Egypt and one of the largest cities in Africa.",
    "link": "https://en.wikipedia.org/wiki/Cairo"
  },
  {
    "type": "annotation",
    "term": "Franklin Park",
    "placement": "visited us in Franklin Park",
    "summary": "Franklin Park is a village in Cook County, Illinois, in the United States. It is a suburb of Chicago.",
    "link": "https://simple.wikipedia.org/wiki/Franklin_Park,_Illinois"
  }
]
```

---

## Your Task

**Add Chapter 2 supporting content to `/lib/chapterContext.ts` following the exact pattern of `chapter1Context`.**

### Step 1: Convert the JSON data to TypeScript

Transform the ch2.txt JSON into a `chapter2Context` object with these sections:

1. **photos** array - 3 photos provided
2. **contextCards** array - 3 context cards provided
3. **annotations** object - 10 annotations provided
4. **inlineMaps** array - Create 1 map showing Vizmarje, St. Vid, and Ljubljana (use location IDs: `vizmarje`, `stvid`, `ljubljana`)

### Step 2: Determine paragraph placement

The chapter has **4 paragraphs** (see `lib/chapter-content.ts` > `childhood-in-vizmarje`).

Map the content to paragraph indices (0-3):
- **Paragraph 0**: "About 1935, our family moved to a village of Vizmarje..."
- **Paragraph 1**: "My father started his own business in Vizmarje..."
- **Paragraph 2**: "My sister Mary and my brother John were both born..."
- **Paragraph 3**: "I started school in 1937 in St. Vid..."

Based on the "placement" hints in the JSON, assign `afterParagraph` values.

### Step 3: Add to chapterContext.ts

Create `chapter2Context` following this structure (reference `chapter1Context`):

```typescript
export const chapter2Context: ChapterContextData = {
  contextCards: [
    {
      id: 'village-life-1930s',
      title: 'Daily Life in a Slovenian Village (1930s)',
      subtitle: '1930s Yugoslavia',
      content: `[content from JSON]`,
      type: 'history',
      sources: [
        { name: 'Wikipedia - Kingdom of Yugoslavia', url: 'https://en.wikipedia.org/wiki/Kingdom_of_Yugoslavia' }
      ],
      afterParagraph: 0,  // Determine based on placement
    },
    // ... add other 2 context cards
  ],
  photos: [
    {
      id: 'village-church',
      title: 'Village Church and School, Slovenia (circa 1930)',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Petrov%C4%8De.jpg',
      caption: '[convert summary to caption]',
      credit: 'Wikimedia Commons',
      year: 'circa 1930',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Petrov%C4%8De.jpg',
      afterParagraph: 3,  // Determine based on placement
    },
    // ... add other 2 photos
  ],
  inlineMaps: [
    {
      id: 'vizmarje-area',
      locationIds: ['vizmarje', 'stvid', 'ljubljana'],
      title: 'Childhood Home Area',
      description: 'Vizmarje was a small village just 10 kilometers northwest of Ljubljana, where Mark lived from 1935-1946. He walked daily to school in nearby St. Vid.',
      afterParagraph: 0,
    },
  ],
  annotations: {
    'Vizmarje': {
      term: 'Vizmarje',
      definition: '[from JSON summary]',
      type: 'place',
    },
    // ... add other annotations
  },
};
```

### Step 4: Register in getChapterContext()

Update the function to include chapter 2:

```typescript
export function getChapterContext(slug: string): ChapterContextData | null {
  const contextMap: Record<string, ChapterContextData> = {
    'origins-and-family-roots': chapter1Context,
    'childhood-in-vizmarje': chapter2Context,  // ADD THIS
    'communist-takeover-and-loss': chapter4Context,
  };
  return contextMap[slug] || null;
}
```

### Step 5: Check for missing location IDs

The map needs these location IDs. Check if they exist in `/lib/mapData.ts`:
- `vizmarje`
- `stvid`

If they don't exist, add them to the `locations` array with proper coordinates:
- Vizmarje: `[14.5167, 46.0667]`
- St. Vid (Šentvid): `[14.4833, 46.1000]`

### Step 6: Test

1. Run `npm run dev`
2. Visit http://localhost:3000/chapters/childhood-in-vizmarje
3. Verify:
   - ✅ 3 photos appear
   - ✅ 3 context cards appear
   - ✅ 1 inline map appears showing 3 locations
   - ✅ 10 annotation terms have wavy underlines
   - ✅ Hovering annotations shows tooltips
   - ✅ Photos can be clicked for lightbox
   - ✅ "View source" links work

---

## Important Notes

1. **Follow Chapter 1's pattern exactly** - Same structure, same prop names
2. **Paragraph indices are 0-based** - afterParagraph: 0 means after the first paragraph
3. **Use smart placement** - Space out the content so it doesn't all appear in one section
4. **Photo captions** - Convert the JSON "summary" to a narrative caption that connects to the memoir
5. **Context card content** - Keep the full text from JSON; it's already well-written
6. **Annotations** - The keys should match how they appear in the memoir text (case-insensitive matching works)

---

## Reference: Chapter 1 Structure

Chapter 1 has this distribution (use as a guide):
- Photos: After paragraphs 1, 4, 8
- Context cards: After paragraphs 4, 8
- Inline maps: After paragraph 2
- Annotations: Throughout (matched in text)

For Chapter 2 (4 paragraphs), aim for good spacing:
- Suggested: Photo after 0, 1, 3
- Context cards after 0, 1, 3
- Map after 0

---

## Expected Outcome

When complete, Chapter 2 should look and feel exactly like Chapter 1:
- Rich historical context
- Beautiful photos with archival styling
- Interactive map showing the local area
- Terms highlighted with helpful tooltips
- All content respects the memoir's narrative

**The pattern is established. Just follow it!** 🎨

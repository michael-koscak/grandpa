# Chapter 2 Research Prompt for ChatGPT Deep Research

Copy the text below and paste it into ChatGPT Deep Research (or similar AI research tool).

---

## Research Request

I'm building an interactive memorial website for my grandfather's memoir. I need you to research **Chapter 2: Childhood in Vizmarje (1935-1941)** and provide supporting content in a specific JSON format.

### Chapter 2 Content (Verbatim Memoir Text):

```
About 1935, our family moved to a village of Vizmarje (I remember the house number was 88) pri St. Vidu, about 10 kilometers from Ljubljana. Here, we would call it a suburb of the city. We moved to a house that was owned by my mother's aunt Fani (grandfather's sister), who worked for some high British official in Cairo, Egypt. At that time, Egypt was a British colony. I remember moving into our new home. I liked the area and the friends that I made there. My first friend was Marko Polensek, a brother of Tony Polensek who visited us in Franklin Park on a couple of occasions. Marko later moved to Canada. I have later lost touch with him.

My father started his own business in Vizmarje, producing leather goods. He was a very accomplished craftsman in his trade. All the products were hand-made. Mother was at times the sales representative and made trips exhibiting and selling the merchandise that my father produced. My father usually had a couple of apprentices who stayed with him to learn the trade and normally lived with us.

My sister Mary and my brother John were both born while we lived in Vizmarje.

I started school in 1937 in St. Vid. I walked to school--about one-half hour each way. I attended school there until 1946. It was a public school. All the children in the area went to the same school. The school also provided about two hours of religious training each week, given by the parish priests. I also attended the catholic church in St. Vid.
```

### What I Need:

Please research and provide the following in **JSON format** (see example below):

1. **Historical Photos** (3-5 photos)
   - Find REAL Wikimedia Commons photos showing:
     - Slovenian village life in the 1930s
     - Leather goods workshops or craftsmen
     - Schools in Yugoslavia 1930s
     - St. Vid area if available
   - Provide DIRECT image URLs (ending in .jpg or .png)
   - Format: `https://upload.wikimedia.org/wikipedia/commons/[path]/filename.jpg`
   - Include the Wikimedia page URL for source attribution

2. **Context Cards** (2-3 cards)
   - Topics to cover:
     - Daily life in Slovenian villages in the 1930s
     - Small business/artisan economy in Yugoslavia
     - Education system in 1930s Yugoslavia
     - Cairo/Egypt as British colony (context for aunt Fani)
   - Each should be 2-3 paragraphs
   - Include reputable sources with URLs

3. **Inline Maps** (1-2 maps)
   - Suggest location groupings to show on mini-maps
   - Examples: Vizmarje, St. Vid, Ljubljana proximity

4. **Annotations** (8-12 terms)
   - Terms needing quick definitions:
     - Vizmarje, St. Vid, Ljubljana
     - Egypt as British colony
     - Slovenian village life
     - Apprenticeship system
     - Public schools in Yugoslavia
     - Catholic religious education
     - Leather goods trade
   - Keep definitions to 1-2 sentences

### Output Format:

Please structure your response EXACTLY like this JSON:

```json
{
  "overlays": [
    {
      "type": "photo",
      "title": "Photo Title Here",
      "placement": "\"Quote from memoir where this should appear...\"",
      "summary": "Caption for the photo",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/.../filename.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:filename.jpg",
      "credit": "Wikimedia Commons",
      "year": "circa 1930s"
    },
    {
      "type": "context",
      "title": "Context Card Title",
      "placement": "\"Quote from memoir where this should appear...\"",
      "summary": "2-3 paragraphs of historical context here...",
      "link": "https://source-url.com"
    },
    {
      "type": "map",
      "title": "Map Title",
      "placement": "\"Quote from memoir...\"",
      "summary": "Brief description of what the map shows",
      "locationIds": ["vizmarje", "stvid", "ljubljana"]
    },
    {
      "type": "annotation",
      "term": "Vizmarje",
      "placement": "\"...village of Vizmarje...\"",
      "summary": "Brief 1-2 sentence definition",
      "link": "https://optional-source-url.com"
    }
  ]
}
```

### Important Guidelines:

1. **Photo URLs**: Verify the direct image URLs work. They should end in .jpg or .png, not point to Wiki pages.
2. **Placement quotes**: Use actual short quotes from the memoir text to indicate where content should appear.
3. **Tone**: Keep it educational but not academic. Write for general readers.
4. **Sources**: Prioritize Encyclopedia Britannica, Wikipedia, and reputable historical sources.
5. **Accuracy**: All historical information must be verifiable and cited.

### Reference - Chapter 1 Example (for format reference):

We successfully implemented Chapter 1 with:
- 3 historical photos showing Ljubljana 1920s, Ravne na Koroškem, Slovenian family
- 2 context cards on Austro-Hungarian Empire and Leather Crafting tradition
- 1 inline map showing 3 family origin locations
- 8 annotations for terms like "Ljubljana", "Kingdom of Yugoslavia", "tuberculosis"

Please provide similar richness for Chapter 2!

---

## After Research

Once you receive the JSON response:
1. Save it as `ch2.txt` in the `chapters-txt` folder
2. Use it to build Chapter 2 supporting content in `lib/chapterContext.ts`
3. Follow the pattern established in Chapter 1

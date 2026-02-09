# Chapter 3 Research Prompt for ChatGPT Deep Research

Copy the text below and paste it into ChatGPT Deep Research (or similar AI research tool).

---

## Research Request

I'm building an interactive memorial website for my grandfather's memoir. I need you to research **Chapter 3: War & Occupation (1941-1945)** and provide supporting content in a specific JSON format.

### Chapter 3 Content (Verbatim Memoir Text):

```
World War II started in Europe in 1939. Germany and Italy were allies in the war. In 1941 (I believe) they declared war on Yugoslavia, and my part of the country was occupied by Italy. We woke up one morning and there were thousands of Italian soldiers in the countryside. They only stayed there a few weeks. The Italians were replaced by German troops. Two German soldiers on a sidecar motorbike occupied our town after the Italians left.

Our schools were changed to German language schools, taught by German teachers. This is were I learned to speak German. Most people seemed to prefer the German occupiers over the Italians.

After Germany went to war with Russia in 1942 (I believe), the communists and various national groups started to resist and fight the Germans. When the Allies decided to support the communist Jugoslavian leader Tito, the nationalist people broke with the resistance and allied themselves with the Germans and Italians and this started a civil war among the groups.
```

### What I Need:

Please research and provide the following in **JSON format** (see example below):

1. **Historical Photos** (3-5 photos)
   - Find REAL Wikimedia Commons photos showing:
     - Italian occupation of Yugoslavia/Slovenia 1941
     - German occupation forces in Yugoslavia
     - Axis troops in Slovenia (if available)
     - Yugoslav/Slovenian civilians during WWII
     - Schools during occupation (if available)
   - Provide DIRECT image URLs (ending in .jpg or .png)
   - Format: `https://upload.wikimedia.org/wikipedia/commons/[path]/filename.jpg`
   - Include the Wikimedia page URL for source attribution

2. **Context Cards** (3-4 cards)
   - **IMPORTANT**: This is a sensitive historical period. Be balanced and factual.
   - Topics to cover:
     - Invasion of Yugoslavia (April 1941) - how it happened, who occupied what
     - Italian occupation of Slovenia - policies, duration, civilian experience
     - German occupation replacing Italians - why the change, German policies
     - Germanization of schools - forced German language education
     - Operation Barbarossa (Germany invades Russia 1941) - context
     - Yugoslav resistance movements - Tito's Partisans (communists)
     - Slovenian civil war aspect - nationalist groups, complexity, why sides formed
   - Each should be 2-3 paragraphs
   - Use authoritative sources (Encyclopedia Britannica, academic sources, USHMM)
   - Be careful with controversial topics - present facts objectively

3. **Inline Maps** (1-2 maps)
   - Suggest location groupings:
     - Vizmarje under occupation (if useful)
     - Yugoslavia occupation zones (Italian vs German)

4. **Annotations** (10-15 terms)
   - Terms needing quick definitions:
     - World War II
     - Axis powers (Germany, Italy)
     - Invasion of Yugoslavia (April 1941)
     - Italian occupation
     - German occupation
     - Germanization
     - Operation Barbarossa (1941)
     - Josip Broz Tito
     - Yugoslav Partisans
     - Slovenian Home Guard (Domobranci) - if mentioned
     - Yugoslav civil war
     - Communist resistance
   - Keep definitions to 1-2 sentences
   - Be factual and avoid editorializing on the civil war aspect

### Output Format:

Please structure your response EXACTLY like this JSON:

```json
[
  {
    "type": "photo",
    "title": "Photo Title Here",
    "placement": "\"Quote from memoir where this should appear...\"",
    "summary": "Caption for the photo",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/.../filename.jpg",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:filename.jpg",
    "credit": "Wikimedia Commons",
    "year": "1941"
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
    "locationIds": ["vizmarje"]
  },
  {
    "type": "annotation",
    "term": "World War II",
    "placement": "\"...World War II started...\"",
    "summary": "Brief 1-2 sentence definition",
    "link": "https://source-url.com"
  }
]
```

### Important Guidelines:

1. **Photo URLs**: Verify the direct image URLs work. They should end in .jpg or .png, not point to Wiki pages.
2. **Placement quotes**: Use actual short quotes from the memoir text to indicate where content should appear.
3. **Tone**: This is a sensitive period. Be factual, balanced, and educational. Avoid inflammatory language.
4. **Civil War Complexity**: The Yugoslav civil war involved multiple factions with conflicting loyalties. Present this complexity factually without judgment. Many ordinary people were caught in impossible situations.
5. **Sources**: Prioritize Encyclopedia Britannica, USHMM, and academic sources. This is serious history.
6. **Accuracy**: All historical information must be verifiable and cited.

### Historical Context Notes:

**Key Events to Research:**
- **April 1941**: Axis invasion and partition of Yugoslavia
- **Italian Province of Ljubljana**: Italian-occupied Slovenia (April-September 1943)
- **German occupation**: From September 1943 to May 1945
- **Forced Germanization**: Schools, language, cultural suppression
- **Operation Barbarossa**: June 1941, Germany invades Soviet Union
- **Partisan resistance**: Communist-led, supported by Allies
- **Slovenian Home Guard**: Anti-communist forces, collaborated with occupiers
- **Yugoslav civil war**: Complex multi-sided conflict alongside occupation

**Sensitive Topics:**
This period involves occupation, resistance, collaboration, and civil war. Many families were torn apart by conflicting loyalties. Present the historical facts without taking sides. Grandpa's family was caught in this historical tragedy - they were victims of the times.

### Reference - Previous Chapters:

- **Chapter 1**: 3 photos, 2 context cards, 1 map, 8 annotations
- **Chapter 2**: 3 photos, 3 context cards, 1 map, 10 annotations

Aim for similar richness for Chapter 3!

---

## After Research

Once you receive the JSON response:
1. Save it as `ch3.txt` in the `chapters-txt` folder
2. Use it to build Chapter 3 supporting content following the Chapter 1 & 2 pattern
3. Be especially careful with tone and accuracy given the sensitive nature of this chapter

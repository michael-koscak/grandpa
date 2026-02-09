# Chapter 7 Research Prompt for ChatGPT Deep Research

Copy the text below and paste it into ChatGPT Deep Research (or similar AI research tool).

---

## Research Request

I'm building an interactive memorial website for my grandfather's memoir. I need you to research **Chapter 7: Building a New Life (1951-1956)** and provide supporting content in a specific JSON format.

### Chapter 7 Content Summary:

This chapter covers Mark's first years in America:
- First jobs (Hines Lumber, Glider Trailer Company)
- DeVry electronics school at night
- TV technician at Admiral Company
- Meeting Wally Tiedmann at Riverview Park (1952)
- Engagement (1953)
- Drafted into US Army (November 1953)
- Military service: Fort Leonard Wood MO, Fort Knox KY
- Sent to Korea (5 months)
- Transferred to Japan (Camp Drake near Tokyo, then Nagoya)
- Became US citizen in Tokyo
- Won car in raffle, sold it for $2100 in yen
- Returned to US and discharged (September 1955)

### What I Need:

Please research and provide the following in **JSON format**:

1. **Historical Photos** (3-5 photos)
   - Find REAL Wikimedia Commons photos showing:
     - 1950s Chicago industry/factories
     - Admiral Corporation or TV manufacturing 1950s
     - DeVry Institute Chicago 1950s (if available)
     - Riverview Amusement Park Chicago
     - Korean War era - US troops in Korea 1953-1954
     - Camp Drake Japan 1950s
     - Military life in post-Korean War Japan
     - 1950s American soldiers
     - Naturalization ceremony 1950s (if available)
   - Provide DIRECT image URLs (ending in .jpg or .png)

2. **Context Cards** (3-4 cards)
   - Topics to cover:
     - 1950s Chicago economy - manufacturing boom, immigrant opportunities
     - Television industry 1950s - Admiral, Motorola, electronics boom
     - DeVry Institute - vocational/technical education for veterans and immigrants
     - Korean War aftermath (armistice July 1953) - why troops still deployed
     - US military in Japan 1950s - occupation ending, bases remaining
     - Naturalization of military servicemembers - process, significance
     - Post-WWII immigrant experience - working class paths to success
     - Riverview Park - Chicago landmark amusement park
   - Each 2-3 paragraphs

3. **Inline Maps** (2-3 maps)
   - Suggest location groupings:
     - Chicago work locations
     - Military training: Fort Leonard Wood MO, Fort Knox KY
     - Military service overseas: Korea (Seoul area), Camp Drake (Tokyo), Nagoya

4. **Annotations** (12-18 terms)
   - Admiral Company
   - DeVry Institute
   - Television industry 1950s
   - Glider Trailer Company
   - Riverview Amusement Park
   - Draft / US Army draft
   - Fort Leonard Wood
   - Fort Knox
   - Korean War
   - Korea 1953-1954
   - Camp Drake
   - Tokyo, Nagoya
   - US citizenship / naturalization
   - Military service citizenship
   - Post-war Japan

### Output Format:

```json
[
  {
    "type": "photo",
    "title": "Photo Title",
    "placement": "\"Quote from memoir...\"",
    "summary": "Caption",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/.../file.jpg",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:file.jpg",
    "credit": "Wikimedia Commons",
    "year": "1952"
  },
  {
    "type": "context",
    "title": "Context Card Title",
    "placement": "\"Quote...\"",
    "summary": "2-3 paragraphs...",
    "link": "https://source.com"
  },
  {
    "type": "map",
    "title": "Military Service Locations",
    "placement": "\"Quote...\"",
    "summary": "Description",
    "locationIds": ["ftleonardwood", "ftknox", "korea", "tokyo", "nagoya"]
  },
  {
    "type": "annotation",
    "term": "Term",
    "placement": "\"...quote...\"",
    "summary": "Definition",
    "link": "https://..."
  }
]
```

### Important Context:

**1950s American Dream:**
- Manufacturing jobs for immigrants
- Technical education pathways
- Hard work leading to middle class
- Military service as path to citizenship

**Korean War Context:**
- War ended July 27, 1953 (armistice)
- Mark drafted Nov 1953, just after end
- But troops remained - technically still at war (armistice not peace treaty)
- Post-war occupation and deterrence mission

**Military Citizenship:**
- Expedited naturalization for military servicemembers
- Common for immigrants to gain citizenship through service
- Significant milestone

**1950s Japan:**
- US occupation ended 1952, but bases remained
- Japan rebuilding, becoming economic power
- American servicemembers had good living conditions
- Local economy dependent on US military

**Chicago 1950s:**
- Peak of American manufacturing
- Television industry booming
- Jobs plentiful for skilled workers
- Ethnic communities strong

### Reference:

Aim for 3-5 photos, 3-4 context cards, 2-3 maps, 12-18 annotations.

---

## After Research

Save as `ch7.txt` and implement following the established pattern.

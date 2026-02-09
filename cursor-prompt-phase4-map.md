# Cursor Prompt: Phase 4 — Interactive Journey Map

Attach your existing project files plus the project plan. Paste this prompt:

---

I have a working Next.js memoir site (Phase 1 complete). Now I want to add the interactive journey map showing my grandfather's path from Slovenia to America.

## What I Need

1. **Full-page map view** at `/map`
2. **Journey path** connecting locations chronologically
3. **Location markers** with popups showing what happened there
4. **Mini-map component** I can later embed in chapters (just build the component, don't integrate yet)

## Tech

- **Mapbox GL JS** (I'll get an API key from mapbox.com)
- Keep existing Next.js/TypeScript/Tailwind setup
- Match the existing design aesthetic (archival, warm tones)

## Location Data

Here are all locations from the memoir with coordinates:

```json
{
  "locations": [
    {
      "id": "ljubljana",
      "name": "Ljubljana, Slovenia",
      "coordinates": [14.5058, 46.0569],
      "year": 1930,
      "chapter": 1,
      "description": "Birthplace. Capital of Slovenia, where parents met and married.",
      "type": "origin"
    },
    {
      "id": "zagrad",
      "name": "Zagrad pri Skocjanu",
      "coordinates": [15.0333, 45.8833],
      "year": 1904,
      "chapter": 1,
      "description": "Father's birthplace. Small village in southeastern Slovenia.",
      "type": "family"
    },
    {
      "id": "ravne",
      "name": "Ravne na Koroškem",
      "coordinates": [14.9519, 46.5444],
      "year": 1907,
      "chapter": 1,
      "description": "Mother's birthplace. Small town near Austrian border.",
      "type": "family"
    },
    {
      "id": "vizmarje",
      "name": "Vizmarje pri St. Vidu",
      "coordinates": [14.5167, 46.0667],
      "year": 1935,
      "chapter": 2,
      "description": "Childhood home (house #88). Father ran leather goods business here.",
      "type": "home"
    },
    {
      "id": "maribor",
      "name": "Maribor, Slovenia",
      "coordinates": [15.6459, 46.5547],
      "year": 1946,
      "chapter": 4,
      "description": "Detention location. Family held here before deportation to Austria.",
      "type": "detention"
    },
    {
      "id": "kellerberg",
      "name": "Kellerberg DP Camp, Austria",
      "coordinates": [13.8500, 46.6167],
      "year": 1946,
      "chapter": 5,
      "description": "Displaced Persons camp. Family lived here as refugees for 5 years.",
      "type": "refugee"
    },
    {
      "id": "velden",
      "name": "Velden am Wörthersee, Austria",
      "coordinates": [14.0333, 46.6167],
      "year": 1949,
      "chapter": 5,
      "description": "British Army resort hotel. Mark worked here earning money for family.",
      "type": "work"
    },
    {
      "id": "bremerhaven",
      "name": "Bremerhaven, Germany",
      "coordinates": [8.5809, 53.5396],
      "year": 1951,
      "chapter": 6,
      "description": "Port of embarkation. Boarded USS General Muir here.",
      "type": "journey"
    },
    {
      "id": "newyork",
      "name": "New York Harbor",
      "coordinates": [-74.0445, 40.6892],
      "year": 1951,
      "chapter": 6,
      "description": "Arrival in America. 'Awed by the size of the city, the tall buildings.'",
      "type": "arrival"
    },
    {
      "id": "chicago",
      "name": "Chicago — Cermak & Damen",
      "coordinates": [-87.6764, 41.8520],
      "year": 1951,
      "chapter": 6,
      "description": "First home in America. Slovenian community welcomed the family.",
      "type": "home"
    },
    {
      "id": "ftleonardwood",
      "name": "Fort Leonard Wood, Missouri",
      "coordinates": [-92.1297, 37.7131],
      "year": 1953,
      "chapter": 7,
      "description": "Army basic training. 'A very miserable eight weeks.'",
      "type": "military"
    },
    {
      "id": "ftknox",
      "name": "Fort Knox, Kentucky",
      "coordinates": [-85.9565, 37.8910],
      "year": 1953,
      "chapter": 7,
      "description": "Radio communications training.",
      "type": "military"
    },
    {
      "id": "korea",
      "name": "Seoul, South Korea",
      "coordinates": [126.9780, 37.5665],
      "year": 1954,
      "chapter": 7,
      "description": "Military service. Anti-aircraft battalion at Air Force base north of Seoul.",
      "type": "military"
    },
    {
      "id": "tokyo",
      "name": "Camp Drake, Tokyo, Japan",
      "coordinates": [139.6998, 35.7796],
      "year": 1954,
      "chapter": 7,
      "description": "Military service. Became US citizen here. Won car in raffle.",
      "type": "military"
    },
    {
      "id": "nagoya",
      "name": "Nagoya, Japan",
      "coordinates": [136.9066, 35.1815],
      "year": 1955,
      "chapter": 7,
      "description": "Final military posting before returning to USA.",
      "type": "military"
    },
    {
      "id": "franklinpark",
      "name": "Franklin Park, Illinois",
      "coordinates": [-87.8656, 41.9314],
      "year": 1959,
      "chapter": 8,
      "description": "Family home from 1959. Raised three children here.",
      "type": "home"
    }
  ],
  "journeySegments": [
    {
      "id": "childhood",
      "name": "Childhood in Slovenia",
      "locations": ["ljubljana", "vizmarje"],
      "years": "1930-1946",
      "color": "#4A7C59"
    },
    {
      "id": "displacement", 
      "name": "Deportation & Refugee Years",
      "locations": ["vizmarje", "maribor", "kellerberg", "velden"],
      "years": "1946-1951",
      "color": "#8B4513"
    },
    {
      "id": "immigration",
      "name": "Journey to America",
      "locations": ["velden", "bremerhaven", "newyork", "chicago"],
      "years": "1951",
      "color": "#2E5090"
    },
    {
      "id": "military",
      "name": "Military Service",
      "locations": ["chicago", "ftleonardwood", "ftknox", "korea", "tokyo", "nagoya", "chicago"],
      "years": "1953-1955",
      "color": "#5C5346"
    },
    {
      "id": "settlement",
      "name": "Building a Life",
      "locations": ["chicago", "franklinpark"],
      "years": "1955-1992",
      "color": "#6B4423"
    }
  ]
}
```

## Map Page Requirements (`/map`)

### Layout
- Full viewport height map
- Floating panel (top-left or sidebar) with:
  - Title: "The Journey"
  - Journey segment toggles (show/hide each life phase)
  - Legend explaining marker colors
- Back link to main site

### Map Features
- **Initial view:** Zoomed to show Europe (Slovenia/Austria/Germany)
- **Journey paths:** Curved/arced lines connecting locations in sequence
- **Markers:** Custom styled pins, color-coded by location type
- **Popups:** On click, show location name, year, description, link to relevant chapter
- **Fly-to animation:** When clicking a journey segment in the panel, map animates to that region

### Marker Types & Colors
```
origin: #C4541A (burnt orange)
family: #8B7355 (taupe)
home: #4A7C59 (forest green)  
detention: #8B4513 (saddle brown)
refugee: #8B4513 (saddle brown)
journey: #2E5090 (navy)
arrival: #2E5090 (navy)
military: #5C5346 (army gray)
work: #6B8E7A (sage)
```

### Mobile
- Panel collapses to bottom sheet
- Markers remain tappable
- Reduce visual clutter

## MiniMap Component

Create a reusable `<MiniMap>` component that:
- Takes a single location ID or array of location IDs
- Renders a small static map (300x200px default, configurable)
- Shows just that location(s) with minimal UI
- Has a "View full map" link
- Will be used later in chapter sidebars and annotation popups

```tsx
// Example future usage:
<MiniMap locations={["kellerberg", "velden"]} height={200} />
```

## Files to Create

```
/app/map/page.tsx           # Full map page
/components/map/
  JourneyMap.tsx            # Main map component
  MapMarker.tsx             # Custom marker component  
  MapPopup.tsx              # Popup content component
  JourneyPath.tsx           # Animated path lines
  MapPanel.tsx              # Floating control panel
  MiniMap.tsx               # Reusable small map
/lib/
  mapData.ts                # Location & journey data (from JSON above)
  mapConfig.ts              # Mapbox config, styles
```

## Design Notes

- Map style: Use Mapbox's "outdoors" or "light" style, or create custom style with muted colors that match the site aesthetic
- Avoid harsh blues—warm up the water/land colors if possible
- Path lines should feel hand-drawn or historical (slight opacity, maybe dashed for certain segments)
- Overall feel: Like a map in a history book, not a tech demo

## Environment Setup

I'll need to:
1. Create Mapbox account and get access token
2. Add `NEXT_PUBLIC_MAPBOX_TOKEN` to `.env.local`

Please set up the map with a placeholder for the token, and let me know what packages to install.

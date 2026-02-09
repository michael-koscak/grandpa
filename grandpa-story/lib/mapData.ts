export interface MapLocation {
  id: string;
  name: string;
  coordinates: [number, number]; // [lng, lat]
  year: number;
  chapter: number;
  description: string;
  type: LocationType;
}

export type LocationType = 
  | 'origin' 
  | 'family' 
  | 'home' 
  | 'detention' 
  | 'refugee' 
  | 'journey' 
  | 'arrival' 
  | 'military' 
  | 'work';

export interface JourneySegment {
  id: string;
  name: string;
  locations: string[];
  years: string;
  color: string;
  // NEW: Focus region instead of fitting all locations
  focusRegion: {
    center: [number, number]; // [lng, lat]
    zoom: number;
    description: string; // What area this represents
  };
  // Optional sub-regions for segments that span multiple areas
  subRegions?: {
    id: string;
    name: string;
    center: [number, number];
    zoom: number;
    locations: string[];
  }[];
}

export const locations: MapLocation[] = [
  {
    id: "ljubljana",
    name: "Ljubljana, Slovenia",
    coordinates: [14.5058, 46.0569],
    year: 1930,
    chapter: 1,
    description: "Birthplace. Capital of Slovenia, where parents met and married.",
    type: "origin"
  },
  {
    id: "zagrad",
    name: "Zagrad pri Skocjanu",
    coordinates: [15.0333, 45.8833],
    year: 1904,
    chapter: 1,
    description: "Father's birthplace. Small village in southeastern Slovenia.",
    type: "family"
  },
  {
    id: "ravne",
    name: "Ravne na Koroškem",
    coordinates: [14.9519, 46.5444],
    year: 1907,
    chapter: 1,
    description: "Mother's birthplace. Small town near Austrian border.",
    type: "family"
  },
  {
    id: "vizmarje",
    name: "Vizmarje pri St. Vidu",
    coordinates: [14.5167, 46.0667],
    year: 1935,
    chapter: 2,
    description: "Childhood home (house #88). Father ran leather goods business here.",
    type: "home"
  },
  {
    id: "stvid",
    name: "St. Vid (Šentvid)",
    coordinates: [14.4833, 46.1000],
    year: 1937,
    chapter: 2,
    description: "School location. Mark walked here daily starting in 1937.",
    type: "family"
  },
  {
    id: "maribor",
    name: "Maribor, Slovenia",
    coordinates: [15.6459, 46.5547],
    year: 1946,
    chapter: 4,
    description: "Detention location. Family held here before deportation to Austria.",
    type: "detention"
  },
  {
    id: "kellerberg",
    name: "Kellerberg DP Camp, Austria",
    coordinates: [13.8500, 46.6167],
    year: 1946,
    chapter: 5,
    description: "Displaced Persons camp. Family lived here as refugees for 5 years.",
    type: "refugee"
  },
  {
    id: "velden",
    name: "Velden am Wörthersee, Austria",
    coordinates: [14.0333, 46.6167],
    year: 1949,
    chapter: 5,
    description: "British Army resort hotel. Mark worked here earning money for family.",
    type: "work"
  },
  {
    id: "bremerhaven",
    name: "Bremerhaven, Germany",
    coordinates: [8.5809, 53.5396],
    year: 1951,
    chapter: 6,
    description: "Port of embarkation. Boarded USS General Muir here.",
    type: "journey"
  },
  {
    id: "newyork",
    name: "New York Harbor",
    coordinates: [-74.0445, 40.6892],
    year: 1951,
    chapter: 6,
    description: "Arrival in America. 'Awed by the size of the city, the tall buildings.'",
    type: "arrival"
  },
  {
    id: "chicago",
    name: "Chicago — Cermak & Damen",
    coordinates: [-87.6764, 41.8520],
    year: 1951,
    chapter: 6,
    description: "First home in America. Slovenian community welcomed the family.",
    type: "home"
  },
  {
    id: "ftleonardwood",
    name: "Fort Leonard Wood, Missouri",
    coordinates: [-92.1297, 37.7131],
    year: 1953,
    chapter: 7,
    description: "Army basic training. 'A very miserable eight weeks.'",
    type: "military"
  },
  {
    id: "ftknox",
    name: "Fort Knox, Kentucky",
    coordinates: [-85.9565, 37.8910],
    year: 1953,
    chapter: 7,
    description: "Radio communications training.",
    type: "military"
  },
  {
    id: "korea",
    name: "Seoul, South Korea",
    coordinates: [126.9780, 37.5665],
    year: 1954,
    chapter: 7,
    description: "Military service. Anti-aircraft battalion at Air Force base north of Seoul.",
    type: "military"
  },
  {
    id: "tokyo",
    name: "Camp Drake, Tokyo, Japan",
    coordinates: [139.6998, 35.7796],
    year: 1954,
    chapter: 7,
    description: "Military service. Became US citizen here. Won car in raffle.",
    type: "military"
  },
  {
    id: "nagoya",
    name: "Nagoya, Japan",
    coordinates: [136.9066, 35.1815],
    year: 1955,
    chapter: 7,
    description: "Final military posting before returning to USA.",
    type: "military"
  },
  {
    id: "franklinpark",
    name: "Franklin Park, Illinois",
    coordinates: [-87.8656, 41.9314],
    year: 1959,
    chapter: 8,
    description: "Family home from 1959. Raised three children here.",
    type: "home"
  }
];

export const journeySegments: JourneySegment[] = [
  {
    id: "childhood",
    name: "Childhood in Slovenia",
    locations: ["ljubljana", "vizmarje"],
    years: "1930-1946",
    color: "#4A7C59",
    focusRegion: {
      center: [14.5, 46.1],
      zoom: 9,
      description: "Central Slovenia"
    }
  },
  {
    id: "displacement",
    name: "Deportation & Refugee Years",
    locations: ["vizmarje", "maribor", "kellerberg", "velden"],
    years: "1946-1951",
    color: "#8B4513",
    focusRegion: {
      center: [14.2, 46.5],
      zoom: 7.5,
      description: "Slovenia & Southern Austria"
    }
  },
  {
    id: "immigration",
    name: "Journey to America",
    locations: ["velden", "bremerhaven", "newyork", "chicago"],
    years: "1951",
    color: "#2E5090",
    focusRegion: {
      center: [-74.0, 40.7],
      zoom: 10,
      description: "New York Harbor — Arrival in America"
    },
    subRegions: [
      {
        id: "departure",
        name: "Departure from Europe",
        center: [8.5, 53.5],
        zoom: 8,
        locations: ["bremerhaven"]
      },
      {
        id: "arrival",
        name: "Arrival in America",
        center: [-76, 40],
        zoom: 5,
        locations: ["newyork", "chicago"]
      }
    ]
  },
  {
    id: "military",
    name: "Military Service",
    locations: ["chicago", "ftleonardwood", "ftknox", "korea", "tokyo", "nagoya", "chicago"],
    years: "1953-1955",
    color: "#5C5346",
    focusRegion: {
      center: [133, 36],
      zoom: 4.5,
      description: "Korea & Japan — Overseas Service"
    },
    subRegions: [
      {
        id: "training",
        name: "Basic & Radio Training",
        center: [-88, 39],
        zoom: 5,
        locations: ["chicago", "ftleonardwood", "ftknox"]
      },
      {
        id: "overseas",
        name: "Korea & Japan",
        center: [133, 36],
        zoom: 4.5,
        locations: ["korea", "tokyo", "nagoya"]
      }
    ]
  },
  {
    id: "settlement",
    name: "Building a Life",
    locations: ["chicago", "franklinpark"],
    years: "1955-1992",
    color: "#6B4423",
    focusRegion: {
      center: [-87.8, 41.9],
      zoom: 10,
      description: "Chicago Area"
    }
  }
];

export const locationColors: Record<LocationType, string> = {
  origin: '#C4541A',
  family: '#8B7355',
  home: '#4A7C59',
  detention: '#8B4513',
  refugee: '#8B4513',
  journey: '#2E5090',
  arrival: '#2E5090',
  military: '#5C5346',
  work: '#6B8E7A'
};

export function getLocationById(id: string): MapLocation | undefined {
  return locations.find(loc => loc.id === id);
}

export function getLocationsForSegment(segmentId: string): MapLocation[] {
  const segment = journeySegments.find(s => s.id === segmentId);
  if (!segment) return [];
  return segment.locations
    .map(id => getLocationById(id))
    .filter((loc): loc is MapLocation => loc !== undefined);
}

export function getChapterSlugForChapter(chapterNum: number): string {
  const slugs = [
    'origins-and-family-roots',
    'childhood-in-vizmarje',
    'war-and-occupation',
    'communist-takeover-and-loss',
    'refugee-years',
    'journey-to-america',
    'building-a-new-life',
    'family-and-career'
  ];
  return slugs[chapterNum - 1] || slugs[0];
}

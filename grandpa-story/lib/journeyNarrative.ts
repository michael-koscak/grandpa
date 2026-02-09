// Narrative content for each journey segment - provides context on the map

export interface JourneyNarrative {
  id: string;
  title: string;
  period: string;
  summary: string;
  details: string;
  keyEvents: string[];
  chapterLink: {
    chapter: number;
    slug: string;
    title: string;
  };
}

export const journeyNarratives: Record<string, JourneyNarrative> = {
  childhood: {
    id: 'childhood',
    title: 'Childhood in Slovenia',
    period: '1930–1946',
    summary: 'Born in Ljubljana, raised in the village of Vizmarje',
    details: `Mark was born in Ljubljana, the capital of Slovenia, in 1930. When he was about four years old, the family moved to the village of Vizmarje, about 10 kilometers from the city. His father ran a leather goods business there, and Mark attended school in nearby St. Vid, walking half an hour each way.`,
    keyEvents: [
      '1930 — Born in Ljubljana',
      '1935 — Family moves to Vizmarje',
      '1937 — Starts school in St. Vid',
      '1941 — War reaches Slovenia',
    ],
    chapterLink: {
      chapter: 2,
      slug: 'childhood-in-vizmarje',
      title: 'Childhood in Vizmarje',
    },
  },
  displacement: {
    id: 'displacement',
    title: 'Deportation & Refugee Years',
    period: '1946–1951',
    summary: 'Arrested, deported, and five years as refugees in Austria',
    details: `After the communist takeover in 1945, Mark's father was arrested and died in prison. In January 1946, the secret police came at night and deported the remaining family—mother and three children—to Austria. They spent five years in the Kellerberg Displaced Persons Camp, waiting for a country to accept them.`,
    keyEvents: [
      '1945 — Father arrested and dies',
      'January 1946 — Family deported',
      '1946 — Arrive at Kellerberg DP Camp',
      '1949–51 — Mark works at British Army hotel',
    ],
    chapterLink: {
      chapter: 5,
      slug: 'refugee-years',
      title: 'Refugee Years',
    },
  },
  immigration: {
    id: 'immigration',
    title: 'Journey to America',
    period: '1951',
    summary: 'Across the Atlantic to New York, then by train to Chicago',
    details: `In August 1951, the family finally received approval to immigrate to the USA, sponsored by the Catholic Relief Organization. They traveled to Bremerhaven, Germany, and boarded the USS General Muir. After 7-8 days at sea—including a bad storm—they arrived in New York Harbor, "awed by the size of the city." The Salvation Army greeted them with coffee and doughnuts, then they boarded a train to Chicago, where they knew no one.`,
    keyEvents: [
      'August 1951 — Depart Bremerhaven',
      '7-8 days at sea on USS General Muir',
      'Arrive New York Harbor',
      'Train to Chicago — first home in America',
    ],
    chapterLink: {
      chapter: 6,
      slug: 'journey-to-america',
      title: 'Journey to America',
    },
  },
  military: {
    id: 'military',
    title: 'Military Service',
    period: '1953–1955',
    summary: 'Drafted into the U.S. Army — Missouri, Kentucky, Korea, Japan',
    details: `In November 1953, Mark was drafted into the U.S. Army. He did basic training at Fort Leonard Wood ("a very miserable eight weeks"), then radio communications training at Fort Knox. His unit was split alphabetically—A-J to Germany, K-Z to Korea. Mark went to Korea, where he spent five months at an Air Force base north of Seoul. He was then transferred to Camp Drake in Tokyo, where he became a U.S. citizen and won a car in a raffle.`,
    keyEvents: [
      'November 1953 — Drafted',
      'Basic training at Fort Leonard Wood',
      '1954 — Five months in Korea',
      '1954 — Becomes U.S. citizen in Tokyo',
      'September 1955 — Released from Army',
    ],
    chapterLink: {
      chapter: 7,
      slug: 'building-a-new-life',
      title: 'Building a New Life',
    },
  },
  settlement: {
    id: 'settlement',
    title: 'Building a Life',
    period: '1955–1992',
    summary: 'Marriage, family, and the American dream in Chicago',
    details: `After the Army, Mark returned to Chicago and married Wally Tiedmann in January 1956. They lived in city apartments before purchasing their home in Franklin Park in 1959. Mark worked for the Navy, then the FAA, retiring after 36 years of federal service. They raised three children—Mark, Jane, and Ed—and by 1992 had their first grandchild.`,
    keyEvents: [
      'January 1956 — Marries Wally',
      'January 1959 — Buys home in Franklin Park',
      '1962 — Starts working for U.S. Navy',
      '1973 — Joins the FAA',
      '1992 — First grandchild born',
    ],
    chapterLink: {
      chapter: 8,
      slug: 'family-and-career',
      title: 'Family & Career',
    },
  },
};

// Map chapter numbers to relevant journey segments
export const chapterToSegments: Record<number, string[]> = {
  1: ['childhood'], // Origins - show Slovenia
  2: ['childhood'], // Childhood in Vizmarje
  3: ['childhood', 'displacement'], // War & Occupation - transition period
  4: ['displacement'], // Communist Takeover - deportation
  5: ['displacement'], // Refugee Years
  6: ['immigration'], // Journey to America
  7: ['military'], // Building a New Life (includes military)
  8: ['settlement'], // Family & Career
};

// Get narrative for a segment
export function getNarrative(segmentId: string): JourneyNarrative | undefined {
  return journeyNarratives[segmentId];
}

// Get all relevant locations for a chapter
export function getChapterLocations(chapterNum: number): string[] {
  const segments = chapterToSegments[chapterNum] || [];
  const locationSet = new Set<string>();
  
  // Import would create circular dependency, so we define segment locations here
  const segmentLocations: Record<string, string[]> = {
    childhood: ['ljubljana', 'vizmarje'],
    displacement: ['vizmarje', 'maribor', 'kellerberg', 'velden'],
    immigration: ['velden', 'bremerhaven', 'newyork', 'chicago'],
    military: ['chicago', 'ftleonardwood', 'ftknox', 'korea', 'tokyo', 'nagoya'],
    settlement: ['chicago', 'franklinpark'],
  };
  
  segments.forEach(segId => {
    segmentLocations[segId]?.forEach(loc => locationSet.add(loc));
  });
  
  return Array.from(locationSet);
}

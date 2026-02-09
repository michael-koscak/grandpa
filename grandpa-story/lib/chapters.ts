export interface Chapter {
  slug: string;
  title: string;
  subtitle: string;
  yearRange: string;
  number: number;
}

export const chapters: Chapter[] = [
  {
    slug: 'origins-and-family-roots',
    title: 'Origins & Family Roots',
    subtitle: 'Birth in Ljubljana and the stories of two families in the dying Austro-Hungarian Empire',
    yearRange: '1904–1935',
    number: 1,
  },
  {
    slug: 'childhood-in-vizmarje',
    title: 'Childhood in Vizmarje',
    subtitle: 'A village home, school days, and the leather goods business',
    yearRange: '1935–1941',
    number: 2,
  },
  {
    slug: 'war-and-occupation',
    title: 'War & Occupation',
    subtitle: 'The world at war reaches Slovenia—Italian soldiers, German schools, and civil conflict',
    yearRange: '1941–1945',
    number: 3,
  },
  {
    slug: 'communist-takeover-and-loss',
    title: 'Communist Takeover & Loss',
    subtitle: 'The new regime, a father\'s arrest, and the night everything changed',
    yearRange: '1945–1946',
    number: 4,
  },
  {
    slug: 'refugee-years',
    title: 'Refugee Years',
    subtitle: 'Five years in an Austrian displaced persons camp, waiting for a new home',
    yearRange: '1946–1951',
    number: 5,
  },
  {
    slug: 'journey-to-america',
    title: 'Journey to America',
    subtitle: 'Across the Atlantic to New York Harbor and the train to Chicago',
    yearRange: '1951',
    number: 6,
  },
  {
    slug: 'building-a-new-life',
    title: 'Building a New Life',
    subtitle: 'First jobs, night school, military service, and meeting the girl of his dreams',
    yearRange: '1951–1956',
    number: 7,
  },
  {
    slug: 'family-and-career',
    title: 'Family & Career',
    subtitle: 'Marriage, children, grandchildren, and the American dream fulfilled',
    yearRange: '1956–1999',
    number: 8,
  },
];

export function getChapterBySlug(slug: string): Chapter | undefined {
  return chapters.find(c => c.slug === slug);
}

export function getAdjacentChapters(slug: string): { prev?: Chapter; next?: Chapter } {
  const index = chapters.findIndex(c => c.slug === slug);
  return {
    prev: index > 0 ? chapters[index - 1] : undefined,
    next: index < chapters.length - 1 ? chapters[index + 1] : undefined,
  };
}

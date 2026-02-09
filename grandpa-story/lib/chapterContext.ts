// Historical context and annotations for each chapter
// This data would eventually be expanded for all chapters

export interface ContextContent {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
  type: 'history' | 'geography' | 'culture' | 'person';
  sources?: { name: string; url?: string }[];
  imageUrl?: string;
  imageCaption?: string;
  // Where to show this in the chapter (after which paragraph index)
  afterParagraph: number;
}

export interface AnnotationData {
  term: string;
  definition: string;
  type: 'place' | 'term' | 'person' | 'event' | 'date';
  year?: string;
}

export interface HistoricalPhotoData {
  id: string;
  title: string;
  imageUrl: string;
  caption: string;
  credit?: string;
  year?: string;
  sourceUrl?: string;
  afterParagraph: number;
}

export interface InlineMapData {
  id: string;
  locationIds: string[];
  title?: string;
  description?: string;
  afterParagraph: number;
  // Optional display hints for better inline rendering
  center?: [number, number];
  zoom?: number;
  lineColor?: string;
  segmentId?: string;
}

export interface ChapterContextData {
  contextCards: ContextContent[];
  annotations: Record<string, AnnotationData>;
  photos?: HistoricalPhotoData[];
  inlineMaps?: InlineMapData[];
}

// Chapter 4: Communist Takeover & Loss (1945-1946)
export const chapter4Context: ChapterContextData = {
  contextCards: [
    {
      id: 'postwar-killings-slovenia',
      title: 'Post-War Killings in Slovenia (1945)',
      subtitle: 'Communist Repression',
      content: `After the communist Partisans took power in May 1945, Yugoslavia was rocked by a wave of extrajudicial killings and mass repression. In Slovenia alone, an estimated 15,000 people – military and civilian opponents of the new regime – were killed without trial in mid-1945. Many prisoners of war who had surrendered (or were repatriated from Austria) were executed en masse at hidden sites like Kočevski Rog, where thousands of Home Guard soldiers were massacred in late May 1945. Others, like Mark's father, perished in communist-run concentration camps or prisons due to deliberate starvation, beatings, and abuse. The communist secret police (OZNA) directed these purges, operating with great secrecy. For decades, the authorities concealed these crimes – forbidding any public mention of the victims and denying families like Mark's any information or grave for their loved ones. Only long after Slovenia's independence were these post-war atrocities openly acknowledged and memorialized.`,
      type: 'history',
      sources: [
        { name: 'Government of Slovenia - Post-war Extrajudicial Killings', url: 'https://www.gov.si/en/news/2025-07-01-few-surviving-written-traces-of-the-post-war-extrajudicial-killings/' }
      ],
      afterParagraph: 1,
    },
    {
      id: 'mass-deportations-yugoslavia',
      title: 'Mass Deportations from Yugoslavia (1945–46)',
      subtitle: 'Ethnic Cleansing',
      content: `In the aftermath of WWII, Yugoslavia's new government expelled huge numbers of people deemed undesirable or "enemies." The largest group were the ethnic Germans (Volksdeutsche) of Yugoslavia. In late 1944, Tito's authorities decided to confiscate German property and deport the German minority en masse. By one estimate, of about 524,000 pre-war ethnic Germans in Yugoslavia, roughly 370,000 either fled or were expelled to Austria and Germany by 1946. About 50,000 ethnic German civilians perished in brutal internment camps due to starvation, disease, or execution before the survivors were finally transferred out. Mark's family, though not ethnic German, was swept up in this climate of ethnic and political cleansing. In early 1946, they were forced from their home and pressured to claim German ancestry so that British-occupied Austria would accept them as refugees. Thanks to Mark's mother's German language skills, his family gained entry into Austria, where they lived as Displaced Persons rather than face further persecution in Yugoslavia.`,
      type: 'history',
      sources: [
        { name: 'Wikipedia - Germans of Yugoslavia', url: 'https://en.wikipedia.org/wiki/Germans_of_Yugoslavia' }
      ],
      afterParagraph: 3,
    },
  ],
  photos: [
    {
      id: 'bleiburg-surrender',
      title: 'Surrender and Capture at Bleiburg (May 1945)',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Kolona_Usta%C5%A1ev_in_hrva%C5%A1kih_beguncev_blizu_Pliberka.jpg',
      caption: 'Crowds of retreating Axis-aligned soldiers and civilians were halted by British forces near Bleiburg in May 1945 and forced to surrender to Tito\'s Partisans. In the ensuing post-war reprisals, thousands were executed without trial. The chaotic scene at Bleiburg became a grim prelude to the tragedy that befell Mark\'s father and many others.',
      credit: 'Wikimedia Commons',
      year: '1945',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Kolona_Usta%C5%A1ev_in_hrva%C5%A1kih_beguncev_blizu_Pliberka.jpg',
      afterParagraph: 0,
    },
    {
      id: 'slovenian-refugee-convoy',
      title: 'Slovenian Refugee Convoy to Carinthia (May 1945)',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Begunci_na_poti_na_Koro%C5%A1ko.jpg',
      caption: 'Slovene civilians fleeing toward Carinthia in May 1945. Using carts and wagons piled with possessions, these refugee families left their homes amid the upheaval of the communist takeover. Mark\'s family would similarly be uprooted and expelled from Slovenia in 1946.',
      credit: 'Wikimedia Commons',
      year: '1945',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Begunci_na_poti_na_Koro%C5%A1ko.jpg',
      afterParagraph: 2,
    },
    {
      id: 'refugees-deportation-austria',
      title: 'Refugees Awaiting Deportation, Austria 1945',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Italian_refugees_at_Camp_Reichenau%2C_Innsbruck%2C_Austria%2C_on_18_June_1945_%28111-SC-209994%29.jpg',
      caption: 'Displaced families gathered at Camp Reichenau near Innsbruck in June 1945. These refugees, like Mark\'s family, were organized and processed in holding camps before being transported onward, boarding trains to reach safer territory under British or American protection.',
      credit: 'Wikimedia Commons',
      year: '1945',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Italian_refugees_at_Camp_Reichenau,_Innsbruck,_Austria,_on_18_June_1945_(111-SC-209994).jpg',
      afterParagraph: 3,
    },
    {
      id: 'kellerberg-dp-camp',
      title: 'Kellerberg Displaced Persons Camp, 1946',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/BRITISH_FORCES_OF_OCCUPATION_IN_AUSTRIA%2C_1945_-_1947_VIE1314.jpg',
      caption: 'British officers inspect Kellerberg Displaced Persons Camp in Carinthia, Austria (March 1946). Wooden barracks are visible, similar to those Mark\'s family lived in. Under British Army administration, this camp housed around 10,000 displaced people and provided basic shelter for refugee families like Mark\'s, who survived five years here.',
      credit: 'Wikimedia Commons',
      year: '1946',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:BRITISH_FORCES_OF_OCCUPATION_IN_AUSTRIA,_1945_-_1947_VIE1314.jpg',
      afterParagraph: 3,
    },
  ],
  inlineMaps: [
    {
      id: 'detention-ljubljana-maribor',
      locationIds: ['ljubljana', 'maribor'],
      title: 'Detention in Ljubljana and Maribor (1945-46)',
      description: 'Mark\'s family was imprisoned by the secret police in Ljubljana and Maribor for several months in 1945-46 before their deportation. Both cities were sites of detention centers for families deemed hostile to the new communist regime.',
      afterParagraph: 3,
      center: [15.1, 46.3],
      zoom: 7.5,
      lineColor: '#8B4513',
      segmentId: 'displacement',
    },
    {
      id: 'route-austrian-exile',
      locationIds: ['maribor', 'kellerberg'],
      title: 'Route into Austrian Exile (1946)',
      description: 'After months in detention, Mark\'s family was deported by train from Maribor across the border to Kellerberg in Carinthia (British Occupation Zone). This displaced persons camp near Villach became their home in exile for the next five years.',
      afterParagraph: 3,
      center: [14.4, 46.55],
      zoom: 7,
      lineColor: '#8B4513',
      segmentId: 'displacement',
    },
  ],
  annotations: {
    'communists': {
      term: 'Yugoslav Communists',
      definition: 'The Communist Party of Yugoslavia, led by Josip Broz Tito, which came to power in 1945 after liberating the country from Axis occupation.',
      type: 'term',
      year: '1945',
    },
    'new regime': {
      term: 'Tito\'s Communist Government',
      definition: 'The post-war Yugoslav government led by Josip Broz Tito. It conducted widespread purges of perceived enemies, including mass arrests and executions of suspected collaborators, political opponents, and anti-communists.',
      type: 'event',
      year: '1945',
    },
    'political prisoners': {
      term: 'Political Prisoners',
      definition: 'People imprisoned for their political beliefs, associations, or perceived opposition to the communist regime. Many were held without trial, starved, tortured, and executed. Mark\'s father was among thousands arrested in the immediate post-war period.',
      type: 'term',
    },
    'secret police': {
      term: 'OZNA (Yugoslav Secret Police)',
      definition: 'The Department for the Protection of the People (OZNA) was Yugoslavia\'s secret police and intelligence agency from 1944-1946. It conducted mass arrests, operated prison camps, and carried out extrajudicial killings.',
      type: 'term',
      year: '1944-1946',
    },
    'German descent': {
      term: 'Volksdeutsche',
      definition: 'Ethnic Germans living in Yugoslavia. After WWII, Yugoslav authorities treated the German minority as traitors and expelled most of them. Roughly 370,000 were expelled to Austria and Germany by 1946.',
      type: 'term',
    },
    'British forces': {
      term: 'British Occupation Zone',
      definition: 'After WWII, Austria was divided into Allied occupation zones. Carinthia and Styria in the south (including Kellerberg camp) fell under British control, where British authorities processed and resettled refugees.',
      type: 'place',
      year: '1945-1955',
    },
    'Kellerberg Displaced Persons Camp': {
      term: 'Kellerberg DP Camp',
      definition: 'A displaced persons camp in the British occupation zone of Austria, near Villach in Carinthia. Around 10,000 refugees from Yugoslavia and other countries lived here while awaiting resettlement to new countries.',
      type: 'place',
      year: '1945-1951',
    },
    'Ljubljana': {
      term: 'Ljubljana',
      definition: 'The capital and largest city of Slovenia. After the war, it became part of the Socialist Federal Republic of Yugoslavia. The Koscak family was detained here before deportation.',
      type: 'place',
    },
    'Maribor': {
      term: 'Maribor',
      definition: 'Slovenia\'s second-largest city, located in the northeast near the Austrian border. The Koscak family was held here in detention for several months before being deported to Austria.',
      type: 'place',
    },
    'Austria': {
      term: 'Allied-occupied Austria',
      definition: 'After WWII, Austria was divided into four Allied occupation zones (American, British, French, and Soviet). Mark\'s family was deported to the British zone in southern Austria.',
      type: 'place',
      year: '1945-1955',
    },
  },
};

// Chapter 8: Family and Career (1956-1995)
export const chapter8Context: ChapterContextData = {
  contextCards: [
    {
      id: 'postwar-american-dream',
      title: 'Postwar American Dream: Suburbs and Homeownership',
      subtitle: 'The 1950s Dream',
      content: `In the late 1940s and 1950s, many Americans pursued a new postwar "American Dream" of stable jobs, marriage, and homeownership. VA and FHA loans made it possible for returning veterans to buy houses: about 2.4 million veterans purchased homes with government-backed loans in the early 1950s. Economic growth tripled the national output by the mid-1950s, giving "average Americans" unprecedented financial security.

Suburbs grew rapidly to meet demand. Planned communities like Levittown exemplified the era's housing boom. By 1954, the 30-year mortgage was authorized nationwide, fueling a real-estate expansion. Franklin Park followed this trend: in 1959 Mark and Wally bought a new ranch house there, joining the same suburban expansion sweeping the nation.`,
      type: 'culture',
      sources: [
        { name: 'Wikipedia - American Dream', url: 'https://en.wikipedia.org/wiki/American_Dream' }
      ],
      afterParagraph: 0,
    },
    {
      id: 'chicago-suburbs-1950s-60s',
      title: 'Chicago\'s 1950s-60s Suburbs',
      subtitle: 'Suburban Expansion',
      content: `Chicago's northwest suburbs expanded dramatically in the 1950s and 1960s. Franklin Park, IL (northwest of Chicago) grew from 8,899 people in 1950 to 18,322 in 1960. Nearby communities (Northlake, Melrose Park, etc.) saw similar growth. Affordable new homes, roads, and jobs attracted city workers seeking suburban life.

These suburbs typically featured single-family homes on gridded streets, along with local schools and parks. In Leyden Township (Franklin Park and Northlake), the local high school (East Leyden) educated thousands of students. Mark's family joined this migration, exchanging city housing for the modern comforts of suburban Franklin Park in 1959.`,
      type: 'culture',
      sources: [
        { name: 'Wikipedia - Franklin Park, Illinois', url: 'https://en.wikipedia.org/wiki/Franklin_Park,_Illinois' }
      ],
      afterParagraph: 0,
    },
    {
      id: 'federal-civil-service',
      title: 'Federal Civil Service Careers',
      subtitle: 'Government Employment',
      content: `After WWII, federal civil service jobs became a pathway to middle-class stability. Government employment grew to 3.5 million by 1945 (during the war) and stayed around 2.5 million in the 1950s. By 1955, about 90% of federal workers were in a competitive, merit-based civil service system, offering job security. These jobs provided regular pay, pensions, and benefits.

For many immigrant and veteran families, civil service work was attractive. The federal bureaucracy was seen as stable and prestigious. Mark's long career with the FAA (the U.S. agency regulating air travel) exemplifies this: it provided steady income and benefits that supported his family through the Cold War era.`,
      type: 'history',
      sources: [
        { name: 'Wikipedia - United States Federal Civil Service', url: 'https://en.wikipedia.org/wiki/United_States_federal_civil_service' }
      ],
      afterParagraph: 4,
    },
    {
      id: 'catholic-parish-life',
      title: 'Catholic Parish Life in the Suburbs',
      subtitle: 'Faith and Community',
      content: `For mid-20th-century immigrant families, the Catholic parish was the social and spiritual center of community life. After WWII, many urban ethnic neighborhoods "broke down" as Catholics moved into the suburbs. Parishes followed, with dioceses building new churches and schools for the growing suburban population.

Parish life included weekly Mass, sacraments, and social events. Children typically attended CCD religious-education classes (weekly after school) to learn their faith. In Mark's family, St. Stephen's in Chicago provided community and continuity of faith, tying them to cultural traditions while they assimilated into American life.`,
      type: 'culture',
      sources: [
        { name: 'Wikipedia - Catholic Parish', url: 'https://en.wikipedia.org/wiki/Catholic_parish' }
      ],
      afterParagraph: 5,
    },
  ],
  photos: [
    {
      id: 'admiral-advertisement',
      title: 'Admiral Electronics Advertisement (1959)',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Admiral_7-Transistor_Pocket_Radio_Window_Sales_Poster%2C_Distributed_to_Dealers_in_August_1959_%288476734361%29.jpg',
      caption: 'Admiral Corporation was a major Chicago-area electronics company. This 1959 sales poster for an Admiral transistor radio reflects the 1950s consumer electronics boom. Mark worked at Admiral early in his career, connecting him to this era\'s radio and TV industry.',
      credit: 'Wikimedia Commons',
      year: '1959',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Admiral_7-Transistor_Pocket_Radio_Window_Sales_Poster,_Distributed_to_Dealers_in_August_1959_(8476734361).jpg',
      afterParagraph: 0,
    },
    {
      id: 'niu-altgeld-hall',
      title: 'Altgeld Hall, Northern Illinois University (DeKalb, IL)',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Altgeld_Hall-1st_bldg_on_campus_ever.JPG',
      caption: 'Altgeld Hall (center) is the oldest building on Northern Illinois University\'s campus in DeKalb, Illinois. NIU expanded greatly in the mid-20th century to serve a growing middle-class student population. For suburban Chicago families like Mark\'s, the expansion of state universities made college education possible for children of immigrants.',
      credit: 'Wikimedia Commons',
      year: '2005',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Altgeld_Hall-1st_bldg_on_campus_ever.JPG',
      afterParagraph: 5,
    },
  ],
  inlineMaps: [
    {
      id: 'chicago-home-work',
      locationIds: ['franklinpark'],
      title: 'Franklin Park — The Family Home',
      description: 'In 1959, Mark and Wally purchased their home at 3629 Scott Street in Franklin Park, IL. This northwest Chicago suburb became the center of family life for over 35 years. Mark worked for the U.S. Navy, then the FAA, building a 36-year federal career.',
      afterParagraph: 4,
      center: [-87.86, 41.93],
      zoom: 10.5,
      lineColor: '#6B4423',
      segmentId: 'settlement',
    },
  ],
  annotations: {
    'St. Stephen\'s Church': {
      term: 'St. Stephen\'s Church (Chicago)',
      definition: 'A Roman Catholic parish in Chicago where Mark and Wally were married on January 7, 1956. Neighborhood parishes like St. Stephen\'s played key roles for immigrant families, hosting weddings, baptisms, and community events.',
      type: 'place',
    },
    'Franklin Park': {
      term: 'Franklin Park, Illinois',
      definition: 'A village in Cook County, Illinois, northwest of Chicago. Its population surged from 8,899 in 1950 to 18,322 in 1960 as farmland turned into suburban housing. Mark and Wally bought their first home there in 1959.',
      type: 'place',
    },
    'Motorola': {
      term: 'Motorola',
      definition: 'A major electronics company based in the Chicago area. It opened a large television assembly plant in Franklin Park in 1947 and became a leading maker of radios, TVs, and air-traffic-control technology.',
      type: 'term',
    },
    'Admiral T.V. Company': {
      term: 'Admiral Corporation',
      definition: 'A major Chicago-area appliance and electronics company founded in 1934. Admiral produced consumer goods like televisions and radios, employing thousands in Illinois during the postwar electronics boom.',
      type: 'term',
    },
    'Naval Ordnance Plant': {
      term: 'Naval Ordnance Station, Forest Park',
      definition: 'A U.S. Navy factory in Forest Park, Illinois that built torpedoes during and after WWII. Founded in 1942, it employed up to 6,500 workers and produced 19,000 torpedoes before closing in 1971.',
      type: 'place',
    },
    'FAA': {
      term: 'Federal Aviation Administration (FAA)',
      definition: 'The U.S. federal agency that oversees civil aviation and air traffic control. Mark worked at the FAA from 1973 to 1995, providing his family with stability and retirement benefits.',
      type: 'term',
    },
    'East Leyden High School': {
      term: 'East Leyden High School',
      definition: 'The public high school in Franklin Park, Illinois, serving Leyden Township communities. It opened in 1911. All three of Mark\'s children attended East Leyden, showing the family\'s integration into the local community.',
      type: 'place',
    },
    'Northern Illinois University': {
      term: 'Northern Illinois University (NIU)',
      definition: 'A public university in DeKalb, Illinois, founded in 1895. NIU\'s expansion in the mid-20th century reflects the boom in higher education as more Americans from immigrant backgrounds accessed college degrees.',
      type: 'place',
    },
    'Maria Goretti Catholic Church': {
      term: 'Maria Goretti Catholic Church',
      definition: 'A Catholic parish in Schiller Park, Illinois where Mark\'s family attended Mass and the children received religious education through CCD classes.',
      type: 'place',
    },
    'CCD classes': {
      term: 'CCD Classes (Confraternity of Christian Doctrine)',
      definition: 'The Catholic Church\'s religious education program for children. CCD classes teach the fundamentals of the faith and prepare children for sacraments like First Communion and Confirmation.',
      type: 'term',
    },
    'federal civil service': {
      term: 'Federal Civil Service',
      definition: 'The permanent professional workforce of the federal government. Civil service positions offered steady salaries, pensions, and job security, helping build a secure middle-class career path for immigrants and veterans.',
      type: 'term',
    },
  },
};

// Chapter 7: Building a New Life (1951-1955)
export const chapter7Context: ChapterContextData = {
  contextCards: [
    {
      id: 'chicago-manufacturing-boom',
      title: 'Chicago\'s Manufacturing Boom (1950s)',
      subtitle: 'Industrial Opportunities',
      content: `After World War II, Chicago became a manufacturing powerhouse. By 1950 the city produced about one twentieth of the U.S. manufacturing output, and over a third of its employed residents worked in factories. Industries ranged from steel and machinery to candy and printing, providing thousands of jobs.

This booming industry offered steady employment for many working-class families and immigrants. New Americans often took factory jobs or apprenticed in trades. Technical schools and unions helped workers advance. Many veterans and immigrants used these opportunities to earn stable wages, support families, and pursue the "American Dream."`,
      type: 'history',
      sources: [
        { name: 'Chicago Design Stories - Postwar Industrial Metamorphosis', url: 'https://www.chicagodesignstories.com/post/chicago-s-postwar-industrial-metamorphosis' }
      ],
      afterParagraph: 0,
    },
    {
      id: 'television-industry-1950s',
      title: 'Television Industry in the 1950s',
      subtitle: 'Electronics Revolution',
      content: `Television exploded as a consumer product in the 1950s. In 1950 only about 9% of U.S. households had a TV, but by 1959 that number rose to 85.9%. Chicago-area companies were key players: Admiral (a Chicago firm) began selling TVs in 1948 and by 1949 was producing about 15,000 sets per day – nearly a quarter of the national market. Motorola (then Galvin) opened a TV plant in Franklin Park, IL in 1947 and later created the first all-transistor TV.

This boom drove huge demand for electronics workers and technicians. Factories and repair shops needed skilled labor. Working as a TV technician or assembly-line worker became a promising, modern career for many in the 1950s.`,
      type: 'history',
      sources: [
        { name: 'Illinois History & Lincoln Collections - Motorola', url: 'https://publish.illinois.edu/ihlc-blog/2018/05/19/motorola/' }
      ],
      afterParagraph: 0,
    },
    {
      id: 'devry-technical-education',
      title: 'Technical Education: DeVry Institute',
      subtitle: 'Vocational Training',
      content: `After WWII, vocational schools helped veterans and immigrants gain technical skills. The DeVry Institute of Technology in Chicago was a pioneering example. DeVry (originally De Forest Training School) opened its Chicago technical institute in 1953. By 1955, it offered accredited programs in electronics engineering technology, preparing students for careers in radio and TV industries.

Schools like DeVry provided practical, career-oriented training. Many returning servicemen and immigrant workers attended evening classes to learn electronics, radio, and other trades. These programs, often GI Bill-approved, enabled students like Mark to become skilled technicians and move into skilled middle-class jobs.`,
      type: 'culture',
      sources: [
        { name: 'Immigrant Entrepreneurship - Herman Adolf DeVry', url: 'https://www.immigrantentrepreneurship.org/entries/herman-adolf-devry/' }
      ],
      afterParagraph: 0,
    },
    {
      id: 'korean-armistice-us-forces',
      title: 'Korean Armistice and U.S. Forces in Asia',
      subtitle: 'Postwar Military Presence',
      content: `The Korean War ended in a July 27, 1953 armistice, but no peace treaty was signed. This meant the two Koreas remained technically at war. U.S. and UN forces stayed in South Korea to guard the ceasefire line. In 1957 the remaining American troops were officially organized as United States Forces Korea to defend against renewed conflict.

Many U.S. troops (including Mark) were then stationed in Japan. Although Allied occupation of Japan ended in 1952, the U.S. kept military bases there under a security pact. For example, Camp Drake (near Tokyo) housed elements of the U.S. 1st Cavalry Division through the 1950s. Serving in Korea and Japan also allowed foreign-born soldiers to seek expedited U.S. citizenship while in uniform.`,
      type: 'history',
      sources: [
        { name: 'UNC Command - Post-1953 Evolution', url: 'https://www.unc.mil/History/Post-1953-Evolution-of-UNC/' }
      ],
      afterParagraph: 3,
    },
  ],
  photos: [
    {
      id: 'chicago-rug-factory',
      title: 'Chicago Rug Factory Loom (ca. 1950)',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Workman_operating_an_industrial_loom_strung_with_hundreds_of_wool_threads_at_Chicago%27s_Olsen_Rug_Company%2C_ca._1950_-_NARA_-_535920.jpg',
      caption: 'A man operating a rug loom at the Olsen Rug Company in Chicago around 1950. In Chicago\'s 1950s manufacturing boom, workers like Mark ran machines in factories building everything from trailers to electronics.',
      credit: 'Wikimedia Commons',
      year: '1950',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Workman_operating_an_industrial_loom_strung_with_hundreds_of_wool_threads_at_Chicago%27s_Olsen_Rug_Company,_ca._1950_-_NARA_-_535920.jpg',
      afterParagraph: 0,
    },
    {
      id: 'korea-tank-1952',
      title: 'U.S. Tank and Air Controller in Korea (1952)',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/USAF_forward_air_controller_with_US_Army_M46_tank_during_Korean_War_(1950%E2%80%931953).jpg',
      caption: 'U.S. soldiers with an M46 Patton tank in Korea (early 1950s). The Korean War armistice of July 1953 halted fighting, but U.S. troops remained stationed there as a peacekeeping force.',
      credit: 'Wikimedia Commons',
      year: '1952',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:USAF_forward_air_controller_with_US_Army_M46_tank_during_Korean_War_(1950%E2%80%931953).jpg',
      afterParagraph: 4,
    },
    {
      id: 'japan-rickshaw',
      title: 'U.S. Soldier with Rickshaw in Occupied Japan (c.1945)',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/A_female_US_soldier_on_a_Japanese_rickshaw_in_occupied_Japan.png',
      caption: 'An American soldier rides a Japanese rickshaw during the U.S. occupation of Japan (circa 1945). This reflects the large American military presence in post-war Japan where Mark was stationed.',
      credit: 'Wikimedia Commons',
      year: '1945',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:A_female_US_soldier_on_a_Japanese_rickshaw_in_occupied_Japan.png',
      afterParagraph: 6,
    },
  ],
  inlineMaps: [
    {
      id: 'army-training-camps',
      locationIds: ['chicago', 'ftleonardwood', 'ftknox'],
      title: 'Army Training Camps',
      description: 'Mark\'s U.S. Army training route: from Chicago to Fort Leonard Wood, Missouri (basic training — "a very miserable eight weeks") and then to Fort Knox, Kentucky (radio communications training).',
      afterParagraph: 3,
      center: [-88, 39.5],
      zoom: 4.5,
      lineColor: '#5C5346',
      segmentId: 'military',
    },
    {
      id: 'korea-japan-service',
      locationIds: ['korea', 'tokyo', 'nagoya'],
      title: 'Service in Korea and Japan',
      description: 'Overseas service locations: a U.S. base in Korea (post-armistice, near Seoul) and two locations in Japan – Camp Drake outside Tokyo, and a U.S. post near Nagoya where Mark became a U.S. citizen.',
      afterParagraph: 6,
      center: [133, 36],
      zoom: 4,
      lineColor: '#5C5346',
      segmentId: 'military',
    },
  ],
  annotations: {
    'Hines Lumber company': {
      term: 'Hines Lumber Company',
      definition: 'A lumber and building materials company in Chicago where Mark\'s first job in America was lugging doors. He only worked there one day before finding better employment.',
      type: 'term',
    },
    'Glider Trailer Company': {
      term: 'Glider Trailer Company',
      definition: 'A manufacturer of travel trailers (mobile homes) based near Chicago. Founded in 1932, it became one of the largest U.S. trailer makers in the 1940s–50s.',
      type: 'term',
    },
    'De Vry\'s school': {
      term: 'DeVry Institute',
      definition: 'A technical college in Chicago. Originally De Forest Training School, it was renamed DeVry Technical Institute in 1953. By 1955 it offered associate degrees in electronics engineering technology.',
      type: 'term',
    },
    'Admiral Company': {
      term: 'Admiral Corporation',
      definition: 'A Chicago-based electronics company founded in 1934. It produced radios and phonographs, and after WWII became a leading U.S. TV and appliance maker.',
      type: 'term',
    },
    'Riverview amusement park': {
      term: 'Riverview Park',
      definition: 'A famous Chicago amusement park (1904–1967). In the 1950s it featured dozens of rides and attractions, including the wooden roller coaster "The Bobs" where Mark met Wally.',
      type: 'place',
    },
    'drafted': {
      term: 'U.S. Army Draft',
      definition: 'The government system for conscripting men into military service. During the Korean War period, about 1.5 million Americans were drafted into the armed forces.',
      type: 'term',
      year: '1950-1953',
    },
    'Fort Leonard Wood': {
      term: 'Fort Leonard Wood',
      definition: 'A U.S. Army training base in south-central Missouri, established in 1940. It served as a major training center for infantry and engineers during World War II and the 1950s.',
      type: 'place',
    },
    'Fort Knox': {
      term: 'Fort Knox',
      definition: 'A U.S. Army post in Kentucky (founded 1918). It historically housed the U.S. Army Armor School (for tanks and artillery training), and is also known for the United States Bullion Depository (the national gold vault).',
      type: 'place',
    },
    'Korean war': {
      term: 'Korean War (1950–1953)',
      definition: 'A conflict between North Korea (with Chinese and Soviet backing) and South Korea (supported by UN forces led by the U.S.). It ended in an armistice on July 27, 1953. Over 36,000 Americans died during the war.',
      type: 'event',
      year: '1950-1953',
    },
    'Korea': {
      term: 'Korea (1953–1954)',
      definition: 'The period right after the Korean Armistice. U.S. and UN forces remained in South Korea to oversee the ceasefire line. In 1957, the remaining U.S. troops there were organized as United States Forces Korea (USFK).',
      type: 'place',
    },
    'Camp Drake': {
      term: 'Camp Drake',
      definition: 'A U.S. Army camp near Tokyo (in present-day Asaka, Japan). Known as South Camp Drake from 1945 to 1960, it housed parts of the U.S. 1st Cavalry Division during the occupation and Korean War period.',
      type: 'place',
    },
    'Tokyo': {
      term: 'Tokyo and Nagoya',
      definition: 'Major cities in Japan where U.S. forces were stationed in the 1950s. Tokyo (and nearby Camp Drake) hosted many American military units, while Nagoya was an industrial city that also hosted U.S. military personnel.',
      type: 'place',
    },
    'U.S. citizenship': {
      term: 'U.S. Citizenship (Naturalization)',
      definition: 'The process by which a foreign-born person becomes an American citizen. U.S. law allows non-citizens serving honorably in the military to expedite citizenship; serving during the Korean War qualified an immigrant for accelerated naturalization.',
      type: 'term',
    },
  },
};

// Chapter 6: Journey to America (1951)
export const chapter6Context: ChapterContextData = {
  contextCards: [
    {
      id: 'voyage-general-muir',
      title: 'Voyage on the USS General Muir',
      subtitle: 'Crossing the Atlantic',
      content: `The General C. H. Muir was originally built as a troop transport in World War II, but after the war it was used to carry displaced persons from Europe to new homes abroad. It could accommodate over a thousand passengers on a single voyage. A typical crossing of the Atlantic took about a week, and on each trip the ship brought hundreds or even thousands of refugees to the United States under the International Refugee Organization's resettlement program. Conditions were often crowded, and rough seas could make many passengers seasick, but morale remained high—buoyed by hope and by support from crew and volunteers who provided translations and guidance to help the immigrants on their journey.`,
      type: 'history',
      sources: [
        { name: 'Wikipedia - USS General C. H. Muir', url: 'https://en.wikipedia.org/wiki/USS_General_C._H._Muir' }
      ],
      afterParagraph: 0,
    },
    {
      id: 'bremerhaven-port',
      title: 'Bremerhaven – Postwar Port of Embarkation',
      subtitle: 'Gateway to New Lives',
      content: `After World War II, Bremerhaven (in the American zone of occupied Germany) became one of the most important points of departure for emigration. Displaced persons bound for countries like the United States would spend their final weeks in nearby "staging" camps around Bremen (such as Camp Grohn), where they completed paperwork and took basic language lessons before embarkation. From 1946 to 1952, the International Refugee Organization processed over 500,000 emigration cases through Bremerhaven's port. Huge U.S. transport ships and repurposed liners departed regularly from Bremerhaven's harbor, each carrying hundreds of hopeful refugees across the Atlantic to North America and elsewhere.`,
      type: 'history',
      sources: [
        { name: 'Arolsen Archives - Emigration of Displaced Persons', url: 'https://arolsen-archives.org/en/news/emigration-of-displaced-persons/' }
      ],
      afterParagraph: 0,
    },
    {
      id: 'warm-welcome-new-york',
      title: 'A Warm Welcome in New York',
      subtitle: 'First Impressions',
      content: `Arriving in New York Harbor was a thrilling yet anxious moment for many immigrants. Charitable groups were on hand to offer comfort and practical help right away. The Salvation Army, for example, greeted newcomers with a blanket, hot coffee and doughnuts – literally giving many immigrants their first taste of America. Catholic organizations also took an active role in resettlement. Catholic Relief Services stationed workers at the docks to assist refugee families, often providing a small cash stipend and train tickets to their final destinations. These gestures, though simple, eased the transition by ensuring immigrants had food, a little money in pocket, and guidance for the next leg of their journey.`,
      type: 'culture',
      sources: [
        { name: 'Pier 21 - Catholic Relief Services', url: 'https://www.pier21.ca/research/immigration-history/catholic-relief-services' }
      ],
      afterParagraph: 1,
    },
    {
      id: 'chicago-slovenian-community',
      title: 'Chicago\'s Slovenian Community',
      subtitle: 'Immigrant Networks',
      content: `Chicago in 1951 was a booming industrial city that attracted immigrants from all over Europe with its plentiful factory, steel mill, and stockyard jobs. Immigrant communities formed tight-knit enclaves across the city, providing newcomers with familiar languages, churches, and mutual aid. Slovenians, for example, had established their own community institutions in Chicago decades earlier. By the late 1800s, Slovenian families formed parishes (like St. Stephen's on 22nd Place in the Near West Side) to serve their spiritual and cultural needs. They also organized fraternal benefit societies such as the Slovenian Catholic Union (KSKJ) to offer life insurance, financial help, and social support to Slovenian immigrants. In areas around Cermak Road (22nd Street) and Damen Avenue – historically a Slovene and Czech neighborhood – new arrivals could turn to fellow countrymen for housing, employment leads, and community. The Slovenian-American networks in Chicago often made sure that arriving families would quickly connect with countrymen ready to help them get on their feet.`,
      type: 'culture',
      sources: [
        { name: 'Archdiocese of Chicago Archives - Slovenian Parishes', url: 'https://archives.archchicago.org/photo-exhibit/collection-spotlight-slovenian-parishes' }
      ],
      afterParagraph: 1,
    },
  ],
  photos: [
    {
      id: 'bremerhaven-port',
      title: 'Port of Embarkation at Bremerhaven',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/1958_America_in_Bremerhaven.jpg',
      caption: 'The SS America ocean liner docked at Bremerhaven in 1958. In the postwar era, Bremerhaven\'s port saw countless European refugees and emigrants board ships like this bound for new lives overseas.',
      credit: 'Wikimedia Commons',
      year: '1958',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:1958_America_in_Bremerhaven.jpg',
      afterParagraph: 0,
    },
    {
      id: 'uss-general-muir',
      title: 'USS General Muir Troopship',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/USS_General_C._H._Muir_(AP-142).jpg',
      caption: 'The USS General C. H. Muir, a former U.S. Navy troop transport ship that carried European refugees to America in the early 1950s. Mark\'s family crossed the Atlantic on this ship in August 1951.',
      credit: 'Wikimedia Commons',
      year: '1953',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:USS_General_C._H._Muir_(AP-142).jpg',
      afterParagraph: 0,
    },
    {
      id: 'new-york-harbor-1951',
      title: 'New York Harbor Skyline, 1951',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Lower_Manhattan_viewes_from_USS_Wisconsin_(BB-64)_1951.jpg',
      caption: 'Lower Manhattan\'s skyline as seen from a ship in New York Harbor in 1951. For immigrants arriving by sea, the skyscrapers and bustling harbor of New York were an awe-inspiring first sight of America.',
      credit: 'Wikimedia Commons',
      year: '1951',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Lower_Manhattan_viewes_from_USS_Wisconsin_(BB-64)_1951.jpg',
      afterParagraph: 1,
    },
    {
      id: 'chicago-neighborhood-1951',
      title: 'Chicago Neighborhood Street, 1951',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/1951+A016008_(3553360622).jpg',
      caption: 'A 1951 view of a street in Chicago\'s Near West Side (Pilsen) neighborhood, which was home to many Eastern European immigrant families. Ethnic enclaves like this provided new arrivals with community support, familiar languages, and help finding jobs and housing.',
      credit: 'Wikimedia Commons',
      year: '1951',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:1951%2BA016008_(3553360622).jpg',
      afterParagraph: 1,
    },
  ],
  inlineMaps: [
    {
      id: 'atlantic-crossing',
      locationIds: ['bremerhaven', 'newyork'],
      title: 'Atlantic Crossing Route',
      description: 'The journey by sea from Bremerhaven, Germany across the Atlantic Ocean to New York Harbor. This seven or eight day voyage was taken by postwar refugee ships like the General Muir.',
      afterParagraph: 0,
      center: [-30, 49],
      zoom: 2,
      lineColor: '#2E5090',
      segmentId: 'immigration',
    },
    {
      id: 'newyork-to-chicago',
      locationIds: ['newyork', 'chicago'],
      title: 'From New York to Chicago',
      description: 'After arriving in New York, the family traveled west by train to reach Chicago, Illinois – the city where they would begin their new life in America, welcomed by the Slovenian community.',
      afterParagraph: 1,
      center: [-80, 41],
      zoom: 4.5,
      lineColor: '#2E5090',
      segmentId: 'immigration',
    },
  ],
  annotations: {
    'Bremerhaven': {
      term: 'Bremerhaven',
      definition: 'A port city in northern Germany on the North Sea. After WWII, Bremerhaven served as a major embarkation port from which many European refugees and emigrants departed by ship.',
      type: 'place',
    },
    'port of embarkation': {
      term: 'Port of Embarkation',
      definition: 'The place where people board a ship (or plane) to start a journey. Bremerhaven was the harbor where the family embarked on their voyage to America.',
      type: 'term',
    },
    'General Muir': {
      term: 'USS General Muir',
      definition: 'A U.S. Navy transport ship (officially USS General C. H. Muir, AP-142) used in World War II and later to carry displaced persons. In 1951, it was operating as a refugee transport, bringing European families to America.',
      type: 'term',
    },
    'Navy troop carrier': {
      term: 'Troop Transport Ship',
      definition: 'A ship operated by the navy, designed to carry soldiers (troops) in large numbers. These ships were later repurposed to carry refugees and immigrants after WWII.',
      type: 'term',
    },
    'New York harbour': {
      term: 'New York Harbor',
      definition: 'The port of New York City, at the mouth of the Hudson River. New York Harbor was historically the busiest U.S. port of entry for immigrants, home to Ellis Island and the iconic skyline of Manhattan.',
      type: 'place',
    },
    'Salvation Army': {
      term: 'Salvation Army',
      definition: 'A Christian charitable organization known for its social welfare work. The Salvation Army often aided immigrants and the poor – greeting new arrivals with coffee and doughnuts as a warm welcome.',
      type: 'term',
    },
    'Catholic Relief people': {
      term: 'Catholic Relief Services',
      definition: 'The international humanitarian agency of the U.S. Catholic Church. After WWII, it helped refugees with basic needs and resettlement, providing things like travel funds, food, and assistance finding housing.',
      type: 'term',
    },
    'twenty dollars': {
      term: '$20 in 1951',
      definition: 'Twenty U.S. dollars in 1951 was a considerable sum for a newly arrived family. Adjusted for inflation, $20 in 1951 is roughly equivalent to about $250 in today\'s money – enough to cover a few days\' living expenses.',
      type: 'term',
    },
    'Chicago': {
      term: 'Chicago 1951',
      definition: 'In 1951, Chicago was the second-largest city in the U.S. and a major industrial center experiencing a postwar economic boom, with thriving factories and stockyards and a very diverse immigrant population.',
      type: 'place',
    },
    'Cermack Road and Damen Avenue': {
      term: 'Cermak & Damen',
      definition: 'A crossroads in the Pilsen area of Chicago\'s West Side (22nd Street and Damen). This neighborhood was historically populated by Czech and Slovenian immigrants.',
      type: 'place',
    },
    'Slovenian community': {
      term: 'Slovenian Community (Chicago)',
      definition: 'The network of Slovene immigrants in Chicago and their institutions. Slovenians formed their own churches and clubs to support each other, often providing newly arrived Slovenians with lodging, job leads, and community connections.',
      type: 'term',
    },
  },
};

// Chapter 5: Refugee Years (1946-1951)
export const chapter5Context: ChapterContextData = {
  contextCards: [
    {
      id: 'dp-camps-austria',
      title: 'Displaced Persons Camps in Austria',
      subtitle: '1945-1951',
      content: `At the end of World War II, Austria was inundated with refugees. In 1945, about 1.4 million displaced persons (DPs) were in Austria – roughly one-fifth of the country's prewar population. Allied authorities and the United Nations Relief and Rehabilitation Administration (UNRRA) set up DP camps to shelter these people who could not return home. The camps ranged from repurposed barracks to tent cities, providing basic housing, food, and medical care.

Austria was divided into occupation zones, and the British zone (Carinthia, Styria, and East Tyrol) contained many camps. Kellerberg was one such camp in Carinthia, near Villach. It, along with the nearby Feffernitz camp, housed up to 10,000 refugees in the late 1940s. Initially, the goal was to repatriate DPs to their countries, but about "the last million" refused repatriation due to fear of persecution under new regimes. These DPs remained in camps for years, awaiting opportunities to emigrate. By 1952, most DP camps in Austria and Germany had closed as people resettled abroad.`,
      type: 'history',
      sources: [
        { name: 'Klagenfurt Migration Studies - UNRRA in Austria', url: 'https://klagenfurtmigrationstudies.home.blog/the-unrra-in-austria-insights-and-conclusions/' }
      ],
      afterParagraph: 0,
    },
    {
      id: 'life-dp-camp',
      title: 'Life in a Displaced Persons Camp',
      subtitle: 'Daily Survival',
      content: `Daily life in DP camps revolved around resourcefulness and routine. Food and supplies were limited and distributed in rations. Adults typically received basic ration cards for about 2,000 calories or less per day in the immediate postwar period. To improve their lot, many DPs took on camp jobs. UNRRA officials tied refugees' rations and privileges to their willingness to work and help run the camp. Common jobs included maintenance, cleaning, kitchen work, or warehouse work. Such work often earned extra food rations or other small benefits, which could make a crucial difference for a family.

Despite hardships, DP camps fostered a sense of community. Residents organized schools for children, churches for worship, sports teams, newspapers, and cultural events. Conditions were spartan – many camps were overcrowded and initially lacked heating or proper sanitation – but over time, international aid and self-governance by the DPs improved living standards. Still, life in a DP camp was marked by uncertainty. People passed the time learning new skills and languages (English classes were popular for those hoping to go to America) and anxiously waiting for news of visas or sponsorships that would allow them to finally leave camp and start new lives.`,
      type: 'culture',
      sources: [
        { name: 'US Holocaust Memorial Museum - DP Camp in Austria', url: 'https://encyclopedia.ushmm.org/content/en/film/displaced-persons-camp-in-austria' }
      ],
      afterParagraph: 0,
    },
    {
      id: 'british-velden-resort',
      title: 'British Occupation and Velden Resort',
      subtitle: 'Lake Wörthersee Recreation',
      content: `After WWII, Austria was divided into zones occupied by the Allied powers. Carinthia and Styria in the south formed the British occupation zone from 1945 to 1955. British forces were responsible for governing this region, which included overseeing DP camps and maintaining order. They also established rest and recreation facilities for their troops. The Lake Wörthersee area, with its beautiful alpine lake, became a hub for British recreation. In the summer of 1945, British 8th Army units converted grand hotels in Velden am Wörthersee into an "officers' leave camp."

Velden's resort offered war-weary British personnel a holiday-like environment with excellent food and beautiful surroundings. There were boat excursions on the lake and cultural performances. For locals and DPs like Mark, the British presence created employment opportunities. The occupying forces needed staff to run the hotels, maintain facilities, and provide services. Mark's job as a handyman at the officers' hotel in Velden provided him a small salary and valuable work experience at a time when most civilians in Austria struggled to find paying jobs.`,
      type: 'history',
      sources: [
        { name: 'WW2 Talk Forum - British in Austria', url: 'http://ww2talk.com/index.php?threads/things-to-see-in-austria.11238/#post-122401' }
      ],
      afterParagraph: 0,
    },
    {
      id: 'path-to-america',
      title: 'From DP Camp to a New Home: The Path to America',
      subtitle: 'US Displaced Persons Act',
      content: `For displaced families like Mark's, emigrating to the United States was the ultimate goal. This process was governed by the U.S. Displaced Persons Act of 1948, the first major U.S. refugee law. It authorized visas for 200,000 European DPs over two years. President Truman criticized the act's initial biases, and in 1950 Congress amended it to admit another 200,000 DPs. In total, over 400,000 displaced persons were able to immigrate to the U.S. under these programs by 1952.

Securing a U.S. visa typically required a sponsor who would guarantee housing and employment for the refugee family. Many American religious and charitable organizations stepped up to fulfill this role. The Catholic Relief Organization (Catholic Relief Services) helped resettle refugees by working with American parishes to sponsor DP families. They provided affidavits of support, arranged ocean passage, and met refugees at the port of entry. In Mark's case, Catholic Relief sponsorship meant a Catholic parish or family in the U.S. had agreed to receive his family. This was crucial for a single mother with three children. Thanks to his mother's persistence and the backing of CRS, Mark's family left Austria in 1951 – joining the wave of DP refugees starting new lives in America.`,
      type: 'history',
      sources: [
        { name: 'Truman Library - Displaced Persons Act of 1948', url: 'https://www.trumanlibraryinstitute.org/the-displaced-persons-act-of-1948/' }
      ],
      afterParagraph: 1,
    },
  ],
  photos: [
    {
      id: 'mothers-day-dp-camp',
      title: 'Mother\'s Day Celebration in a DP Camp',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Fotothek_df_pk_0000195_001.jpg',
      caption: 'Displaced persons celebrate Mother\'s Day in an Austrian UNRRA camp in May 1946. Despite the difficult conditions, DP camps organized community events and celebrations to maintain morale and a sense of normal life for the refugees.',
      credit: 'Wikimedia Commons',
      year: '1946',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Fotothek_df_pk_0000195_001.jpg',
      afterParagraph: 0,
    },
    {
      id: 'british-commander-visit',
      title: 'British Commander Visits DP Camp',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/BRITISH_FORCES_OF_OCCUPATION_IN_AUSTRIA%2C_1945_-_1947_VIE1314.jpg',
      caption: 'General Sir Richard McCreery, Commander-in-Chief of British Forces in Austria, visits the Kellerberg displaced persons camp in Carinthia in March 1946. The British military administered DP camps in their occupation zone, providing security and support.',
      credit: 'Wikimedia Commons',
      year: '1946',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:BRITISH_FORCES_OF_OCCUPATION_IN_AUSTRIA,_1945_-_1947_VIE1314.jpg',
      afterParagraph: 0,
    },
    {
      id: 'refugee-ship-bunks',
      title: 'Bunk Accommodation on a Refugee Ship',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Sleeping_accommodation_on_an_unknown_US_Navy_ship_under_Interational_Refugee_Organization_charter_(8403895754).jpg',
      caption: 'Sleeping berths prepared on a U.S. Navy vessel under International Refugee Organization (IRO) charter in 1950. Thousands of displaced persons traveled by sea to new homes in converted troopships, marking the final step of their resettlement journey.',
      credit: 'Wikimedia Commons',
      year: '1950',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sleeping_accommodation_on_an_unknown_US_Navy_ship_under_Interational_Refugee_Organization_charter_(8403895754).jpg',
      afterParagraph: 1,
    },
  ],
  inlineMaps: [
    {
      id: 'carinthia-work-sites',
      locationIds: ['kellerberg', 'velden'],
      title: 'Carinthia: DP Camp and Work Sites',
      description: 'This map shows Kellerberg (site of the D.P. camp where Mark\'s family lived) and Velden on Lake Wörthersee (where Mark worked at the British officers\' resort). Mark commuted from the camp to work in the British zone\'s resort town.',
      afterParagraph: 0,
      center: [13.94, 46.62],
      zoom: 10,
      lineColor: '#8B4513',
      segmentId: 'displacement',
    },
    {
      id: 'austria-to-america',
      locationIds: ['kellerberg', 'bremerhaven', 'newyork'],
      title: 'Journey from Austria to America',
      description: 'The long journey from the Kellerberg D.P. camp in Austria to the United States. Mark\'s family traveled by train to Bremerhaven, Germany, then crossed the Atlantic by ship to New York.',
      afterParagraph: 1,
      center: [-20, 49],
      zoom: 2.3,
      lineColor: '#2E5090',
      segmentId: 'immigration',
    },
  ],
  annotations: {
    'D.P. camp': {
      term: 'Displaced Persons Camp',
      definition: 'A refugee camp set up by Allied authorities and UNRRA after WWII. DP camps provided temporary shelter, food, and medical care for displaced persons. Kellerberg was one such camp in Austria.',
      type: 'place',
      year: '1945-1952',
    },
    'Kellerberg': {
      term: 'Kellerberg DP Camp',
      definition: 'A Displaced Persons camp in Carinthia, Austria, near Villach. The camp housed thousands of refugees in the late 1940s and was operated by UNRRA and later the IRO until residents emigrated.',
      type: 'place',
    },
    'food supply warehouse': {
      term: 'Camp Warehouse Jobs',
      definition: 'Essential work in DP camps that earned extra food rations. Jobs like warehouse work, kitchen duty, or maintenance were highly sought after as they provided supplementary rations beyond basic allotments.',
      type: 'term',
    },
    'extra food rations': {
      term: 'Food Rationing',
      definition: 'A system of controlled distribution of food. In postwar DP camps, basic rations were limited. Those who worked essential jobs could receive supplementary rations as an incentive.',
      type: 'term',
    },
    'British Army': {
      term: 'British Occupation Forces',
      definition: 'British military forces that occupied and governed Carinthia, Styria, and East Tyrol in southern Austria from 1945-1955. They administered DP camps and operated recreation facilities.',
      type: 'term',
      year: '1945-1955',
    },
    'Lake Worthersee': {
      term: 'Lake Wörthersee',
      definition: 'A picturesque alpine lake in Carinthia, southern Austria, known as a tourist resort area. After WWII, the British military requisitioned lakeside hotels as rest camps for troops.',
      type: 'place',
    },
    'Velden': {
      term: 'Velden am Wörthersee',
      definition: 'A resort town on Lake Wörthersee in Carinthia, Austria. In 1945-46, British occupation forces turned Velden into a recreation center for soldiers.',
      type: 'place',
    },
    'Argentina': {
      term: 'Refugee Resettlement Countries',
      definition: 'After WWII, several countries accepted displaced persons for resettlement: Argentina, Australia, Canada, and the USA. Over 400,000 DPs immigrated to the U.S. under the Displaced Persons Act.',
      type: 'term',
    },
    'USA': {
      term: 'United States Resettlement',
      definition: 'The United States accepted over 400,000 displaced persons between 1948-1952 under the Displaced Persons Act, the first major U.S. refugee law.',
      type: 'place',
      year: '1948-1952',
    },
    'Catholic Relief Organization': {
      term: 'Catholic Relief Services',
      definition: 'The international humanitarian arm of the U.S. Catholic Church. After WWII, CRS helped resettle refugees by partnering with American parishes to sponsor DP families, securing housing and jobs.',
      type: 'term',
      year: 'Founded 1943',
    },
  },
};

// Chapter 3: War and Occupation (1939-1945)
export const chapter3Context: ChapterContextData = {
  contextCards: [
    {
      id: 'axis-invasion-1941',
      title: 'Axis Invasion and Partition of Yugoslavia (April 1941)',
      subtitle: 'Spring 1941',
      content: `On April 6, 1941, the Axis powers (led by Germany and Italy) launched a massive invasion of Yugoslavia. The Yugoslav army crumbled within days. The country was then dismembered by the victors: Slovenia was partitioned – Fascist Italy annexed the southwest (including Ljubljana) while Nazi Germany took over the northern regions – and other parts of Yugoslavia were occupied by Hungary and Bulgaria or made into a puppet state (Croatia). The Yugoslav royal government fled into exile as Axis forces imposed their occupation.`,
      type: 'history',
      sources: [
        { name: 'US Holocaust Memorial Museum', url: 'https://encyclopedia.ushmm.org/content/en/article/balkan-campaign-spring-1941' }
      ],
      afterParagraph: 0,
    },
    {
      id: 'italian-german-occupation',
      title: 'Italian vs. German Occupation of Slovenia',
      subtitle: 'Occupation Zones 1941-1943',
      content: `After the April 1941 invasion, Italy occupied central Slovenia (establishing the Province of Ljubljana) while Germany annexed northern Slovenia. Italian rule was initially less harsh – many Slovene refugees fled German-held areas into Italian zone – but it grew more brutal once resistance began. By 1942–43, Italian authorities in Slovenia were deporting thousands of civilians to concentration camps and conducting reprisals comparable to the Germans' tactics. In September 1943, Italy surrendered to the Allies, and Nazi Germany quickly took over the Italian-occupied territory in Slovenia, extending German occupation to the whole region.`,
      type: 'history',
      sources: [
        { name: 'Wikipedia - Province of Ljubljana', url: 'https://en.wikipedia.org/wiki/Province_of_Ljubljana' }
      ],
      afterParagraph: 0,
    },
    {
      id: 'partisans-tito',
      title: 'Yugoslav Partisans and Allied Support for Tito',
      subtitle: 'Resistance Movement',
      content: `Germany's invasion of the Soviet Union in June 1941 (Operation Barbarossa) galvanized the Yugoslav Communist Party to organize an armed resistance. Led by Josip Broz Tito, the communist Partisans rapidly became the most effective resistance force, fighting the occupiers across Yugoslavia. In 1943, the Western Allies switched their backing from the royalist Chetniks to Tito's Partisans after seeing the Partisans' success against the Germans. Allied support (and Soviet advances) helped Tito's forces grow, and by the end of the war the Partisans liberated Yugoslavia and emerged as the country's new governing power.`,
      type: 'history',
      sources: [
        { name: 'Britannica - Josip Broz Tito', url: 'https://www.britannica.com/biography/Josip-Broz-Tito' }
      ],
      afterParagraph: 2,
    },
    {
      id: 'yugoslav-civil-war',
      title: 'Civil War Among Yugoslav Factions',
      subtitle: 'Internal Conflict 1942-1945',
      content: `World War II in Yugoslavia also took on the character of a civil war between rival local factions. On one side were the Partisans (communist-led resistance), and on the other were anti-communist groups that collaborated with the Axis. In Slovenia, an Italian-sponsored militia (nicknamed the "White Guard") was later reorganized under Nazi command as the Slovene Home Guard (Domobranci) to fight the Partisans. Similarly, in Serbia the royalist Chetniks increasingly cooperated with German and Italian forces against Tito's Partisans. These conflicts pitted Yugoslav against Yugoslav – communists vs. nationalists – in a brutal internecine war that raged alongside the fight against the foreign occupiers.`,
      type: 'history',
      sources: [
        { name: 'Wikipedia - Yugoslav Front', url: 'https://en.wikipedia.org/wiki/Yugoslav_front' }
      ],
      afterParagraph: 2,
    },
  ],
  photos: [
    {
      id: 'italian-troops-invasion',
      title: 'Italian Troops Invade Yugoslavia (April 1941)',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Italian_Black_Shirt_battalion_entering_Yugoslavia.jpg',
      caption: 'Italian Blackshirt battalion entering Slovenia on April 15, 1941. Mark remembers waking up one morning to find thousands of Italian soldiers in the countryside around Vizmarje.',
      credit: 'Wikimedia Commons',
      year: '1941',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Italian_Black_Shirt_battalion_entering_Yugoslavia.jpg',
      afterParagraph: 0,
    },
    {
      id: 'german-occupation-maribor',
      title: 'German Occupation of Slovenia (1941)',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Nem%C5%A1ka_vojska_koraka_po_mariborskih_ulicah.jpg',
      caption: 'German Wehrmacht soldiers marching through the streets of Maribor, Slovenia, after the Axis invasion in April 1941. The Italian forces that first occupied Mark\'s area were soon replaced by German troops.',
      credit: 'Wikimedia Commons',
      year: '1941',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Nem%C5%A1ka_vojska_koraka_po_mariborskih_ulicah.jpg',
      afterParagraph: 0,
    },
    {
      id: 'slovenian-deportation',
      title: 'Civilians Deported from Slovenia (1941)',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Izgon_prebivalcev_iz_Skopic_8._novembra_1941.jpg',
      caption: 'Slovenian women and children being forcibly deported by German authorities from their village in November 1941. Nazi occupation policies in northern Slovenia included mass expulsions of Slovene civilians to make room for German settlers.',
      credit: 'Wikimedia Commons',
      year: '1941',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Izgon_prebivalcev_iz_Skopic_8._novembra_1941.jpg',
      afterParagraph: 2,
    },
  ],
  inlineMaps: [
    {
      id: 'axis-partition',
      locationIds: ['ljubljana', 'maribor', 'vizmarje'],
      title: 'Axis Partition of Slovenia',
      description: 'After the April 1941 invasion, Yugoslavia was carved up by the Axis powers. Slovenia was split between Italy (which took Ljubljana and the southwest) and Nazi Germany (which annexed the northern areas including Maribor). Vizmarje fell under Italian occupation.',
      afterParagraph: 0,
      center: [15.0, 46.3],
      zoom: 7.5,
      lineColor: '#5C5346',
      segmentId: 'childhood',
    },
  ],
  annotations: {
    'World War II': {
      term: 'World War II',
      definition: 'A global conflict fought from 1939 to 1945 between the Axis powers (Germany, Italy, Japan) and the Allied powers (including Britain, the Soviet Union, and the United States). World War II was the largest and deadliest war in history.',
      type: 'event',
      year: '1939-1945',
    },
    'Germany': {
      term: 'Nazi Germany',
      definition: 'The German nation-state under Adolf Hitler\'s Nazi regime (1933-1945). Nazi Germany was the primary Axis power in World War II.',
      type: 'place',
      year: '1933-1945',
    },
    'Italy': {
      term: 'Fascist Italy',
      definition: 'Italy under the Fascist dictatorship of Benito Mussolini (1922-1943), a major Axis power allied with Nazi Germany.',
      type: 'place',
      year: '1922-1943',
    },
    'Yugoslavia': {
      term: 'Kingdom of Yugoslavia',
      definition: 'The monarchy formed in 1918 that united South Slavic peoples after the collapse of Austria-Hungary. It was invaded and occupied by Axis forces in April 1941.',
      type: 'place',
      year: '1918-1941',
    },
    'Italian soldiers': {
      term: 'Italian Occupation Forces',
      definition: 'Fascist Italy occupied central Slovenia (including Ljubljana) from 1941 until 1943, establishing the Province of Ljubljana under Italian administration.',
      type: 'term',
    },
    'German troops': {
      term: 'German Wehrmacht',
      definition: 'Nazi Germany\'s armed forces. In Slovenia, German troops initially occupied the northern regions and later took over all of Slovenia after Italy\'s surrender in 1943.',
      type: 'term',
    },
    'German language schools': {
      term: 'Germanization',
      definition: 'A Nazi policy of forcing German language and culture onto conquered peoples. Under German occupation, Slovenian schools were forced to teach only in German, with Slovene language banned.',
      type: 'term',
    },
    'Russia': {
      term: 'Operation Barbarossa',
      definition: 'The code name for Hitler\'s invasion of the Soviet Union, launched on June 22, 1941. This opened the massive Eastern Front of World War II.',
      type: 'event',
      year: '1941',
    },
    'communists': {
      term: 'Yugoslav Partisans',
      definition: 'The communist-led guerrilla resistance army that fought the Axis occupiers in Yugoslavia. Organized by Tito in 1941, the Partisans eventually liberated Yugoslavia.',
      type: 'term',
    },
    'Tito': {
      term: 'Josip Broz Tito',
      definition: 'The Communist leader of the Yugoslav Partisans during WWII and later president of socialist Yugoslavia. In 1943, the Allies recognized him as the chief Yugoslav resistance leader.',
      type: 'person',
    },
    'nationalist people': {
      term: 'Slovene Home Guard',
      definition: 'A Slovene anti-communist militia formed during WWII with support from Italian and later German occupiers to fight against Tito\'s Partisans.',
      type: 'term',
    },
    'civil war': {
      term: 'Yugoslav Civil War',
      definition: 'The internal conflict in Yugoslavia during WWII between communist Partisans and their Yugoslav rivals. Anti-communist groups collaborated with Axis occupiers, leading to a brutal civil war (1942-1945).',
      type: 'event',
      year: '1942-1945',
    },
  },
};

// Chapter 2: Childhood in Vizmarje (1935-1941)
export const chapter2Context: ChapterContextData = {
  contextCards: [
    {
      id: 'village-life-1930s',
      title: 'Daily Life in a Slovenian Village (1930s)',
      subtitle: '1930s Yugoslavia',
      content: `During the 1930s, most Slovenians lived in rural villages, relying on small-scale farming and family labor. Across the Kingdom of Yugoslavia, about three-quarters of the population worked in agriculture, usually as subsistence peasants. Slovenian villagers typically owned modest plots of land and often supplemented farm income with seasonal work or traditional crafts. Community life was close-knit and centered around the local church and family. Education was more accessible in Slovenia than in other parts of Yugoslavia – fewer than 10% of Slovenes were illiterate (compared to over 80% in some regions). Even so, many children in remote areas still had limited schooling. Life in a 1930s Slovene village was humble and hard-working, but marked by strong community ties and rich cultural traditions.`,
      type: 'history',
      sources: [
        { name: 'Wikipedia - Kingdom of Yugoslavia', url: 'https://en.wikipedia.org/wiki/Kingdom_of_Yugoslavia' }
      ],
      afterParagraph: 0,
    },
    {
      id: 'craftsmen-small-business',
      title: 'Craftsmen and Small Businesses in Interwar Yugoslavia',
      subtitle: 'Traditional Trades',
      content: `In the interwar Kingdom of Yugoslavia, industrialization was limited, and many goods were made by skilled artisans in small workshops. Manufacturing was concentrated in a few cities, while elsewhere craftsmen – such as shoemakers, tailors, leatherworkers – produced for local markets. Slovenia was relatively industrialized for the era (nearly half of new factories opened in Yugoslavia between 1919 and 1938 were in Slovenian lands), but much of the economy still depended on cottage industries. Master craftsmen often took on apprentices who lived with the family and learned the trade by working alongside the master. These apprenticeships kept traditional skills alive. A family-run leather goods workshop, for example, would handcraft items like shoes, belts, or bags, with the master's expertise passed down to the next generation. Such small businesses and tradesmen were the backbone of the local economy before large-scale factories became common.`,
      type: 'culture',
      sources: [
        { name: 'Wikipedia - Kingdom of Yugoslavia', url: 'https://en.wikipedia.org/wiki/Kingdom_of_Yugoslavia' }
      ],
      afterParagraph: 1,
    },
    {
      id: 'public-school-religious-instruction',
      title: 'Public School and Religious Instruction in the 1930s',
      subtitle: 'Education in Yugoslavia',
      content: `Education in the 1930s Kingdom of Yugoslavia was organized as a public system, but opportunities varied by region. A 1929 law established compulsory public schooling – eight years of primary education (split into 4 lower and 4 upper years) – free for all children. In practice, rural areas often lagged behind cities in access. Slovenia enjoyed a high literacy rate and a well-attended school system for the time. Schools taught a standard curriculum, and importantly, they also included religious education. Around two hours per week were typically set aside for faith instruction in public schools. In predominantly Catholic villages like St. Vid, parish priests would come to the school to teach catechism and religious studies. This ensured children received moral and spiritual lessons alongside academic subjects. Such blending of public and religious education was common until the mid-20th century, reinforcing the influence of the Church in community life.`,
      type: 'history',
      sources: [
        { name: 'Wikipedia - Kingdom of Yugoslavia', url: 'https://en.wikipedia.org/wiki/Kingdom_of_Yugoslavia' }
      ],
      afterParagraph: 3,
    },
  ],
  photos: [
    {
      id: 'rural-farmhouse',
      title: 'Rural Road and Farmhouse, Prekmurje (1935)',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Cesta_in_hi%C5%A1a_v_okolici_Hotize_1935.jpg',
      caption: 'A rural Slovenian home and road from 1935, the year Mark\'s family moved to Vizmarje. Small villages like this dotted the countryside around Ljubljana, where families lived simply and knew their neighbors well.',
      credit: 'Wikimedia Commons',
      year: '1935',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cesta_in_hi%C5%A1a_v_okolici_Hotize_1935.jpg',
      afterParagraph: 0,
    },
    {
      id: 'bata-factory',
      title: 'Bata Shoe Factory in Borovo (1938)',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Ba%C5%A5a_factory,_Borovo,_Yugoslavia,_26_Sept_1938._%284237252612%29.jpg',
      caption: 'A leather goods factory in Yugoslavia in 1938. While Mark\'s father ran a small hand-crafted leather workshop in Vizmarje, larger factories like this were beginning to emerge across Slovenia and Yugoslavia.',
      credit: 'Wikimedia Commons',
      year: '1938',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ba%C5%A5a_factory,_Borovo,_Yugoslavia,_26_Sept_1938._%284237252612%29.jpg',
      afterParagraph: 1,
    },
    {
      id: 'village-church-school',
      title: 'Village Church and School, Slovenia (circa 1930)',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Petrov%C4%8De.jpg',
      caption: 'A typical Slovenian village church and school from the 1930s. Mark walked to a school like this in St. Vid each day, where he received both academic instruction and weekly religious training from parish priests.',
      credit: 'Wikimedia Commons',
      year: 'circa 1930',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Petrov%C4%8De.jpg',
      afterParagraph: 3,
    },
  ],
  inlineMaps: [
    {
      id: 'vizmarje-area',
      locationIds: ['vizmarje', 'stvid', 'ljubljana'],
      title: 'Childhood Home Area',
      description: 'Vizmarje was a small village just 10 kilometers northwest of Ljubljana, where Mark lived from 1935-1946. He walked daily to school in nearby St. Vid.',
      afterParagraph: 0,
      center: [14.5, 46.08],
      zoom: 10.5,
      lineColor: '#4A7C59',
      segmentId: 'childhood',
    },
  ],
  annotations: {
    'Vizmarje': {
      term: 'Vizmarje',
      definition: 'Vizmarje (Vižmarje) is a small settlement in the northwestern part of Ljubljana, Slovenia, historically a separate village.',
      type: 'place',
    },
    'St. Vid': {
      term: 'St. Vid',
      definition: 'St. Vid (Šentvid) is a district of Ljubljana in Slovenia. Formerly an independent village in the Upper Carniola region, it was incorporated into the city in 1974.',
      type: 'place',
    },
    'Ljubljana': {
      term: 'Ljubljana',
      definition: 'Ljubljana is the capital and largest city of Slovenia.',
      type: 'place',
    },
    'apprenticeship': {
      term: 'Apprenticeship',
      definition: 'An apprenticeship is a system of training a new practitioner of a trade through on-the-job experience under a skilled master.',
      type: 'term',
    },
    'leather goods': {
      term: 'Leather Goods',
      definition: 'Leather goods are products made from leather (animal hides), such as footwear, belts, bags, and other accessories.',
      type: 'term',
    },
    'public school': {
      term: 'Public School',
      definition: 'A public school is a school operated by the government. In 1930s Yugoslavia, public primary education was state-funded, free, and made compulsory by law.',
      type: 'term',
    },
    'religious training': {
      term: 'Religious Training',
      definition: 'Religious training refers to faith-based education (such as Catholic catechism). In 1930s Yugoslav schools, about two hours per week were set aside for religious instruction by clergy.',
      type: 'term',
    },
    'Egypt': {
      term: 'British Egypt',
      definition: 'Egypt was under British colonial rule in the late 19th and early 20th centuries (effectively from 1882 until 1956).',
      type: 'place',
      year: '1882-1956',
    },
    'Cairo': {
      term: 'Cairo',
      definition: 'Cairo is the capital of Egypt and one of the largest cities in Africa.',
      type: 'place',
    },
    'Franklin Park': {
      term: 'Franklin Park',
      definition: 'Franklin Park is a village in Cook County, Illinois, in the United States. It is a suburb of Chicago.',
      type: 'place',
    },
  },
};

// Chapter 1: Origins & Family Roots - Historical context
export const chapter1Context: ChapterContextData = {
  contextCards: [
    {
      id: 'austro-hungarian-empire',
      title: 'The Austro-Hungarian Empire',
      subtitle: '1867-1918',
      content: `The multi-ethnic empire that ruled Slovenian lands until its collapse at the end of World War I. This dual monarchy united the Austrian Empire and the Kingdom of Hungary under a single monarch, Emperor Franz Joseph I.

For Slovenians, life under Austro-Hungarian rule meant being part of a complex, multilingual empire. German was the language of administration and education, though local languages like Slovenian were spoken at home. The empire's collapse in 1918 led to the formation of new nation-states, including the Kingdom of Serbs, Croats and Slovenes (later Yugoslavia).

Mark's mother's birthplace, Ravne na Koroškem, was in a bilingual region where both Slovenian and German were commonly spoken—a legacy of centuries of Austrian rule.`,
      type: 'history',
      sources: [
        { name: 'Encyclopedia Britannica', url: 'https://www.britannica.com/place/Austria-Hungary' },
        { name: 'Wikipedia - Austria-Hungary', url: 'https://en.wikipedia.org/wiki/Austria-Hungary' },
      ],
      afterParagraph: 4,
    },
    {
      id: 'leather-crafting',
      title: 'The Leather Crafting Tradition',
      subtitle: 'Slovenian Artisans',
      content: `In the early 20th century, leather goods were entirely handmade by skilled artisans. Mark's father and grandfather were part of a tradition of Slovenian leather workers who produced everything from practical items like horse gear and farm equipment to fine goods like luggage, handbags, and wallets.

The craft required years of apprenticeship to master. Young men would typically serve under their fathers or other master craftsmen, learning techniques for cutting, stitching, and finishing leather. The work was meticulous and time-consuming—a single suitcase might take days to complete.

Mark's grandfather specialized in horse gear (tack), traveling from farm to farm to repair and maintain the leather harnesses, reins, and straps essential for agricultural work in pre-industrial Slovenia. His son, Mark's father, expanded into fashion and sports goods, including hand-stitched soccer balls.`,
      type: 'culture',
      sources: [
        { name: 'Museum of Leather Industry in Slovenia', url: 'http://museu.ms/museum/details/310/museum-of-the-leather-industry-in-slovenia' },
      ],
      afterParagraph: 8,
    },
  ],
  photos: [
    {
      id: 'ljubljana-1920s',
      title: 'Ljubljana in the 1920s',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Postcard_of_Ljubljana_view_1920.jpg',
      caption: 'A panoramic view of Ljubljana along the Ljubljanica River in the 1920s, shortly before Mark was born. The city was the cultural and economic heart of the Slovenian region.',
      credit: 'Wikimedia Commons',
      year: 'circa 1920',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Postcard_of_Ljubljana_view_1920.jpg',
      afterParagraph: 1,
    },
    {
      id: 'ravne-1920s',
      title: 'Ravne na Koroškem in the 1920s',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/25/1920s_postcard_of_Ravne_na_Koro%C5%A1kem.jpg',
      caption: 'A 1920s-era postcard view of Ravne na Koroškem, the small town near the Austrian border where Mark\'s mother was born. The bilingual community spoke both Slovenian and German.',
      credit: 'Wikimedia Commons',
      year: 'circa 1920s',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:1920s_postcard_of_Ravne_na_Koro%C5%A1kem.jpg',
      afterParagraph: 4,
    },
    {
      id: 'slovenian-family',
      title: 'Slovenian Family in Traditional Dress',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Postcard_of_Slovenian_family_in_traditional_dress.jpg',
      caption: 'A Slovenian family in traditional village attire from the early 1900s. Mark\'s father came from a large family of fourteen children in rural southeastern Slovenia.',
      credit: 'Wikimedia Commons',
      year: 'Early 1900s',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Postcard_of_Slovenian_family_in_traditional_dress.jpg',
      afterParagraph: 8,
    },
  ],
  inlineMaps: [
    {
      id: 'slovenia-family-origins',
      locationIds: ['ljubljana', 'zagrad', 'ravne'],
      title: 'Family Origins in Slovenia',
      description: 'Mark was born in Ljubljana, the capital. His father came from Zagrad pri Škocjanu in the southeast, while his mother was from Ravne na Koroškem in the northeast near the Austrian border.',
      afterParagraph: 2,
      center: [14.8, 46.2],
      zoom: 7,
      lineColor: '#C4541A',
      segmentId: 'childhood',
    },
  ],
  annotations: {
    'Ljubljana': {
      term: 'Ljubljana',
      definition: 'The capital and largest city of Slovenia, located along the Ljubljanica River. In 1930, it had about 100,000 inhabitants and was the cultural and economic center of the Slovenian region.',
      type: 'place',
    },
    'Kingdom of Yugoslavia': {
      term: 'Kingdom of Yugoslavia',
      definition: 'The monarchy formed in 1918 (initially as Kingdom of Serbs, Croats and Slovenes) that united South Slavic peoples after the collapse of Austria-Hungary. It lasted until World War II.',
      type: 'term',
      year: '1918-1941',
    },
    'Slovenian language': {
      term: 'Slovenian Language',
      definition: 'A South Slavic language spoken by about 2.5 million people. While related to Serbian and Croatian, it is distinct with unique grammar, vocabulary, and dialects.',
      type: 'term',
    },
    'Austro-Hungarian empire': {
      term: 'Austro-Hungarian Empire',
      definition: 'The dual monarchy (1867–1918) that ruled central Europe until its collapse at the end of World War I. Slovenian lands were part of the Austrian half of the empire.',
      type: 'term',
      year: '1867-1918',
    },
    '1st World War': {
      term: 'World War I',
      definition: 'The global conflict (1914–1918) that brought great hardship to Slovenian lands. Many men were conscripted into the Austro-Hungarian army, and civilian life was marked by shortages and loss.',
      type: 'event',
      year: '1914-1918',
    },
    'tuberculosis': {
      term: 'Tuberculosis',
      definition: 'In the early 20th century, tuberculosis (TB) was a common and often fatal disease. Before antibiotics became available in the 1940s, many young adults died from TB infections.',
      type: 'term',
    },
    'apprenticeship': {
      term: 'Apprenticeship',
      definition: 'A traditional training system where young craftsmen learned a trade by working under an experienced master for several years, often starting in their teens. Apprentices typically lived with the master\'s family.',
      type: 'term',
    },
    "king of Yugoslavia's guard": {
      term: "Royal Yugoslav Guard",
      definition: 'An elite cavalry unit of the Royal Yugoslav Army tasked with protecting King Alexander I and the royal family. Serving in this unit was considered a prestigious honor.',
      type: 'term',
    },
  },
};

// Get context data for a chapter by slug
export function getChapterContext(slug: string): ChapterContextData | null {
  const contextMap: Record<string, ChapterContextData> = {
    'origins-and-family-roots': chapter1Context,
    'childhood-in-vizmarje': chapter2Context,
    'war-and-occupation': chapter3Context,
    'communist-takeover-and-loss': chapter4Context,
    'refugee-years': chapter5Context,
    'journey-to-america': chapter6Context,
    'building-a-new-life': chapter7Context,
    'family-and-career': chapter8Context,
  };
  return contextMap[slug] || null;
}

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
}

export interface ChapterContextData {
  contextCards: ContextContent[];
  annotations: Record<string, AnnotationData>;
  photos?: HistoricalPhotoData[];
  inlineMaps?: InlineMapData[];
}

// Chapter 4: Communist Takeover & Loss - Example rich content
export const chapter4Context: ChapterContextData = {
  contextCards: [
    {
      id: 'communist-takeover',
      title: 'The Communist Takeover of Yugoslavia',
      subtitle: 'May 1945',
      content: `As World War II ended in Europe, Josip Broz Tito's communist Partisans seized control of Yugoslavia. Unlike other Eastern European countries where Soviet troops installed communist regimes, Yugoslavia's communists had largely liberated the country themselves, giving Tito significant independence from Moscow.

The new regime moved quickly to consolidate power. Perceived enemies—including those who had collaborated with Axis forces, political opponents, and even those simply suspected of anti-communist sentiment—faced arrest, imprisonment, or worse. Historians estimate that tens of thousands of people were killed in the months following liberation in what became known as the "post-war killings."

For families like the Koscaks, who had lived through the war in occupied Slovenia, the liberation brought not freedom but new terror. The knock on the door could come at any time.`,
      type: 'history',
      sources: [
        { name: 'Encyclopedia Britannica', url: 'https://www.britannica.com/place/Yugoslavia-former-federated-nation-1929-2003' },
        { name: 'Slovenia 1945 by John Corsellis' },
      ],
      afterParagraph: 0,
    },
    {
      id: 'dp-camps',
      title: 'Displaced Persons Camps',
      subtitle: 'Europe\'s Refugee Crisis, 1945-1951',
      content: `At the end of World War II, Europe faced an unprecedented refugee crisis. Millions of people—Holocaust survivors, former prisoners of war, forced laborers, and those fleeing new communist regimes—found themselves unable or unwilling to return home.

The Allied powers established Displaced Persons (DP) camps across Germany, Austria, and Italy to house these refugees. The camps were administered by the United Nations Relief and Rehabilitation Administration (UNRRA) and later the International Refugee Organization (IRO).

Life in the camps was difficult but provided safety and basic necessities. Refugees waited—sometimes for years—for countries to accept them for resettlement. The United States, Canada, Australia, and various South American countries gradually opened their doors, with the US Displaced Persons Act of 1948 eventually allowing over 400,000 refugees to immigrate to America.`,
      type: 'history',
      sources: [
        { name: 'US Holocaust Memorial Museum', url: 'https://encyclopedia.ushmm.org/content/en/article/displaced-persons' },
        { name: 'UNHCR Archives' },
      ],
      afterParagraph: 3,
    },
  ],
  annotations: {
    'communists': {
      term: 'Yugoslav Communists',
      definition: 'The Communist Party of Yugoslavia, led by Josip Broz Tito, which came to power in 1945 and established a socialist federal republic that lasted until 1991.',
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
      definition: 'People imprisoned for their political beliefs, associations, or perceived opposition to the communist regime. Many were held without trial, tortured, and executed. Mark\'s father was among thousands arrested in the immediate post-war period.',
      type: 'term',
    },
    'secret police': {
      term: 'OZNA (Yugoslav Secret Police)',
      definition: 'The Department for the Protection of the People (OZNA) was Yugoslavia\'s secret police and intelligence agency from 1944-1946. It conducted mass arrests, operated prison camps, and carried out extrajudicial killings.',
      type: 'term',
      year: '1944-1946',
    },
    'Kellerberg Displaced Persons Camp': {
      term: 'Kellerberg DP Camp',
      definition: 'A displaced persons camp in the British occupation zone of Austria, near Villach in Carinthia. Thousands of refugees from Yugoslavia and other countries lived here while awaiting resettlement to new countries.',
      type: 'place',
      year: '1945-1951',
    },
    'Ljubljana': {
      term: 'Ljubljana',
      definition: 'The capital and largest city of Slovenia. During WWII it was occupied first by Italy, then Germany. After the war, it became part of the Socialist Federal Republic of Yugoslavia.',
      type: 'place',
    },
    'Maribor': {
      term: 'Maribor',
      definition: 'Slovenia\'s second-largest city, located in the northeast near the Austrian border. The Koscak family was held here in detention before being deported to Austria.',
      type: 'place',
    },
    'Catholic Relief Organization': {
      term: 'Catholic Relief Services',
      definition: 'An American Catholic humanitarian organization founded in 1943. After WWII, it played a major role in resettling European refugees to the United States, sponsoring families and helping them establish new lives.',
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
  };
  return contextMap[slug] || null;
}

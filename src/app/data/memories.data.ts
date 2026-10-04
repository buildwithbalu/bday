export interface MemoryImage {
  url: string;
  caption: string;
  tag?: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  subtitle?: string;
  tag: string;
  icon: string;
  description: string;
  quote?: string;
  folder: string;
  images: MemoryImage[];
  funnyCards?: {
    icon: string;
    title: string;
    text: string;
    highlight?: boolean;
  }[];
}

export const VITOPIA_MEMORY = {
  title: 'The Unbreakable Stand at VITOPIA',
  subtitle: 'When college friends turned into something deeper and permanent',
  quote: `During VITOPIA, whenever someone teased me, you never stayed silent.
You stood beside me and even spoke to Srinivas Anna in support of me.
That was probably one of the first moments I realized how much you genuinely cared.`,
  folder: 'assets/images/vitopia/',
  images: [
    { url: 'assets/images/vitopia/vitopia-1.svg', caption: 'Standing together during the college fest nights' },
    { url: 'assets/images/vitopia/vitopia-2.svg', caption: 'The moment that changed everything — true sister care' },
    { url: 'assets/images/vitopia/vitopia-3.svg', caption: 'VITOPIA energy & unconditional support' }
  ]
};

export const TIMELINE_MEMORIES: TimelineEvent[] = [
  {
    id: 'rakhi-2025',
    date: '12 Aug 2025',
    title: 'The Rakhi That Changed Everything',
    subtitle: 'A Sacred Sacred Thread That Gave Me A Sister',
    tag: 'Unforgettable Moment',
    icon: '❤️',
    description: 'A moment etched forever into my heart.',
    quote: `The day you tied Rakhi to me…
I can't explain it, but for the first time it truly felt like I had a sister.
That feeling is still one of my favorite memories.`,
    folder: 'assets/images/rakhi/',
    images: [
      { url: 'assets/images/rakhi/rakhi-1.svg', caption: 'The sacred Rakhi tied with love and blessings' },
      { url: 'assets/images/rakhi/rakhi-2.svg', caption: 'The proud smile of a brother finding his sister' }
    ]
  },
  {
    id: 'birthday-2025',
    date: '22 Sep 2025',
    title: 'Your Birthday Celebration',
    subtitle: 'A Day Across Three Wonderful Places',
    tag: 'Celebration',
    icon: '🎂',
    description: 'Blessings at the temple, strolling through the mall, and enjoying the movie together.',
    quote: `Last year's birthday…
Three places. Countless memories.`,
    folder: 'assets/images/birthday2025/',
    images: [
      { url: 'assets/images/birthday2025/temple.svg', caption: 'Ammavari Temple — Seeking blessings for your happiness' },
      { url: 'assets/images/birthday2025/mall.svg', caption: 'Mall — Walking, window shopping, and endless laughs' },
      { url: 'assets/images/birthday2025/movie.svg', caption: 'Movie — Popcorn, excitement, and unforgettable time' }
    ]
  },
  {
    id: 'ambedkar-trip',
    date: '8 Dec 2025',
    title: 'The Legendary Ambedkar Statue Trip',
    subtitle: 'Chaos, Shawarma, and Pure Comedy',
    tag: 'Pure Fun',
    icon: '😂',
    description: 'One of the funniest, most chaotic, and cherished adventures we have ever had.',
    folder: 'assets/images/ambedkar/',
    images: [
      { url: 'assets/images/ambedkar/ride.svg', caption: 'Breezy bike ride towards the statue' },
      { url: 'assets/images/ambedkar/shawarma.svg', caption: 'The mandatory shawarma feast stop' }
    ],
    funnyCards: [
      {
        icon: '🏍️',
        title: 'The Epic Bike Ride',
        text: 'Cruising through the road with endless breeze and songs.'
      },
      {
        icon: '🌯',
        title: 'Shawarma Feasts',
        text: 'You claim you are not hungry, then finish half of my shawarma!'
      },
      {
        icon: '🗺️',
        title: 'Google Maps Mastery 0/10',
        text: 'Taking three wrong U-turns because maps are "too confusing" 😂',
        highlight: true
      },
      {
        icon: '👵',
        title: 'The "Aunty" Incident',
        text: 'The unforgettable moment someone called you "Aunty" and your reaction was priceless!',
        highlight: true
      }
    ]
  },
  {
    id: 'kotappakonda-2026',
    date: '22 Feb 2026',
    title: 'Kotappakonda Trip',
    subtitle: 'Quiet Roads & Scenic Mountain Peace',
    tag: 'Serenity',
    icon: '⛰️',
    description: 'Away from all the noise, surrounded by rolling hills and calm winds.',
    quote: `Some memories aren't loud.
They're peaceful enough to stay forever.`,
    folder: 'assets/images/kotappakonda/',
    images: [
      { url: 'assets/images/kotappakonda/mountain-1.svg', caption: 'Panoramic hills overlooking the tranquil horizon' },
      { url: 'assets/images/kotappakonda/mountain-2.svg', caption: 'Peaceful moments that stay forever' }
    ]
  },
  {
    id: 'beach-day-2026',
    date: '4 Jul 2026',
    title: 'Beach Day',
    subtitle: 'Golden Waves & Ocean Whispers',
    tag: 'Ocean Horizon',
    icon: '🌊',
    description: 'Walking by the water while the ocean breeze carried our laughter.',
    quote: `Waves came and went.
Somehow this memory never did.`,
    folder: 'assets/images/beach/',
    images: [
      { url: 'assets/images/beach/beach-1.svg', caption: 'Sunset reflection shimmering across gentle tides' },
      { url: 'assets/images/beach/beach-2.svg', caption: 'Footprints washed away, but memories permanently engraved' }
    ]
  }
];

/**
 * ============================================================================
 * 📝 MASTER EDITABLE CONTENT FILE FOR "TO MY SISTER" BIRTHDAY WEBSITE
 * ============================================================================
 * 
 * HOW TO EDIT:
 * - You do NOT need to touch any HTML, CSS, or TypeScript code!
 * - Simply edit the text, dates, names, or messages inside the quotation marks below.
 * - Save this file, and your changes will immediately show up on the website.
 * - Replace placeholder image paths ('assets/images/...') with your own photos whenever you want.
 * ============================================================================
 */

export interface EditableStoryCard {
  emoji: string;
  title: string;
  text: string;
  highlight?: boolean;
}

export interface EditableMemoryImage {
  url: string;
  caption: string;
  tag?: string;
  type?: 'image' | 'video'; // Specify 'video' for .mp4/.webm videos, or 'image' (auto-detected if ends with .mp4)
  thumbnail?: string; // Optional preview poster image
}

export type EditableMediaItem = EditableMemoryImage;

export interface EditableTimelineEvent {
  id: string;
  date: string;
  title: string;
  subtitle?: string;
  tag: string;
  icon: string;
  description: string;
  quote?: string;
  folder: string;
  images: EditableMemoryImage[]; // Can be images OR videos!
  funnyCards?: {
    icon: string;
    title: string;
    text: string;
    highlight?: boolean;
  }[];
}

export interface EditableQuizOption {
  label: string;
  isLikki: boolean;
  funnyReaction: string;
}

export interface EditableQuizQuestion {
  id: number;
  question: string;
  options: EditableQuizOption[];
}

export interface EditableSecretPhoto {
  url: string;
  caption: string;
  date?: string;
  tag?: string;
  type?: 'image' | 'video';
}

export interface EditableChatMessage {
  sender: string;
  message?: string;
  time: string;
  reaction?: string;
  videoUrl?: string; // Optional video in chat (.mp4, .webm)
  imageUrl?: string; // Optional photo in chat
}

export interface EditablePersonalNote {
  title: string;
  content: string;
  date: string;
  pinned?: boolean;
}

export interface EditableWishItem {
  icon: string;
  text: string;
}

export const EDITABLE_CONTENT = {
  // --------------------------------------------------------------------------
  // 1. GENERAL PROFILE & NAMES
  // --------------------------------------------------------------------------
  profile: {
    // Your sister's full name:
    sisterName: 'Likhitha',
    // Her nickname:
    nickname: 'Likki',
    // What you are called (or what she calls you):
    myCallName: 'Thambi',
    // Birthday date display:
    birthdayDate: 'September 22',
  },

  // --------------------------------------------------------------------------
  // 2. CHAPTER TITLES & NAVIGATION LABELS
  // --------------------------------------------------------------------------
  navigation: {
    siteTitle: 'To My Sister',
    chapters: [
      { path: '/home', label: 'Home', number: '0' },
      { path: '/beginning', label: 'Our Beginning', number: '1' },
      { path: '/vitopia', label: 'VITOPIA', number: '2' },
      { path: '/memories', label: 'Memories', number: '3' },
      { path: '/quiz', label: 'Sister Quiz', number: '4' },
      { path: '/secret-room', label: 'Secret Room', number: '5', isSecret: true },
      { path: '/letter', label: 'The Letter', number: '6' },
      { path: '/reveal', label: 'Reveal', number: '7', isHighlight: true }
    ]
  },

  // --------------------------------------------------------------------------
  // 3. HOME / HERO PAGE
  // --------------------------------------------------------------------------
  hero: {
    badge: 'Handcrafted With Endless Love For Likki',
    titlePrefix: 'To My',
    titleHighlight: 'Sister ❤️',
    quote: '"Some people enter our lives as friends. A few become like family. And then there is you who effortlessly became my sister."',
    buttonText: 'Begin Our Journey ✨',
    
    // ------------------------------------------------------------------------
    // Then vs Now Photo Comparison:
    // ------------------------------------------------------------------------
    heroComparison: {
      heading: 'Then vs Now',
      subheading: 'Looking back at how far our bond has grown over the years',
      firstYear: {
        image: 'assets/images/vitopia/WhatsApp Image 2026-09-29 at 10.05.14 PM.jpeg',
        caption: 'First year of knowing each other (College days)',
        label: 'THEN • 2024'
      },
      current: {
        image: 'assets/images/vitopia/WhatsApp Image 2026-09-30 at 3.19.07 PM.jpeg',
        caption: 'The wonderful, protective sister she is today',
        label: 'NOW • 2026'
      },
      centralCaption: 'Same person. Different chapter.'
    },

    voiceMessage: {
      title: 'Voice Note for Likki 🎙️',
      subtitle: 'From Thambi with love',
      caption: 'A small voice note straight from the heart. Tap play to listen.',
      url: 'assets/audio/voicemsg.ogg'
    },
  },

  // --------------------------------------------------------------------------
  // 4. CHAPTER 1: OUR BEGINNING
  // --------------------------------------------------------------------------
  beginning: {
    chapterTag: 'Chapter 01',
    heading: 'Our Beginning',
    subheading: 'Where the journey started and a bond was born',
    quoteLine1: 'Out of all the people I could have met,',
    quoteLine2: 'Iam grateful that life brought me to you.',
    quoteLine3: 'iam very lucky to find a soul like yours',
    cards: [
      //{
        //emoji: '🎓',
        //title: 'Day One of College',
        //text: 'We became friends from the very beginning of our college days. Amidst the new campus, unfamiliar faces, and endless lectures, our conversations felt effortlessly natural and genuine from the start.'
     // },
      {
        emoji: '💛',
        title: 'The Snapchat Request',
        text: 'naku aythe idi antha snapchat message tho start ayindi and naku teliyakundane ninnu akka ani pilichesa so alreadyt written anukunta nuv nak akka role.so andhuke asalu nuvu boys tho matladani danivi naku antha close ayyav',
        highlight: true
      },
      {
        emoji: '☀️',
        title: 'The Daily Ritual',
        text: 'Life gets busy, but some things remain irreplaceable. Without your Good Morning and Good Night messages, my day genuinely feels incomplete. That consistency is pure love.'
      }
    ] as EditableStoryCard[]
  },

  // --------------------------------------------------------------------------
  // 5. CHAPTER 2: VITOPIA
  // --------------------------------------------------------------------------
  vitopia: {
    chapterTag: 'Chapter 02',
    heading: 'It all started during VITOPIA',
    subheading: 'When college friends turned into something deeper and permanent',
    quote: `During VITOPIA,andaru nannu adukuntuna nuv matram nak support chestune unav.ni gengiune smile chusa ah roju motham navvuthune happy ga unav natho.
last ki Srinivas anna tho kuda matladav na tharupuna.
That was probably one of the first moments I realized how much you genuinely cared.`,
    images: [
      {
        url: 'assets/images/vitopia/likki_1.jpeg',
        caption: 'Standing together during the college fest nights'
      },
      {
        url: 'assets/images/vitopia/likki-2.jpeg',
        caption: 'The moment that changed everything — true sister care'
      },
      {
        url: 'assets/images/vitopia/likki-3.jpeg',
        caption: 'VITOPIA energy & unconditional support'
      }
    ] as EditableMemoryImage[]
  },

  // --------------------------------------------------------------------------
  // 6. CHAPTER 3: TIMELINE OF CHERISHED MEMORIES
  // --------------------------------------------------------------------------
  timeline: {
    chapterTag: 'Chapter 03',
    heading: 'Cherished Memories',
    subheading: 'Moments in time that defined our friendship and turned us into siblings.',
    events: [
      {
        id: 'rakhi-2025',
        date: '12 Aug 2025',
        title: 'First time rakhi',
        subtitle: 'A Sacred Thread That Gave Me A Sister',
        tag: 'Unforgettable Moment',
        icon: '❤️',
        description: 'A moment etched forever into my heart.',
        quote: `The day you tied Rakhi to me…
I can't explain it, but for the first time it truly felt like I had a sister from non blood.
That feeling is still one of my favorite memories.`,
        folder: 'assets/images/rakhi/',
        images: [
          {
            url: 'assets/videos/WhatsApp Video 2026-10-04 at 11.10.39 PM.mp4',
            type: 'video',
            caption: 'The Rakhi that gave me a sister ❤️'
          },
          //{ url: 'assets/images/rakhi/rakhi-1.svg', caption: 'The sacred Rakhi tied with love and blessings' },
          //{ url: 'assets/images/rakhi/rakhi-2.svg', caption: 'The proud smile of a brother finding his sister' }
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
          // You can insert photos (.jpg, .png, .svg) OR videos (.mp4, .webm) here!
          { url: 'assets/images/birthday2025/likki-5.mp4', type: 'video' },
          { url: 'assets/images/birthday2025/WhatsApp Image 2026-10-02 at 6.50.38 PM.jpeg', caption: 'Ammavari Temple' },
         // { url: 'assets/images/birthday2025/mall.svg', caption: 'Mall — Walking, window shopping, and endless laughs' },
          //{ url: 'assets/images/birthday2025/movie.svg', caption: 'Movie — Popcorn, excitement, and unforgettable time' }
        ]
      },
      {
        id: 'ambedkar-trip',
        date: '8 Dec 2025',
        title: 'Ambedkar Statue',
        subtitle: 'A day to remember',
        tag: 'Pure Fun',
        icon: '😂',
        description: 'Ah roju megna vala inti nunchi vastane ninnu tisukella,nuv miss ayina feeling rakudadhu ani niku ..such a nice oppertunity for me to make my akka feel happy ',
        folder: 'assets/images/ambedkar/',
        images: [
          { url: 'assets/images/ambedkar/likki-4.jpeg' },
          //{ url: 'assets/images/ambedkar/shawarma.svg', caption: 'The mandatory shawarma feast stop' }
        ],
        funnyCards: [
          { 
            icon: '🏍️',
            title: 'Bike Ride',
            text: 'Second time anukunta nuv na bike yekkatam appudu'
          },
          {
            icon: '🌯',
            title: 'Shawarma',
            text: 'eat steet lo tinam shawarma '
          },
          {
            icon: '🗺️',
            title: 'Google Maps',
            text: 'Taking three wrong U-turns because maps are "too confusing" ',
            highlight: true
          },
          {
            icon: '👵',
            title: 'The "Aunty" Incident',
            text: 'The unforgettable moment someone called you "Aunty" and your reaction was 😂 !',
            highlight: true
          }
        ]
      },
      {
        id: 'kotappakonda',
        date: '22 Feb 2026',
        title: 'Kotappakonda Trip',
        subtitle: 'A another day to remember',
        icon: '⛰️',
        description: 'Em chepalli abba ah roju gurinchi....',
        quote: `Some memories aren't loud.
They're peaceful enough to stay forever.`,
        folder: 'assets/images/kotappakonda/',
        images: [
          { url: 'assets/images/kotappakonda/kotappakonda.jpeg',  },
          { url: 'assets/images/kotappakonda/kotappakonda-2.jpeg', }
        ]
      },
      {
        id: 'beach-day-2026',
        date: '4 Jul 2026',
        title: 'Beach Day',
        subtitle: 'A full day to remember',
        tag: 'Ocean Horizon',
        icon: '🌊',
        description: 'chala baga enjoy chesam beach lo ',
        //quote: `Waves came and went.
//Somehow this memory never did.`,
        folder: 'assets/images/beach/',
        images: [
          { url: 'assets/images/beach/WhatsApp Image 2026-10-02 at 6.57.01 PM.jpeg', caption: 'Bale unnav' },
          { url: 'assets/images/beach/WhatsApp Image 2026-10-02 at 6.56.34 PM.jpeg', caption: 'Heronie' }
        ]
      }
    ] as EditableTimelineEvent[]
  },

  // --------------------------------------------------------------------------
  // 7. CHAPTER 4: SISTER QUIZ
  // --------------------------------------------------------------------------
  quiz: {
    chapterTag: 'Chapter 04',
    heading: 'Sister Quiz 😂',
    subheading: "Let's test the facts! Who does what in this sister-brother dynamic?",
    questions: [
      {
        id: 1,
        question: 'who loves most ?',
        options: [
          { label: 'Likki', isLikki: true, funnyReaction: 'correct likki loves most ' },
          { label: 'Thambi', isLikki: false, funnyReaction: 'Nice try,but thambi dont show love that much' },
          //{ label: 'Google Maps itself is wrong', isLikki: true, funnyReaction: 'Likki’s classic excuse: "The GPS doesn\'t understand my route!"' }
        ]
      },
      {
        id: 2,
        question: 'Who sends Good Morning and Good Night messages first?',
        options: [
          { label: 'Likki ☀️ (Every single day without fail)', isLikki: true, funnyReaction: 'Her messages make my day genuinely complete ❤️' },
          { label: 'Thambi (Still half asleep 🥱)', isLikki: false, funnyReaction: 'Thambi wakes up and sees Likki’s message already waiting!' },
          { label: 'Whoever checks phone first', isLikki: false, funnyReaction: 'Nope, Likki’s consistency is unmatched!' }
        ]
      },
      {
        id: 3,
        question: 'Who starts random, unprompted conversations out of nowhere?',
        options: [
          { label: 'Likki 🗣️ ("Thambi, listen to this crazy story...")', isLikki: true, funnyReaction: 'Out of nowhere with the most entertaining gossip!' },
          { label: 'Thambi 🤫 (Just nodding and listening)', isLikki: false, funnyReaction: 'Thambi is usually the patient audience!' },
          { label: 'Both simultaneously', isLikki: false, funnyReaction: 'Usually Likki sparks the fire with high energy!' }
        ]
      },
      {
        id: 4,
        question: 'Who overreacts more dramatically to the smallest things?',
        options: [
          { label: 'Likki 🎭 (Full dramatic expression mode!)', isLikki: true, funnyReaction: 'Oscar-worthy emotional reactions every single time!' },
          { label: 'Thambi (Calm observer)', isLikki: false, funnyReaction: 'Thambi is laughing at her reaction!' },
          { label: 'Equally dramatic', isLikki: false, funnyReaction: 'No way! Likki takes the crown easily 👑' }
        ]
      },
      {
        id: 5,
        question: 'what is my fav food ?',
        options: [
          { label: 'biryani', isLikki: true, funnyReaction: '"corect' },
          { label: 'chapathi', isLikki: false, funnyReaction: 'waste' },
          { label: 'puri', isLikki: true, funnyReaction: '!' }
        ]
      }
    ] as EditableQuizQuestion[]
  },

  // --------------------------------------------------------------------------
  // 8. CHAPTER 5: PROTECTED SECRET ROOM
  // --------------------------------------------------------------------------
  secretRoom: {
    chapterTag: 'Chapter 05',
    headerBadge: 'Top Secret Vault 🔒',
    heading: 'The Secret Room 🔒',
    title: 'Our Private Vault of Memories',
    subheading: 'A private vault reserved exclusively for the memories, chats, and notes that mean the world to us.',
    vaultPromptTitle: 'Protected Memory Vault',
    vaultPromptDesc: 'Enter the secret passcode to unlock our personal archives.',
    unlockButtonText: 'Unlock Vault ✨',
    hintButtonText: '💡 Need a hint?',
    hintText: 'where did balaji get most happiness',
    incorrectPassMessage: 'Incorrect secret code. Try asking your Thambi or check the hint!',
    
    // Allowed passcodes (case-insensitive fallback):
    allowedPasswords: ['likki', 'iskon temple','iskon' ,'thambi', 'sister', 'likki2026'],

    // Dedicated Video Memory for Secret Room:
    videoMemory: {
      title: 'Special Video Memory 🎬',
      subtitle: 'coming soon ',
      caption: 'manadhi motham video chesi ikkada pedtha ley',
      url: 'assets/videos/WhatsApp Video 2026-10-04 at 11.10.39 PM.mp4'
    },

    // Vault Photos:
    photos: [
      {
        url: 'assets/images/private/WhatsApp Video 2026-09-30 at 3.33.07 PM.mp4',
        caption: 'my fav video',
        date: 'Late College Days',
        type: 'video',
        tag: 'Candid'
      },
      {
        url: 'assets/videos/WhatsApp Video 2026-09-30 at 3.22.38 PM.mp4',
        caption: 'When you started lecturing me about life like an elder sister.',
        date: 'Snapchat Streaks & Chats',
        tag: 'Chat Memory'
      },
     // {
       // url: 'assets/images/private/chat-2.svg',
        //caption: 'The countless daily "Good Morning" and "Good Night" streaks that brighten my days.',
        //date: 'Every Single Morning',
        //tag: 'Daily Ritual'
      //},
     // {
//        url: 'assets/images/private/polaroid.svg',
  //      caption: 'A bond stronger than any bloodline could ever define.',
    //    date: 'Forever',
      //  tag: 'Sisterhood'
      //}
    ] as EditableSecretPhoto[],

    // Vault Chat Memories:
    chats: [
      {
        sender: 'Likki',
        message: 'Thambi!! Did you eat food yet? Don\'t skip meals!',
        time: '1:45 PM',
        reaction: '❤️'
      },
      {
        sender: 'Thambi',
        message: 'Just finished Likki! You don\'t need to worry so much 😂',
        time: '1:47 PM',
        reaction: '🤍'
      },
      {
        sender: 'Likki',
        message: 'If I don\'t scold you, who will? I am your sister, remember! 👊',
        time: '1:48 PM',
        reaction: '🥺'
      },
      {
        sender: 'Thambi',
        message: 'Haha best sister in the world 💛',
        time: '1:49 PM',
        reaction: '✨'
      },
      {
        sender: 'Likki',
        message: 'Look at this video clip from our day out! 🎬',
        videoUrl: 'assets/videos/likki-5.mp4',
        time: '1:50 PM',
        reaction: '😂'
      }
    ] as EditableChatMessage[],

    // Vault Personal Notes:
    personalNotes: [
      {
        title: 'Note to Likki #1: Unmatched Care',
        content: 'I still tell my friends how lucky I am. You never hesitate to stand up for me, whether it is in front of Srinivas Anna or anyone else. That kind of sisterly protection is priceless.',
        date: 'Written by Thambi',
        pinned: true
      },
      {
        title: 'Note to Likki #2: The Good Morning Habit',
        content: 'Sometimes you ask why I wait for your messages. It’s because in a busy world, knowing someone genuinely checks on you every morning and night is the warmest blessing.',
        date: 'Written by Thambi',
        pinned: true
      }
    ] as EditablePersonalNote[]
  },

  // --------------------------------------------------------------------------
  // 9. CHAPTER 6: EMOTIONAL LETTER
  // --------------------------------------------------------------------------
  letter: {
    chapterTag: 'Chapter 06',
    heading: 'Words From The Heart',
    subheading: 'Some feelings cannot be expressed in brief texts. This one is written just for you.',
  salutation: 'Dear Likki,',
    paragraphs: [
      'lopala undi letter malli reveal chesta ley '
    ],
   birthdayWish: 'Happy Birthday, Likki ❤️',
    signOff: '— Your Thambi'
  },

  // --------------------------------------------------------------------------
  // 10. CHAPTER 7: GRAND BIRTHDAY REVEAL & SURPRISE
  // --------------------------------------------------------------------------
  reveal: {
    chapterTag: 'The Final Chapter',
    heading: 'The Birthday Reveal',
    subheading: 'We have looked back at our beginnings, college days, trips, and memories. Now, there is just one final surprise waiting for you.',
    buttonText: 'Open Final Surprise ✨',
    stage1Text: 'One last thing…',
    stage2Text: 'You were never just my non blood sister',
    stage3Text: 'You are more than to me ❤️',
    queenBadge: '👑 Queen of Today • Sep 22',
    grandHappy: 'HAPPY BIRTHDAY',
    grandName: 'LIKHITHA',
    grandSubtitle: 'To the kindest, most caring, and most protective sister anyone could ever dream of having.',
    portraitCaption: 'The Best Sister In The World ❤️',

    // Dedicated Birthday Highlight Video:
    highlightVideo: {
      title: 'Birthday Highlight Reel 🎥',
      subtitle: 'A Special Video For Likki',
      caption: 'Every memory, smile, and shared laugh wrapped into one special video. Turn up the volume!',
      url: 'assets/images/birthday2025/WhatsApp Video 2026-10-04 at 10.52.08 PM.mp4'
    },

    wishes: [
      { icon: '🌟', text: 'Always keep smiling that radiant smile' },
      { icon: '🛡️', text: 'Always stay the fiercely protective sister you are' },
      { icon: '🌯', text: 'I promise to always share my shawarma with you!' }
    ] as EditableWishItem[],
    footerLove: 'Made with endless love by your Thambi ❤️',
    footerSub: 'Forever your brother, today and every day.',
    replayBtnText: '🔄 Replay Birthday Reveal'
  }
};

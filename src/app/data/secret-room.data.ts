export interface SecretPhoto {
  url: string;
  caption: string;
  date?: string;
  tag: string;
}

export interface ChatMemory {
  sender: 'Likki' | 'Thambi';
  message: string;
  time: string;
  reaction?: string;
}

export interface VoiceNote {
  title: string;
  duration: string;
  description: string;
  audioUrl?: string;
}

export interface PersonalNote {
  title: string;
  content: string;
  date: string;
  pinned?: boolean;
}

export const SECRET_ROOM_DATA = {
  headerBadge: 'Top Secret Vault 🔒',
  title: 'Our Private Vault of Memories',
  subtitle: 'Exclusive moments, unfiltered jokes, late night chats & personal notes reserved just for us.',
  folder: 'assets/images/private/',
  photos: [
    {
      url: 'assets/images/private/secret-1.svg',
      caption: 'The unfiltered, real moments when we laughed until our stomachs hurt.',
      date: 'Late College Days',
      tag: 'Candid'
    },
    {
      url: 'assets/images/private/chat-1.svg',
      caption: 'When you started lecturing me about life like an elder sister.',
      date: 'Snapchat Streaks & Chats',
      tag: 'Chat Memory'
    },
    {
      url: 'assets/images/private/chat-2.svg',
      caption: 'The countless daily "Good Morning" and "Good Night" streaks that brighten my days.',
      date: 'Every Single Morning',
      tag: 'Daily Ritual'
    },
    {
      url: 'assets/images/private/polaroid.svg',
      caption: 'A bond stronger than any bloodline could ever define.',
      date: 'Forever',
      tag: 'Sisterhood'
    }
  ],
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
    }
  ],
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
  ],
  voiceNotes: [
    {
      title: 'Birthday Note: A Sister\'s Blessing',
      duration: '0:45',
      description: 'Placeholder for personal audio note or voice message from Thambi.'
    },
    {
      title: 'VITOPIA Fest Cheering & Laughs',
      duration: '1:12',
      description: 'Audio archive recording of celebration laughter and college memories.'
    }
  ]
};

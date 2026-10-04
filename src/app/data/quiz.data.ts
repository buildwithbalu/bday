export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    label: string;
    isLikki: boolean;
    funnyReaction: string;
  }[];
}

export const SISTER_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Who gets lost even with Google Maps open?',
    options: [
      { label: 'Likki 😂 (No question about it!)', isLikki: true, funnyReaction: 'Accurate! "Turn left in 200m" -> turns right immediately.' },
      { label: 'Thambi (The navigator)', isLikki: false, funnyReaction: 'Nice try, but Thambi is the one holding the compass!' },
      { label: 'Google Maps itself is wrong', isLikki: true, funnyReaction: 'Likki’s classic excuse: "The GPS doesn\'t understand my route!"' }
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
    question: 'Who says "I’m not hungry" and then eats my shawarma?',
    options: [
      { label: 'Likki 🌯 (Steals the best bites with zero remorse)', isLikki: true, funnyReaction: '"Just one bite Thambi..." *eats 75% of it* 😂' },
      { label: 'Thambi', isLikki: false, funnyReaction: 'Thambi is the victim here protecting his food!' },
      { label: 'The food mysteriously vanished', isLikki: true, funnyReaction: 'Vanished into Likki\'s stomach!' }
    ]
  }
];

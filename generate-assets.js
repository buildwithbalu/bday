const fs = require('fs');
const path = require('path');

function createSvgPlaceholder(title, subtitle, icon, bgGradientStart, bgGradientEnd, accentColor) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bgGradientStart}"/>
      <stop offset="100%" stop-color="${bgGradientEnd}"/>
    </linearGradient>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fff2cc"/>
      <stop offset="50%" stop-color="#dfb15b"/>
      <stop offset="100%" stop-color="#b38728"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="15" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="800" height="600" fill="url(#bg)"/>

  <!-- Subtle grid pattern -->
  <circle cx="400" cy="300" r="280" fill="none" stroke="${accentColor}" stroke-width="1.5" stroke-dasharray="6,6" opacity="0.3"/>
  <circle cx="400" cy="300" r="200" fill="none" stroke="${accentColor}" stroke-width="1" opacity="0.4"/>
  <circle cx="400" cy="300" r="120" fill="none" stroke="${accentColor}" stroke-width="2" opacity="0.6"/>

  <!-- Outer Elegant Border -->
  <rect x="25" y="25" width="750" height="550" rx="20" fill="none" stroke="url(#gold)" stroke-width="2" opacity="0.75"/>
  <rect x="35" y="35" width="730" height="530" rx="14" fill="none" stroke="${accentColor}" stroke-width="1" opacity="0.25"/>

  <!-- Corner Ornaments -->
  <circle cx="25" cy="25" r="4" fill="#dfb15b"/>
  <circle cx="775" cy="25" r="4" fill="#dfb15b"/>
  <circle cx="25" cy="575" r="4" fill="#dfb15b"/>
  <circle cx="775" cy="575" r="4" fill="#dfb15b"/>

  <!-- Central Icon & Badge -->
  <circle cx="400" cy="240" r="65" fill="#121220" stroke="url(#gold)" stroke-width="2" filter="url(#glow)"/>
  <text x="400" y="258" font-size="54" text-anchor="middle" dominant-baseline="middle">${icon}</text>

  <!-- Title & Subtitle -->
  <text x="400" y="360" font-family="'Playfair Display', Georgia, serif" font-size="34" font-weight="bold" fill="url(#gold)" text-anchor="middle">${title}</text>
  <text x="400" y="405" font-family="'Plus Jakarta Sans', sans-serif" font-size="19" fill="#e2e8f0" text-anchor="middle" opacity="0.9">${subtitle}</text>
  <text x="400" y="445" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" letter-spacing="3" fill="#a0aec0" text-anchor="middle" text-transform="uppercase">Replace with personal photo in assets folder</text>
</svg>`;
}

const assets = [
  // Likki Hero
  {
    paths: ['images/likki/hero.svg'],
    title: 'Likhitha (Likki)',
    sub: 'The Best Sister in the Universe ❤️',
    icon: '👑',
    c1: '#1a1024', c2: '#0b0814', acc: '#ffd700'
  },
  // Vitopia
  {
    paths: ['images/vitopia/vitopia-1.svg'],
    title: 'VITOPIA Fest Nights',
    sub: 'Unforgettable college memories together',
    icon: '🎉',
    c1: '#121224', c2: '#080812', acc: '#e2b755'
  },
  {
    paths: ['images/vitopia/vitopia-2.svg'],
    title: 'Standing By My Side',
    sub: 'Speaking with Srinivas Anna in support of me',
    icon: '🛡️',
    c1: '#201424', c2: '#090812', acc: '#ff6b81'
  },
  {
    paths: ['images/vitopia/vitopia-3.svg'],
    title: 'The Bond Solidified',
    sub: 'When a friend truly became a sister',
    icon: '✨',
    c1: '#18152b', c2: '#080710', acc: '#e2b755'
  },
  // Rakhi
  {
    paths: ['images/rakhi/rakhi-1.svg'],
    title: '12 Aug 2025 • Rakhi Day',
    sub: 'The sacred thread that gave me a sister',
    icon: '❤️',
    c1: '#26121a', c2: '#0a0608', acc: '#ff4757'
  },
  {
    paths: ['images/rakhi/rakhi-2.svg'],
    title: 'Sacred Bond Forever',
    sub: 'One of my favorite memories in life',
    icon: '🌸',
    c1: '#241416', c2: '#090607', acc: '#ffd700'
  },
  // Birthday 2025
  {
    paths: ['images/birthday2025/temple.svg'],
    title: 'Ammavari Temple Visit',
    sub: 'Prayers & blessings for your joy and health',
    icon: '🛕',
    c1: '#241d10', c2: '#0c0a06', acc: '#ffd700'
  },
  {
    paths: ['images/birthday2025/mall.svg'],
    title: 'The Mall Stroll',
    sub: 'Endless laughter, windows shopping & teasing',
    icon: '🛍️',
    c1: '#131b26', c2: '#070a0e', acc: '#70a1ff'
  },
  {
    paths: ['images/birthday2025/movie.svg'],
    title: 'The Birthday Movie',
    sub: 'Popcorn, excitement, and unforgettable time',
    icon: '🎬',
    c1: '#1b1324', c2: '#09060e', acc: '#e056fd'
  },
  // Ambedkar
  {
    paths: ['images/ambedkar/ride.svg'],
    title: 'Ambedkar Statue Bike Ride',
    sub: '8 Dec 2025 • Endless breeze and songs',
    icon: '🏍️',
    c1: '#141e24', c2: '#070a0d', acc: '#2ed573'
  },
  {
    paths: ['images/ambedkar/shawarma.svg'],
    title: 'The Shawarma Stop',
    sub: '"I\'m not hungry" -> eats my food 😂',
    icon: '🌯',
    c1: '#261912', c2: '#0c0806', acc: '#ffa502'
  },
  // Kotappakonda
  {
    paths: ['images/kotappakonda/mountain-1.svg'],
    title: 'Kotappakonda Trip',
    sub: '22 Feb 2026 • Rolling hills & mountain tranquility',
    icon: '⛰️',
    c1: '#14201c', c2: '#060a08', acc: '#2ed573'
  },
  {
    paths: ['images/kotappakonda/mountain-2.svg'],
    title: 'Peaceful Enough to Stay Forever',
    sub: 'Some memories are quiet, but they never fade',
    icon: '🌄',
    c1: '#1c1b18', c2: '#080806', acc: '#ffd700'
  },
  // Beach
  {
    paths: ['images/beach/beach-1.svg'],
    title: 'Beach Day Sunset',
    sub: '4 Jul 2026 • Waves came and went. This memory stayed.',
    icon: '🌊',
    c1: '#0f1f2e', c2: '#050c14', acc: '#1e90ff'
  },
  {
    paths: ['images/beach/beach-2.svg'],
    title: 'Ocean Horizon',
    sub: 'Footprints washed away, our bond stays engraved',
    icon: '🌅',
    c1: '#281724', c2: '#0b060a', acc: '#ff6b81'
  },
  // Private Vault
  {
    paths: ['images/private/secret-1.svg'],
    title: 'Candid Moments',
    sub: 'Laughing until our stomachs hurt',
    icon: '📸',
    c1: '#201624', c2: '#0a070c', acc: '#e2b755'
  },
  {
    paths: ['images/private/chat-1.svg'],
    title: 'Elder Sister Scoldings',
    sub: '"Thambi, eat food! Don\'t stay hungry!"',
    icon: '💬',
    c1: '#162024', c2: '#060b0d', acc: '#70a1ff'
  },
  {
    paths: ['images/private/chat-2.svg'],
    title: 'Daily Good Morning Ritual',
    sub: 'Without your texts, my day genuinely feels incomplete',
    icon: '☀️',
    c1: '#242014', c2: '#0c0a06', acc: '#ffd700'
  },
  {
    paths: ['images/private/polaroid.svg'],
    title: 'Family By Heart',
    sub: 'Blood makes relatives. Love makes us siblings.',
    icon: '💛',
    c1: '#1c1524', c2: '#08060a', acc: '#ff6584'
  }
];

const baseDirs = [
  path.join(__dirname, 'src', 'assets'),
  path.join(__dirname, 'public', 'assets')
];

for (const baseDir of baseDirs) {
  for (const item of assets) {
    for (const relPath of item.paths) {
      const fullPath = path.join(baseDir, relPath);
      const dir = path.dirname(fullPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      const svg = createSvgPlaceholder(item.title, item.sub, item.icon, item.c1, item.c2, item.acc);
      fs.writeFileSync(fullPath, svg, 'utf8');
    }
  }

  // Also ensure music directory exists and create a readme
  const musicDir = path.join(baseDir, 'music');
  if (!fs.existsSync(musicDir)) {
    fs.mkdirSync(musicDir, { recursive: true });
  }
  fs.writeFileSync(
    path.join(musicDir, 'README.txt'),
    'Place your birthday music file here as "birthday-song.mp3". If not provided, the website uses a built-in ambient melodic harp synthesizer so music always plays beautifully!',
    'utf8'
  );
}

console.log('All asset folders and SVG placeholders created successfully!');

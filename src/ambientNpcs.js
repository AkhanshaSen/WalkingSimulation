/** Townsfolk with daily routines — brief chats, no companion walks. */
export const AMBIENT_NPCS = [
  {
    id: 'kenji',
    isAmbient: true,
    name: 'Kenji Yamada',
    nameJa: '山田 健二',
    personality: 'Baker',
    tagline: 'Runs the morning market bread stall.',
    emoji: '🍞',
    shirtColor: 0xf0e0c8,
    backpackColor: 0x806040,
    hairColor: 0x3a2a20,
    startT: 0.54,
    defaultExpression: 'happy',
    routine: 'work',
    firstMeet: {
      greeting: { expression: 'happy', text: 'Morning! Just pulled these melon pan from the oven. The whole market smells like butter and sunshine.' },
      choices: [
        { label: '"Smells amazing!"', response: { expression: 'happy', text: 'Take your time browsing. The market\'s best hours are before noon.' }, end: true },
        { label: '"What\'s popular today?"', response: { expression: 'thinking', text: 'Anko buns and curry bread. The fishermen buy half my stock before I finish setup.' }, end: true },
      ],
    },
    revisit: {
      greeting: { expression: 'happy', text: 'Back for more? I saved a warm one just in case.' },
      choices: [
        { label: '"How\'s business?"', response: { expression: 'happy', text: 'Steady! A town feeds itself when people stop to talk between errands.' }, end: true },
      ],
    },
  },
  {
    id: 'sora',
    isAmbient: true,
    name: 'Sora Mizuki',
    nameJa: '水樹 空',
    personality: 'Fishmonger',
    tagline: 'Sorting the morning catch at the harbor.',
    emoji: '🐟',
    shirtColor: 0xd0e8f0,
    backpackColor: 0x406080,
    hairColor: 0x2a3040,
    startT: 0.96,
    defaultExpression: 'neutral',
    routine: 'work',
    firstMeet: {
      greeting: { expression: 'neutral', text: 'Careful of the wet stones — fresh mackerel just came in. Glistening like silver coins.' },
      choices: [
        { label: '"Caught locally?"', response: { expression: 'happy', text: 'Right off the pier this morning. This harbor keeps the whole town fed.' }, end: true },
        { label: '"Beautiful view here."', response: { expression: 'thinking', text: 'I never get tired of it. The mountains, the water, the quiet after the boats leave.' }, end: true },
      ],
    },
    revisit: {
      greeting: { expression: 'happy', text: 'Good timing — still plenty of catch left.' },
      choices: [
        { label: '"Busy day?"', response: { expression: 'neutral', text: 'The usual. Ren runs past, Haruko tells stories, the cat steals a nap on crate three.' }, end: true },
      ],
    },
  },
  {
    id: 'emi',
    isAmbient: true,
    name: 'Emi Okamoto',
    nameJa: '岡本 恵美',
    personality: 'Playful kid',
    tagline: 'Chasing pigeons near the park.',
    emoji: '🎈',
    shirtColor: 0xf8c8d8,
    backpackColor: 0xf0e040,
    hairColor: 0x1a1010,
    startT: 0.80,
    defaultExpression: 'happy',
    routine: 'patrol',
    patrolTs: [0.78, 0.82, 0.80],
    firstMeet: {
      greeting: { expression: 'surprised', text: 'Whoa! You\'re tall. Are you exploring? I know every bench and every cat in this park!' },
      choices: [
        { label: '"Show me around?"', response: { expression: 'happy', text: 'Okay! The orange cat lives by the big tree. The pigeons hang out by the gazebo. Follow me!' }, end: true },
        { label: '"Having fun?"', response: { expression: 'happy', text: 'The best! Mom says I can play until the streetlights come on.' }, end: true },
      ],
    },
    revisit: {
      greeting: { expression: 'happy', text: 'Tag! You\'re it! ...Just kidding. Unless you want to be.' },
      choices: [
        { label: '"Catch you later!"', response: { expression: 'happy', text: 'Byeee! I\'ll be near the swings!' }, end: true },
      ],
    },
  },
  {
    id: 'jiro',
    isAmbient: true,
    name: 'Jiro Sato',
    nameJa: '佐藤 次郎',
    personality: 'Retired neighbor',
    tagline: 'Watching the street from his bench.',
    emoji: '🪑',
    shirtColor: 0xd8d0c0,
    backpackColor: 0x505050,
    hairColor: 0x909090,
    startT: 0.40,
    defaultExpression: 'thinking',
    routine: 'sit',
    firstMeet: {
      greeting: { expression: 'thinking', text: 'Mm. Sit a moment, young one. I\'ve watched this street change for sixty years. The vending machines were the big revolution.' },
      choices: [
        { label: '"What was it like before?"', response: { expression: 'thinking', text: 'Quieter. More bicycles. Mrs. Tanaka — Haruko\'s mother — planted that cherry tree by the garden.' }, end: true },
        { label: '"Enjoy your rest."', response: { expression: 'happy', text: 'Wise words. A bench is a fine place to understand a town.' }, end: true },
      ],
    },
    revisit: {
      greeting: { expression: 'happy', text: 'Ah, my regular visitor. The street looks different every time, doesn\'t it?' },
      choices: [
        { label: '"Any news today?"', response: { expression: 'thinking', text: 'Mio drew the torii again. Kenji sold out of anko buns by nine. A good day.' }, end: true },
      ],
    },
  },
  {
    id: 'yoko',
    isAmbient: true,
    name: 'Yoko Ishida',
    nameJa: '石田 陽子',
    personality: 'Florist',
    tagline: 'Tending the flower shop on cafe row.',
    emoji: '🌻',
    shirtColor: 0xf0f0d8,
    backpackColor: 0xe08090,
    hairColor: 0x4a3020,
    startT: 0.50,
    defaultExpression: 'happy',
    routine: 'work',
    firstMeet: {
      greeting: { expression: 'happy', text: 'Welcome to Hana no Ie! These cosmos just arrived — look how they lean toward the light.' },
      choices: [
        { label: '"Your shop is lovely."', response: { expression: 'happy', text: 'Flowers teach patience. You water, you wait, and one morning the whole window blooms.' }, end: true },
        { label: '"What sells best?"', response: { expression: 'thinking', text: 'Cherry blossom sprigs in spring. Sunflowers in summer. Haruko buys something every week.' }, end: true },
      ],
    },
    revisit: {
      greeting: { expression: 'happy', text: 'Perfect timing — I was just trimming the display.' },
      choices: [
        { label: '"They look beautiful."', response: { expression: 'shy', text: 'Thank you... I talk to them sometimes. It helps.' }, end: true },
      ],
    },
  },
];

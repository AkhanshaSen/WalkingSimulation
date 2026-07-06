/** Townsfolk with daily routines — brief chats + optional companion walks. */
export const AMBIENT_NPCS = [
  {
    id: 'kenji',
    name: 'Kenji Yamada',
    nameJa: '山田 健二',
    characterModel: 'character_male_b',
    personality: 'Baker',
    tagline: 'Runs the morning market bread stall.',
    approachInvite: 'Heading out? Perfect — I\'m about to make my delivery rounds. Walk with me?',
    walkAccept: 'Great! I\'ll tell you which shops get the best bread.',
    partWayLine: 'Alright, I\'ll finish the rounds myself. Stop by the stall tomorrow!',
    emoji: '🍞',
    shirtColor: 0xf0e0c8,
    backpackColor: 0x806040,
    hairColor: 0x3a2a20,
    startT: 0.54,
    defaultExpression: 'happy',
    routine: 'work',
    social: {
      befriend: {
        expression: 'happy',
        text: 'A fellow bread appreciator! Come by the stall early — I save the best batch for friends.',
      },
    },
    firstMeet: {
      greeting: { expression: 'happy', text: 'Morning! Just pulled these melon pan from the oven. The whole market smells like butter and sunshine.' },
      choices: [
        { label: '"Smells amazing!"', response: { expression: 'happy', text: 'You have good taste! A warm melon pan and a slow morning walk — that\'s the secret to a good day.' }, end: true },
        { label: '"What\'s popular today?"', response: { expression: 'thinking', text: 'Anko buns and curry bread. The fishermen buy half my stock before I finish setup.' } },
        { label: '"Walk with me a bit?"', response: { expression: 'happy', text: 'I\'d love that — I\'m doing delivery rounds anyway. Come on!' }, reward: { type: 'friendship' }, end: true },
      ],
    },
    revisit: {
      greeting: { expression: 'happy', text: 'Back for more? I saved a warm one just in case.' },
      choices: [
        { label: '"How\'s business?"', response: { expression: 'happy', text: 'Steady! A town feeds itself when people stop to talk between errands.' }, end: true },
        { label: '"Tell me about the market."', response: { expression: 'thinking', text: 'It\'s been here fifty years. Old Mrs. Nakamura used to sell pickles at the corner — her recipe is still a secret.' } },
        { label: '"Walk with me again?"', response: { expression: 'happy', text: 'Always! Deliveries are more fun with company.' }, reward: { type: 'friendship' }, end: true },
      ],
    },
    companionTalk: {
      greeting: { expression: 'happy', text: 'See that bakery smell drifting down the alley? That\'s Ito-san\'s place — we\'re friendly rivals.' },
      choices: [
        { label: '"Who makes better bread?"', response: { expression: 'happy', text: 'Me, obviously. But his croissants are... acceptable. Don\'t tell him I said that.' }, end: true },
        { label: '"I should head on alone."', response: { expression: 'happy', text: 'Of course! Come by the stall whenever. Free sample waiting for you.' }, reward: { type: 'dismissCompanion' }, end: true },
      ],
    },
  },
  {
    id: 'sora',
    name: 'Sora Mizuki',
    nameJa: '水樹 空',
    characterModel: 'character_male_c',
    personality: 'Fishmonger',
    tagline: 'Sorting the morning catch at the harbor.',
    approachInvite: 'Heading toward the water? I\'m done here — I\'ll walk that way too.',
    walkAccept: 'Good. The harbor path is best in the morning quiet.',
    partWayLine: 'I\'ll take it from here. Come back when the boats return.',
    emoji: '🐟',
    shirtColor: 0xd0e8f0,
    backpackColor: 0x406080,
    hairColor: 0x2a3040,
    startT: 0.96,
    defaultExpression: 'neutral',
    routine: 'work',
    social: {
      befriend: {
        expression: 'happy',
        text: 'Hm. You\'re alright. Come back when the big catch comes in — I\'ll save you something.',
      },
    },
    firstMeet: {
      greeting: { expression: 'neutral', text: 'Careful of the wet stones — fresh mackerel just came in. Glistening like silver coins.' },
      choices: [
        { label: '"Caught locally?"', response: { expression: 'happy', text: 'Right off the pier this morning. This harbor keeps the whole town fed.' } },
        { label: '"Beautiful view here."', response: { expression: 'thinking', text: 'I never get tired of it. The mountains, the water, the quiet after the boats leave.' } },
        { label: '"Walk to the pier with me?"', response: { expression: 'neutral', text: 'Sure. I was heading back anyway.' }, reward: { type: 'friendship' }, end: true },
      ],
    },
    revisit: {
      greeting: { expression: 'happy', text: 'Good timing — still plenty of catch left.' },
      choices: [
        { label: '"Busy day?"', response: { expression: 'neutral', text: 'The usual. Ren runs past, Haruko tells stories, the cat steals a nap on crate three.' }, end: true },
        { label: '"Walk with me?"', response: { expression: 'neutral', text: 'Alright. Not much more to do here.' }, reward: { type: 'friendship' }, end: true },
      ],
    },
    companionTalk: {
      greeting: { expression: 'neutral', text: 'When the fog rolls in you can\'t see the mountains. But you can hear the harbor bells. That\'s enough.' },
      choices: [
        { label: '"Tell me more about the harbor."', response: { expression: 'thinking', text: 'My grandfather built the first dock here. Three boats, two nets, and a lot of stubbornness.' }, end: true },
        { label: '"I\'ll go on ahead."', response: { expression: 'neutral', text: 'Right. Come back when the big fish are running.' }, reward: { type: 'dismissCompanion' }, end: true },
      ],
    },
  },
  {
    id: 'emi',
    name: 'Emi Okamoto',
    nameJa: '岡本 恵美',
    characterModel: 'character_female_a',
    personality: 'Playful kid',
    tagline: 'Chasing pigeons near the park.',
    approachInvite: 'Hey hey! I know every secret spot in this park! Want me to show you?',
    walkAccept: 'Yes! Follow me! There\'s a cat behind the big tree and a pigeon who eats from your hand!',
    partWayLine: 'Okay! I\'ll be near the swings. Come back and play!',
    emoji: '🎈',
    shirtColor: 0xf8c8d8,
    backpackColor: 0xf0e040,
    hairColor: 0x1a1010,
    startT: 0.80,
    defaultExpression: 'happy',
    routine: 'patrol',
    patrolTs: [0.78, 0.82, 0.80],
    social: {
      befriend: {
        expression: 'happy',
        text: 'We\'re friends now! That means you get to see ALL the secret spots, including the one with three cats!',
      },
    },
    firstMeet: {
      greeting: { expression: 'surprised', text: 'Whoa! You\'re tall. Are you exploring? I know every bench and every cat in this park!' },
      choices: [
        { label: '"Show me around!"', response: { expression: 'happy', text: 'Okay! The orange cat lives by the big tree. The pigeons hang out by the gazebo. Walk with me!' }, reward: { type: 'friendship' }, end: true },
        { label: '"Having fun?"', response: { expression: 'happy', text: 'The best! Mom says I can play until the streetlights come on.' }, end: true },
        { label: '"Which way to the shrine?"', response: { expression: 'happy', text: 'I\'ll show you! Follow me — I run there all the time!' }, reward: { type: 'friendship' }, end: true },
      ],
    },
    revisit: {
      greeting: { expression: 'happy', text: 'Tag! You\'re it! ...Just kidding. Unless you want to be.' },
      choices: [
        { label: '"Want to walk together?"', response: { expression: 'happy', text: 'Sure! I know a new spot where the sparrows eat bread crumbs!' }, reward: { type: 'friendship' }, end: true },
        { label: '"Catch you later!"', response: { expression: 'happy', text: 'Byeee! I\'ll be near the swings!' }, end: true },
      ],
    },
    companionTalk: {
      greeting: { expression: 'happy', text: 'See that fat pigeon? His name is Mochi. I named him. He doesn\'t know that yet.' },
      choices: [
        { label: '"What else have you named?"', response: { expression: 'happy', text: 'The orange cat is Tangerine, the big crow is Shogun, and the bench near the tree is Dave.' }, end: true },
        { label: '"I\'ll explore by myself now."', response: { expression: 'happy', text: 'Okay! Byeee! Find the three-cat bench — it\'s near the garden!' }, reward: { type: 'dismissCompanion' }, end: true },
      ],
    },
  },
  {
    id: 'jiro',
    name: 'Jiro Sato',
    nameJa: '佐藤 次郎',
    characterModel: 'character_male_c',
    personality: 'Retired neighbor',
    tagline: 'Watching the street from his bench.',
    approachInvite: 'I was just thinking about getting up and walking to the shrine. Been a while. Care to join an old man?',
    walkAccept: 'Ha! Good. Slow steps, slow talk. That\'s how you learn a place.',
    partWayLine: 'My knees say that\'s enough for today. You go on — the town rewards the curious.',
    emoji: '🪑',
    shirtColor: 0xd8d0c0,
    backpackColor: 0x505050,
    hairColor: 0x909090,
    startT: 0.40,
    defaultExpression: 'thinking',
    routine: 'sit',
    social: {
      befriend: {
        expression: 'happy',
        text: 'Good. Friends are made slowly here. That\'s what makes them last.',
      },
    },
    firstMeet: {
      greeting: { expression: 'thinking', text: 'Mm. Sit a moment, young one. I\'ve watched this street change for sixty years. The vending machines were the big revolution.' },
      choices: [
        { label: '"What was it like before?"', response: { expression: 'thinking', text: 'Quieter. More bicycles. Mrs. Tanaka — Haruko\'s mother — planted that cherry tree by the garden.' } },
        { label: '"Walk with me to the shrine?"', response: { expression: 'happy', text: 'Ha! You talk me into it. Lead the way — my knees need the practice.' }, reward: { type: 'friendship' }, end: true },
        { label: '"Enjoy your rest."', response: { expression: 'happy', text: 'Wise words. A bench is a fine place to understand a town.' }, end: true },
      ],
    },
    revisit: {
      greeting: { expression: 'happy', text: 'Ah, my regular visitor. The street looks different every time, doesn\'t it?' },
      choices: [
        { label: '"Any news today?"', response: { expression: 'thinking', text: 'Mio drew the torii again. Kenji sold out of anko buns by nine. A good day.' }, end: true },
        { label: '"Walk with me again?"', response: { expression: 'happy', text: 'Alright, alright — you\'ve convinced me. Slow and steady.' }, reward: { type: 'friendship' }, end: true },
      ],
    },
    companionTalk: {
      greeting: { expression: 'thinking', text: 'You know, I used to chase cats down this very lane as a boy. Different cats, same lane.' },
      choices: [
        { label: '"Tell me more."', response: { expression: 'happy', text: 'There was one cat — huge, orange — sat on that wall for twelve years. Same spot, every morning. Reliable as the sunrise.' }, end: true },
        { label: '"I\'ll head on alone."', response: { expression: 'happy', text: 'Good. The street is best walked alone sometimes. I\'ll be at the bench.' }, reward: { type: 'dismissCompanion' }, end: true },
      ],
    },
  },
  {
    id: 'yoko',
    name: 'Yoko Ishida',
    nameJa: '石田 陽子',
    characterModel: 'character_female_b',
    personality: 'Florist',
    tagline: 'Tending the flower shop on cafe row.',
    approachInvite: 'I\'m just closing up for a tea break. I\'d love some company on the way to the park!',
    walkAccept: 'Wonderful! I know where the best wildflowers grow along the path.',
    partWayLine: 'I\'ll stop here and sketch the wild cosmos. Come back and see the shop anytime!',
    emoji: '🌻',
    shirtColor: 0xf0f0d8,
    backpackColor: 0xe08090,
    hairColor: 0x4a3020,
    startT: 0.50,
    defaultExpression: 'happy',
    routine: 'work',
    social: {
      befriend: {
        expression: 'happy',
        text: 'A flower friend! Come by when the dahlias bloom — I\'ll make a little arrangement just for you.',
      },
    },
    firstMeet: {
      greeting: { expression: 'happy', text: 'Welcome to Hana no Ie! These cosmos just arrived — look how they lean toward the light.' },
      choices: [
        { label: '"Your shop is lovely."', response: { expression: 'happy', text: 'Flowers teach patience. You water, you wait, and one morning the whole window blooms.' } },
        { label: '"What sells best?"', response: { expression: 'thinking', text: 'Cherry blossom sprigs in spring. Sunflowers in summer. Haruko buys something every week.' } },
        { label: '"Walk with me a bit?"', response: { expression: 'happy', text: 'I was hoping for an excuse to step out! The park light is beautiful right now.' }, reward: { type: 'friendship' }, end: true },
      ],
    },
    revisit: {
      greeting: { expression: 'happy', text: 'Perfect timing — I was just trimming the display.' },
      choices: [
        { label: '"They look beautiful."', response: { expression: 'shy', text: 'Thank you... I talk to them sometimes. It helps.' }, end: true },
        { label: '"Walk with me?"', response: { expression: 'happy', text: 'Yes! The back path behind the shrine has wild cosmos this time of year.' }, reward: { type: 'friendship' }, end: true },
      ],
    },
    companionTalk: {
      greeting: { expression: 'happy', text: 'See those little white flowers in the wall cracks? Hakonechloa. They grow wherever they want — I admire that.' },
      choices: [
        { label: '"Do you know all the flowers here?"', response: { expression: 'happy', text: 'Most of them! The old magnolia by the shrine gate was planted sixty years ago. Jiro was there for the planting.' }, end: true },
        { label: '"I\'ll wander alone for a bit."', response: { expression: 'happy', text: 'Of course! Come back to the shop — I\'ll have tea ready.' }, reward: { type: 'dismissCompanion' }, end: true },
      ],
    },
  },
];

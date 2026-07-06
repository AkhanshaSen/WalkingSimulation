export const NPC_PROFILES = [
  {
    id: 'yuki',
    name: 'Yuki Tanaka',
    nameJa: '田中 雪',
    characterModel: 'character_female_b',
    personality: 'Shy bookworm',
    tagline: 'Always found reading near the vending machines.',
    approachInvite: 'Um... excuse me. I noticed you walking alone. Would you... walk with me a little? I get nervous by myself.',
    walkAccept: 'Really? Okay... I\'ll stay close. Just tap Chat anytime you want to talk.',
    partWayLine: 'Oh... okay. I\'ll find a quiet bench. Thank you for walking with me.',
    emoji: '📖',
    shirtColor: 0xf0e8f8,
    backpackColor: 0x8060c0,
    hairColor: 0x2a2030,
    startT: 0.07,
    defaultExpression: 'shy',
    routine: 'sit',
    social: {
      befriend: {
        expression: 'shy',
        text: 'Friends...? I\'d like that. Maybe we could swap book recommendations sometime.',
      },
      argue: {
        expression: 'surprised',
        text: 'Oh... I didn\'t mean to upset you. Not everyone loves quiet poetry, I suppose.',
      },
      flirt: {
        expression: 'shy',
        text: 'W-what?! My face is burning. You\'re... very bold. I don\'t know what to say.',
      },
    },
    firstMeet: {
      greeting: {
        expression: 'shy',
        text: 'Oh—! S-sorry, I was lost in a poem. I didn\'t notice you there at all.',
      },
      choices: [
        {
          label: '"What are you reading?"',
          response: {
            expression: 'happy',
            text: 'A book of haiku about quiet streets. This one goes: "Vending machine glow / humming in the afternoon / nobody hurries."',
          },
        },
        {
          label: '"This town feels peaceful."',
          response: {
            expression: 'thinking',
            text: 'It is... like the world forgot to be loud here. I come every day so I don\'t forget that feeling.',
          },
          reward: {
            type: 'journal',
            title: 'Yuki\'s Haiku',
            body: '"Vending machine glow / humming in the afternoon / nobody hurries."',
          },
        },
        {
          label: '"Want to walk together?"',
          response: {
            expression: 'shy',
            text: 'I\'d love that... when you\'re ready, tap Walk together. I know a quiet spot by the garden.',
          },
          reward: { type: 'friendship' },
        },
        {
          label: '"I should let you read."',
          response: {
            expression: 'shy',
            text: 'No, it\'s okay... talking is nice too. Maybe we\'ll see each other again.',
          },
          end: true,
        },
      ],
    },
    revisit: {
      greeting: {
        expression: 'happy',
        text: 'You again. I was just thinking about our last conversation... I mean—not in a weird way!',
      },
      choices: [
        {
          label: '"Got any new poems?"',
          response: {
            expression: 'thinking',
            text: 'I wrote one about the shrine steps: "Stone worn smooth by time / even footsteps whisper here / cherry petals fall."',
          },
          reward: {
            type: 'journal',
            title: 'Shrine Steps Poem',
            body: '"Stone worn smooth by time / even footsteps whisper here / cherry petals fall."',
          },
        },
        {
          label: '"Want to explore together?"',
          response: {
            expression: 'shy',
            text: 'I... I\'d like that. Tap Walk together whenever you want me beside you—don\'t go too fast, okay?',
          },
          reward: { type: 'friendship' },
        },
        {
          label: '"See you, Yuki."',
          response: { expression: 'happy', text: 'See you... I\'ll save a poem for you.' },
          end: true,
        },
      ],
    },
    companionTalk: {
      greeting: {
        expression: 'happy',
        text: 'Still here... I\'m glad. The street feels less scary with someone beside me.',
      },
      choices: [
        {
          label: '"Let\'s keep exploring."',
          response: {
            expression: 'shy',
            text: 'Okay... lead the way. I\'ll stay right behind you.',
          },
          end: true,
        },
        {
          label: '"I need to walk alone for a bit."',
          response: {
            expression: 'shy',
            text: 'I understand. I\'ll go back to my book. Maybe we\'ll meet again on the street.',
          },
          reward: { type: 'dismissCompanion' },
          end: true,
        },
      ],
    },
  },
  {
    id: 'ren',
    name: 'Ren Okada',
    nameJa: '岡田 蓮',
    characterModel: 'character_male_a',
    personality: 'Energetic runner',
    tagline: 'Training on the street every single day.',
    approachInvite: 'Hey, you! Yeah you! Walk with me—I\'ll show you the best curve on the whole street!',
    walkAccept: 'Alright, let\'s go! Try to keep up... kidding. I\'ll match your pace.',
    partWayLine: 'No worries! Catch you on the next lap—I\'ll be stretching by the torii.',
    emoji: '🏃',
    shirtColor: 0xe85050,
    backpackColor: 0xf0c040,
    hairColor: 0x1a1a1a,
    startT: 0.20,
    defaultExpression: 'happy',
    routine: 'jog',
    patrolTs: [0.16, 0.24, 0.20],
    social: {
      befriend: {
        expression: 'happy',
        text: 'Friend request accepted! You\'re officially on Team Ren now. Let\'s hit the street!',
      },
      argue: {
        expression: 'surprised',
        text: 'Whoa, feisty! I respect someone who pushes back. Rematch on the torii curve?',
      },
      flirt: {
        expression: 'happy',
        text: 'Ha! Smooth. I\'ll pretend I didn\'t hear that... but I\'m definitely grinning.',
      },
    },
    firstMeet: {
      greeting: {
        expression: 'happy',
        text: 'Yo! New face on Sakura Street — love it! I was just about to sprint to the shrine and back.',
      },
      choices: [
        {
          label: '"You run here every day?"',
          response: {
            expression: 'happy',
            text: 'Rain or shine! This road has the perfect curve by the torii gate. My legs know every crack in the pavement.',
          },
        },
        {
          label: '"Think I could keep up?"',
          response: {
            expression: 'surprised',
            text: 'Ha! I like your energy. Here—feel this rush. Hold Shift and run the whole curve. The town opens up when you move fast.',
          },
          reward: {
            type: 'speedBoost',
            amount: 1.8,
            duration: 15,
            message: '⚡ Ren\'s runner\'s high! Sprint speed boosted.',
          },
        },
        {
          label: '"Walk with me to the shrine?"',
          response: {
            expression: 'happy',
            text: 'YES! Tap Walk together and I\'ll jog beside you—well, walk-jog. Let\'s make this street ours!',
          },
          reward: { type: 'friendship' },
        },
        {
          label: '"Good luck with your run."',
          response: {
            expression: 'happy',
            text: 'Thanks! If you change your mind, I\'ll be doing laps all afternoon!',
          },
          end: true,
        },
      ],
    },
    revisit: {
      greeting: {
        expression: 'surprised',
        text: 'Back already? Either you love this street or you love talking to me. Either way—I\'m flattered!',
      },
      choices: [
        {
          label: '"Race me to the shrine!"',
          response: {
            expression: 'happy',
            text: 'YOU\'RE ON! Three... two... GO! Just kidding—I\'ll give you a head start. Feel that burn in your legs!',
          },
          reward: {
            type: 'speedBoost',
            amount: 2.2,
            duration: 10,
            message: '🔥 Adrenaline rush! Max sprint unlocked.',
          },
        },
        {
          label: '"Any tips for a beginner?"',
          response: {
            expression: 'thinking',
            text: 'Breathe through your nose, land on your midfoot, and never skip the stretch by the bench. Also—enjoy the view. Speed means nothing if you miss the town.',
          },
        },
        {
          label: '"Catch you later, Ren."',
          response: { expression: 'happy', text: 'Later! Keep those legs moving!' },
          end: true,
        },
      ],
    },
    companionTalk: {
      greeting: {
        expression: 'happy',
        text: 'This is great! Every step feels like a warm-up lap. Where to next, coach?',
      },
      choices: [
        {
          label: '"Let\'s keep going!"',
          response: {
            expression: 'happy',
            text: 'Love the energy! I\'ll match your pace—just say the word if you want to sprint.',
          },
          end: true,
        },
        {
          label: '"I want to walk solo for a while."',
          response: {
            expression: 'happy',
            text: 'All good! Solo runs build character too. Holler if you want a training buddy again.',
          },
          reward: { type: 'dismissCompanion' },
          end: true,
        },
      ],
    },
  },
  {
    id: 'haruko',
    name: 'Haruko Sato',
    nameJa: '佐藤 春子',
    characterModel: 'character_female_c',
    personality: 'Wise neighbor',
    tagline: 'Forty years on this street. Knows every story.',
    approachInvite: 'Oh, dear—wait! Would you like this old woman to walk with you? Every corner here has a story.',
    walkAccept: 'How lovely. I\'ll stroll right beside you. Point at anything—you ask, I\'ll tell you about it.',
    partWayLine: 'Of course, dear. Every walk has its season. I\'ll be on my porch if you need a story.',
    emoji: '🌸',
    shirtColor: 0xe8d8c8,
    backpackColor: 0x60a060,
    hairColor: 0x606060,
    startT: 0.62,
    defaultExpression: 'happy',
    routine: 'work',
    social: {
      befriend: {
        expression: 'happy',
        text: 'How lovely, dear. Friendship is the oldest kind of magic on any street.',
      },
      argue: {
        expression: 'thinking',
        text: 'Even disagreeing can be honest. I appreciate your spirit, dear—don\'t hold back.',
      },
      flirt: {
        expression: 'surprised',
        text: 'Oh my... at my age? You\'re a charmer. I\'ll pretend not to notice—but I noticed.',
      },
    },
    firstMeet: {
      greeting: {
        expression: 'happy',
        text: 'Well hello, dear. You have that look—like someone seeing this street for the very first time.',
      },
      choices: [
        {
          label: '"How long have you lived here?"',
          response: {
            expression: 'thinking',
            text: 'Forty years. This was all rice fields when I was a girl. Now there\'s vending machines and cherry trees. Time paints in colors you don\'t expect.',
          },
          reward: {
            type: 'journal',
            title: 'Haruko\'s Memory',
            body: 'Sakura Street was once rice fields. The cherry tree by the garden was planted when her daughter was born.',
          },
        },
        {
          label: '"What\'s the best spot in town?"',
          response: {
            expression: 'happy',
            text: 'The shrine steps, without question. Stand there at dusk. The light turns everything gold, and for a moment the whole world feels gentle.',
          },
          reward: {
            type: 'waypoint',
            location: 'Shrine Steps',
            message: 'Haruko pointed you toward the shrine steps at dusk.',
          },
        },
        {
          label: '"Will you show me around?"',
          response: {
            expression: 'happy',
            text: 'Nothing would make me happier, dear. Tap Walk together and I\'ll stroll every step with you.',
          },
          reward: { type: 'friendship' },
        },
        {
          label: '"Thank you, Haruko."',
          response: {
            expression: 'happy',
            text: 'Come back anytime, dear. A town is only alive when people walk through it with open hearts.',
          },
          end: true,
        },
      ],
    },
    revisit: {
      greeting: {
        expression: 'happy',
        text: 'Welcome back, dear. I was just watching the clouds drift over the mountains. They look like old friends visiting.',
      },
      choices: [
        {
          label: '"Tell me another story."',
          response: {
            expression: 'thinking',
            text: 'On rainy days, children used to huddle under the vending machine awning sharing sodas. That awning kept more than rain out—it kept loneliness out too.',
          },
          reward: {
            type: 'journal',
            title: 'Rainy Day Awning',
            body: 'Children gathered under the vending machine awning on rainy days, sharing sodas and stories.',
          },
        },
        {
          label: '"The town feels different today."',
          response: {
            expression: 'happy',
            text: 'It\'s the same street—but you\'re different now. That\'s the secret. The town reflects whoever is walking through it.',
          },
        },
        {
          label: '"Goodbye for now."',
          response: { expression: 'happy', text: 'Take care, dear. The street will be here when you return.' },
          end: true,
        },
      ],
    },
    companionTalk: {
      greeting: {
        expression: 'happy',
        text: 'What a lovely stroll this is, dear. The town looks different when you share it with someone.',
      },
      choices: [
        {
          label: '"Tell me more as we walk."',
          response: {
            expression: 'thinking',
            text: 'Listen to the wind in the trees—that sound hasn\'t changed in forty years. Some things stay gentle on purpose.',
          },
          end: true,
        },
        {
          label: '"I\'d like to walk alone now."',
          response: {
            expression: 'happy',
            text: 'Take your time, dear. Solitude is its own kind of companion. I\'ll be right here when you return.',
          },
          reward: { type: 'dismissCompanion' },
          end: true,
        },
      ],
    },
  },
  {
    id: 'mio',
    name: 'Mio Ichikawa',
    nameJa: '市川 美央',
    characterModel: 'character_female_a',
    personality: 'Curious artist',
    tagline: 'Sketching everything ordinary until it looks magical.',
    approachInvite: 'Wait, wait! Before you go—walk with me? The light down the road is gorgeous right now!',
    walkAccept: 'Perfect! I\'ll walk ahead and point out beautiful things. You just follow.',
    partWayLine: 'No problem! I\'ll sketch the harbor light from here. Find me if you see something beautiful.',
    emoji: '🎨',
    shirtColor: 0xc8e8f0,
    backpackColor: 0xf080a0,
    hairColor: 0x4a3020,
    startT: 0.74,
    defaultExpression: 'thinking',
    routine: 'work',
    social: {
      befriend: {
        expression: 'happy',
        text: 'Friends! Now I have someone to point at beautiful things with. This is the best commission ever.',
      },
      argue: {
        expression: 'thinking',
        text: 'Conflict is just contrasting colors. Bold choice—I respect it. Want to argue about art?',
      },
      flirt: {
        expression: 'shy',
        text: 'You\'re... kind of compositionally perfect. Don\'t make me blush while I\'m holding a pencil.',
      },
    },
    firstMeet: {
      greeting: {
        expression: 'surprised',
        text: 'Wait—hold still! The light just hit your shoulder perfectly. ...Sorry, artist reflex. Hi, I\'m Mio!',
      },
      choices: [
        {
          label: '"What are you drawing?"',
          response: {
            expression: 'thinking',
            text: 'Everything everyone ignores. Vending machines, power lines, that orange cat on the wall. Ordinary things are secretly beautiful if you stare long enough.',
          },
        },
        {
          label: '"Where\'s the best view?"',
          response: {
            expression: 'happy',
            text: 'Torii gate curve at sunset. The cat on the wall near the bench. And the vending machine row when it rains—colors bleed into the wet pavement like watercolor.',
          },
          reward: {
            type: 'journal',
            title: 'Mio\'s Sketch Spots',
            body: 'Best views: torii curve at sunset, the orange cat on the wall, vending machines in the rain.',
          },
        },
        {
          label: '"Walk with me and point out art?"',
          response: {
            expression: 'happy',
            text: 'That\'s literally my dream request! Tap Walk together and I\'ll whisper every beautiful thing I see.',
          },
          reward: { type: 'friendship' },
        },
        {
          label: '"Sorry to interrupt your art."',
          response: {
            expression: 'happy',
            text: 'Never apologize for that! Interruptions are just life adding itself to the composition.',
          },
          end: true,
        },
      ],
    },
    revisit: {
      greeting: {
        expression: 'happy',
        text: 'Perfect timing—I just finished a sketch of the power lines! They look like music notation if you squint.',
      },
      choices: [
        {
          label: '"Can I see your sketchbook?"',
          response: {
            expression: 'shy',
            text: 'It\'s messy... pages of cats, mailboxes, one terrible traffic cone, and a self-portrait where I drew my nose too big. But... here.',
          },
          reward: { type: 'friendship', npc: 'mio' },
        },
        {
          label: '"Teach me to see like you do."',
          response: {
            expression: 'thinking',
            text: 'Close your eyes. Open them slowly. Pick ONE color and hunt for it everywhere. The town rhymes with itself—you just have to listen with your eyes.',
          },
          reward: {
            type: 'waypoint',
            location: 'Artist\'s Eye',
            message: 'Mio taught you to see the town through an artist\'s eyes.',
          },
        },
        {
          label: '"Keep creating, Mio."',
          response: {
            expression: 'happy',
            text: 'Always! Tell me if you find something worth a hundred sketches.',
          },
          end: true,
        },
      ],
    },
    companionTalk: {
      greeting: {
        expression: 'happy',
        text: 'Look—the light on that roof! Sorry, artist brain. I\'m really glad we\'re walking together.',
      },
      choices: [
        {
          label: '"Point out more beautiful things!"',
          response: {
            expression: 'thinking',
            text: 'See that crack in the sidewalk? It\'s shaped like a river. The town is full of hidden compositions.',
          },
          end: true,
        },
        {
          label: '"I need some alone time to look around."',
          response: {
            expression: 'happy',
            text: 'Totally fair. Art needs space to breathe. I\'ll wander off and draw something quiet.',
          },
          reward: { type: 'dismissCompanion' },
          end: true,
        },
      ],
    },
  },
];

export const EXPRESSION_EMOJI = {
  neutral: '😐',
  happy: '😊',
  surprised: '😮',
  thinking: '🤔',
  shy: '😳',
};

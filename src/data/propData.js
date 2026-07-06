const SHRINE_FORTUNES = [
  '大吉 · Great Fortune! The road ahead is bright.',
  '吉 · Good Luck. Keep walking forward.',
  '中吉 · Moderate Fortune. Steady steps bring reward.',
  '小吉 · Small Fortune. Good things come quietly.',
  '末吉 · Future Fortune. Patience will be rewarded.',
  '凶 · Misfortune today. Tomorrow holds new hope.',
];

export function drawFortune() {
  return SHRINE_FORTUNES[Math.floor(Math.random() * SHRINE_FORTUNES.length)];
}

export const PROP_DEFINITIONS = {
  bench: {
    id: 'bench',
    label: 'Bench',
    range: 3.5,
    actions: {
      sit: {
        message: 'You sit for a moment. The town feels unhurried.',
        sitDuration: 4,
        sitHeight: 0.40,
      },
    },
  },

  cherry_tree: {
    id: 'cherry_tree',
    label: 'Cherry tree',
    range: 4,
    actions: {
      admire: {
        message: '🌸 Pink petals drift down. For a moment, nothing else matters.',
        journal: {
          title: 'Cherry Blossom Moment',
          body: 'Petals fall without hurry. The tree teaches patience.',
        },
      },
    },
  },

  shrine_tree: {
    id: 'shrine_tree',
    label: 'Shrine tree',
    range: 4.5,
    actions: {
      listen: {
        message: '🌿 Wind rustles the leaves. Even the birds seem to whisper here.',
      },
    },
  },

  shrine: {
    id: 'shrine',
    label: 'Shrine',
    range: 7,
    hitRadius: 2.5,
  },

  vending: {
    id: 'vending',
    label: 'Vending Machine',
    shopId: 'vending',
    range: 3,
    hitRadius: 0.6,
  },
};

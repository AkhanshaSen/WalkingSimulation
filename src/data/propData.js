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
    range: 8,
    hitRadius: 2.8,
  },

  torii: {
    id: 'torii',
    label: 'Torii gate',
    range: 5,
    hitRadius: 1.6,
    tokenCost: 1,
  },

  vending: {
    id: 'vending',
    label: 'Vending Machine',
    shopId: 'vending',
    range: 3,
    hitRadius: 0.6,
  },
};

export const PROP_DEFINITIONS = {
  bench: {
    id: 'bench',
    label: 'Bench',
    range: 3.5,
    actions: {
      sit: {
        message: 'You sit for a moment. The town feels unhurried.',
        sitDuration: 4,
      },
    },
  },
  cherry_tree: {
    id: 'cherry_tree',
    label: 'Cherry tree',
    range: 4,
    actions: {
      admire: {
        message: 'Pink petals drift down. For a moment, nothing else matters.',
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
        message: 'Wind rustles the leaves. Even the birds seem to whisper here.',
      },
    },
  },
};

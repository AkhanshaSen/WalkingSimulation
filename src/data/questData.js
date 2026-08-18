/** Five story quest lines — each grants XP on stage completion and a bonus on finish. */
export const QUEST_LINES = [
  {
    id: 'yuki_poem',
    title: 'A Poem for Sakura Street',
    giver: 'Yuki Tanaka',
    summary: 'Share a quiet moment with Yuki, then find the cherry-lined street she loves.',
    stages: [
      { id: 'talk', label: 'Talk to Yuki', type: 'npc_talk', npcId: 'yuki', xp: 20 },
      { id: 'haiku', label: 'Hear her haiku', type: 'journal_from_npc', npcId: 'yuki', xp: 25 },
      { id: 'sakura', label: 'Reach Sakura Street', type: 'zone', match: 'Sakura Street', xp: 30 },
    ],
    bonusXp: 25,
  },
  {
    id: 'ren_harbor',
    title: "Ren's Harbor Run",
    giver: 'Ren Okada',
    summary: 'Race Ren to the harbor overlook — but only if he trusts you enough to walk together.',
    stages: [
      { id: 'talk', label: 'Talk to Ren', type: 'npc_talk', npcId: 'ren', xp: 20 },
      { id: 'walk', label: 'Walk together with Ren', type: 'companion', npcId: 'ren', xp: 30 },
      { id: 'harbor', label: 'Reach Harbor View', type: 'zone', match: 'Harbor View', xp: 35 },
    ],
    bonusXp: 30,
  },
  {
    id: 'haruko_shrine',
    title: "Haruko's Golden Hour",
    giver: 'Haruko Sato',
    summary: 'Visit the shrine approach at dusk, then offer a prayer like Haruko taught you.',
    stages: [
      { id: 'talk', label: 'Talk to Haruko', type: 'npc_talk', npcId: 'haruko', xp: 20 },
      { id: 'evening', label: 'Reach the shrine at evening', type: 'zone_period', match: 'Shrine Approach', period: 'evening', xp: 35 },
      { id: 'pray', label: 'Draw a fortune at the shrine', type: 'prop', propId: 'shrine', xp: 30 },
    ],
    bonusXp: 30,
  },
  {
    id: 'mio_coast',
    title: "Mio's Coastal Sketch",
    giver: 'Mio Ichikawa',
    summary: 'Follow Mio\'s artist eye to the far end of the coastal path.',
    stages: [
      { id: 'talk', label: 'Talk to Mio', type: 'npc_talk', npcId: 'mio', xp: 20 },
      { id: 'coastal', label: 'Reach Coastal Path', type: 'zone', match: 'Coastal Path', xp: 30 },
      { id: 'cape', label: 'Reach Cape Outlook', type: 'zone', match: 'Cape Outlook', xp: 35 },
    ],
    bonusXp: 30,
  },
  {
    id: 'sky_watcher',
    title: 'Colors of the Day',
    giver: 'Town Bulletin',
    summary: 'Use the clock to watch dawn, noon, and night skies over the town.',
    stages: [
      { id: 'dawn', label: 'Witness a dawn sky', type: 'sky', sky: 'dawn', xp: 25 },
      { id: 'noon', label: 'Witness a noon sky', type: 'sky', sky: 'noon', xp: 25 },
      { id: 'night', label: 'Witness a night sky', type: 'sky', sky: 'night', xp: 25 },
    ],
    bonusXp: 40,
  },
];

export const XP_PER_LEVEL = 100;

export function skyBucket(hourFloat) {
  if (hourFloat >= 5 && hourFloat < 7.5) return 'dawn';
  if (hourFloat >= 11 && hourFloat < 13.5) return 'noon';
  if (hourFloat >= 20 || hourFloat < 5) return 'night';
  return null;
}

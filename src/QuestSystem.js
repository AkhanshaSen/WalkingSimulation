import { QUEST_LINES, XP_PER_LEVEL, skyBucket } from './data/questData.js';

const STORAGE_KEY = 'exploring-town-quests-v1';

export class QuestSystem {
  constructor(game) {
    this.game = game;
    this.xp = 0;
    this.completedStages = {};
    this.completedQuests = {};
    this._load();
  }

  get level() {
    return Math.floor(this.xp / XP_PER_LEVEL) + 1;
  }

  get levelProgress() {
    return (this.xp % XP_PER_LEVEL) / XP_PER_LEVEL;
  }

  notify(event, payload = {}) {
    if (event === 'npc_talk') this._completeStages('npc_talk', payload);
    if (event === 'journal_from_npc') this._completeStages('journal_from_npc', payload);
    if (event === 'companion') this._completeStages('companion', payload);
    if (event === 'zone') this._completeStages('zone', payload);
    if (event === 'zone_period') this._completeStages('zone_period', payload);
    if (event === 'prop') this._completeStages('prop', payload);
    if (event === 'sky') this._completeStages('sky', payload);
    this._checkQuestCompletions();
    this._updateHUD();
  }

  onTimeChange(hourFloat) {
    const sky = skyBucket(hourFloat);
    if (sky) this.notify('sky', { sky });
  }

  onZoneVisit(zoneLabel) {
    const period = this.game?.dayNight?.getPeriod?.();
    this.notify('zone', { zoneLabel });
    if (period) this.notify('zone_period', { zoneLabel, period });
  }

  grantXP(amount, message) {
    if (!amount) return;
    const prevLevel = this.level;
    this.xp += amount;
    this._save();
    this._updateHUD();
    if (message) this.game?.dialogue?.showToast?.(`✨ +${amount} XP · ${message}`);
    if (this.level > prevLevel) {
      this.game?.dialogue?.showToast?.(`🎉 Level ${this.level}!`);
    }
  }

  _stageKey(questId, stageId) {
    return `${questId}:${stageId}`;
  }

  _isStageDone(questId, stageId) {
    return !!this.completedStages[this._stageKey(questId, stageId)];
  }

  _completeStage(quest, stage) {
    const key = this._stageKey(quest.id, stage.id);
    if (this.completedStages[key]) return false;
    this.completedStages[key] = true;
    this.grantXP(stage.xp, stage.label);
    this._save();
    return true;
  }

  _completeStages(type, payload) {
    for (const quest of QUEST_LINES) {
      if (this.completedQuests[quest.id]) continue;
      for (const stage of quest.stages) {
        if (stage.type !== type || this._isStageDone(quest.id, stage.id)) continue;
        if (this._stageMatches(stage, payload)) {
          this._completeStage(quest, stage);
        }
      }
    }
  }

  _stageMatches(stage, payload) {
    switch (stage.type) {
      case 'npc_talk':
        return payload.npcId === stage.npcId;
      case 'journal_from_npc':
        return payload.npcId === stage.npcId;
      case 'companion':
        return payload.npcId === stage.npcId;
      case 'zone':
        return payload.zoneLabel?.includes(stage.match);
      case 'zone_period':
        return payload.zoneLabel?.includes(stage.match) && payload.period === stage.period;
      case 'prop':
        return payload.propId === stage.propId;
      case 'sky':
        return payload.sky === stage.sky;
      default:
        return false;
    }
  }

  _checkQuestCompletions() {
    for (const quest of QUEST_LINES) {
      if (this.completedQuests[quest.id]) continue;
      const done = quest.stages.every((stage) => this._isStageDone(quest.id, stage.id));
      if (!done) continue;
      this.completedQuests[quest.id] = true;
      this.grantXP(quest.bonusXp, `${quest.title} complete!`);
      this.game?.dayJournal?.addLegacyEntry?.(
        quest.title,
        `I finished "${quest.title}" — ${quest.summary}`,
        'Quest',
      );
      this._save();
    }
  }

  _updateHUD() {
    const xpEl = document.getElementById('xp-display');
    const levelEl = document.getElementById('level-display');
    const fillEl = document.getElementById('xp-bar-fill');
    if (xpEl) xpEl.textContent = `${this.xp} XP`;
    if (levelEl) levelEl.textContent = `Lv ${this.level}`;
    if (fillEl) fillEl.style.width = `${Math.round(this.levelProgress * 100)}%`;
    this.render(document.getElementById('quest-list'));
  }

  render(listEl) {
    if (!listEl) return;
    listEl.innerHTML = '';
    for (const quest of QUEST_LINES) {
      const done = !!this.completedQuests[quest.id];
      const card = document.createElement('article');
      card.className = `quest-card${done ? ' quest-done' : ''}`;

      const title = document.createElement('h3');
      title.textContent = done ? `✓ ${quest.title}` : quest.title;
      card.appendChild(title);

      const meta = document.createElement('p');
      meta.className = 'quest-meta';
      meta.textContent = `${quest.giver} · ${quest.summary}`;
      card.appendChild(meta);

      const stages = document.createElement('ul');
      stages.className = 'quest-stages';
      for (const stage of quest.stages) {
        const li = document.createElement('li');
        const complete = this._isStageDone(quest.id, stage.id);
        li.textContent = `${complete ? '✓' : '○'} ${stage.label} (+${stage.xp} XP)`;
        li.className = complete ? 'quest-stage-done' : '';
        stages.appendChild(li);
      }
      card.appendChild(stages);

      if (done) {
        const badge = document.createElement('p');
        badge.className = 'quest-complete-badge';
        badge.textContent = `Completed · +${quest.bonusXp} bonus XP`;
        card.appendChild(badge);
      }

      listEl.appendChild(card);
    }
  }

  _load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const data = JSON.parse(raw);
      this.xp = data.xp ?? 0;
      this.completedStages = data.completedStages ?? {};
      this.completedQuests = data.completedQuests ?? {};
    } catch {
      /* ignore corrupt save */
    }
  }

  _save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      xp: this.xp,
      completedStages: this.completedStages,
      completedQuests: this.completedQuests,
    }));
  }
}

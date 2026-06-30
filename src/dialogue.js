import { EXPRESSION_EMOJI } from './npcData.js';

export class DialogueManager {
  constructor(elements) {
    this.box = elements.box;
    this.approachModal = elements.approachModal;
    this.approachPortrait = elements.approachPortrait;
    this.approachName = elements.approachName;
    this.approachPersonality = elements.approachPersonality;
    this.approachTagline = elements.approachTagline;
    this.approachChatBtn = elements.approachChatBtn;
    this.approachWalkBtn = elements.approachWalkBtn;
    this.approachPartBtn = elements.approachPartBtn;
    this.approachIgnoreBtn = elements.approachIgnoreBtn;
    this.companionTag = elements.companionTag;
    this.companionLabel = elements.companionLabel;
    this.companionPartBtn = elements.companionPartBtn;
    this.nameEl = elements.name;
    this.personalityEl = elements.personality;
    this.textEl = elements.text;
    this.expressionEl = elements.expression;
    this.portraitEl = elements.portrait;
    this.nextBtn = elements.next;
    this.choicesEl = elements.choices;
    this.toastEl = elements.toast;
    this.journalPanel = elements.journalPanel;
    this.journalList = elements.journalList;
    this.journalBtn = elements.journalBtn;
    this.closeJournalBtn = elements.closeJournalBtn;
    this.interactHint = elements.interactHint;

    this.active = false;
    this.hintItem = null;
    this.onHintClick = null;
    this.approachOpen = false;
    this.approachInitiated = false;
    this.npc = null;
    this.conversation = null;
    this.phase = 'greeting';
    this.pendingChoices = false;
    this.journal = [];

    this.nextBtn.addEventListener('click', () => this.advance());
    this.approachChatBtn?.addEventListener('click', () => this._onChatClicked());
    this.approachWalkBtn?.addEventListener('click', () => this._onWalkClicked());
    this.approachPartBtn?.addEventListener('click', () => this._onPartClicked());
    this.approachIgnoreBtn?.addEventListener('click', () => this._onIgnoreClicked());
    this.companionPartBtn?.addEventListener('click', () => this._onCompanionPartClicked());
    this.journalBtn?.addEventListener('click', () => this.journalPanel?.classList.remove('hidden'));
    this.closeJournalBtn?.addEventListener('click', () => this.journalPanel?.classList.add('hidden'));
    this.interactHint?.addEventListener('click', () => {
      this.onHintClick?.();
    });
  }

  setRewardHandler(handler) {
    this._rewardHandler = handler;
  }

  setGame(game) {
    this.game = game;
  }

  isOpen() {
    return this.active;
  }

  isBlocking() {
    return this.active || this.approachOpen;
  }

  showInteractHint(item) {
    if (!this.interactHint || !item || this.isBlocking()) {
      this.hideInteractHint();
      return;
    }
    this.hintItem = item;

    let label = '<kbd>E</kbd> Interact';
    if (item.type === 'npc') {
      const name = item.profile?.nameJa || item.profile?.name || 'Someone';
      label = `<kbd>E</kbd> Interact? with ${name}`;
    } else if (item.type === 'animal') {
      const d = item.definition;
      label = `<kbd>E</kbd> ${d.emoji} Meet ${d.nameJa || d.name}`;
    } else if (item.type === 'prop') {
      const def = item.definition;
      if (def.shopId) {
        label = `<kbd>E</kbd> 🏪 ${def.label}`;
      } else if (def.id === 'shrine') {
        label = `<kbd>E</kbd> ⛩️ Pray at Shrine`;
      } else if (def.id === 'bench') {
        label = `<kbd>E</kbd> 🪑 Rest on Bench`;
      } else if (def.id === 'cherry_tree') {
        label = `<kbd>E</kbd> 🌸 Admire Cherry Tree`;
      } else if (def.id === 'shrine_tree') {
        label = `<kbd>E</kbd> 🌿 Listen to the Wind`;
      }
    }

    this.interactHint.innerHTML = label;
    this.interactHint.classList.remove('hidden');
  }

  hideInteractHint() {
    this.hintItem = null;
    this.interactHint?.classList.add('hidden');
  }

  setCompanionTag(npc) {
    if (!this.companionTag) return;
    if (npc) {
      if (this.companionLabel) {
        this.companionLabel.textContent = `${npc.profile.emoji} Walking with ${npc.profile.nameJa}`;
      } else {
        this.companionTag.textContent = `${npc.profile.emoji} Walking with ${npc.profile.nameJa}`;
      }
      this.companionTag.classList.remove('hidden');
    } else {
      this.companionTag.classList.add('hidden');
    }
  }

  showApproach(npc, options = {}) {
    if (this.isBlocking() || !npc) return;

    this.hintItem = null;
    this.interactHint?.classList.add('hidden');
    this.approachOpen = true;
    this.approachInitiated = options.initiated ?? false;
    this.npc = npc;
    const p = npc.profile;
    const isCompanion = npc.isCompanion;

    this.approachPortrait.textContent = p.emoji;
    this.approachName.textContent = `${p.nameJa} · ${p.name}`;
    this.approachPersonality.textContent = p.personality;
    this.approachTagline.textContent = isCompanion
      ? 'Your walking companion wants to talk.'
      : this.approachInitiated
        ? p.approachInvite
        : p.tagline;
    this.approachWalkBtn?.classList.toggle('hidden', isCompanion || npc.profile.isAmbient);
    this.approachPartBtn?.classList.toggle('hidden', !isCompanion);
    this.approachIgnoreBtn?.classList.toggle('hidden', isCompanion);
    this.approachModal.classList.remove('hidden');

    if (!isCompanion) {
      npc.onApproach(this.approachInitiated);
      npc.stopApproaching();
    }
  }

  hideApproach() {
    this.approachOpen = false;
    this.approachInitiated = false;
    this.approachModal.classList.add('hidden');
    this.approachWalkBtn?.classList.remove('hidden');
    this.approachPartBtn?.classList.add('hidden');
    this.approachIgnoreBtn?.classList.remove('hidden');
    if (this.npc && !this.active) {
      this.npc.clearApproachBubbles();
      if (!this.npc.isCompanion) this.npc = null;
    }
  }

  _onChatClicked() {
    const npc = this.npc;
    this.hideApproach();
    if (npc) this.start(npc);
  }

  _onWalkClicked() {
    const npc = this.npc;
    this.hideApproach();
    if (!npc) return;
    npc.markMet();
    this._beginCompanion(npc);
  }

  _onPartClicked() {
    const npc = this.npc;
    this.hideApproach();
    if (npc?.isCompanion) {
      this._dismissCompanion(npc);
    } else if (npc) {
      this.start(npc);
    }
  }

  _onCompanionPartClicked() {
    if (this.game?.companion) {
      this._dismissCompanion(this.game.companion);
    }
  }

  _beginCompanion(npc) {
    this._rewardHandler?.({ type: 'companion', npc });
    this._showToast(`🚶 ${npc.profile.name}: "${npc.profile.walkAccept}"`);
  }

  _dismissCompanion(npc) {
    this._rewardHandler?.({ type: 'dismissCompanion', npc });
    this._showToast(`👋 ${npc.profile.name}: "${npc.profile.partWayLine}"`);
    this.setCompanionTag(null);
  }

  _onIgnoreClicked() {
    if (this.npc) {
      this.npc.ignoreFor(15);
      this.npc.stopApproaching();
    }
    this.hideApproach();
    this.npc = null;
  }

  start(npc) {
    this.active = true;
    this.npc = npc;
    if (npc.isCompanion && npc.profile.companionTalk) {
      this.conversation = npc.profile.companionTalk;
    } else {
      this.conversation = npc.hasMetBefore() ? npc.profile.revisit : npc.profile.firstMeet;
    }
    this.phase = 'greeting';
    this.pendingChoices = false;

    this.box.classList.remove('hidden');
    this.choicesEl.innerHTML = '';
    this.choicesEl.classList.add('hidden');
    this.nextBtn.classList.remove('hidden');

    npc.startConversation();
    npc.markMet();
    this._showGreeting();
  }

  _showGreeting() {
    this._renderLine(this.conversation.greeting);
    this.nextBtn.textContent = '▶ Continue';
  }

  _showChoices() {
    this.phase = 'choices';
    this.expressionEl.textContent = '💬';
    this.textEl.textContent = 'What do you say?';
    this.nextBtn.classList.add('hidden');
    this.choicesEl.classList.remove('hidden');
    this.choicesEl.innerHTML = '';

    this.conversation.choices.forEach((choice, index) => {
      const btn = document.createElement('button');
      btn.className = 'dialogue-choice';
      btn.innerHTML = `<span class="choice-num">${index + 1}</span>${choice.label}`;
      btn.addEventListener('click', () => this._pickChoice(index));
      this.choicesEl.appendChild(btn);
    });
  }

  _pickChoice(index) {
    const choice = this.conversation.choices[index];
    this.phase = 'response';
    this.choicesEl.classList.add('hidden');
    this.choicesEl.innerHTML = '';
    this.nextBtn.classList.remove('hidden');

    this._renderLine(choice.response);
    this.nextBtn.textContent = choice.end ? '👋 Say goodbye' : '▶ Keep talking';

    if (choice.reward) this._applyReward(choice.reward);

    this.pendingChoices = !choice.end;
    if (choice.end) this.phase = 'farewell';
  }

  _applyReward(reward) {
    if (reward.type === 'journal') {
      this.journal.push({ title: reward.title, body: reward.body, npc: this.npc.profile.name });
      this._updateJournalUI();
      this._showToast(`📓 Saved to journal: ${reward.title}`);
    } else if (reward.type === 'speedBoost') {
      this._rewardHandler?.({ type: 'speedBoost', amount: reward.amount, duration: reward.duration });
      this._showToast(reward.message);
    } else if (reward.type === 'waypoint') {
      this._showToast(`📍 ${reward.message}`);
    } else if (reward.type === 'friendship') {
      this.npc.addFriendship();
      this._showToast(`💛 ${this.npc.profile.name} opened up to you.`);
    } else if (reward.type === 'companion') {
      this._beginCompanion(this.npc);
    } else if (reward.type === 'dismissCompanion') {
      this._dismissCompanion(this.npc);
    }
  }

  _showToast(message) {
    if (!this.toastEl) return;
    this.toastEl.textContent = message;
    this.toastEl.classList.remove('hidden');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => this.toastEl.classList.add('hidden'), 4500);
  }

  _updateJournalUI() {
    if (!this.journalList) return;
    this.journalList.innerHTML = '';
    if (this.journal.length === 0) {
      this.journalList.innerHTML = '<li class="journal-empty">Talk to townspeople to collect notes.</li>';
      return;
    }
    this.journal.forEach((entry) => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${entry.title}</strong><span>${entry.npc}</span><p>${entry.body}</p>`;
      this.journalList.appendChild(li);
    });
  }

  advance() {
    if (!this.active) return;
    if (this.phase === 'greeting') {
      this._showChoices();
    } else if (this.phase === 'response') {
      if (this.pendingChoices) this._showChoices();
      else this.close();
    } else if (this.phase === 'farewell') {
      this.close();
    }
  }

  _renderLine(line) {
    const p = this.npc.profile;
    this.nameEl.textContent = `${p.nameJa} · ${p.name}`;
    this.personalityEl.textContent = `${p.emoji} ${p.personality}`;
    this.textEl.textContent = line.text;
    this.expressionEl.textContent = EXPRESSION_EMOJI[line.expression] ?? '😐';
    this.portraitEl.textContent = p.emoji;
    this.npc.setExpression(line.expression);
  }

  close() {
    this.active = false;
    this.box.classList.add('hidden');
    this.choicesEl.classList.add('hidden');
    this.nextBtn.classList.remove('hidden');
    this.nextBtn.textContent = '▶ Continue';
    if (this.npc) {
      this.npc.endConversation();
      if (!this.npc.isCompanion) this.npc = null;
      this.onConversationEnd?.();
    }
  }

  tryAdvanceFromKey() {
    if (!this.active || this.phase === 'choices') return false;
    this.advance();
    return true;
  }

  addJournalEntry(title, body, source) {
    this.journal.push({ title, body, npc: source });
    this._updateJournalUI();
    this._showToast(`📓 Saved to journal: ${title}`);
  }

  showToast(message) {
    this._showToast(message);
  }
}

import { Game } from './game.js';
import { DialogueManager } from './dialogue.js';

const canvas = document.getElementById('game-canvas');
const loading = document.getElementById('loading');
const loadingSub = document.querySelector('.loading-sub');
const loadingFill = document.querySelector('.loading-fill');
const menuBtn = document.getElementById('menu-btn');
const closeMenu = document.getElementById('close-menu');
const menuPanel = document.getElementById('menu-panel');
const musicBtn = document.getElementById('music-btn');
const customBtn = document.getElementById('custom-btn');

function setProgress(label, percent) {
  if (loadingSub) loadingSub.textContent = label;
  if (loadingFill) loadingFill.style.width = `${percent}%`;
}

function showLoadError(message) {
  if (loadingSub) {
    loadingSub.textContent = message;
    loadingSub.style.maxWidth = '320px';
    loadingSub.style.lineHeight = '1.5';
  }
  if (loadingFill?.parentElement) {
    loadingFill.parentElement.style.display = 'none';
  }
}

async function boot() {
  if (window.location.protocol === 'file:') {
    return;
  }

  window.addEventListener('error', (e) => {
    showLoadError(`Error: ${e.message}. Check the browser console (F12).`);
  });

  let game;

  try {
    setProgress('Starting…', 15);
    game = await Game.create(canvas, (label) => setProgress(label, 40 + Math.random() * 40));
    setProgress('Ready!', 100);
    window.__gameBooted = true;

    await new Promise((resolve) => setTimeout(resolve, 200));
    loading.classList.add('hidden');
    setupUI(game);
    game.start();
  } catch (error) {
    console.error('Failed to start game:', error);
    window.__gameBooted = true;
    showLoadError(
      error?.message?.includes('WebGL')
        ? 'WebGL is not available. Try Chrome or Firefox, or enable hardware acceleration.'
        : `Could not start: ${error.message}. Run npm run dev, then open http://localhost:5173`,
    );
  }
}

function setupUI(game) {
  const dialogue = new DialogueManager({
    box: document.getElementById('dialogue-box'),
    approachModal: document.getElementById('approach-modal'),
    approachPortrait: document.getElementById('approach-portrait'),
    approachName: document.getElementById('approach-name'),
    approachPersonality: document.getElementById('approach-personality'),
    approachTagline: document.getElementById('approach-tagline'),
    approachChatBtn: document.getElementById('approach-chat'),
    approachWalkBtn: document.getElementById('approach-walk'),
    approachPartBtn: document.getElementById('approach-part'),
    approachIgnoreBtn: document.getElementById('approach-ignore'),
    companionTag: document.getElementById('companion-tag'),
    companionLabel: document.getElementById('companion-label'),
    companionPartBtn: document.getElementById('companion-part'),
    name: document.getElementById('dialogue-name'),
    personality: document.getElementById('dialogue-personality'),
    text: document.getElementById('dialogue-text'),
    expression: document.getElementById('dialogue-expression'),
    portrait: document.getElementById('dialogue-portrait'),
    next: document.getElementById('dialogue-next'),
    choices: document.getElementById('dialogue-choices'),
    toast: document.getElementById('reward-toast'),
    journalPanel: document.getElementById('journal-panel'),
    journalList: document.getElementById('journal-list'),
    journalBtn: document.getElementById('journal-btn'),
    closeJournalBtn: document.getElementById('close-journal'),
  });
  dialogue._updateJournalUI();
  game.initInteraction(dialogue);

  menuBtn.addEventListener('click', () => menuPanel.classList.remove('hidden'));
  closeMenu.addEventListener('click', () => menuPanel.classList.add('hidden'));

  musicBtn.addEventListener('click', () => {
    game.isMusicPlaying = !game.isMusicPlaying;
    musicBtn.textContent = game.isMusicPlaying ? '♫' : '♪';
    musicBtn.style.background = game.isMusicPlaying ? '#d0ecec' : '';
  });

  customBtn.addEventListener('click', () => {
    const colors = [0x3a7ae8, 0xe85050, 0x50a050, 0xf0a030, 0x9040c0];
    const backpack = game.player.mesh.children.find(
      (c) => c.geometry?.type === 'BoxGeometry' && c.position.z < 0,
    );
    if (backpack?.material) {
      const idx = colors.indexOf(backpack.material.color.getHex());
      backpack.material.color.setHex(colors[(idx + 1) % colors.length]);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      if (game.dialogue?.isOpen()) {
        game.dialogue.close();
      } else if (game.dialogue?.approachOpen) {
        game.dialogue._onIgnoreClicked();
      } else if (!document.getElementById('journal-panel').classList.contains('hidden')) {
        document.getElementById('journal-panel').classList.add('hidden');
      } else {
        menuPanel.classList.toggle('hidden');
      }
    }

    if (game.dialogue?.isOpen() && ['Digit1', 'Digit2', 'Digit3'].includes(e.code)) {
      const index = parseInt(e.code.replace('Digit', ''), 10) - 1;
      const choices = document.querySelectorAll('.dialogue-choice');
      if (choices[index]) choices[index].click();
    }
  });
}

boot();

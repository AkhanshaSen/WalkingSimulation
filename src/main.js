import { Game } from './game.js';

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
    showLoadError('Open via the dev server: run npm run dev, then visit http://localhost:5173');
    return;
  }

  let game;

  try {
    setProgress('Loading town…', 10);
    game = await Game.create(canvas, (label) => setProgress(label, 75));
    setProgress('Ready!', 100);

    await new Promise((resolve) => setTimeout(resolve, 300));
    loading.classList.add('hidden');
    game.start();
    setupUI(game);
  } catch (error) {
    console.error('Failed to start game:', error);
    showLoadError(
      'Could not start the game. Run npm run dev in the project folder, then open http://localhost:5173',
    );
  }
}

function setupUI(game) {
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
      menuPanel.classList.toggle('hidden');
    }
  });
}

boot();

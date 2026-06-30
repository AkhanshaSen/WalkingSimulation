import { defineConfig } from 'vite';

// GitHub Pages project site: https://akhanshasen.github.io/WalkingSimulation/
const repoBase = '/WalkingSimulation/';

export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : repoBase,
  server: {
    open: true,
  },
}));

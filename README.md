# Exploring Town — 街を歩く

A cel-shaded WebGL exploration game built with **Three.js**. Walk and run through a small Japanese town with vending machines, traffic mirrors, winding streets, and NPCs.

![Town exploration game](https://img.shields.io/badge/Three.js-WebGL-000?style=flat)

## Play online

**[Play the game →](https://akhanshasen.github.io/WalkingSimulation/)**

Anyone can open that link in a browser (Chrome, Firefox, Safari, or Edge) and play — no install needed.

## Play locally

```bash
npm install
npm run dev
```

Open the URL shown in your terminal (usually `http://localhost:5173`).

## Deploy updates

Pushing to the `main` branch automatically rebuilds and publishes the game to GitHub Pages.

**One-time setup** (if Pages is not enabled yet):

1. Open [github.com/AkhanshaSen/WalkingSimulation/settings/pages](https://github.com/AkhanshaSen/WalkingSimulation/settings/pages)
2. Under **Build and deployment → Source**, choose **Deploy from a branch**
3. Set **Branch** to `gh-pages` and folder to **`/ (root)`**
4. Save — after the GitHub Action finishes, the game is live

After the first successful deploy, the game is at:
`https://akhanshasen.github.io/WalkingSimulation/`

## Controls

| Input | Action |
|-------|--------|
| **W A S D** / Arrow keys | Walk |
| **Shift** | Run |
| **Mouse drag** | Rotate camera |
| **Scroll** | Zoom camera |
| **Touch (left half)** | Virtual joystick |
| **Touch (right half)** | Rotate camera |
| **Esc** | Toggle menu |

## Features

- Third-person follow camera
- Cel-shaded toon materials with black outlines
- Procedural Japanese town — buildings, vending machines, mailboxes, traffic mirrors, power lines
- CC0 GLB models for trees, benches, shrine, lamps, fountain, and street props
- Walking NPCs along the street
- Top-left minimap tracks your position, NPCs, shops, and nearby interactions
- Character walk animation
- Backpack color customization (👕 button)

## Build

```bash
npm run build
npm run preview
```

Built with [Vite](https://vitejs.dev/) and [Three.js](https://threejs.org/).

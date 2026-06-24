# Exploring Town — 街を歩く

A cel-shaded WebGL exploration game built with **Three.js**. Walk and run through a small Japanese town with vending machines, traffic mirrors, winding streets, and NPCs.

![Town exploration game](https://img.shields.io/badge/Three.js-WebGL-000?style=flat)

## Play

```bash
npm install
npm run dev
```

Open the URL shown in your terminal (usually `http://localhost:5173`).

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
- Walking NPCs along the street
- Character walk animation
- Backpack color customization (👕 button)

## Build

```bash
npm run build
npm run preview
```

Built with [Vite](https://vitejs.dev/) and [Three.js](https://threejs.org/).

# LunarHost 

A unified web-based Minecraft server hosting platform.  
Includes frontend panel, backend API, setup scripts, GitHub Actions, and server management—all in one repo.

## Structure

- `panel/` — Frontend (index, setup, and control panel pages)
- `api/` — Backend API (Node.js example)
- `scripts/` — Python deployment/setup scripts
- `servers/` — User server folders (auto-created)
- `.github/workflows/` — GitHub Actions deployment workflow

## Quick Start

1. Clone the repo
2. Install backend dependencies (`cd api && npm install`)
3. Run backend API (`node api/server.js`)
4. Open `panel/index.html` in your browser

## Customize

- Connect API endpoints to real workflow dispatch and server process management.
- Update Python script to handle real downloads and Java install.
- Enhance file and log management for production use.

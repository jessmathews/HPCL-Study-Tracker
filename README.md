# HPCL Electrical Engineer Study Tracker

A local web app that tracks your 4-week HPCL exam preparation with **server-side data persistence** — your progress is saved to a JSON file on your machine, not just the browser.

## Setup

### Requirements
- [Node.js](https://nodejs.org/) v16 or higher

### Install & Run

```bash
# 1. Install dependencies (only needed once)
npm install

# 2. Start the server
node server.js
```

Then open **http://localhost:3000** in your browser.

### Docker setup
```bash
# 1. Build Image
docker build -t hpcl-tracker:latest .
# 2. Start service in detached mode
docker compose up 
```
The port is forwarded to **http://localhost:3001** It can be edited in the docker-compose.yaml file.

---

## How it works

| Layer | What it does |
|-------|-------------|
| **Frontend** (`public/index.html`) | Renders the tracker UI, handles interactions |
| **Express server** (`server.js`) | Serves the HTML and exposes two API endpoints |
| **JSON file** (`data/progress.json`) | Stores all your progress persistently |

### API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/progress` | Load saved state |
| `POST` | `/api/progress` | Save full state |
| `GET` | `/api/status` | Health check + last save time |

### Data file

Your progress is stored at `data/progress.json`. You can back this file up, copy it between machines, or version-control it.

---

## Features

- ✅ **60 topics** across 6 subjects with checkboxes
- ⭐ **Confidence rating** (1–5 stars) per subject
- 📅 **Exam countdown** — set your exam date
- 📊 **Progress ring + week bars** that update live
- 📝 **Quick notes** for weak areas, resources, mock scores
- 💾 **Server-side save** with debouncing (saves 800ms after last action)
- 🔄 **localStorage fallback** if the server is unreachable
- 💡 Light mode, clean design

---
Made with ❤️ and JavaScript
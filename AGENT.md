# AGENT.md — CC-AI-Freyal-Bot

## Purpose
An AI-powered Google Apps Script WebApp that receives user confessions, generates an AI opinion on them, and saves the confession and metadata to a database (Google Sheets / JSON).

## Structure
```
CC-AI-Freyal-Bot/
├── README.md
├── AGENT.md
├── .gitignore
└── src/
    ├── appsscript.json  ← GAS manifest
    ├── client/          ← HTML/CSS/JS frontend (submission form, response display)
    └── server/          ← GAS server-side scripts (AI call, data persistence)
```

## Key Facts
- **Platform:** Google Apps Script WebApp
- **AI integration:** External AI API called from server-side GAS (`UrlFetchApp`)
- **Data store:** Google Sheets or Drive-based JSON DB
- **Entry point:** `server/` contains the `doGet()` / `doPost()` functions

## Development Notes
- All source files live under `src/` — push with clasp from that directory
- No Node/npm at runtime; ES5-compatible GAS code only
- AI API key should be stored in Script Properties, not hardcoded

# CC AI Freyal Bot

A Google Apps Script WebApp that receives user confessions, generates an AI-powered opinion on each one, and saves the confession and metadata to a database. Built with a client/server split architecture.

![Google Apps Script](https://img.shields.io/badge/Google%20Apps%20Script-4285F4?style=flat&logo=google&logoColor=white)
![Platform](https://img.shields.io/badge/Platform-WebApp-blue)
![AI](https://img.shields.io/badge/AI-Powered-purple)

---

## Overview

Users submit a confession through the web interface. The server-side GAS function forwards the text to an external AI API via `UrlFetchApp`, retrieves a generated opinion, and saves the full record (confession, opinion, metadata) to a Google Sheets or Drive-based JSON database. The AI response is then displayed back to the user.

---

## Features

- User confession submission form
- AI opinion generation via external API (`UrlFetchApp`)
- Full record persistence (confession + AI response + metadata)
- Displayed AI response on the same page after submission
- Client/server split architecture

---

## Tech Stack

| Layer      | Technology                      |
|------------|---------------------------------|
| Platform   | Google Apps Script              |
| UI         | HTML5, CSS3, Vanilla JavaScript |
| AI         | External AI API (via `UrlFetchApp`) |
| Database   | Google Sheets / Drive JSON DB   |
| Deploy     | clasp CLI                       |

---

## Project Structure

```
CC-AI-Freyal-Bot/
├── README.md
├── AGENT.md
├── .gitignore
└── src/
    ├── appsscript.json  # GAS manifest
    ├── client/          # Submission form and AI response display
    └── server/          # doGet(), AI API call, data persistence
```

---

## Getting Started

### Prerequisites

- A Google account with Google Apps Script access
- An API key for the AI provider
- [clasp](https://github.com/google/clasp) installed globally

```bash
npm install -g @google/clasp
clasp login
```

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/mohamedallam13/CC-AI-Freyal-Bot.git
   cd CC-AI-Freyal-Bot
   ```

2. Link to your Apps Script project:
   ```bash
   clasp create --type webapp --title "CC AI Freyal Bot" --rootDir src
   ```

3. Push source files:
   ```bash
   clasp push
   ```

4. Store your AI API key in **Script Properties** (not in code):
   - In the Apps Script editor, go to **Project Settings > Script Properties**
   - Add key: `AI_API_KEY` · Value: your key

---

## Deployment

1. In the Apps Script editor, go to **Deploy > New deployment**
2. Select type: **Web app**
3. Set **Who has access**: Anyone
4. Click **Deploy** and share the Web App URL

---

## Author

**Mohamed Allam** — [GitHub](https://github.com/mohamedallam13) · [Email](mailto:mohamedallam.tu@gmail.com)

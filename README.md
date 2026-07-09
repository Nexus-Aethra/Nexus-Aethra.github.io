# 🌌 Nexus — AI-Native Game Platform

**Where Worlds Are Forged from Conversation.**

Nexus is an experimental AI-native game platform that redefines how games are created and played. It replaces hardcoded game logic with a dynamic ecosystem where Large Language Models (LLMs) generate terrain, craft branching narratives, and empower Non-Player Characters (NPCs) with runtime code compilation. Every player interaction reshapes the world in real time.

> 🎯 This repository hosts the **Nexus marketing site** (React + Vite + Tailwind), automatically deployed to **GitHub Pages** via GitHub Actions.

---

## 🔗 Live Site

Once enabled, visit: **`https://Nexus-Aethra.github.io/`**

---

## 🚀 The Ecosystem

Nexus is built as a modular microservices architecture. Each module works together to deliver a cohesive, ever-evolving experience:

| Module | Name | Core Responsibility |
| :--- | :--- | :--- |
| **Core Platform** | **Nexus** | The central hub that orchestrates all AI and game engine interactions. |
| **Narrative Engine** | **Story Loom** | Maintains branching story trees (chapters, nodes, quests, triggers) via LLM dialogue analysis, auto-generating new plots from player text. |
| **Auth Gateway** | **Portal** | Unified security entry point — handles login/registration, issues JWT tokens, and distributes public keys for module-to-module verification. |
| **Terrain Generator** | *(Coming soon)* | Dynamically builds 3D/2D worlds from natural language descriptions. |
| **Runtime Compiler** | *(Coming soon)* | Enables NPCs to generate, compile, and execute code on the fly based on player requests. |

---

## ✨ Key Features

- 🧠 **LLM-Driven Generation** — Terrain, dialogue, and quests are generated dynamically, not pre-scripted.
- 🌳 **Dynamic Narrative Trees** — Players expand the story through natural conversations; AI bridges the gap between player intent and game logic.
- 🛡️ **Secure by Design** — JWT-based authentication with automatic public key rotation across all services.
- 🔧 **Runtime Compilation** — NPCs can "learn" new abilities by writing and executing code in real time.
- 🎮 **Infinite Replayability** — No two playthroughs are the same, because the world evolves with every choice.
- 🌐 **Bilingual UI** — One-click toggle between English and 简体中文 (state persists in `localStorage`).

---

## 🛠️ Tech Stack

| Layer | Choice |
| :--- | :--- |
| Framework | **React 18 + TypeScript** |
| Bundler | **Vite 6** |
| Styling | **Tailwind CSS 3** (custom design tokens, no UI kit) |
| Routing | **React Router v7** (`HashRouter` for GitHub Pages compatibility) |
| State | **Zustand** (theme + language stores, `persist` middleware) |
| Icons | **lucide-react** |
| Animation | CSS keyframes + IntersectionObserver (`reveal-up` / `reveal-blur` / `reveal-clip`) |
| Fonts | Anton (display), Instrument Serif (editorial), Inter (UI), JetBrains Mono (mono), Noto Sans SC / ZCOOL XiaoWei (CJK fallback) |

---

## 🗺️ Project Structure

```
.
├── .github/workflows/deploy.yml   # GitHub Actions: build → deploy
├── public/
│   ├── .nojekyll                  # disables Jekyll on GitHub Pages
│   ├── favicon.svg
│   └── logo.png                   # brand logo
├── src/
│   ├── components/                # Hero, Vision, Ecosystem, Features, …
│   ├── hooks/                     # useReveal, useMouse, useTheme
│   ├── i18n/                      # dict.ts (en/zh), store.ts, LangSwitcher
│   ├── pages/Home.tsx             # main page composing all sections
│   ├── lib/utils.ts               # cn() helper
│   ├── App.tsx                    # router + 404
│   ├── main.tsx                   # entry
│   └── index.css                  # design tokens + global styles
├── tailwind.config.js
├── vite.config.ts                 # base: "./" for repo pages
└── package.json
```

---

## 🧑‍💻 Local Development

```bash
# Install dependencies
npm install

# Start dev server (HMR)
npm run dev        # → http://127.0.0.1:5173/

# Type check only
npm run check

# Production build → ./dist
npm run build

# Preview built bundle locally
npm run preview
```

---

## 🌐 GitHub Pages Deployment

This repo is wired with a one-flow deployment:

1. Push to `main` →
2. `.github/workflows/deploy.yml` runs `npm ci` + `npm run build` →
3. The `dist/` folder is uploaded as a Pages artifact →
4. GitHub Actions publishes it under the `github-pages` environment →
5. The site becomes live at `https://Nexus-Aethra.github.io/`.

### One-time setup in the GitHub UI

1. Repo → **Settings → Pages**
2. **Source**: select **GitHub Actions** (not "Deploy from a branch").
3. Push to `main`. The first run takes ~1–2 minutes; subsequent runs are cached.

> ⚠️ If the repo is the **organization page** (`Nexus-Aethra.github.io` itself), the website URL is the root domain `https://Nexus-Aethra.github.io/`. Our `vite.config.ts` uses `base: "./"` so it works either as a root page or as a project page (`https://Nexus-Aethra.github.io/<repo>/`).

### Why this works

- **`HashRouter`** — no need for server-side rewrites; deep links like `/#/manifesto` work after hard refresh.
- **`.nojekyll`** — GitHub Pages won't try to run our `dist/` through Jekyll.
- **`base: "./"`** — assets resolve relatively, so we don't need to hardcode the org name in paths.

---

## 🗺️ Roadmap

- [x] Module planning & architecture design
- [x] Auth Portal (JWT issuance & key distribution)
- [x] Story Loom (Narrative tree engine)
- [x] Bilingual UI (EN / 中)
- [x] GitHub Pages deployment via Actions
- [ ] Terrain Generator integration
- [ ] Runtime Compilation Layer
- [ ] First public playable demo

---

## 🤝 Contributing

We welcome contributors who are passionate about AI, games, and dynamic systems. Check out the [Contribution Guidelines](CONTRIBUTING.md) to get started.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🌐 Stay Tuned

- **Website**: [https://Nexus-Aethra.github.io](https://Nexus-Aethra.github.io) *(You are here!)*
- **Documentation**: Coming soon.
- **Discord**: Join our community *(link coming soon)*.

---

*Built with ❤️ by the Nexus Team.*

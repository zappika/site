# Plan: Site Restyling

## Last session — 2026-05-29
- What we built: Removed top navigation bar (name + playlists link) from index.html
- Where we stopped: Committed and pushed, Vercel deploy triggered
- Next action: None — site is live and clean

## Goal
Update the homepage styling to match an editorial, warm typographic aesthetic. New palette and three-font system: Fraunces for headlines, Newsreader for body, JetBrains Mono for details/dates/labels. Keep all content and structure unchanged — CSS and font imports only.
**Progress:** `100%`


## Phase 1: Restyle index.html ← start here
- [x] 🟩 Swap Google Fonts imports: add Fraunces (600), Newsreader (400), JetBrains Mono (400, 500) — remove Syne and Inter
- [x] 🟩 Update CSS variables: `--bg: #f4f1e8`, `--fg: #1a1a1a`, `--fg-mid: #6b6358`, `--fg-dim: rgba(107,99,88,0.55)`
- [x] 🟩 Apply Fraunces to all display/headline elements (h1, h2, `.top-name`)
- [x] 🟩 Apply Newsreader to body text
- [x] 🟩 Apply JetBrains Mono to detail elements (`.period`, `.label`, `.nav a`, `.site-link`)
- [x] 🟩 Tune font sizes and weights to suit the new fonts (Fraunces reads larger, Newsreader needs slightly more line-height)
- [x] 🟩 Test locally with `npx serve .`

Acceptance criteria: Open locally, matches the warm editorial feel from the reference — correct colors, correct fonts on every element, no Syne or Inter loading.

## Decision log
- 2026-05-25: Three-font system chosen (Fraunces / Newsreader / JetBrains Mono) based on user reference screenshot. Color palette is warm off-white background (#f4f1e8) with near-black text (#1a1a1a) and warm brown accent (#6b6358).

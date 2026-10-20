# site

Personal homepage at sarper.se. The playlists archive lives in a separate repo (`playlists`) and is proxied here at `/playlists/` via Vercel rewrites.

## Stack

No framework. No build step. No dependencies.

- **HTML/CSS/JS** — `index.html` is the homepage. Dark and light follow the system setting
  (`prefers-color-scheme`); there's deliberately no toggle on the page. All `oklch()`, fully neutral, no
  accent hue: dark is near-black ground with off-white text; light is barely-off white
  (`oklch(0.993 0.001 250)`) with near-black text. Greys for secondary text and labels; the name and
  link hover use full-strength text colour (`--accent` = `--fg`).
  Layout: fixed top bar (left: name; right: BCN time + Last.fm song as `Title - Artist`, no em dash; no nav), about text big in the
  left half of the first screen, then numbered sections — hairline on top, `(Label)` and `01` in
  monospace, items in two columns (one on mobile). No photo or tagline.
  Every text colour clears WCAG AA (4.5:1) against the background — keep it that way when retuning.
- **Fontshare** — one face: `Satoshi` (400/500/700/900) for everything; hierarchy comes from size
  and weight. Satoshi has no 600, so `font-weight:600` renders as 700.

## File structure

```
/
├── index.html                    # homepage
├── profile.png                   # not used on the page right now
├── api/np.js                     # Vercel function: latest Last.fm scrobble (user noodleey, fed by P8); needs LASTFM_API_KEY env var
├── vercel.json                   # rewrites /playlists/* → playlists Vercel project; redirects /wine, /p8
└── CLAUDE.md
```

## Deployment

Two separate repos/Vercel projects:

- **`site`** (this repo) → deploys to `sarper.se`
- **`playlists`** (separate repo at `~/Projects/playlists`) → deploys to its own Vercel project

`vercel.json` in this repo rewrites `/playlists/:path*` to the playlists Vercel deployment URL. After deploying the playlists project, update the `destination` in `vercel.json` with the actual URL and redeploy.

Use `npx serve .` locally to test the homepage. `serve` doesn't run `/api`, so the song in the top bar stays hidden locally; the clock (Europe/Madrid) works.

## P8 pages

Moved to **p8.surf** (2026-10-15) — they now live in the P8 repo's `web/` folder. `vercel.json`
here 308-redirects `/p8` and `/p8/*` to p8.surf. Keep those redirects: P8 builds up to 0.4.2
link to `sarper.se/p8` from their About section.

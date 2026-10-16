# site

Personal homepage at sarper.se. The playlists archive lives in a separate repo (`playlists`) and is proxied here at `/playlists/` via Vercel rewrites.

## Stack

No framework. No build step. No dependencies.

- **HTML/CSS/JS** — `index.html` is the homepage. Dark only, no light mode (deliberate). All `oklch()`:
  near-black ground, off-white text, neutral greys for secondary text and labels, and a Nike-style
  volt lime accent (`oklch(0.93 0.23 124)`) for the name and link hover. No horizontal divider lines.
  Every text colour clears WCAG AA (4.5:1) against the background — keep it that way when retuning.
- **Google Fonts** — one variable face: `Schibsted Grotesk` (400–900) for everything; hierarchy
  comes from size and weight.

## File structure

```
/
├── index.html                    # homepage (profile photo: profile.png)
├── profile.png
├── vercel.json                   # rewrites /playlists/* → playlists Vercel project; redirects /wine, /p8
└── CLAUDE.md
```

## Deployment

Two separate repos/Vercel projects:

- **`site`** (this repo) → deploys to `sarper.se`
- **`playlists`** (separate repo at `~/Projects/playlists`) → deploys to its own Vercel project

`vercel.json` in this repo rewrites `/playlists/:path*` to the playlists Vercel deployment URL. After deploying the playlists project, update the `destination` in `vercel.json` with the actual URL and redeploy.

Use `npx serve .` locally to test the homepage.

## P8 pages

Moved to **p8.surf** (2026-10-15) — they now live in the P8 repo's `web/` folder. `vercel.json`
here 308-redirects `/p8` and `/p8/*` to p8.surf. Keep those redirects: P8 builds up to 0.4.2
link to `sarper.se/p8` from their About section.

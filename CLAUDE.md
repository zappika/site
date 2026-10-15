# site

Personal homepage at sarper.se. The playlists archive lives in a separate repo (`playlists`) and is proxied here at `/playlists/` via Vercel rewrites.

## Stack

No framework. No build step. No dependencies.

- **HTML/CSS/JS** — `index.html` is the homepage. Warm palette, all `oklch()`: cream ground,
  warm brown-grey text, dusty rose for the name + link hover, muted sage for section headings.
  Every text colour clears WCAG AA (4.5:1) against the background — keep it that way when retuning.
- **Google Fonts** — two variable faces, one request:
  - `Source Serif 4` (weight + optical size + italic) for body text
  - `IBM Plex Sans` (weight 400–600) for the display title and uppercase small-caps labels

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

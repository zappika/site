# site

Personal homepage at sarper.se. The playlists archive lives in a separate repo (`playlists`) and is proxied here at `/playlists/` via Vercel rewrites.

## Stack

No framework. No build step. No dependencies.

- **HTML/CSS/JS** — `index.html` is the homepage, styled after makingsoftware.com (paper white, blueprint blue accent)
- **Google Fonts** — two variable faces, one request:
  - `Source Serif 4` (weight + optical size + italic) for body text
  - `IBM Plex Sans` (weight 400–600) for the display title and uppercase small-caps labels

## File structure

```
/
├── index.html                    # homepage (profile photo: profile.png)
├── profile.png
├── vercel.json                   # rewrites /playlists/* → playlists Vercel project
└── CLAUDE.md
```

## Deployment

Two separate repos/Vercel projects:

- **`site`** (this repo) → deploys to `sarper.se`
- **`playlists`** (separate repo at `~/Projects/playlists`) → deploys to its own Vercel project

`vercel.json` in this repo rewrites `/playlists/:path*` to the playlists Vercel deployment URL. After deploying the playlists project, update the `destination` in `vercel.json` with the actual URL and redeploy.

Use `npx serve .` locally to test the homepage.

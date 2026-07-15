# site

Personal homepage at sarper.se. The playlists archive lives in a separate repo (`playlists`) and is proxied here at `/playlists/` via Vercel rewrites.

## Stack

No framework. No build step. No dependencies.

- **HTML/CSS/JS** — `index.html` is the homepage, styled after makingsoftware.com (paper white, blueprint blue accent)
- **Google Fonts** — `EB Garamond` for body text (stand-in for ABC Arizona, which is a paid Dinamo font)
- **Departure Mono** — self-hosted pixel font (`DepartureMono-Regular.woff2`, free/OFL) for the display title and small-caps labels

## File structure

```
/
├── index.html                    # homepage (profile photo: profile.png)
├── profile.png
├── DepartureMono-Regular.woff2   # self-hosted pixel font
├── vercel.json                   # rewrites /playlists/* → playlists Vercel project
└── CLAUDE.md
```

## Deployment

Two separate repos/Vercel projects:

- **`site`** (this repo) → deploys to `sarper.se`
- **`playlists`** (separate repo at `~/Projects/playlists`) → deploys to its own Vercel project

`vercel.json` in this repo rewrites `/playlists/:path*` to the playlists Vercel deployment URL. After deploying the playlists project, update the `destination` in `vercel.json` with the actual URL and redeploy.

Use `npx serve .` locally to test the homepage.

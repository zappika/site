# playlists

A personal monthly playlist archive. The owner curates playlists on Apple Music each month and publishes them here — visitors can listen on either Apple Music or Spotify, and expand any playlist to see the full tracklist.

## What it does

- Displays a grid of monthly playlists, newest first
- Each card shows a custom cover image, the month/year, and links to Apple Music and Spotify
- Click a card to expand the tracklist inline (numbered, with artist)
- Most months are white/mono; occasionally a playlist gets its own color scheme (set per-entry in the data)
- Fully responsive: 2-column grid on desktop, single column on mobile

## Stack

No framework. No build step. No dependencies.

- **HTML/CSS/JS** — `playlists/index.html` is the archive UI; root `index.html` is a homepage placeholder for now
- **Google Fonts** — `Syne` (800 weight) for display titles; `IBM Plex Mono` (300/400/500, italic) for all metadata, track listings, and body text
- **playlists.json** — the only data source, loaded from the site root with `fetch('/playlists.json')` so it works when the page is served from `/playlists/`

## File structure

```
/
├── index.html              # homepage (placeholder)
├── playlists/
│   └── index.html          # playlist grid + tracklists
├── playlists.json          # all playlist data (site root)
├── covers/                 # square cover images, one per month
│   ├── 2026-04.png
│   ├── 2026-03.png
│   └── ...
└── CLAUDE.md
```

Cover paths in JSON should be **root-absolute** (e.g. `/covers/2026-05.png`) so they resolve correctly from `/playlists/`. The playlists page also normalizes plain `covers/...` paths to root-absolute if needed.

## Adding a new month

Prepend a new object to `playlists.json`. The array is ordered newest-first.

```json
{
  "id": "2026-05",
  "month": "MAY",
  "year": "2026",
  "title": "may",
  "appleUrl": "https://music.apple.com/playlist/...",
  "spotifyUrl": "https://open.spotify.com/playlist/...",
  "cover": "/covers/2026-05.png",
  "tracks": [
    { "n": 1, "title": "Song Title", "artist": "Artist Name" }
  ]
}
```

Drop the corresponding cover image into `covers/` as a square raster (PNG or JPG — `object-fit: cover`).

## Color scheme (optional)

Most months default to the site palette (`#f5f5f0` background, `#0a0a0a` text). To give a month its own color scheme, add `bg` and `fg` to the entry:

```json
{
  "bg": "#C8FF00",
  "fg": "#0a0a0a"
}
```

The colors apply to the card background, text, and the expanded tracklist. Use sparingly — the contrast with the mono months is the point.

## Deployment

Static files only. Drop the folder on any static host and point a subdomain at it.

Recommended: **Vercel** or **Netlify** — connect a GitHub repo, push to deploy. No configuration needed.

The site requires a server to load `playlists.json` via `fetch()` — opening HTML from the filesystem will not load the archive correctly. Use `npx serve .` locally and open **`/playlists/`** (e.g. `http://localhost:3000/playlists/`).

## Planned

- Spotify converter tool (private): paste Apple Music tracklist → auto-create matching Spotify playlist via the Spotify Web API

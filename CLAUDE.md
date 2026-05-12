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

- **HTML/CSS/JS** — single `index.html`, vanilla everything
- **Google Fonts** — `Syne` (800 weight) for display titles; `IBM Plex Mono` (300/400/500, italic) for all metadata, track listings, and body text
- **playlists.json** — the only data source, fetched at runtime via `fetch()`

## File structure

```
/
├── index.html          # the entire site
├── playlists.json      # all playlist data
├── covers/             # square cover images, one per month
│   ├── 2026-04.jpg
│   ├── 2026-03.jpg
│   └── ...
└── CLAUDE.md
```

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
  "cover": "covers/2026-05.jpg",
  "tracks": [
    { "n": 1, "title": "Song Title", "artist": "Artist Name" }
  ]
}
```

Drop the corresponding cover image into `covers/` as a square JPG (any resolution — it's `object-fit: cover`).

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

The site requires a server to load `playlists.json` via `fetch()` — opening `index.html` directly from the filesystem won't work. Use `npx serve .` locally for development.

## Planned

- Spotify converter tool (private): paste Apple Music tracklist → auto-create matching Spotify playlist via the Spotify Web API

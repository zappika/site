// Latest Last.fm scrobble for noodleey (P8 scrobbles there), so the key stays server-side.
// Fallback cover from iTunes Search (no key); only trusted when the artist matches
const norm = s => s.toLowerCase().normalize('NFD').replace(/[^a-z0-9]/g, '');
async function itunesArt(artist, title) {
  try {
    const q = encodeURIComponent(`${artist} ${title}`);
    const { results } = await (await fetch(`https://itunes.apple.com/search?media=music&entity=song&limit=5&term=${q}`)).json();
    const hit = results.find(x => norm(x.artistName).includes(norm(artist)) || norm(artist).includes(norm(x.artistName)));
    return hit?.artworkUrl100?.replace('100x100bb', '300x300bb') || null;
  } catch { return null; }
}

module.exports = async (req, res) => {
  const key = process.env.LASTFM_API_KEY;
  if (!key) return res.status(500).json({ error: 'LASTFM_API_KEY not set' });

  const url = 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=noodleey&limit=1&format=json&api_key=' + key;
  try {
    const r = await fetch(url);
    const t = (await r.json()).recenttracks.track[0];
    // Biggest cover Last.fm has; it serves a grey star placeholder when there's no art
    const art = t.image?.at(-1)?.['#text'] || null;
    const lfm = art && !art.includes('2a96cbd8b46e442fc41c2b86b821562f') ? art : null;
    const cover = lfm || await itunesArt(t.artist['#text'], t.name);
    res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate=60');
    res.json({
      title: t.name,
      artist: t.artist['#text'],
      url: t.url,
      playing: t['@attr']?.nowplaying === 'true',
      at: t.date ? Number(t.date.uts) : null,
      art: cover,
    });
  } catch {
    res.status(502).json({ error: 'Last.fm unavailable' });
  }
};

// Latest Last.fm scrobble for noodleey (P8 scrobbles there), so the key stays server-side.
module.exports = async (req, res) => {
  const key = process.env.LASTFM_API_KEY;
  if (!key) return res.status(500).json({ error: 'LASTFM_API_KEY not set' });

  const url = 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=noodleey&limit=1&format=json&api_key=' + key;
  try {
    const r = await fetch(url);
    const t = (await r.json()).recenttracks.track[0];
    res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate=60');
    res.json({
      title: t.name,
      artist: t.artist['#text'],
      url: t.url,
      playing: t['@attr']?.nowplaying === 'true',
      at: t.date ? Number(t.date.uts) : null,
    });
  } catch {
    res.status(502).json({ error: 'Last.fm unavailable' });
  }
};

import { useState } from 'react';
import './Background.css';

const TRACKS = [
  {
    id: 'burna-boy-tested-approved-trusted',
    title: 'Tested, Approved & Trusted',
    artist: 'Burna Boy',
    album: 'I Told Them...',
    genre: 'Afrobeats',
    youtubeId: 'bGsKQxIwEeQ',
  },
  {
    id: 'nikita-kering-ex',
    title: 'Ex',
    artist: "Nikita Kering'",
    album: 'A Side of Me',
    genre: 'R&B / Soul',
    youtubeId: '7Q7das-vwL8',
  },
  {
    id: 'nikita-kering-better-than-ever',
    title: 'Better Than Ever',
    artist: "Nikita Kering'",
    album: 'The Other Side',
    genre: 'R&B / Soul',
    youtubeId: 'C4g_v0ckN7k',
  },
  {
    id: 'nikita-kering-never-let-you-go',
    title: 'Never Let You Go',
    artist: "Nikita Kering'",
    album: 'A Side of Me',
    genre: 'R&B / Pop',
    youtubeId: 'ZZTwIGZQnW4',
  },
  {
    id: 'bien-ill-be-okay',
    title: "I'll Be Okay",
    artist: 'Bien',
    album: 'Alusa Why Are You Top-less?',
    genre: 'Afro-pop / Kenya',
    youtubeId: '_POKM8PhWrA',
  },
  {
    id: 'ruger-snapchat',
    title: 'Snapchat',
    artist: 'Ruger',
    album: 'The Second Wave',
    genre: 'Afrobeats / Dancehall',
    youtubeId: 'ECU44OYzfb4',
  },
  {
    id: 'zzero-sufuri-otero',
    title: 'Otero (feat. Toxic Lyrikali)',
    artist: 'Zzero Sufuri',
    album: 'Gengetone Singles',
    genre: 'Gengetone / Kenya',
    youtubeId: '213k_dMs32s',
  },
  {
    id: 'burna-boy-city-boys',
    title: 'City Boys',
    artist: 'Burna Boy',
    album: 'I Told Them...',
    genre: 'Afrobeats',
    youtubeId: 'TA8drKpPbao',
  },
  {
    id: 'rema-calm-down',
    title: 'Calm Down',
    artist: 'Rema',
    album: 'Rave & Roses',
    genre: 'Afrorave',
    youtubeId: 'CQLsdm1ZYAw',
  },
  {
    id: 'tyla-water',
    title: 'Water',
    artist: 'Tyla',
    album: 'TYLA',
    genre: 'Amapiano / Pop',
    youtubeId: 'XoiOOiuH8iI',
  },
  {
    id: 'ayra-starr-rush',
    title: 'Rush',
    artist: 'Ayra Starr',
    album: '19 & Dangerous',
    genre: 'Afrobeats',
    youtubeId: 'crtQSTYWtqE',
  },
  {
    id: 'asake-lonely-at-the-top',
    title: 'Lonely At The Top',
    artist: 'Asake',
    album: 'Work of Art',
    genre: 'Afro-fusion',
    youtubeId: 'bbVZo4Yw7pI',
  },
  {
    id: 'sauti-sol-suzanna',
    title: 'Suzanna',
    artist: 'Sauti Sol',
    album: 'Midnight Train',
    genre: 'Afro-pop',
    youtubeId: 'mFBJtuQ1Llc',
  },
  {
    id: 'soft-instrumental',
    title: 'Soft Instrumental Ambient',
    artist: 'Event Atmosphere',
    album: 'Background Sessions',
    genre: 'Ambient Lounge',
    youtubeId: 'LY26B9CnNuo',
  },
];

function BackgroundMusic() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [selectedTrackIndex, setSelectedTrackIndex] = useState(0);

  const currentTrack = TRACKS[selectedTrackIndex];
  const youtubeUrl = `https://www.youtube.com/watch?v=${currentTrack.youtubeId}`;
  const embedUrl = `https://www.youtube-nocookie.com/embed/${currentTrack.youtubeId}?controls=1${isOpen ? '&autoplay=1' : ''}`;

  function nextTrack() {
    setSelectedTrackIndex((prev) => (prev + 1) % TRACKS.length);
  }

  function prevTrack() {
    setSelectedTrackIndex((prev) => (prev - 1 + TRACKS.length) % TRACKS.length);
  }

  if (isMinimized) {
    return (
      <button
        type="button"
        className="evently-music-minimized-btn"
        onClick={() => setIsMinimized(false)}
        aria-label="Expand music player"
        title={`Now playing: ${currentTrack.title} by ${currentTrack.artist}. Click to expand player.`}
      >
        <span className="minimized-music-icon" aria-hidden="true">♪</span>
        <span className="minimized-music-text">{currentTrack.title}</span>
        <span className="minimized-expand-icon" aria-hidden="true">▲</span>
      </button>
    );
  }

  return (
    <section className="evently-music-player" aria-label="Background music">
      <div className="evently-music-header">
        <div className="evently-music-info">
          <span className="evently-music-icon" aria-hidden="true">
            ♪
          </span>

          <div className="evently-music-details">
            <span className="evently-track-counter">
              Track {selectedTrackIndex + 1} of {TRACKS.length}
            </span>
            <p className="evently-music-title">{currentTrack.title}</p>
            <p className="evently-music-subtitle">
              {currentTrack.artist} {currentTrack.album ? `• ${currentTrack.album}` : ''}
            </p>
          </div>
        </div>

        <div className="evently-quick-controls">
          <button
            type="button"
            className="evently-nav-btn"
            onClick={prevTrack}
            aria-label="Previous track"
            title="Previous track"
          >
            ⏮
          </button>
          <button
            type="button"
            className="evently-nav-btn"
            onClick={nextTrack}
            aria-label="Next track"
            title="Next track"
          >
            ⏭
          </button>
          <button
            type="button"
            className={`evently-nav-btn playlist-toggle-btn ${showPlaylist ? 'is-active' : ''}`}
            onClick={() => setShowPlaylist((prev) => !prev)}
            aria-label="Toggle playlist view"
            title="Toggle playlist view"
          >
            ☰
          </button>
          <button
            type="button"
            className="evently-nav-btn"
            onClick={() => setIsMinimized(true)}
            aria-label="Minimize music player"
            title="Minimize to small icon"
          >
            −
          </button>
        </div>
      </div>

      {showPlaylist && (
        <div className="evently-music-playlist" role="tablist" aria-label="Select song">
          <div className="evently-playlist-heading">
            <span>PLAYLIST ({TRACKS.length})</span>
            <span className="evently-genre-badge">{currentTrack.genre}</span>
          </div>

          <div className="evently-playlist-scroll">
            {TRACKS.map((track, index) => {
              const isActive = index === selectedTrackIndex;
              return (
                <button
                  key={track.id}
                  type="button"
                  className={`evently-playlist-btn ${isActive ? 'is-active' : ''}`}
                  onClick={() => {
                    setSelectedTrackIndex(index);
                    if (!isOpen) setIsOpen(true);
                  }}
                  aria-label={`Play ${track.title} by ${track.artist}`}
                  aria-pressed={isActive}
                >
                  <span className="playlist-btn-status" aria-hidden="true">
                    {isActive ? '▶' : '•'}
                  </span>
                  <div className="playlist-btn-info">
                    <span className="playlist-btn-title">{track.title}</span>
                    <span className="playlist-btn-artist">{track.artist}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <button
        type="button"
        className="evently-music-toggle"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="evently-youtube-player"
      >
        {isOpen ? 'Close player' : 'Open music player'}
      </button>

      {isOpen && (
        <iframe
          id="evently-youtube-player"
          className="evently-youtube-player"
          src={embedUrl}
          title={`${currentTrack.title} - ${currentTrack.artist} on YouTube`}
          allow="autoplay; encrypted-media; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      )}

      <a
        className="evently-music-link"
        href={youtubeUrl}
        target="_blank"
        rel="noreferrer"
      >
        Open "{currentTrack.title}" on YouTube ↗
      </a>
    </section>
  );
}

export default BackgroundMusic;

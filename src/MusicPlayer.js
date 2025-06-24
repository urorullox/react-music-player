
import { useState, useRef } from "react";
import { Play, Pause, CheckCircle2, MoreVertical } from "lucide-react";

const initialSongs = [
  {
    title: "Where's My Love (Acoustic)",
    artist: "SYML",
    cover: "https://via.placeholder.com/150",
    src: "SYML - Where's My Love (Acoustic).mp3"
  },
  {
    title: "Saturn",
    artist: "Sleeping At Last",
    cover: "https://via.placeholder.com/150",
    src: "Sleeping At Last - Saturn (Official Music Video).mp3"
  },
  {
    title: "Apocalypse",
    artist: "Cigarettes After Sex",
    cover: "https://via.placeholder.com/150",
    src: "Apocalypse - Cigarettes After Sex.mp3"
  },
  {
    title: "Anchor",
    artist: "Novo Amor",
    cover: "https://via.placeholder.com/150",
    src: "Novo Amor - Anchor (official video).mp3"
  },
  {
    title: "Everything I Wanted",
    artist: "Billie Eilish",
    cover: "https://via.placeholder.com/150",
    src: "Billie Eilish - everything i wanted (Official Music Video).mp3"
  },
  {
    title: "River Flows in You",
    artist: "Yiruma",
    cover: "https://via.placeholder.com/150",
    src: "Yiruma, (이루마) - River Flows in You.mp3"
  },
  {
    title: "Holocene",
    artist: "Bon Iver",
    cover: "https://via.placeholder.com/150",
    src: "Bon Iver - Holocene - Official Video.mp3"
  },
  {
    title: "Sanctuary sipasip",
    artist: "Joji",
    cover: "https://via.placeholder.com/150",
    src: "Joji - Sanctuary (Official Video).mp3"
  },
  {
    title: "Hope Is a Dangerous Thing...",
    artist: "Lana Del Rey",
    cover: "https://via.placeholder.com/150",
    src: "hope is a dangerous thing for a woman like me to have - but i have it (Official Audio).mp3"
  },
  {
    title: "Sæglópur",
    artist: "Sigur Rós",
    cover: "https://via.placeholder.com/150",
    src: "Sæglópur  [Official Video - Full Version - 4K].mp3"
  }
];

export default function MusicPlayer() {
  const [songs, setSongs] = useState(initialSongs);
  const [currentSong, setCurrentSong] = useState(0);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  const handleSongChange = (index) => {
    setCurrentSong(index);
    setPlaying(false);
    setTimeout(() => audioRef.current?.play(), 100);
    setPlaying(true);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #065f46, #000)', padding: '1rem', color: 'white' }}>
      <div style={{ borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.4)', overflow: 'hidden' }}>
        <img src={songs[currentSong].cover} alt="cover" style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
        <div style={{ padding: '1rem' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '12px' }}>{songs[currentSong].title} – {songs[currentSong].artist}</h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1rem' }}>
            <button onClick={togglePlay} style={{ background: 'white', color: '#065f46', width: '48px', height: '48px', borderRadius: '50%', fontSize: '20px', cursor: 'pointer' }}>
              {playing ? <Pause /> : <Play />}
            </button>
            <input type="range" defaultValue="30" max="100" step="1" style={{ width: '75%' }} />
          </div>
          <audio ref={audioRef} src={songs[currentSong].src} onEnded={() => setPlaying(false)} />
        </div>
      </div>

      <div style={{ marginTop: '1.5rem' }}>
        {songs.map((song, i) => (
          <div key={i} onClick={() => handleSongChange(i)} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0.75rem',
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: '12px',
            cursor: 'pointer',
            marginBottom: '0.75rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <img src={song.cover} alt="cover" style={{ width: '48px', height: '48px', objectFit: 'cover', borderRadius: '8px' }} />
              <div>
                <p style={{ fontWeight: 'bold' }}>{song.title}</p>
                <p style={{ fontSize: '12px', opacity: 0.7 }}>{song.artist}</p>
              </div>
            </div>
            {currentSong === i && playing ? (
              <span className="text-green-400 font-semibold text-sm">Now Playing</span>
            ) : (
              <span className="text-white/60 font-mono text-lg">j</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

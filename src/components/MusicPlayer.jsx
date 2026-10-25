import { useEffect, useRef, useState } from "react";
import { Music2, Upload, Play, Pause, Volume2, Headphones } from "lucide-react";
import "../styles/music.css";

export default function MusicPlayer() {
  const [track, setTrack] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState("");
  const audioRef = useRef(null);
  const urlRef = useRef(null);

  useEffect(() => () => { if (urlRef.current) URL.revokeObjectURL(urlRef.current); }, []);

  const chooseFile = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("audio/")) { setError("Please choose an audio file such as MP3, WAV, or M4A."); return; }
    if (urlRef.current) URL.revokeObjectURL(urlRef.current);
    urlRef.current = URL.createObjectURL(file);
    setTrack({ name: file.name.replace(/\.[^.]+$/, ""), url: urlRef.current });
    setPlaying(false);
    setError("");
    if (audioRef.current) audioRef.current.load();
  };

  const togglePlayback = async () => {
    if (!track || !audioRef.current) { setError("First add a song from your device to start your personal playlist."); return; }
    if (audioRef.current.paused) {
      try { await audioRef.current.play(); setPlaying(true); setError(""); }
      catch { setError("This audio could not play. Try another MP3 file."); }
    } else { audioRef.current.pause(); setPlaying(false); }
  };

  return (
    <section className="music-player" id="music" aria-labelledby="music-title">
      <div className="music-header">
        <div className="music-icon"><Music2 size={24} /></div>
        <div><span className="music-label">YOUR PERSONAL SOUNDTRACK</span><h2 id="music-title">A little music, a little peace. 🎵</h2></div>
      </div>
      <div className="ss-audio-card">
        <div className="ss-record"><Headphones size={30} /><span>♫</span></div>
        <div className="ss-track-info"><strong>{track?.name || "Your feel-good playlist"}</strong><p>{track ? "Ready when you are · stored on this device" : "Bring your favourite MP3 and make this moment yours."}</p></div>
      </div>
      <div className="ss-audio-actions">
        <label className="ss-upload-button"><Upload size={17} /> Add MP3 / audio<input type="file" accept="audio/*,.mp3" onChange={chooseFile} /></label>
        <button className="ss-play-button" onClick={togglePlayback}><span>{playing ? <Pause size={18} /> : <Play size={18} />}</span>{playing ? "Pause music" : "Play music"}</button>
      </div>
      {track && <audio ref={audioRef} src={track.url} controls onEnded={() => setPlaying(false)} onPause={() => setPlaying(false)} onPlay={() => setPlaying(true)} aria-label="Your selected music" />}
      {error && <p className="ss-audio-note" role="status">{error}</p>}
      <p className="ss-audio-note"><Volume2 size={14} /> Music plays only after you choose a file and press play. Your audio stays on your device.</p>
    </section>
  );
}

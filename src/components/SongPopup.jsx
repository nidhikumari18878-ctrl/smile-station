import { useState } from "react";
import { Music2, X, ExternalLink } from "lucide-react";
import "../styles/song-popup.css";

function SongPopup() {
  const [open, setOpen] = useState(false);

  const songLink = "https://youtube.com/shorts/2o2n_qe44Oo";

  return (
    <>
      <button className="song-open-btn" onClick={() => setOpen(true)}>
        <Music2 size={18} />
        Play our song 🎵
      </button>

      {open && (
        <div className="song-overlay" onClick={() => setOpen(false)}>
          <div
            className="song-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="song-close"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="song-icon">
              🎵
            </div>

            <span className="song-label">
              A LITTLE MUSIC FOR YOU
            </span>

            <h2>
              Turn the volume up.
              <span> This one's for you. 💛</span>
            </h2>

            <p>
              Sometimes all you need is a good song
              and a few seconds to forget everything else.
            </p>

            <div className="song-name">
              <Music2 size={18} />
              <div>
                <strong>440 Volt</strong>
                <small>Sultan · Mika Singh</small>
              </div>
            </div>

            <a
              href={songLink}
              target="_blank"
              rel="noopener noreferrer"
              className="song-listen-btn"
            >
              <ExternalLink size={17} />
              Listen to the song
            </a>

            <button
              className="song-later-btn"
              onClick={() => setOpen(false)}
            >
              Maybe later ✨
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default SongPopup;
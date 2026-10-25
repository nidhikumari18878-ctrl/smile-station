import { useState } from "react";
import { Music2, Play, SkipForward } from "lucide-react";
import "../styles/smile-mix.css";

const moods = [
  {
    emoji: "😂",
    name: "Make me laugh",
    query: "funny comedy shorts",
  },
  {
    emoji: "💃",
    name: "Give me energy",
    query: "happy upbeat dance music shorts",
  },
  {
    emoji: "🥹",
    name: "Cheer me up",
    query: "wholesome feel good happy shorts",
  },
  {
    emoji: "🌿",
    name: "Calm me down",
    query: "peaceful relaxing music shorts",
  },
];

function SmileMix() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchVideos = async (mood) => {
    setSelectedMood(mood);
    setLoading(true);
    setError("");
    setVideos([]);
    setCurrentVideo(0);

    try {
      const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

      const url =
        `https://www.googleapis.com/youtube/v3/search` +
        `?part=snippet` +
        `&q=${encodeURIComponent(mood.query)}` +
        `&type=video` +
        `&videoEmbeddable=true` +
        `&videoDuration=short` +
        `&maxResults=10` +
        `&key=${apiKey}`;

      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || "YouTube search failed");
      }

      setVideos(data.items || []);
    } catch (err) {
        console.error("youtube api error:",err);
      setError(err.message || "youtube api request failed");
    } finally {
      setLoading(false);
    }
  };

  const nextVideo = () => {
    if (!videos.length) return;

    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const video = videos[currentVideo];

  return (
    <section className="smile-mix">
      <div className="smile-mix-header">
        <div className="smile-mix-icon">
          <Music2 size={24} />
        </div>

        <div>
          <span className="smile-mix-label">SMILE MIX</span>
          <h2>One minute of something good. 🎵</h2>
          <p>
            Tell us what you need. We'll find something to brighten the mood.
          </p>
        </div>
      </div>

      <div className="smile-mix-moods">
        {moods.map((mood) => (
          <button
            key={mood.name}
            className={`smile-mood ${
              selectedMood?.name === mood.name ? "active" : ""
            }`}
            onClick={() => searchVideos(mood)}
          >
            <span>{mood.emoji}</span>
            {mood.name}
          </button>
        ))}
      </div>

      {loading && (
        <div className="smile-mix-status">
          Finding your happy little video... ✨
        </div>
      )}

      {error && (
        <div className="smile-mix-error">
          Couldn't find a video right now. Please try again. 😅
        </div>
      )}

      {video && (
        <div className="smile-video-area">
          <div className="smile-video">
            <iframe
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="smile-video-info">
            <div>
              <span>NOW PLAYING ✨</span>
              <h3>{video.snippet.title}</h3>
            </div>

            <button onClick={nextVideo}>
              <SkipForward size={17} />
              Next
            </button>
          </div>
        </div>
      )}

      {!selectedMood && (
        <div className="smile-mix-empty">
          <div className="smile-empty-icon">🎧</div>
          <h3>What do you need right now?</h3>
          <p>Pick a vibe and let's find your Smile Mix.</p>
        </div>
      )}
    </section>
  );
}

export default SmileMix;
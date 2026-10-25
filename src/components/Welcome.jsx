import { useState } from "react";
import { ArrowRight, Heart } from "lucide-react";
import "./Welcome.css";

const hearts = [
  ["heart heart-1", "💗"], ["heart heart-2", "💖"],
  ["heart heart-3", "💕"], ["heart heart-4", "💗"],
  ["heart heart-5", "💗"], ["heart heart-6", "💞"],
  ["heart heart-7", "💓"], ["heart heart-8", "💖"],
  ["heart heart-9", "💕"], ["heart heart-10", "💗"],
  ["heart heart-11", "💗"], ["heart heart-12", "💞"],
];

export default function Welcome({ onEnter }) {
  const [leaving, setLeaving] = useState(false);
  const enter = () => {
    setLeaving(true);
    window.setTimeout(onEnter, 650);
  };

  return (
    <main className={`welcome-screen ${leaving ? "welcome-leaving" : ""}`}>
      <div className="welcome-sky-glow" />
      <div className="cloud cloud-back cloud-one" />
      <div className="cloud cloud-back cloud-two" />
      <div className="cloud cloud-front cloud-three" />
      <div className="cloud cloud-front cloud-four" />
      <div className="floating-hearts" aria-hidden="true">
        {hearts.map(([className, heart]) => (
          <span className={className} key={className}>{heart}</span>
        ))}
      </div>

      <div className="welcome-content">
        <div className="welcome-heart"><Heart size={21} fill="currentColor" /></div>
        <p className="welcome-eyebrow">A LITTLE REMINDER FOR YOU</p>
        <h1>You deserve<br /><span>to be happy.</span></h1>
        <p className="welcome-subtitle">
          Even on the days you forget it,<br />
          the world is a little brighter with you in it. ✨
        </p>
        <button className="welcome-enter" onClick={enter}>
          Enter Smile Station <ArrowRight size={19} />
        </button>
        <p className="welcome-footnote">Take a breath. This little space is yours. 💗</p>
      </div>
      <div className="welcome-horizon" />
    </main>
  );
}

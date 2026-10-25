import { useState } from "react";
import { Heart, Sparkles } from "lucide-react";
import "../styles/hug-card.css";

function HugCard() {
  const [hugSent, setHugSent] = useState(false);

  const sendHug = () => {
    setHugSent(true);
  };

  return (
    <section className={`hug-card ${hugSent ? "hug-sent" : ""}`}>
      {!hugSent ? (
        <>
          <div className="hug-icon">
            <Heart fill="currentColor" size={30} />
          </div>

          <span className="hug-label">A TINY VIRTUAL HUG</span>

          <h2>
            Come here.
            <span> You need a hug. 🤗</span>
          </h2>

          <p>
            No questions. No advice.
            <br />
            Just a warm little internet hug.
          </p>

          <button onClick={sendHug}>
            <Heart size={17} fill="currentColor" />
            Send me a hug
          </button>
        </>
      ) : (
        <>
          <div className="hug-celebration">
            🤗
          </div>

          <span className="hug-label">HUG DELIVERED ✨</span>

          <h2>
            There you go.
            <span> Big virtual hug. 💛</span>
          </h2>

          <p>
            Hold onto that feeling for a second.
            <br />
            You deserve a little softness today.
          </p>

          <button onClick={() => setHugSent(false)}>
            <Sparkles size={17} />
            One more hug
          </button>
        </>
      )}
    </section>
  );
}

export default HugCard;
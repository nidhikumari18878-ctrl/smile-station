import {
  ArrowRight,
  Sparkles,
  TrainFront,
} from "lucide-react";

function Hero({ makeHappy, setJourneyOpen }) {
  return (
    <section className="hero">
      <div className="station-badge">
        <span className="live-dot" />
        <TrainFront size={16} />
        SMILE STATION IS OPEN
      </div>

      <h1>
        Hey,<span>you.</span>
      </h1>

      <p className="hero-description">
        Whatever kind of day you're having,
        <br />
        let's make it a little brighter. 🌈
      </p>

      <button
        className="main-button"
        onClick={() => {
          makeHappy();
          setJourneyOpen(true);
        }}
      >
        <Sparkles size={21} />
        MAKE ME HAPPY
        <ArrowRight size={22} />
      </button>

      <p className="tiny-note">
        No account. No judgement. Just smiles. 💛
      </p>
    </section>
  );
}

export default Hero;
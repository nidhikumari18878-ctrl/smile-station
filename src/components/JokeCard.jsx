import { RefreshCw } from "lucide-react";

function JokeCard({ joke, newJoke }) {
  return (
    <section id="jokes" className="joke-section">
      <div className="joke-top">
        <span>😂 EMERGENCY LAUGH</span>

        <button onClick={newJoke}>
          <RefreshCw size={14} />
          New joke
        </button>
      </div>

      <div className="joke-body">
        {joke}
      </div>

      <div className="joke-footer">
        <span>Side effects may include smiling.</span>

        <div>
          <button>😂</button>
          <button>🤣</button>
          <button>❤️</button>
        </div>
      </div>
    </section>
  );
}

export default JokeCard;
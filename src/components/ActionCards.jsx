import {
  ArrowRight,
  Gift,
  Heart,
  Laugh,
  Music2,
} from "lucide-react";

function ActionCards({ setShowSurprise,setHugOpen }) {
  return (
    <section className="actions-section">
      <div className="section-heading">
        <span className="section-number">02</span>

        <div>
          <h2>Pick your kind of happy.</h2>
          <p>No wrong answers here.</p>
        </div>
      </div>

      <div className="action-grid">
        <button className="action-card" onClick={()=>setHugOpen(true)}>
          <div className="action-icon hug">
            <Heart fill="currentColor" size={25} />
          </div>

          <h3>Send a hug</h3>

          <p>
            A tiny virtual hug for when you need one.
          </p>

          <ArrowRight size={19} />
        </button>

        <button className="action-card">
          <div className="action-icon laugh">
            <Laugh size={25} />
          </div>

          <h3>Make me laugh</h3>

          <p>
            Bad jokes. Dad jokes. Very bad jokes.
          </p>

          <ArrowRight size={19} />
        </button>

        <button className="action-card">
          <div className="action-icon music">
            <Music2 size={25} />
          </div>

          <h3>Play something</h3>

          <p>
            A little music to change the atmosphere.
          </p>

          <ArrowRight size={19} />
        </button>

        <button
          className="action-card"
          onClick={() => setShowSurprise(true)}
        >
          <div className="action-icon gift">
            <Gift size={25} />
          </div>

          <h3>Surprise me</h3>

          <p>
            You don't know what you'll get. That's the fun.
          </p>

          <ArrowRight size={19} />
        </button>
      </div>
    </section>
  );
}

export default ActionCards;
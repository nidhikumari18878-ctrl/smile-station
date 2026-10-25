import { Check } from "lucide-react";

function MoodSelector({
  moods,
  selectedMood,
  setSelectedMood,
  setShowSurprise,
}) {
  return (
    <section className="mood-section">
      <div className="section-heading">
        <span className="section-number">01</span>

        <div>
          <h2>How are you feeling?</h2>
          <p>Be honest. This is a judgement-free station.</p>
        </div>
      </div>

      <div className="mood-grid">
        {moods.map((mood) => (
          <button
            key={mood.name}
            className={`mood-card ${
              selectedMood === mood.name ? "active" : ""
            }`}
            onClick={() => {
              setSelectedMood(mood.name);
              setShowSurprise(true);
            }}
          >
            {selectedMood === mood.name && (
              <span className="selected-dot">
                <Check size={13} />
              </span>
            )}

            <span className="mood-emoji">{mood.emoji}</span>
            <span className="mood-name">{mood.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default MoodSelector;
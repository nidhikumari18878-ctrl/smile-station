
import { useState } from "react";
import { Music2 } from "lucide-react";
import "../styles/journey.css";

const jokes = [
  "Why did the computer go to the doctor? Because it had a virus! 😂",
  "I told my Wi-Fi we needed to talk... now we're not connected. 😭😂",
  "Why don't eggs tell jokes? They might crack each other up! 🥚😂",
  "My bed and I are perfect for each other... but my alarm keeps separating us. 😴😂",
];

function HappinessJourney({ onClose }) {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep((current) => current + 1);
  };

  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

  return (
    <div className="journey-overlay">
      <div className="journey-card">

        <button
          className="journey-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        {/* STEP 1 */}
        {step === 0 && (
          <div className="journey-step">
            <div className="journey-big-icon">❤️</div>

            <span className="journey-label">
              STOP 01 · A LITTLE KINDNESS
            </span>

            <h2>
              Hey, you're doing
              <span> better than you think.</span>
            </h2>

            <p>
              You don't have to have everything figured out.
              For now, just take a breath. You're here. That's enough.
            </p>

            <button className="journey-next" onClick={nextStep}>
              I needed that →
            </button>
          </div>
        )}

        {/* STEP 2 */}
        {step === 1 && (
          <div className="journey-step">
            <div className="journey-big-icon">😂</div>

            <span className="journey-label">
              STOP 02 · EMERGENCY LAUGH
            </span>

            <h2>
              Okay, serious face
              <span> OFF.</span>
            </h2>

            <div className="journey-joke">
              {randomJoke}
            </div>

            <button className="journey-next" onClick={nextStep}>
              I smiled 😂 →
            </button>
          </div>
        )}

        {/* STEP 3 */}
        {step === 2 && (
          <div className="journey-step">
            <div className="journey-big-icon">🎵</div>

            <span className="journey-label">
              STOP 03 · MUSIC MOMENT
            </span>

            <h2>
              Put on your
              <span> happy soundtrack.</span>
            </h2>

            <p>
              Close your eyes for a few seconds,
              breathe slowly and imagine your favourite song playing.
            </p>

            <div className="music-placeholder">
              <Music2 size={24} />

              <div>
                <strong>Happy little moment</strong>
                <small>Music player coming next 🎧</small>
              </div>
            </div>

            <button className="journey-next" onClick={nextStep}>
              Feeling better 🎵 →
            </button>
          </div>
        )}

        {/* STEP 4 */}
        {step === 3 && (
          <div className="journey-step">
            <div className="journey-big-icon">✨</div>

            <span className="journey-label">
              STOP 04 · TINY CHALLENGE
            </span>

            <h2>
              Give us your
              <span> best smile.</span>
            </h2>

            <p>
              Seriously. Right now. 😄
              <br />
              Even if it's a fake one.
            </p>

            <button className="smile-challenge" onClick={nextStep}>
              😄 I DID IT!
            </button>
          </div>
        )}

        {/* FINAL */}
        {step === 4 && (
          <div className="journey-step final-step">
            <div className="celebration">
              🎉 ✨ 💛 ✨ 🎉
            </div>

            <span className="journey-label">
              JOURNEY COMPLETE
            </span>

            <h2>
              Look at you.
              <span> Still smiling. ❤️</span>
            </h2>

            <p>
              Whatever you're going through,
              you don't have to solve it all tonight.
              <br />
              <br />
              Take it one little moment at a time.
            </p>

            <button className="journey-next" onClick={onClose}>
              Keep smiling ✨
            </button>
          </div>
        )}

        {/* PROGRESS */}
        <div className="journey-progress">
          {[0, 1, 2, 3, 4].map((item) => (
            <span
              key={item}
              className={step >= item ? "done" : ""}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default HappinessJourney;
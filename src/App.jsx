
// export default App;
import { useState } from "react";
import { Sparkles, TrainFront } from "lucide-react";

import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import MoodSelector from "./components/MoodSelector";
import MessageCard from "./components/MessageCard";
import JokeCard from "./components/JokeCard";
import ActionCards from "./components/ActionCards";
import MusicPlayer from "./components/MusicPlayer";
import Footer from "./components/Footer";
import HappinessJourney from "./components/HappinessJourney";
import SmileMix from "./components/SmileMix";
import HugCard from "./components/HugCard";
import SongPopup from "./components/SongPopup";
import WishesStudio from "./components/WishesStudio";

import { moods } from "./data/mood";
import { messages } from "./data/messages";
import { jokes } from "./data/jokes";

import "./index.css";

function App() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [message, setMessage] = useState(messages[0]);
  const [joke, setJoke] = useState(jokes[0]);
  const [showSurprise, setShowSurprise] = useState(false);
  const [journeyOpen, setJourneyOpen] = useState(false);
  const [hugOpen, setHugOpen]=useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  const makeHappy = () => {
    const randomMessage =
      messages[Math.floor(Math.random() * messages.length)];

    setMessage(randomMessage);
    setShowSurprise(true);

    setTimeout(() => {
      document
        .getElementById("happiness")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const newJoke = () => {
    let next = joke;

    while (next === joke) {
      next = jokes[Math.floor(Math.random() * jokes.length)];
    }

    setJoke(next);
  };

  return (
    <div className="app">
      {/* Decorative background */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="brand">
          <div className="brand-icon">
            <TrainFront size={24} />
          </div>

          <div>
            <div className="brand-name">Smile Station</div>
            <div className="brand-tag">
              Your happy little corner
            </div>
          </div>
        </div>

        <button className="sparkle-button">
          <Sparkles size={20} />
        </button>
      </nav>

      {/* MAIN */}
      <main>
        {/* HERO */}
        <Hero
          makeHappy={makeHappy}
          setJourneyOpen={setJourneyOpen}
        />

        {/* MOOD */}
        <MoodSelector
          moods={moods}
          selectedMood={selectedMood}
          setSelectedMood={setSelectedMood}
          setShowSurprise={setShowSurprise}
        />

        {/* MESSAGE */}
        {showSurprise && (
          <MessageCard
            message={message}
            setMessage={setMessage}
            messages={messages}
          />
        )}

       <JokeCard
          joke={joke}
          newJoke={newJoke}
        />

        <SmileMix />
        <SongPopup/>
        <WishesStudio />
        <MusicPlayer />

        {/* ACTIONS */}
        <ActionCards
          setShowSurprise={setShowSurprise}
          setHugOpen={setHugOpen}
        />
        {hugOpen && <HugCard />}
       

        {/* SURPRISE */}
        {showSurprise && (
          <section className="surprise-card">
            <div className="confetti">
              ✨ 🎈 💛 🎉 ✨
            </div>

            <h2>Hey... you're still here. 😊</h2>

            <p>
              And that's something worth celebrating.
              <br />
              Take a breath. You're doing better than you think.
            </p>

            <button onClick={makeHappy}>
              Give me another smile ✨
            </button>
          </section>
        )}
      </main>

      {/* HAPPINESS JOURNEY */}
      {journeyOpen && (
        <HappinessJourney
          onClose={() => setJourneyOpen(false)}
        />
      )}

      {/* FOOTER */}
      <Footer />

      {showWelcome && <Welcome onEnter={() => setShowWelcome(false)} />}
    </div>
  );
}

export default App;
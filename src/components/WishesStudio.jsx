import { useState } from "react";
import { Copy, Gift, RefreshCw, Send, Sparkles } from "lucide-react";
import "../styles/wishes.css";

const wishSets = {
  Morning: ["Good morning! 🌤️ May today bring you a softer mind, a brave heart, and one lovely surprise.", "A fresh day, a fresh little chance. Take it slowly—you don't have to do everything at once. 🌷"],
  Birthday: ["Happy birthday! 🎂 May you feel loved in the little moments, proud of how far you've come, and excited for what's ahead. You deserve good things.", "Another year of you being wonderfully you. ✨ Wishing you laughter that lasts, people who care, and dreams that keep growing."],
  Motivation: ["A reminder for you: progress can be quiet. Resting, trying again, and asking for help are all forms of strength. 💛", "You don't need to have it all figured out today. Just take the next kind step. I'm rooting for you. 🌱"],
  Friendship: ["Just dropping by to say I'm glad you're in this world. Thanks for being you. 🫶 Hope something makes you smile today.", "Sending you a pocket-sized reminder: you're appreciated more than you probably realise. Thanks for being my person. 💌"],
  Comfort: ["If today feels heavy, you can put some of it down for a moment. Breathe, drink some water, and take the next minute as it comes. You matter. 💗", "You don't have to turn a hard day into a perfect one. Getting through it gently is enough. Sending warmth your way. ☁️"],
  Goodnight: ["The day is done; you can let it go now. May your thoughts grow quieter and your sleep be kind. Goodnight. 🌙", "You've done enough for today. Rest your shoulders, unclench your jaw, and let tomorrow wait until tomorrow. Sweet dreams. ✨"]
};
const kinds = Object.keys(wishSets);

export default function WishesStudio() {
  const [kind, setKind] = useState("Comfort");
  const [wishIndex, setWishIndex] = useState(0);
  const [recipient, setRecipient] = useState("");
  const [copied, setCopied] = useState(false);
  const wish = wishSets[kind][wishIndex];
  const fullWish = recipient.trim() ? `For ${recipient.trim()},\n\n${wish}` : wish;
  const nextWish = () => { setWishIndex((i) => (i + 1) % wishSets[kind].length); setCopied(false); };
  const changeKind = (value) => { setKind(value); setWishIndex(0); setCopied(false); };
  const copyWish = async () => {
    try { await navigator.clipboard.writeText(fullWish); setCopied(true); }
    catch { setCopied(false); }
  };

  return (
    <section className="wishes-section" id="wishes">
      <div className="section-heading"><span className="section-number">03</span><div><h2>Send a little sunshine. 💌</h2><p>Make a thoughtful wish for yourself or someone you love.</p></div></div>
      <div className="wishes-layout">
        <div className="wishes-controls">
          <label htmlFor="wish-kind">What kind of message do you need?</label>
          <div className="wish-kind-grid">{kinds.map((item) => <button key={item} className={`wish-kind ${kind === item ? "selected" : ""}`} onClick={() => changeKind(item)}>{item}</button>)}</div>
          <label htmlFor="wish-recipient">Who is it for? <span>(optional)</span></label>
          <input id="wish-recipient" value={recipient} onChange={(e) => setRecipient(e.target.value)} placeholder="Your name or someone's name" maxLength={50} />
        </div>
        <div className="wish-note" aria-live="polite">
          <div className="wish-note-top"><span><Gift size={18} /> A note just for you</span><Sparkles size={19} /></div>
          <p>{recipient.trim() ? `For ${recipient.trim()},` : "A gentle reminder"}</p>
          <blockquote>{wish}</blockquote>
          <div className="wish-actions"><button onClick={nextWish}><RefreshCw size={16} /> Another wish</button><button className="wish-copy" onClick={copyWish}><Copy size={16} /> {copied ? "Copied!" : "Copy message"}</button></div>
          {copied && <span className="wish-status" role="status">Ready to share wherever you like. 💛</span>}
        </div>
      </div>
      <p className="wish-privacy"><Send size={14} /> Messages are created in your browser; nothing is sent automatically.</p>
    </section>
  );
}

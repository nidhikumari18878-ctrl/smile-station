import { Heart } from "lucide-react";

function MessageCard({ message, setMessage, messages }) {
  return (
    <section id="happiness" className="message-card">
      <div className="message-icon">
        <Heart fill="currentColor" size={27} />
      </div>

      <div className="message-content">
        <span className="message-label">
          A LITTLE SOMETHING FOR YOU
        </span>

        <h3>You deserve to hear this...</h3>

        <p>{message}</p>

        <button
          className="laugh-button"
          onClick={() =>
            setMessage(
              messages[Math.floor(Math.random() * messages.length)]
            )
          }
        >
          <Heart size={16} />
          Another one
        </button>
      </div>
    </section>
  );
}

export default MessageCard;
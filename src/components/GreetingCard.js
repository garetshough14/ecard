import warmth from '../images/warmth.jpeg'
import '../App.css';

function GreetingCard({greeting, body, closing}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={warmth} className="App-logo" alt="logo" />
        <p>{greeting}</p>
        <p>{body}</p>
        <p>{closing}</p>
        <button
          className="App-link"
        >
          Reshare This Card
        </button>
      </header>
    </div>
  );
}

export default GreetingCard;

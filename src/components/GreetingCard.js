import warmth from "../images/warmth.jpeg";
import "../App.css";

function GreetingCard({
  email,
  greeting,
  body,
  closing,
  setCustomize,
  preview,
  setPreview,
}) {
  const continueEditing = () => {
    setCustomize(true);
    setPreview(false);
  };

  const sendEcard = () => {
    let mailto = `mailto:${email}`;
    mailto += "?subject=E-Card";
    mailto += "&body=You have received an e-greeting card.";
    mailto += "%0D%0A%0D%0A";
    mailto += "Go To Greeting Card";
    mailto += "%0D%0A";

    let url = "https://garetshough14.github.io/ecard";
    url += `?greeting=${encodeURIComponent(greeting)}`;
    url += `&body=${encodeURIComponent(body)}`;
    url += `&closing=${encodeURIComponent(closing)}`;

    mailto += encodeURIComponent(url);

    console.log(mailto);

    window.open(mailto);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="ecard-text">
        E-Card
        </div>
        <p className="loved-text">Send something to a loved one</p>
      </header>
      <div className="warmth-pic">
        <img src={warmth} className="App-logo" alt="logo" />
      </div>
      <p>{greeting}</p>
      <p>{body}</p>
      <p>{closing}</p>
      {preview ? (
        <div>
          <button onClick={continueEditing}>Continue Editing</button>
          <button onClick={sendEcard}>Send</button>
        </div>
      ) : (
        <button className="App-link" onClick={() => setCustomize(true)}>
          Reshare This Card
        </button>
      )}

      <footer>Holiday Season 2021</footer>
    </div>
  );
}

export default GreetingCard;

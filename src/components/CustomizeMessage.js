import warmth from "../images/warmth.jpeg";
import "../App.css";
export default function customizeMessage({
  email,
  setEmail,
  greeting,
  setGreeting,
  body,
  setBody,
  closing,
  setClosing,
  setPreview,
  setCustomize,
}) {
  const onSubmit = (event) => {
    event.preventDefault();
    setPreview(true);
    setCustomize(false);
  };

  return (
    <div className="App">
      <header className="header">
        <div>
          <div className="ecard-text">E-Card</div>
          <p className="loved-text">Send something to a loved one</p>
        </div>
      </header>
      <div className="scroller">
      <div className="instructions">
        <img src={warmth} alt="coffee and slippers" className="thumb" />
        <p className="reshare">
          <text>How to Reshare:</text>
          <br />
          Write your own custom message below.
        </p>
      </div>

      <form>
        <div>
          <label className="heading-label" htmlFor="email">Recipient Email</label>
          <br />
          <input
            name="email"
            id="email"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Recipient Email"
          />
        </div>

        <label className="heading-label" htmlFor="greeting">Enter Your Greeting</label>
        <br />
        <input
          name="greeting"
          id="greeting"
          type="text"
          value={greeting}
          placeholder="Ex. Dear Mom,"
          onChange={(event) => setGreeting(event.target.value)}
        />
        <br />
        <label className="heading-label" htmlFor="body">Enter Your Body Paragraph</label>
        <br />
        <input
          name="body"
          id="body"
          value={body}
          placeholder="Ex. Have a comforting and joyous holliday!"
          onChange={(event) => setBody(event.target.value)}
        />
        <br />
        <label className="heading-label" htmlFor="closing">Enter Your Closing Statement</label>
        <br />
        <input
          name="closing"
          id="closing"
          type="text"
          value={closing}
          placeholder="Ex. Love, your son Garet"
          onChange={(event) => setClosing(event.target.value)}
        />
        <br />
        
        <button className="preview-greeting" type="submit" onClick={onSubmit}>
          preview greeting card
        </button>
      </form>
      </div>
      <footer>Holiday Season 2021</footer>
    </div>
  );
}

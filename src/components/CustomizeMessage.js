import warmth from '../images/warmth.jpeg'
import '../App.css';
export default function customizeMessage({ email, setEmail, greeting, setGreeting, body, setBody, closing, setClosing, setPreview, setCustomize }){
    
    const onSubmit = (event) => {
        event.preventDefault();
        setPreview(true);
        setCustomize(false);
    }

    return (
      <>
        <div className="instructions">
          <img src={warmth} alt="coffee and slippers" className="thumb" />
          <p>
            <strong>How to Reshare:</strong>
            <br />
            Write your own custom message below.
          </p>
        </div>

        <form>
          <div>
            <label htmlFor="email">Recipient Email</label>
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

          <label htmlFor="greeting">Enter Your Greeting</label>
          <input
            name="greeting"
            id="greeting"
            type="text"
            value={greeting}
            placeholder="Ex. Dear Mom,"
            onChange={(event) => setGreeting(event.target.value)}
          />
          <label htmlFor="body">Enter Your Body Paragraph</label>
          <input
            name="body"
            id="body"
            value={body}
            placeholder="Ex. Have a comforting and joyous holliday!"
            onChange={(event) => setBody(event.target.value)}
          />
          <label htmlFor="closing">Enter Your Closing Statement</label>
          <input
            name="closing"
            id="closing"
            type="text"
            value={closing}
            placeholder="Ex. Love, your son Garet"
            onChange={(event) => setClosing(event.target.value)}
          />

          <button type="submit" onClick={onSubmit}>
            preview greeting card
          </button>
        </form>
      </>
    );
}
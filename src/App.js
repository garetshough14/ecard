import {React, useState} from 'react';
import GreetingCard from './components/GreetingCard';
import CustomizeMessage from './components/CustomizeMessage';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const[greeting, setGreeting] = useState('Dear Mom,')
  const[body,setBody] = useState('Have a comforting and joyous holliday!')
  const[closing,setClosing] = useState('Love, your son Garet')
  const[customize,setCustomize] = useState(false)
  const [preview,setPreview] = useState('false')
  return (
    <>
    {customize
      ? <CustomizeMessage
      setEmail={setEmail}
        greeting={greeting}
        setGreeting={setGreeting}
        body={body}
        setBody={setBody}
        closing={closing}
        setClosing={setClosing}
        setPreview={setPreview}
        setCustomize={setCustomize}
        />
      : <GreetingCard
        preview={preview}
        greeting={greeting}
        setGreeting={setGreeting}
        body={body}
        setBody={setBody}
        closing={closing}
        setClosing={setClosing}
        setCustomize={setCustomize}
        preview={preview}
        setPreview={setPreview}
    />
    }
    </>
  );
}

export default App;

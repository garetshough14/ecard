import {React, useState} from 'react';
import GreetingCard from './components/GreetingCard';
import './App.css';

function App() {
  const[greeting, setGreeting] = useState('Dear Mom,')
  const[body,setBody] = useState('Have a comforting and joyous holliday!')
  const[closing,setClosing] = useState('Love, your son Garet')
  return (
    <GreetingCard
      greeting={greeting}
      body={body}
      closing={closing}
    />
  );
}

export default App;

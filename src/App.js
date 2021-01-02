import React, {useState} from 'react';

import './App.css';

const GIFS = [
  'https://media3.giphy.com/media/3o7527pa7qs9kCG78A/200w.webp?cid=ecf05e4734yrzfcmi5oo2xxflnwricrd9poh9nm43fydieoo&rid=200w.webp',
  'https://media4.giphy.com/media/4Zo41lhzKt6iZ8xff9/giphy.webp?cid=ecf05e4734yrzfcmi5oo2xxflnwricrd9poh9nm43fydieoo&rid=giphy.webp',
  'https://media1.giphy.com/media/51Uiuy5QBZNkoF3b2Z/200w.webp?cid=ecf05e4734yrzfcmi5oo2xxflnwricrd9poh9nm43fydieoo&rid=200w.webp',
  
]

const OTHER_GIFS = [
  'https://media4.giphy.com/media/vFKqnCdLPNOKc/200.webp?cid=ecf05e47sdg03ccdwtdpjbqscjy7otmgccyqio9gv0yetkhv&rid=200.webp',
  'https://media1.giphy.com/media/CqVNwrLt9KEDK/200.webp?cid=ecf05e47sdg03ccdwtdpjbqscjy7otmgccyqio9gv0yetkhv&rid=200.webp',
  
]

function App() {
  const [gifs, setGifs] = useState(GIFS);
  return (
    <div className="App">
    <section className="App-content">
    
    {
      gifs.map(g => <img src={g} alt="Gif encontrado" /> ) 
    }
    
    <button onClick={() => setGifs(OTHER_GIFS)}>Cambiar GIFS</button>
    
    </section>
    </div>
    );
  }
  
  export default App;
  
import React, {useState, useEffect} from 'react';

import './App.css';
import getGifs from './services/get_gifs';
import Gif from './components/gif';



function App() {
  const [gifs, setGifs] = useState([]);
  useEffect(function() {
    getGifs({keyword: "dog"}).then(gifs => setGifs(gifs));
  }, []);
  return (
    <div className="App">
    <section className="App-content">
    
    {
      gifs.map(g => <Gif title={g.title} url={g.url} id={g.id} />)
    }
    
    <button onClick={() => setGifs([])}>Cambiar GIFS</button>
    
    </section>
    </div>
    );
  }
  
  export default App;
  
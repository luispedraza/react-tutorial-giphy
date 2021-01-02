import React, {useState, useEffect} from 'react';

import './App.css';
import getGifs from './services/get_gifs.js'



function App() {
  const [gifs, setGifs] = useState([]);
  useEffect(function() {
    
    getGifs({keyword: "dog"}).then(gifs => setGifs(gifs));
  }, []);
  return (
    <div className="App">
    <section className="App-content">
    
    {
      gifs.map(g => <img src={g} alt="Gif encontrado" /> ) 
    }
    
    <button onClick={() => setGifs([])}>Cambiar GIFS</button>
    
    </section>
    </div>
    );
  }
  
  export default App;
  
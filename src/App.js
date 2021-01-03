import React, {useState, useEffect} from 'react';

import './App.css';
import getGifs from './services/get-gifs';
import ListOfGifs from './components/list-of-gifs';

function App() {
  const [gifs, setGifs] = useState([]);
  useEffect(function() {
    getGifs({keyword: "coding"}).then(gifs => setGifs(gifs));
  }, []);
  return (
    <div className="App">
    <section className="App-content">
    
    <ListOfGifs gifs={gifs} />
    
    <button onClick={() => setGifs([])}>Cambiar GIFS</button>
    
    </section>
    </div>
    );
  }
  
  export default App;
  
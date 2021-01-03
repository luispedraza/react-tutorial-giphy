import React, {useState, useEffect} from 'react';

import './App.css';
import getGifs from './services/get_gifs';
import Gif from './components/gif';



function App() {
  const [gifs, setGifs] = useState([]);
  useEffect(function() {
    getGifs({keyword: "coding"}).then(gifs => setGifs(gifs));
  }, []);
  return (
    <div className="App">
    <section className="App-content">
    
    {
      gifs.map(({id, title, url}) => <Gif title={title} url={url} id={id} key={id} />)
    }
    
    <button onClick={() => setGifs([])}>Cambiar GIFS</button>
    
    </section>
    </div>
    );
  }
  
  export default App;
  
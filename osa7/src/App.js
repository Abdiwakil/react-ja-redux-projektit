import './App.css';
import Syote from './Syote';
import React, { useState } from 'react';
import Laske from './Laske';

function App() {
  const[inputs] = useState({a : 0, b:0});
  return (
    
    <div className="App">
        <h2>1. Mitä tarkoittaa algoritmi?</h2>
        <p>- Algoritmi on yksityiskohtainen kuvaus tai ohje, jota seuraamalla tehtävä, prosessi tai ongelmanratkaisu suoritetaan.</p>
        <hr/>

        <h2>2. Mitä tarkoittaa Eukleideen algoritmi?</h2>
        <p>- Keino, jonka avulla voidaan selvittää kahden kokonaisluvun suurin yhteinen tekijä </p>

        <div className="App">
        <Syote functions={[inputs]}/>
        <Laske inputs={inputs}/>
        </div>
    </div>
      
  );
}

export default App;

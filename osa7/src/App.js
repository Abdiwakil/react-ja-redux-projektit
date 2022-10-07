import './App.css';
import Laske from './components/Laske';
function App() {
  let luvut = {
    eka : 252,
    toka: 105,
  }
  return (
    <div className="App">
        <h2>1. Mitä tarkoittaa algoritmi?</h2>
        <p>- Algoritmi on yksityiskohtainen kuvaus tai ohje, jota seuraamalla tehtävä, prosessi tai ongelmanratkaisu suoritetaan.</p>
        <hr/>

        <h2>2. Mitä tarkoittaa Eukleideen algoritmi?</h2>
        <p>- Keino, jonka avulla voidaan selvittää kahden kokonaisluvun suurin yhteinen tekijä </p>

        <div className="App">
        <Laske eka={luvut.eka} toka={luvut.toka}/>
        </div>
   
       </div>
  );
}

export default App;

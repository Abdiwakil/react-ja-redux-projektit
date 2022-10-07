import './App.css';
import React, { useState } from "react";

function App() {
  const Anekdootit = [
    { Anekdootti: 'If it hurts, do it more often.'},
    { Anekdootti: 'Adding manpower to a late software project makes it later!', amount: 400 },
    { Anekdootti: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.'},
    { Anekdootti: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.'},
    { Anekdootti: 'Premature optimization is the root of all evil.', amount: 325 },
    { Anekdootti: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', amount: 325 },
    { Anekdootti: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.', amount: 325 }
  ]
  const tulos = Anekdootit.map(
    (x) => {
      return (
        <p>
         {x.Anekdootti}
        </p>
      )
    }
  )
  const [activeIndex, setActiveIndex] = useState(0);

  const nappi = () => {
    let index = activeIndex;

    if (index === tulos.length - 1) index = 0;
    else index++;

    setActiveIndex(index);
  };
  return (

    <div className="App">
      <p>{tulos[activeIndex]}</p>
      <button onClick={nappi}>seuraava</button>

    </div>
  );
}

export default App;

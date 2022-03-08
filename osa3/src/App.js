import React, { useState } from 'react';
import './App.css';

const Laskuri = () => {
  const [eka, asetaeka] = useState(0);
  const [toka, asetatoka] = useState(0);
  const lisaa = () => asetaeka(eka + 1);
  const lisaa2 = () => asetatoka(toka + 1);
  const vahenna = () => asetaeka(eka - 1);
  const vahenna2 = () => asetatoka(toka - 1);
  const nollaa = () => asetaeka(0) || asetatoka(0);

  return (
    <div>
      <p>Eka: {eka}</p>
      <button onClick={lisaa}>+</button>
      <button onClick={vahenna}>-</button>
      <p>Toka: {toka}</p>
      <button onClick={lisaa2}>+</button>
      <button onClick={vahenna2}>-</button>

      <p>Summa: {eka + toka}</p>
      
      
      
      <button onClick={nollaa}>Nollaa</button>
    </div>
  );
}

export default Laskuri;

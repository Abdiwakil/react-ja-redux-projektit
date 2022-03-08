import React, { useState } from 'react';
import Nappi from './Nappi';
import Tulos from './Tulos';
 
const App = () => {
  const [arvo, setArvo] = useState(0)
 
  const aseta = uusiArvo => {
    setArvo(uusiArvo)
  }
 
  return (
    <div>
      <Tulos arvo={arvo} />
      <Nappi handleClick={() => aseta(arvo + 1)} teksti="+" />
      <Nappi handleClick={() => aseta(arvo - 1)} teksti="-" />
      <Nappi handleClick={() => aseta(0)} teksti="nollaa" />
    </div>
  )
}
 
export default App;
import './App.css';
import Form from './components/Form';
import View from './components/View';
import React, { useState } from 'react';


const App = () => {
  const[inputs, setInputs] = useState({
    Firstname: "",
    Lastname: "",
    phone: "",
    message: ""
  });
 
  return (
    <div className="App">
      <Form functions={[inputs, setInputs]}/>
      <View inputs={inputs}/>
    </div>
  );
}
 
export default App;
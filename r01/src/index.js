import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import laskuriReducer from './reducer';
 
const store = configureStore({
  reducer: laskuriReducer,
});
 
const App = () => {
  return (
    <div>
      <div>
        { store.getState() }
      </div>
      <button onClick = {e => store.dispatch({ type: 'PLUS' })} >
        +
      </button>
      <button onClick = {e => store.dispatch({ type: 'MIINUS' })} >
        -
      </button>
      <button onClick = {e => store.dispatch({ type: 'NOLLAUS' })} >
        NOLLAUS
      </button>
    </div>
  )
}
 
const renderApp = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(<App />)
}
 
renderApp()
store.subscribe(renderApp)
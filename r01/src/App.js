import laskuriReducer from './reducer';
import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
  reducer: laskuriReducer,
});
 
const App = () => {
  return (
    <div>
      <div>
        {store.getState() }
      </div>
      <button onClick = {e =>store.dispatch({ type: 'PLUS' })} >
        +
      </button>
      <button onClick = {e =>store.dispatch({ type: 'MIINUS' })} >
        -
      </button>
      <button onClick = {e =>store.dispatch({ type: 'NOLLAUS' })} >
        NOLLAUS
      </button>
    </div>
  )
}

export default App;

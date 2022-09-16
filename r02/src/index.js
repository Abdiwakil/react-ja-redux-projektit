import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createStore } from 'redux Toolkit'
 
// luodaan reducer muistiinpanolle
const noteReducer = (state = [], action) => {
  if (action.type === 'NEW_NOTE') {
    state.push(action.data)
    return state
  }
 
  return state
}
 
const store = createStore(noteReducer)
 
// luodaan kaksi esimerkkimuistiinpanoa
store.dispatch({
  type: 'NEW_NOTE',
  data: {
    content: 'the app state is in redux store',
    important: true,
    id: 1
  }
})
 
store.dispatch({
  type: 'NEW_NOTE',
  data: {
    content: 'state changes are made with actions',
    important: false,
    id: 2
  }
})
 
const App = () => {
  return(
    <div>
      <ul>
        {store.getState().map(note=>
          <li key={note.id}>
            {note.content} <strong>{note.important ? 'important' : ''}</strong>
          </li>
        )}
        </ul>
    </div>
  )
}
 
const renderApp = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(<App />)
}
 
renderApp()
store.subscribe(renderApp)
reportWebVitals();

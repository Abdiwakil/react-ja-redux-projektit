import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date:'2019-05-30T17:30:31.0982',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date:'2019-05-30T18:20:14.2982',
    important: false
  },
  {
    id: 3,
    content: 'Get and POST are the most important methods od HTTP protocol',
    date:'2019-05-30T19:30:31.0982',
    important: true
  }
]

ReactDOM.render(
  <App notes={notes}/>,
  document.getElementById('root')
);

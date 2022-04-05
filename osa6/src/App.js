import './App.css';
function App() {
  

let score = document.getElementById('score');

let highScore = 0;

const buttons = [
  document.getElementById('button0'),
  document.getElementById('button1'),
  document.getElementById('button2'),
  document.getElementById('button3')
];

document.getElementById('newGame').addEventListener('click',

  function newGame() {
    document.getElementById('highscore').innerHTML = highScore;
    document.getElementById('overlay').style.visibility = "hidden";
    score.innerHTML = 0;
    
    
    
})
}

export default App;

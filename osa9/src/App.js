import './App.css';
import React, { useState } from "react"; // useState pitää tuoda projektiin mukaan 

const Button = ({ handleClick, text }) => {
  return (
    <button className='p1 mr5 button' onClick={handleClick}>
      {text}
    </button>
  );
}

const StatisticLine = ({text, value}) => {
  return (
    <p className='ml5'>{text}: 
      <span className='p1'>{value}</span>
    </p>
  )
}

const Statistics = ({good, neutral, bad, total, average, positive}) => {
  if (total === 0) {
    return <p>Ei tilastotietoa vielä.</p>
  } else {
    return (
      <section>
        <StatisticLine text="Hyvää" value={good} />
        <StatisticLine text="Kohtalaista" value={neutral} />
        <StatisticLine text="Huonoa" value={bad} />
        <StatisticLine text="Palautemäärä" value={total} />
        <StatisticLine text="Keskiarvo" value={average} />
        <StatisticLine text="Positiviisinen palaute" value={positive} />
      </section>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  const average = ((good + (neutral * 0) + (bad * -1))/total).toFixed(2)
  const positive = `${((good / total ) * 100).toFixed(1)} %`
  function setToGood(newValue) {
    setGood(newValue);
  }
  const setToNeutral = (newValue) => {
    setNeutral(newValue)
  }
  const setToBad = (newValue) => {
    setBad(newValue)
  }

  const setToGoodClick = (luku) => {
    setToGood(luku)
  }
  const setToNeutralClick = (luku) => {
    setToNeutral(luku)
  }
  const setToBadClick = (luku) => {
    setToBad(luku)
  }

  return (
    <div className="App">
      <h1>Opiskelijaravintola Pääraide</h1>
      <p>Onko palvelumme ravintolassa ollut mielestäsi</p>
      <Button handleClick={() => setToGoodClick(good + 1)} text="Hyvää" />
      <Button handleClick={() => setToNeutralClick(neutral + 1)} text="Kohtalaista" />
      <Button handleClick={() => setToBadClick(bad + 1)} text="Huonoa" />
      <h2>Palautteiden tilastotiedot</h2>
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      />
    </div>
  );
}

export default App;
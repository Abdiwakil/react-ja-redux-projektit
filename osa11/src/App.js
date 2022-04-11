import './App.css';

function App() {
  const orders = [
    { product: "apple", amount: 250 },
    { product: "orange", amount: 400 },
    { product: "banana", amount: 100 },
    { product: "mango", amount: 325 }
  ]
  let summa= 0;
  for (let i = 0; i < orders.length; i++){
    summa+=orders[i].amount
  }
  const tulos = orders.map(
    (x) => {
      return (
        <p>
          name: "{x.product}", species: "{x.amount}"
        </p>
      )
    }
  )
  return (
    <div>
      <h2>List of animals</h2>
      <> {tulos}</> <br></br>
      <h2>Amount total</h2>
      {summa}
      <></>
    </div>
  );
}

export default App;

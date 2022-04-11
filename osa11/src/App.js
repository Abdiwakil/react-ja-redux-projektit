import './App.css';

function App() {
  let animals = [
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'dog' },
    { name: 'Harold', species: 'fish' },
    { name: 'Ursula', species: 'cat' },
    { name: 'Jimmy', species: 'fish' }
  ]
  /*let otherAnimals = animals.filter(function (animal) {
    return animal.species !== 'dog'
  })*/

  console.log(animals);

  const animal = animals.map(
    (x) => {
      return (
        <p>
          name: "{x.name}", species: "{x.species}"
        </p>
      )
    }
  )
  const names = []
  for (let i = 0; i < animals.length; i++) {
    names.push(animals[i].name)
  }
  const name = names.map(
    (names) => {
      return (
        <p>
          name: "{names}"
        </p>
      )
    }
  )


  return (
    <div>
      <h2>List of animals</h2>
      <> {animal}</> <br></br>
      <h2>The names</h2>
      <>{name}</>
    </div>
  );
}

export default App;

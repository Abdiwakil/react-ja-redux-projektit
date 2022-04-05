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
  let otherAnimals = animals.filter(function (animal) {
    return animal.species !== 'dog'
  })

  console.log(animals);
  console.log(otherAnimals)
  const animal = animals.map(
    (x) => {
      return (
        <p>
          name: "{x.name}", species: "{x.species}"
        </p>
      )
    }
  )

  const dog = otherAnimals.map(
    (x) => {
      return (
        <p>

          name: "{x.name}", species: "{x.species}"
        </p>
      )
    }
  )


  /* for (let i = 0; i < animals.length; i++){
     if (animals[i].species === 'dog')
     otherAnimals.push(animals[i])
   }*/
  return (
    <div>
      <h2>List of animals</h2>
      <> {animal}</> <br></br>
      <h2>Dogless list</h2>
      <>{dog}</>
    </div>
  );
}

export default App;

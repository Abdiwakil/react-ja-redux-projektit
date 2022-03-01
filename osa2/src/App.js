import './App.css';
import Person from './person/Person';


const App = () => {
  const personel = [
    {name:"John",age:12},
    {name:"Jeff",age:490},
    {name:"Joni",age:95}
  ]
  return (
    <div className="App">
      <Person name = {personel[0].name} age = {personel[0].age}/>
      <Person name = {personel[1].name} age = {personel[1].age}/>
      <Person name = {personel[2].name} age = {personel[2].age}/>
      
    </div>
  );
}

export default App;

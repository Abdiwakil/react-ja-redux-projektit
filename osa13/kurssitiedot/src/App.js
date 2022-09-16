import './App.css';

function App() {
  const course ={
    name:'Half stock application development',
    id:1,
    parts: [{
      name:'fundementals of React',
      exercises:10,
      id:1
    },
    {
      name:'Using props to pass data',
      exercises:7,
      id:2
    },
    {
      name:'State of component',
      exercises:14,
      id:3
    }
    ]
  }
  return (
    <div>
      <Course course={course}/>
    </div>
  );
}

export default App;

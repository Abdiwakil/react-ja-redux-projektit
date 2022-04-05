import '../components/View.css';
const View = (props) => {
  const inputs = props.inputs;
  
  return (
      <>
      <div className="view">
          <h1>This is your input:</h1>
          <p>First name: {inputs.Firstname}</p>
          <p>Last name: {inputs.Lastname}</p>
          <p>Phone: {inputs.phone}</p>
          <p>Message: {inputs.message}</p>
      </div>
      </> 
      
  );
}

export default View;
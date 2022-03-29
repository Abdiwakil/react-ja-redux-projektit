import '../components/Form.css';

const Form = (props) => {
    const [inputs, setInputs] = props.functions;

    const handleChange = (e) => {
        setInputs(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    return (
        <form className='form'>
        <h2><strong>Fill the Form</strong></h2>
            <div className="mb-3">
                <label htmlFor="text" className="labels">First name</label>
                <input type="text"
                name="Firstname"
                placeholder="First name"
                value={inputs.Firstname}
                onChange={handleChange}
                className = "inputs" 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="text" className="labels">Last name</label>
                <input type="text"
                name="Lastname"
                placeholder="First name"
                value={inputs.Lastname}
                onChange={handleChange}
                className = "inputs" 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="text" className="labels">Phone</label>
                <input type="text"
                name="phone"
                placeholder="Phone"
                value={inputs.phone}
                onChange={handleChange}
                className = "inputs" 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="text" className="labels">Message</label>
                <input type="text"
                name="message"
                placeholder="Message"
                value={inputs.message}
                onChange={handleChange}
                className = "inputs" 
                />
            </div>
            
        </form>
    );
}

export default Form;
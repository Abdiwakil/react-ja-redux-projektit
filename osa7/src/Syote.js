const Syote = (props) => {
    const [inputs, setInputs] = props.functions;

    const handleChange = (e) => {
        setInputs(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    return (
        <form className='Syote'>
        <h2><strong>Fill the Form</strong></h2>
            <div className="mb-3">
                <label htmlFor="text" className="labels">ensimmäinen muuttuja</label>
                <input type="number"
                name="eka"
                placeholder="kenttä..."
                value={inputs.eka}
                onChange={handleChange}
                className = "inputs" 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="text" className="labels">Last name</label>
                <input type="text"
                name="toka"
                placeholder="kenttä..."
                value={inputs.toka}
                onChange={handleChange}
                className = "inputs" 
                />
            </div>
        </form>
    );
}

export default Syote;
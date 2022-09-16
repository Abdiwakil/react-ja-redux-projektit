const Syote = (props) => {
    const [syote, aloita] = props.function;
    return (
        <div>
            <div className="mb-3">
                <label htmlFor="text" className="labels">ensimmäinen syöte</label>
                <input type="number"
                name="eka"
                value={syote.a}
                /><br/>
                <label htmlFor="text" className="labels">Toinen syöte</label>
                <input type="number"
                name="toka"
                value={syote.b}
                /><br/>
                <button onClick={aloita}>Take the shot!</button>
            </div>
        </div>
    );
  }

export default Syote;
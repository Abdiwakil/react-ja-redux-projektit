const Laske = (props, a, b) => {
    const a = props.a;
    const b = props.b;
        if (a == 0)
            return b;
    return Laske(b % a, a);
}

export default Laske;
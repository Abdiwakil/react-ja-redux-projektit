const Laske = (props) => {
   let r;
   let a = props.eka;
   let b = props.toka;
   console.log(a)
   console.log(b)
   while ((a % b) > 0) {
      r = a % b;
      a = b;
      b = r;
   }
   return(
   <p>Lukujen {props.eka} ja {props.toka} tulos on {b}</p>
)};

export default Laske;
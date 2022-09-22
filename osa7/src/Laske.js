
function Laske(a, b) {
    if (b) {
        return Laske(b, a % b);
     } else {
         return Math.abs(a);
     }
}

export default Laske;
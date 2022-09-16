
const laskuriReducer = (state = 0, action) => {
  
  switch (action.type) {
    case 'PLUS':
      return state+10
    case 'MIINUS':
      return state-10
    case 'NOLLAUS':
      return 0
    default:
      return state
  }
}
export default laskuriReducer;
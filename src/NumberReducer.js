


const NumberReducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + action.val
      case 'DECREMENT':
        return state - action.val
      default:
        throw new Error()
    }
  }
  export default NumberReducer;
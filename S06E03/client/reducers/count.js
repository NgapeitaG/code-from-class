const initialCountState = 0

const count = (state = initialCountState, action) => {
  switch (action.type) {
    case 'ADD_WOMBAT':
      return state + 1
    case 'DEL_WOMBAT':
      return state - 1
    default:
      return state
  }
}

export default count

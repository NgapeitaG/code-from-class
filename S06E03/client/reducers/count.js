const initialCountState = 0

const count = (state = initialCountState, action) => {
  switch (action.type) {
    case 'ADD_WOMBAT':
      return state + 1
    case 'DEL_WOMBAT':
      return state - 1
    case 'RECEIVING_WOMBATS':
      return action.wombats.length
    default:
      return state
  }
}

export default count

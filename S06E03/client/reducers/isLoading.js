const initialState = false

function isLoading (state = initialState, action) {
  switch (action.type) {
    case 'REQUESTING_WOMBATS':
      return true
    case 'RECEIVING_WOMBATS':
      return false
    default:
      return state
  }
}

export default isLoading

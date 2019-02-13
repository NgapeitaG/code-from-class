const initialWombatState = []

const wombats = (state = initialWombatState, action) => {
  switch (action.type) {
    case 'ADD_WOMBAT':
      return [...state, {name: action.wombat}]
    case 'DEL_WOMBAT':
      return state.filter(wombat => wombat.name !== action.wombat)
    case 'RECEIVING_WOMBATS':
      return action.wombats
    default:
      return state
  }
}

export default wombats

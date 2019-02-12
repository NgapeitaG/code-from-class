export function deleteWombat (wombat) {
  return {
    type: 'DEL_WOMBAT',
    wombat: wombat
  }
}

export function addWombat (wombat) {
  return {
    type: 'ADD_WOMBAT',
    wombat: wombat
  }
}

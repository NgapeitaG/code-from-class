import request from 'superagent'

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

function requestWombats () {
  return {
    type: 'REQUESTING_WOMBATS'
  }
}

function receiveWombats (wombats) {
  return {
    type: 'RECEIVING_WOMBATS',
    wombats: wombats
  }
}

export function getWombats () {
  return function (dispatch) {
    // turn on wait indicator
    dispatch(requestWombats())
    request
      .get('http://localhost:3000/api/wombats')
      .then(res => {
        const wombats = res.body.wombats
        // turn off wait indicator
        dispatch(receiveWombats(wombats))
      })
  }
}

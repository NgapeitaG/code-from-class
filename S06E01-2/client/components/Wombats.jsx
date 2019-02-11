import React from 'react'

import AddWombat from './AddWombat'

function Wombats (props) {
  const state = props.store.getState()

  function handleDelete (wombat) {
    return () => {
      props.store.dispatch({
        type: 'DEL_WOMBAT',
        wombat: wombat
      })
    }
  }

  return (
    <div>
      <h1>Wombats</h1>
      <ul>
        {state.wombats.map(wombat => {
          return (
            <li key={wombat}>
              {wombat} {' '}
              <a href="#" onClick={handleDelete(wombat)}>x</a>
            </li>
          )
        })}
      </ul>
      <AddWombat store={props.store} />
    </div>
  )
}

export default Wombats

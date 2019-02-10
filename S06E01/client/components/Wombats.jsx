import React from 'react'

function Wombats (props) {
  const state = props.store.getState()
  return (
    <div>
      <h1>Wombats</h1>
      <ul>
        {state.wombats.map((wombat, i) => <li key={i}>{wombat}</li>)}
      </ul>
    </div>
  )
}

export default Wombats

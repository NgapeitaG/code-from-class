import React from 'react'
import {connect} from 'react-redux'

import AddWombat from './AddWombat'

function Wombats (props) {
  const {wombats} = props

  function handleDelete (wombat) {
    return () => {
      props.dispatch({
        type: 'DEL_WOMBAT',
        wombat: wombat
      })
    }
  }

  return (
    <div>
      <h1>Wombats</h1>
      <ul>
        {wombats.map(wombat => {
          return (
            <li key={wombat}>
              {wombat} {' '}
              <a href="#" onClick={handleDelete(wombat)}>x</a>
            </li>
          )
        })}
      </ul>
      <AddWombat />
    </div>
  )
}

function mapStateToProps ({wombats}) {
  return {
    wombats
  }
}

export default connect(mapStateToProps)(Wombats)

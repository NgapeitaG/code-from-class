import React from 'react'
import {connect} from 'react-redux'

import Wombats from './Wombats'

function App (props) {
  return (
    <div>
      <Wombats />
      Total count: {props.wombatCount}
    </div>
  )
}

function mapStateToProps (state) {
  return {
    wombatCount: state.count
  }
}

export default connect(mapStateToProps)(App)

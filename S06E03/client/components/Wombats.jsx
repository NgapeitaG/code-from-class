import React from 'react'
import {connect} from 'react-redux'

import AddWombat from './AddWombat'
import {deleteWombat, getWombats} from '../actions'

class Wombats extends React.Component {
  componentDidMount () {
    this.props.dispatch(getWombats())
  }

  handleDelete = (wombat) => {
    return () => {
      this.props.dispatch(deleteWombat(wombat))
    }
  }

  render () {
    const {wombats} = this.props

    return (
      <div>
        <h1>Wombats</h1>
        <div>
          {this.props.isLoading && <span>Loading ...</span>}
        </div>
        <ul>
          {wombats.map(wombat => {
            return (
              <li key={wombat.name}>
                {wombat.name} {' '}
                <a href="#" onClick={this.handleDelete(wombat.name)}>x</a>
              </li>
            )
          })}
        </ul>
        <AddWombat />
      </div>
    )
  }
}

function mapStateToProps ({wombats, isLoading}) {
  return {
    wombats,
    isLoading
  }
}

export default connect(mapStateToProps)(Wombats)

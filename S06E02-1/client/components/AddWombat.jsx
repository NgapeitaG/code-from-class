import React from 'react'
import {connect} from 'react-redux'

class AddWombat extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      wombat: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      wombat: e.target.value
    })
  }

  handleSave = () => {
    this.props.dispatch({
      type: 'ADD_WOMBAT',
      wombat: this.state.wombat
    })
    this.setState({
      wombat: ''
    })
  }

  render () {
    return (
      <div>
        <input name="wombat" onChange={this.handleChange} value={this.state.wombat} />
        <button onClick={this.handleSave}>Save</button>
      </div>
    )
  }
}

export default connect()(AddWombat)

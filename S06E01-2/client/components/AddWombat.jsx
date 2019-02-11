import React from 'react'

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
    this.props.store.dispatch({
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

export default AddWombat

import React from 'react'

import {getPerson} from '../api'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      name: ''
    }
  }

  componentDidMount () {
    const personId = 1
    getPerson(personId)
      .then(person => {
        this.setState({name: person.name})
      })
      .catch(err => {
        console.error('Error:', err)
      })
  }

  render () {
    return (
      <div>
        <h1>In a galaxy far, far away ...</h1>
        <div>Name: {this.state.name}</div>
      </div>
    )
  }
}

export default App

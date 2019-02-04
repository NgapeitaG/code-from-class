import React from 'react'
import request from 'superagent'

class App extends React.Component {
  // Alternative class syntax
  state = {
    message: ''
  }

  componentDidMount () {
    request.post('http://localhost:3000')
      .send({
        greeting: 'Hello world!'
      })
      .then(res => {
        this.setState({
          message: res.body.message
        })
      })
      .catch(err => {
        this.setState({
          message: err.message
        })
      })
  }

  render () {
    return (
      <React.Fragment>
        <h1>React development has begun!</h1>
        <div>The server said:</div>
        <div>{this.state.message}</div>
      </React.Fragment>
    )
  }
}

export default App

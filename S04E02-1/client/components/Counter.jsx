import React from 'react'

class Counter extends React.Component {
  constructor () {
    super()
  }

  state = {
    count: 0
  }

  increase = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrease = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  setCount = (event) => {
    const newValue = Number(event.target.value)
    this.setState({
      count: newValue
    })
  }

  render () {
    return (
      <div>
        <h1>Counter</h1>
        <p>{this.state.count}</p>
        <button onClick={this.increase}>Increase</button>
        <button onClick={this.decrease}>Decrease</button>
        <div>
          <input name="newCount" onChange={this.setCount} />
        </div>
      </div>
    )
  }
}

export default Counter

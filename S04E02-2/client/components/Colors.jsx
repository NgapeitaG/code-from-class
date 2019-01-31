import React from 'react'

import Color from './Color'

class Colors extends React.Component {
  state = {
    colors: ['red', 'blue', 'yellow']
  }

  getDeleteHandler = (color) => {
    return () => {
      this.setState({
        colors: this.state.colors.filter(c => c !== color)
      })
    }
  }

  render () {
    return (
      <div>
        <ul>
          {this.state.colors.map(color => {
            const del = this.getDeleteHandler(color)
            return <Color name={color} onDelete={del} />
          })}
        </ul>
      </div>
    )
  }
}

export default Colors
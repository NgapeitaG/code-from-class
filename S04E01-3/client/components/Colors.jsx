import React from 'react'

class Colors extends React.Component {
  render () {
    return (
      <div className="colors">
        This is the colors component
        <ul>
          {this.props.colorNames.map(name => {
            return <li key={name} style={{backgroundColor: name}}>{name}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default Colors

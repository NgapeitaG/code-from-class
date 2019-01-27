import React from 'react'

function Colors (props) {
  return (
    <div className="colors">
      This is the colors component
      <ul>
        {props.colorNames.map(name => {
          return <li key={name} style={{backgroundColor: name}}>{name}</li>
        })}
      </ul>
    </div>
  )
}

export default Colors

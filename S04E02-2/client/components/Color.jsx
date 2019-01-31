import React from 'react'

function Color (props) {
  return (
    <div>
      <span>{props.name}</span>
      {' '}<a href="#" onClick={props.onDelete}>x</a>
    </div>
  )
}

export default Color

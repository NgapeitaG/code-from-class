import React from 'react'

const Animal = (props) => {
  return (
    <h1>{props.match.params.animal}</h1>
  )
}

export default Animal

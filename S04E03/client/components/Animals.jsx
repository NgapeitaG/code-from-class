import React from 'react'
import {Link} from 'react-router-dom'

const Animals = (props) => {
  return (
    <div>
      <h1>Animals</h1>
      <ul>
        {props.animals.map(animal => {
          return (
            <li key={animal}>
              <Link to={`/animals/${animal}`}>{animal}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Animals

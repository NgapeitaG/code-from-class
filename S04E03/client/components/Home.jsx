import React from 'react'
import {Link} from 'react-router-dom'

function Home () {
  return (
    <div>
      <Link to="/animals">Show animals</Link>
    </div>
  )
}

export default Home

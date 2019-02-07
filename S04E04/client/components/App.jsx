import React from 'react'
import {Route} from 'react-router-dom'

import List from './List'

const App = () => {
  return (
    <div>
      <h1>React form demo</h1>
      <Route path="/" component={List} />
    </div>
  )
}

export default App

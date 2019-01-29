import React from 'react'
import {Route} from 'react-router-dom'

import Home from './Home'
import Animal from './Animal'
import Animals from './Animals'

const animals = ['bear', 'pig', 'eagle']

const App = () => {
  return (
    <div>
      <h1>Animal App</h1>
      <Route exact path="/" component={Home} />
      <Route exact path="/animals" render={() => (
        <Animals animals={animals} />
      )} />
      <Route path="/animals/:animal" component={Animal} />
    </div>
  )
}

export default App

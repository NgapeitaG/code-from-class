import React from 'react'

import Animal from './Animal'
import Colors from './Colors'

const primaryColors = ['red', 'blue', 'yellow']

function App (props) {
  return (
    <div className="app">
      <h1>App</h1>
      {props.showAnimal
        ? <Animal />
        : <Colors colorNames={primaryColors} />}
    </div>
  )
}

export default App

import React from 'react'

class AddForm extends React.Component {
  state = {
    id: 0,
    value: ''
  }

  render () {
    return (
      <div className="add-form">
        <div>ID: <input name="id" /></div>
        <div>Value: <input name="value" /></div>
        <button onClick={}>Add item</button>
      </div>
    )
  }
}

export default AddForm

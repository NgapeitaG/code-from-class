import React from 'react'

import AddForm from './AddForm'

class List extends React.Component {
  state = {
    items: []
  }

  render () {
    <div className="list">
      <h2>List of items</h2>
      <ul>
        {this.state.items.map(item => {
          return <li key={item.id}>{item.value}</li>
        })}
      </u>
      <AddForm />
    </div>
  }
}

export default List

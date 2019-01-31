import React from 'react'

import Animal from './Animal'

function Hello (props) {
  return (
    <div className="hello">
      <div className="blue">hello {props.name}</div>
      <img src="https://3.bp.blogspot.com/-cCMR_zZzXaM/TpjzOk6lsUI/AAAAAAAAErM/3nEiwAvKeFk/s400/unicorn-riding-harley.jpg" />
      <Animal name="unicorn" />
    </div>
  )
}

export default Hello

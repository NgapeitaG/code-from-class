import React from 'react'
import {Icon, Message} from 'semantic-ui-react'

export default class APIError extends React.Component {
  render () {
    return (
      <Message icon>
        <Icon name='exclamation circle' color='red' />
        <Message.Content>
          <Message.Header>Uh-oh, API problem!</Message.Header>
          <em>{this.props.message}</em>
          <p>Open your JavaScript console and check the Network tab to see what went wrong.</p>
        </Message.Content>
      </Message>
    )
  }
}

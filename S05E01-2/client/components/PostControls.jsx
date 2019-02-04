import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Button, Icon, Message } from 'semantic-ui-react'

export default class PostControls extends React.Component {
  state = {
    message: '',
    redirectHome: false
  }

  render () {
    const { message } = this.state

    return (
      <Button.Group>
        <Button as={Link} to={`/${this.props.postId}/edit`} color='blue'>
          <Icon name='edit' />Edit
        </Button>
        <Button as='a' onClick={this.props.deletePost} color='red'>
          <Icon name='delete' />Delete
        </Button>
        {message && <Message>{message}</Message>}
      </Button.Group>
    )
  }
}

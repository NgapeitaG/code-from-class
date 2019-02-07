import React from 'react'
import {Redirect} from 'react-router-dom'

import {addCommentByPostId, updateComment} from '../api'

export default class CommentForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      message: '',
      comment: props.comment
    }
  }

  navigateToPost = () => this.setState({
    redirectTarget: `/posts/${this.props.postId}/comments`
  })

  handleChange = evt => this.setState({
    comment: {
      ...this.state.comment,
      [evt.target.name]: evt.target.value
    }
  })

  handleSubmit = e => {
    e.preventDefault()
    const {match, fetchComments} = this.props
    const {comment} = this.state

    if (comment.id) {
      return updateComment(comment)
        .then(() => fetchComments(comment.postId))
        .then(this.navigateToPost)
        .catch(({message}) => this.setState({message}))
    }

    return addCommentByPostId(match.params.postId, this.state.comment)
      .then(() => fetchComments(match.params.postId))
      .then(this.navigateToPost)
      .catch(({message}) => this.setState({message}))
  }

  render () {
    const {comment, errorMessage, redirectTarget} = this.state
    if (redirectTarget) {
      return (
        <Redirect to={redirectTarget} />
      )
    }

    if (errorMessage) {
      return (
        <p>{errorMessage && <em>{errorMessage}</em>}</p>
      )
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='text'
          value={comment.text}
          onChange={(e) => {
            this.setState({
              comment: {
                ...comment,
                text: e.target.value
              }
            })
          }}
        />
        <input className='pure-button' type='submit' />
      </form>
    )
  }
}

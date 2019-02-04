import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import CommentForm from './CommentForm'

import {deleteComment} from '../api'

export default class Comment extends React.Component {
  deleteComment = () =>
    deleteComment(this.props.comment)
      .then(() => this.props.fetchComments(this.props.postId))

  render () {
    const {postId, comment, fetchComments} = this.props

    return (
      <div>
        <Switch>
          <Route
            path={`/posts/${postId}/comments/${comment.id}`}
            render={(props) =>
              <CommentForm
                fetchComments={fetchComments}
                comment={comment}
                postId={postId}
                {...props}
              />
            }
          />
          <Route
            path={`/posts/${postId}`}
            render={props => (
              <li key={comment.id}>
                {comment.text} - {comment.dateCreated}
                <Link to={`/posts/${postId}/comments/${comment.id}`}>
                  <button className='pure-button spaced-button comment-button primary-button'>Edit</button>
                </Link>
                <button
                  className='pure-button spaced-button comment-button error-button'
                  onClick={this.deleteComment}>
                    Delete
                </button>
              </li>
            )}
          />
        </Switch>
      </div>
    )
  }
}

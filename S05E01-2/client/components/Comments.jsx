import React from 'react'
import { Link, Route } from 'react-router-dom'

import Comment from './Comment'
import CommentForm from './CommentForm'

export default class Comments extends React.Component {
  render () {
    const { postId, comments, fetchComments } = this.props
    const newComment = { text: '', postId }

    return (
      <div>
        <Link
          className='pure-button button-secondary'
          to={`/${postId}/newcomment`}>
          Add A New Comment
        </Link>
        <Route
          path='/:postId/comments/new'
          render={props => (
            <CommentForm
              comment={newComment}
              fetchComments={fetchComments}
              {...props}
            />
          )}
        />
        <ul>
          {comments.map(comment => (
            <Comment
              key={comment.id}
              postId={postId}
              comment={comment}
              fetchComments={fetchComments}
            />
          ))}
        </ul>
      </div>
    )
  }
}

Comments.defaultProps = {
  comments: []
}

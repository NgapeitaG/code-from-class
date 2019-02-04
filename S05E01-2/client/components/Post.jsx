import React from 'react'
import { Link, Redirect, Route } from 'react-router-dom'
import { Header, Message, Segment } from 'semantic-ui-react'

import Comments from './Comments'
import PostControls from './PostControls'
import { deletePost, getCommentsByPostId } from '../api'

export default class Post extends React.Component {
  state = {
    comments: [],
    message: null,
    redirectHome: false
  }

  componentDidMount () {
    const { post } = this.props
    if (!post) {
      return this.setState({ message: 'That post does not appear to exist.' })
    }
    this.fetchComments(post.id)
  }

  fetchComments = postId =>
    getCommentsByPostId(postId)
      .then(comments => this.setState({ comments: comments }))
      .catch(({ message }) => this.setState({ message: 'potatoes' }))

  deletePost = () =>
    deletePost(this.props.post.id)
      .then(() => this.setState({ redirectHome: true }))
      .then(this.props.fetchPosts)
      .catch(({ message }) => this.setState({ message }))

  renderComments = () => <Comments
    postId={this.props.post.id}
    comments={this.state.comments}
    fetchComments={this.fetchComments}
  />

  render () {
    const { comments, message, redirectHome } = this.state

    if (redirectHome) {
      return <Redirect to='/' />
    }

    if (message) {
      return (
        <Message>{message}</Message>
      )
    }

    const { title, paragraphs, dateCreated, id } = this.props.post

    return (
      <Segment basic>
        <Link to={`/${id}`}>
          <Header as='h3' content={title} subheader={dateCreated} />
        </Link>

        {paragraphs.map((para, key) => <p key={key}>{para}</p>)}

        <PostControls deletePost={this.deletePost} postId={id} />

        <Link to={`/${id}`}>
          <div className='comment-count'>
            {comments.length} comments
          </div>
        </Link>

        <Route path='/:id' render={this.renderComments} />
      </Segment>
    )
  }
}


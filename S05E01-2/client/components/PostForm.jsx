import React from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Form, Message } from 'semantic-ui-react'

import { addPost, updatePost } from '../api'

export default class PostForm extends React.Component {
  state = {
    message: null,
    post: {
      title: '',
      paragraphs: ''
    },
    redirectToId: null
  }

  componentDidMount () {
    const { post } = this.props
    if (post) {
      this.setNewPost(post)
    }
  }

  handleChange = e => {
    const { post } = this.state

    this.setState({
      post: {
        ...post,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { post } = this.state

    const fn = post.id ? updatePost : addPost

    return fn(this.state.post)
      .then(this.refreshPostsAndRedirect)
      .catch(({ message }) => this.setState({ message }))
  }

  refreshPostsAndRedirect = ({ id }) => this.props.fetchPosts()
    .then(() => this.setState({ redirectToId: id }))

  setNewPost = post =>
    this.setState({
      post: {
        ...post,
        paragraphs: post.paragraphs.join('\n')
      }
    })

  render () {
    const { message, post, redirectToId } = this.state

    if (redirectToId) {
      return <Redirect to={`/${redirectToId}`} />
    }

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Title</label>
          <input
            type='text'
            name='title'
            value={post.title}
            onChange={this.handleChange} />
        </Form.Field>

        <Form.Field>
          <label htmlFor='paragraphs'>Blog</label>
          <textarea
            name='paragraphs'
            value={post.paragraphs}
            onChange={this.handleChange}>
          </textarea>
        </Form.Field>

        <Button type='submit'>Save</Button>

        {message && <Message>{message}</Message>}
      </Form>
    )
  }
}

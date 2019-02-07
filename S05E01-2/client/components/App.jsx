import React from 'react'

import APIError from './APIError'
import Routes from './Routes'
import { getPosts } from '../api'

export default class App extends React.Component {
  state = {
    posts: [],
    message: null
  }

  componentDidMount () {
    this.fetchPosts()
  }

  fetchPosts = () => getPosts()
    .then(posts => this.setState({ posts }))
    .catch(({ message }) => this.setState({ message }))

  render () {
    const { message, posts } = this.state

    if (message) {
      return <APIError message={message} />
    }

    return (
      <React.Fragment>
        <Routes posts={posts} fetchPosts={this.fetchPosts} />
      </React.Fragment>
    )
  }
}

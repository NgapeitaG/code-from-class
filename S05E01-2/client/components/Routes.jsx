import React from 'react'
import { Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Post from './Post'
import Posts from './Posts'
import PostForm from './PostForm'
import TopMenu from './TopMenu'

class Routes extends React.Component {
  getPostFromParam = match => {
    if (match && match.params.id) {
      return this.props.posts.find(p => p.id === Number(match.params.id))
    }

    return null
  }

  renderEditPost = ({ match }) => {
    const post = this.getPostFromParam(match)
    return <PostForm post={post} fetchPosts={this.props.fetchPosts} />
  }

  renderNewPost = () => <PostForm
    fetchPosts={this.props.fetchPosts} />

  renderPost = ({ match }) => {
    const post = this.getPostFromParam(match)
    return <Post post={post} fetchPosts={this.props.fetchPosts} />
  }

  renderPosts = props => <Posts
    posts={this.props.posts}
    fetchPosts={this.props.fetchPosts}
    {...props} />

  render () {
    return (
      <Router>
        <React.Fragment>
          <Route path='/' component={TopMenu} />
          <Container style={{ marginTop: 75 }}>
            <Switch>
              <Route exact path='/' render={this.renderPosts} />
              <Route path='/new' render={this.renderNewPost} />
              <Route path='/:id/edit' render={this.renderEditPost} />
              <Route path='/:id' render={this.renderPost} />
            </Switch>
          </Container>
        </React.Fragment>
      </Router>
    )
  }
}

export default Routes

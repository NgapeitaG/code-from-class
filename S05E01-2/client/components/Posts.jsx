import React from 'react'
import { Segment } from 'semantic-ui-react'

import Post from './Post'

export default function Posts (props) {
  return props.posts.map(post => {
    return <Post
      key={post.id}
      post={post}
      fetchPosts={props.fetchPosts}
      path={props.location.pathname}
    />
  })
}

Posts.defaultProps = {
  posts: []
}

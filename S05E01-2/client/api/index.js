import request from 'superagent'

const formatDates = entity => ({
  ...entity,
  dateCreated: new Date(entity.dateCreated).toDateString()
})

// Convert the large paragraphs string into an array of paragraphs
const splitParagraphs = post => ({ ...post, paragraphs: post.paragraphs.split('\n') })

export function getPosts () {
  return request.get('/v1/posts')
    .then(res => res.body.map(formatDates))
    .catch(e => {
      throw Error('Something is wrong with your GET route for /v1/posts')
    })
}

export function addPost (post) {
  return request.post('/v1/posts')
    .send(splitParagraphs(post))
    .then(res => formatDates(res.body))
    .catch(() => {
      throw Error('Something is wrong with your POST route for /v1/posts')
    })
}

export function updatePost (post, cb) {
  return request.put(`/v1/posts/${post.id}`)
    .send(splitParagraphs(post))
    .then(res => formatDates(res.body))
    .catch(() => {
      throw Error('Something is wrong with your PUT route for /v1/posts/:id')
    })
}

export function deletePost (postId) {
  return request.del(`/v1/posts/${postId}`)
    .then(res => res.body)
    .catch(() => {
      throw Error('Something is wrong with your DELETE route for /v1/posts/:id')
    })
}

export function getCommentsByPostId (postId) {
  return request.get(`/v1/posts/${postId}/comments`)
    .then(res => res.body.map(formatDates))
    .catch(() => {
      throw Error('Something is wrong with your GET route for /v1/posts/:id/comments')
    })
}

export function addComment (comment) {
  return request.post(`/v1/posts/${comment.postId}/comments`)
    .send(comment)
    .then(res => formatDates(res.body))
    .catch(() => {
      throw Error('Something is wrong with your POST route for /v1/posts/:id/comments')
    })
}

export function updateComment (comment) {
  return request.put(`/v1/posts/${comment.postId}/comments/${comment.id}`)
    .send(comment)
    .then(res => formatDates(res.body))
    .catch(() => {
      throw Error('Something is wrong with your PUT route for /v1/comments/:id')
    })
}

export function deleteComment (comment) {
  return request.del(`/v1/comments/${comment.postId}/comments/${comment.id}`)
    .then(res => res.body)
    .catch(() => {
      throw Error('Something is wrong with your DELETE route for /v1/comments/:id')
    })
}

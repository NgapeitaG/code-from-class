const config = require('../../knexfile').development
const db = require('knex')(config)

module.exports = {
  getPosts,
  getComments,
  addPost,
  deletePost,
  updatePost
}

function getPosts () {
  return db('posts')
}

function getComments (postId) {
  return db('comments')
    .where('post_id', postId)
}

function addPost (newPost) {
  return db('posts')
    .insert(newPost)
}

function deletePost (id) {
  return db('posts')
    .where('id', id)
    .delete()
}

function updatePost (id, updatedPost) {
  console.log('updatePost method')

  return db('posts')
    .where('id', id)
    .update(updatedPost)
}

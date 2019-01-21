const knex = require('knex')
const config = require('./knexfile').development

const db = knex(config)

module.exports = {
  getUsers,
  getUserPosts
}

function getUsers () {
  return db('users')
    .select('id', 'username', 'email')
}

function getUserPosts () {
  return db('users')
    .join('posts', 'users.id', 'posts.user_id')
    .select('username', 'subject')
}

const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const db = require('knex')(config)

module.exports = {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser
}

function getUsers () {
  return db('users')
    .select()
}

function getUser (id) {
  return db('users')
    .where('id', id)
    .first()
}

function addUser (user) {
  return db('users')
    .insert(user)
}

function updateUser (id, updatedUser) {
  return db('users')
    .where('id', id)
    .update(updatedUser)
}

function deleteUser (id) {
  return db('users')
    .where('id', id)
    .delete()
}

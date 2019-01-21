const express = require('express')
const router = express.Router()

const db = require('./db')

router.get('/', (req, res) => {
  db.getUsers()
    .then(displayUsers)
    .catch(displayError)

  function displayUsers (users) {
    res.render('users', { users })
  }

  function displayError (err) {
    res.status(500).send(err.message)
  }
})

router.get('/posts', (req, res) => {
  db.getUserPosts()
    .then(displayPosts)
    .catch(displayError)

  function displayPosts (userposts) {
    res.render('posts', { userposts })
  }

  function displayError (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router

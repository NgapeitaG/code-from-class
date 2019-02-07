const express = require('express')

const db = require('../db/db')

const utils = require('../db/utils')

const router = express.Router()

router.use(express.json())

module.exports = router

router.get('/', (req, res) => {
  db.getPosts()
    .then(posts => {
      posts = utils.convertArrayToCamelCase(posts)
      posts.map(post => (
        {
          ...post,
          paragraphs: JSON.parse(post.paragraphs)
        }
      ))
    .then(posts => res.json(posts))
})

router.get('/:id/comments', (req, res) => {
  const postId = Number(req.params.id)

  db.getComments(postId)
    .then(comments => utils.convertArrayToCamelCase(comments))
    .then(comments => res.json(comments))
})

router.post('/', (req, res) => {
  const newPost = req.body

  newPost.date_created = new Date()
  newPost.paragraphs = JSON.stringify(newPost.paragraphs)

  db.addPost(newPost)
    .then(id => {
      db.getPosts(id)
        .then(post => res.json(post))
    })
    .catch(err => res.status(500).send(err.message))
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)

  db.deletePost(id)
    .then(res.status(200).end())
    .catch(err => res.status(500).send(err.message))
})

router.put('/:id', (req, res) => {
  const id = Number(req.params.id)
  const updatedPost = req.body

  db.updatePost(id, updatedPost)
    .then(console.log) // res.status(200).end())
    .catch(err => res.status(500).send(err.message))
})

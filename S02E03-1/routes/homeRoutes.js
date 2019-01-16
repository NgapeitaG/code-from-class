const fs = require('fs')
const path = require('path')
const express = require('express')
const router = express.Router()

module.exports = router

// Routes
// GET /
router.get('/', (req, res) => {
  const filePath = path.join(__dirname, '../colors.json')

  fs.readFile(filePath, 'utf8', (err, contents) => {
    if (err) return res.send(`Something went wrong...\n${err}`)

    const colors = JSON.parse(contents)
    const data = {
      title: 'Harakeke',
      colors: colors
    }

    res.render('home', data)
  })
})

// GET /blog
router.get('/blog', (req, res) => {
  res.send('<h1>EDA rocks!</h1>')
})

// GET /:name
router.get('/:name', (req, res) => {
  const name = req.params.name
  res.send(`Hello ${name}!`)
})

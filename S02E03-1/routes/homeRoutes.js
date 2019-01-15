// const colorsJSON = require('../colors.json')
const fs = require('fs')
const path = require('path')
const express = require('express')
const router = express.Router()

module.exports = router

// Routes
router.get('/', (req, res) => {
  console.log('Root route hit')

  const filePath = path.join(__dirname, '../colors.json')

  fs.readFile(filePath, (err, contents) => {
    if (err) return res.send(`Something went wrong...\n${err}`)

    console.log(contents)
    const colors = JSON.parse(contents)
    console.log(colors)

    const data = {
      title: 'Harakeke',
      colors: colors
    }
    res.render('home', data)
  })
})

router.get('/blog', (req, res) => {
  console.log('/blog route hit')
  res.send('<h1>EDA rocks!</h1>')
})

router.get('/:name', (req, res) => {
  const name = req.params.name
  res.send(`Hello ${name}!`)
})

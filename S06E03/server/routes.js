const express = require('express')

const db = require('./db')

const router = express.Router()

router.use(express.json())

router.get('/wombats', (req, res) => {
  const allWombats = db.getAllWombats()
  setTimeout(() => {
    res.json({
      wombats: allWombats
    })
  }, 3000)
})

router.post('/wombats', (req, res) => {
  // Make up and error and bail out
  if (req.body.name === 'abc') {
    return res.status(500).json({
      error: 'What kind of name is "abc"?!'
    })
  }

  const newWombat = req.body
  db.saveNewWombat(newWombat)
  setTimeout(() => {
    res.sendStatus(201)
  }, 3000)
})

module.exports = router

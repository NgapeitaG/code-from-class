const express = require('express')
const request = require('superagent')

const router = express.Router()
router.use(express.json())

const swapiUrl = 'https://swapi.co/api'

router.get('/:id', (req, res) => {
  const url = `${swapiUrl}/people/${req.params.id}`
  request
    .get(url)
    .then(swapires => {
      // console.log('swapires.body:', swapires.body)
      res.json(swapires.body)
    })
    .catch(err => {
      res.status(500).send('Consuming SWAPI failed')
      console.error(err)
    })
})

module.exports = router

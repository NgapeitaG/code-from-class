const express = require('express')
const router = express.Router()

module.exports = router

// Routes
// GET /portfolio
router.get('/', (req, res) => {
  res.send('Cool things are happening. We\'re learning.')
})

// GET /portfolio/coke
router.get('/coke', (req, res) => {
  const logo = 'https://vignette.wikia.nocookie.net/logopedia/images/5/56/Coca-Cola.svg'
  res.send(`<img src=${logo} />`)
})

// GET /portfolio/mcdonalds
router.get('/mcdonalds', (req, res) => {
  const logo = 'https://vignette.wikia.nocookie.net/logopedia/images/3/36/McDonald%27s_Golden_Arches.svg'
  res.send(`<img src=${logo} />`)
})

// GET /portfolio/ecostore
router.get('/ecostore', (req, res) => {
  const logo = 'http://www.ecostore.co.nz/c.4325795/site-nz/img/logo.png'
  res.send(`<img src=${logo} />`)
})

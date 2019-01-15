const express = require('express')
const router = express.Router()

module.exports = router

// Routes
router.get('', (req, res) => {
  console.log(' route hit')
  res.send('Cool things are happening. We\'re learning.')
})

router.get('/coke', (req, res) => {
  console.log('/coke route hit')
  // res.sendFile(path.join(__dirname, 'coke.html'))
  const logo = 'https://vignette.wikia.nocookie.net/logopedia/images/5/56/Coca-Cola.svg'
  res.send(`<img src=${logo} />`)
})

router.get('/mcdonalds', (req, res) => {
  console.log('/mcdonalds route hit')
  // res.sendFile(path.join(__dirname, 'mcdonalds.html'))
  const logo = 'https://vignette.wikia.nocookie.net/logopedia/images/3/36/McDonald%27s_Golden_Arches.svg'
  res.send(`<img src=${logo} />`)
})

router.get('/ecostore', (req, res) => {
  console.log('/ecostore route hit')
  // res.sendFile(path.join(__dirname, 'ecostore.html'))
  const logo = 'http://www.ecostore.co.nz/c.4325795/site-nz/img/logo.png'
  res.send(`<img src=${logo} />`)
})

const express = require('express')
const server = express()

module.exports = server

server.get('/', (req, res) => {
  res.status(202).send('<h1>Hello world!</h1>')
})

server.get('/bonehead/:name', (req, res) => {
  const data = {
    name: req.params.name,
    count: req.query.count
  }
  res.send(`<h1>${req.params.name} is a bonehead</h1>`)
})

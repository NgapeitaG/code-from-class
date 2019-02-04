const path = require('path')
const express = require('express')

const cors = require('cors')

const server = express()

// Middleware
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors())

// Routes
server.post('/', (req, res) => {
  res.json({
    message: 'POST REQUEST SUCCESSFUL'
  })
})

server.put('/', (req, res) => {
  res.json({
    message: 'PUT REQUEST SUCCESSFUL'
  })
})

module.exports = server

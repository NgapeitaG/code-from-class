const express = require('express')

const users = require('./routes/users')

const server = express()

// Middleware
server.use(express.json())

// Routes
server.use('/api/v1/users', users)

module.exports = server

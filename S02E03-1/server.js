// Require modules
const server = require('express')()

// Line 2 is shorthand for the following:
// const express = require('express')
// const server = express()

const hbs = require('express-handlebars')

// Export server
module.exports = server

// Require routes
const homeRoutes = require('./routes/homeRoutes')
const portfolioRoutes = require('./routes/portfolio')

// Configuration
const hbsConfig = {
  defaultLayout: 'main',
  extname: 'hbs'
}
server.engine('hbs', hbs(hbsConfig))
server.set('view engine', 'hbs')

server.use('/', homeRoutes)
server.use('/portfolio', portfolioRoutes)

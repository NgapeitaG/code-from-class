const express = require('express')
const hbs = require('express-handlebars')
const server = express()

// configuration
const hbsConfig = {
  defaultLayout: 'main',
  extname: 'hbs'
}
server.engine('hbs', hbs(hbsConfig))
server.set('view engine', 'hbs')

// routes
server.get('/', (req, res) => {
  // console.log('/ route hit')
  const data = {
    professor: 'Charles Xavier',
    cohort: [
      { name: 'Logan', color: 'yellow' },
      { name: 'Scott Summers', color: 'red' },
      { name: 'Hank McCoy', color: 'blue' },
      { name: 'Jean Grey', color: 'magenta' }
    ],
    isCool: false
  }
  res.render('home', data)
})

server.get('/someone', (req, res) => {
  // console.log('/someone route hit')
  const data = {
    professor: 'Alan Turing',
    love: 'to code!'
  }
  res.render('code', data)
})

module.exports = server

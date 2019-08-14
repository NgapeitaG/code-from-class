const express = require('express')
const hbs = require('express-handlebars')

const server = express()

server.engine('hbs', hbs({
  extname: 'hbs'
}))
server.set('view engine', 'hbs')

server.get('/', (req, res) => {
  const data = {
    user: {
      name: 'Ngapeita',
      loves: 'friends',
      friends: [
        {
          name: 'Katarina'
        }, {
          name: 'Sheeva'
        }, {
          name: 'Iris'
        }
      ]
    },
    showLoves: false,
    colors: [
      'blue',
      'red',
      'green'
    ]
  }
  res.render('home', data)
})

server.get('/special', (_req, res) => {
  res.render('supercool', {
    layout: 'special',
    name: 'Ngapeita'
  })
})

module.exports = server
// Server.js is what holds the data we see and sends it to our browser in the server
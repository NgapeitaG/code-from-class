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
      name: 'Don',
      loves: 'beach',
      friends: [
        {
          name: 'Aubrey'
        }, {
          name: 'Francine'
        }, {
          name: 'Ben'
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

server.get('/special', (req, res) => {
  res.render('supercool', {
    layout: 'special',
    name: 'Don'
  })
})

module.exports = server

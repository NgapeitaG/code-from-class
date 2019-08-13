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

server.get('/special', (req, res) => {
  res.render('supercool', {
    layout: 'special',
    name: 'Don'
  })
})

module.exports = server
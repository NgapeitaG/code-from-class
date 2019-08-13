const path = require('path')

const express = require('express')
const server = express()

server.use(express.urlencoded({extended: true}))

server.listen(3000, () => {
  console.log('Listening on port 3000...')
})

server.get('/', (req, res) => {
  console.log('Hit root route')
  res.send('Hello world!')
})

server.get('/harakeke', (req, res) => {
  console.log('Hit /harakeke')
  res.send('<h1 style="color: red">Harakeke is awesome!</h1>')
})

server.get('/awesome/:name', (req, res) => {
  console.log('Hit /awesome')
  console.log(req.params)
  res.send('Hi ' + req.params.name + ', you are awesome!')
})

server.get('/compliment', (req, res) => {
  console.log('Hit /compliment')
  console.log(req.query)
  res.send('Welcome to the compliments page')
})

server.get('/faq', (req, res) => {
  console.log(__dirname)
  res.sendFile(path.join(__dirname, 'faq.html'))
})

server.get('/adduser', (req, res) => {
  res.sendFile(path.join(__dirname, 'form.html'))
})

server.post('/adduser', (req, res) => {
  console.log('Hit POST route at /adduser')
  console.log(req.body)
  res.send('Welcome new user! ' + req.body.email)
})

// Run yarn dev in the command line/terminal
// Go to port 3000 in your browser and view the index.js file
const server = require('./server')

const port = 3000

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening on port', port)
})

// requires our server and listens on the 3000 port in order for us to view the partials on our browser
// Servers enable us to send our data to the browser
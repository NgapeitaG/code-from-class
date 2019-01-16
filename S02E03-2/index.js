const server = require('./server')

const port = 3000

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.info('Server is listening on port', port)
})

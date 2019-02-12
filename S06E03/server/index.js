const cors = require('cors')
const express = require('express')

const router = require('./routes')

const app = express()
const port = 3000

app.use(cors())
app.use('/api', router)

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening on port', port)
})

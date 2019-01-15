const fs = require('fs')

module.exports = {
  getData
}

function getData (filename, callback) {
  fs.readFile(filename, 'utf-8', (err, data) => {
    if (err) {
      console.error(err)
    }

    callback(data)
  })
}

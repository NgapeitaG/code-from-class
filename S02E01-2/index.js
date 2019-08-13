const fs = require('fs')
// requires the file system package

module.exports = {
  getData
}
// Exports the getData function which is a callback function

function getData (filename, callback) {
  fs.readFile(filename, 'utf-8', (err, data) => {
    if (err) {
      console.error(err)
    }

    callback(data)
  })
}
// A callback function which reads a file and will either return an error or the data read in the file

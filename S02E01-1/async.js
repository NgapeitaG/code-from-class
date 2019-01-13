const fs = require('fs')
const path = require('path')

function getData (file, callback) {
  const filepath = path.join(__dirname, file)

  fs.readFile(filepath, 'utf8', callback)
}

function showData (err, data) {
  if (err) {
    console.error(err)
  } else {
    console.log(data)
  }
}

getData('data.txt', showData)
console.log('All done!')

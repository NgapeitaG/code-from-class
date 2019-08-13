const fs = require('fs')
const path = require('path')
// requires 'fs' and 'path' packages 

function getData (file, callback) {
  const filepath = path.join(__dirname, file)
  // creates a const which makes a path to our file which is data.txt

  fs.readFile(filepath, 'utf8', callback)
}
// fs.readfile reads the entire contents of a file

function showData (err, data) {
  if (err) {
    console.error(err)
  } else {
    console.log(data)
  }
}
// A function for showing the data in our file

getData('data.txt', showData)
console.log('All done!')
// Gets and shows data
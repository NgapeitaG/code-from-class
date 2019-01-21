const fs = require('fs')
const path = require('path')

const source = path.join(__dirname, 'source.txt')
const destination = path.join(__dirname, 'destination.txt')

function getSourceContents (callback) {
  fs.readFile(source, 'utf8', (err, contents) => {
    if (err) return showError(err)
    callback(contents)
  })
}

function appendToDestination (contents, callback) {
  fs.appendFile(destination, contents, 'utf8', err => {
    if (err) return showError(err)
    callback()
  })
}

function showDestination (callback) {
  fs.readFile(destination, 'utf8', (err, contents) => {
    if (err) return showError(err)
    // eslint-disable-next-line no-console
    console.log(contents)
  })
}

function showError (err) {
  // eslint-disable-next-line no-console
  console.error(err)
}

getSourceContents(contents => {
  appendToDestination(contents, () => {
    // eslint-disable-next-line no-console
    showDestination(() => console.info('All done'))
  })
})

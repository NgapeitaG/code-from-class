const fs = require('fs')
const path = require('path')

module.exports = {
  getEmployee,
  saveEmployee
}

const filepath = path.join(__dirname, 'employee.json')

function getEmployee (callback) {
  fs.readFile(filepath, 'utf8', (err, contents) => {
    if (err) return callback(err)
    const obj = JSON.parse(contents)
    callback(null, obj)
  })
}

function saveEmployee (employee, callback) {
  const employeeString = JSON.stringify(employee)
  fs.writeFile(filepath, employeeString, 'utf8', callback)
}

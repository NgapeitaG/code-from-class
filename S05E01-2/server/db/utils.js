const _ = require('lodash')

module.exports = {
  convertArrayToCamelCase,
  convertObjectToSnakeCase
}

function convertArrayToCamelCase (arr) {
  return arr.map(element => {
    return _.mapKeys(element, (value, key) => {
      return _.camelCase(key)
    })
  })
}

function convertObjectToSnakeCase (obj) {
  return _.mapKeys(obj, (value, key) => {
    return _.snakeCase(key)
  })
}

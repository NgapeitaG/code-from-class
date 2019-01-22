const knex = require('knex')
const config = require('./knexfile').development

const db = knex(config)

module.exports = {
  getVehicles,
  getDrivers
}

function getVehicles () {
  return db('vehicles')
    .select('make', 'model', 'number_plate')
}

function getDrivers () {
  return db('drivers')
    .select('name', 'age')
}

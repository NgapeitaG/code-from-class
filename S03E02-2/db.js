const knex = require('knex')
const config = require('./knexfile').development

const db = knex(config)

module.exports = {
  getVehicles,
  getDrivers,
  getDriver
}

function getVehicles () {
  return db('vehicles')
    .select('make', 'model', 'number_plate')
}

function getDrivers () {
  return db('drivers')
    .select('id', 'name', 'age')
}

function getDriver (driverId) {
  return db('drivers_vehicles')
    .join('drivers', 'drivers.id', 'driver_id')
    .join('vehicles', 'vehicles.id', 'vehicle_id')
    .where('drivers.id', driverId)
    .select('name', 'age', 'number_plate as numberPlates')

  // return db('drivers')
  //   .select('id', 'name', 'age')
  //   .where('id', id)
  //   .first()
}

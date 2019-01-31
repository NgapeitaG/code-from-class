const express = require('express')
const router = express.Router()

const db = require('./db')

router.get('/', (req, res) => res.render('home', null))

router.get('/vehicles', (req, res) => {
  db.getVehicles()
    .then(displayVehicles)
    .catch(displayError)

  function displayVehicles (vehicles) {
    res.render('vehicles', { vehicles })
  }

  function displayError (err) {
    res.status(500).send(err.message)
  }
})

router.get('/drivers', (req, res) => {
  db.getDrivers()
    .then(displayDrivers)
    .catch(displayError)

  function displayDrivers (drivers) {
    console.log(drivers)
    res.render('drivers', { drivers })
  }

  function displayError (err) {
    res.status(500).send(err.message)
  }
})

router.get('/driver/:id', (req, res) => {
  const driverId = Number(req.params.id)
  db.getDriver(driverId)
    .then(formatData)
    .then(displayDriver)
    .catch(displayError)

  function formatData (driver) {
    const data = {
      name: driver[0].name,
      age: driver[0].age,
      vehicles: driver.map(el => el.numberPlates)
    }
    return data
  }

  function displayDriver (driver) {
    res.render('driver', driver)
  }

  function displayError (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router

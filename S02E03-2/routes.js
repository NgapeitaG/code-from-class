const express = require('express')

const employee = require('./employee')

const router = express.Router()

// tell express how it should process the body of HTTP requests
router.use(express.urlencoded({extended: false}))

router.get('/', (req, res) => {
  res.send('woohoo!')
})

router.get('/card', (req, res) => {
  employee.getEmployee((err, employeeData) => {
    if (err) return res.status(500).send('file access error')
    res.set('Content-Type', 'image/svg+xml')
    res.render('idcard', employeeData)
  })
})

router.get('/employee', (req, res) => {
  // show the HTML form
  res.render('employee')
})

router.post('/employee', (req, res) => {
  const employeeObj = req.body
  employee.saveEmployee(employeeObj, err => {
    if (err) return res.status(500).end()
    res.redirect('/card')
  })
})

module.exports = router

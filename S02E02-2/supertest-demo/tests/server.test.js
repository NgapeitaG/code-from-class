const request = require('supertest')
const server = require('../server')

test('All systems are go', () => {
  expect(true).toBe(true)
})

test('/ returns a 202 status code', (done) => {
  request(server)
    .get('/')
    .expect(202)
    .end((err, res) => {
      expect(err).toBeNull()
      expect(res.status).toBe(202)
      done()
    })
})

test('/ returns "Hello world!"', (done) => {
  request(server)
    .get('/')
    .end((err, res) => {
      expect(err).toBeNull()
      expect(res.text).toMatch('Hello')
      done()
    })
})

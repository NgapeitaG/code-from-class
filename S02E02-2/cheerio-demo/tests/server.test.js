const server = require('../server')
const request = require('supertest')
const cheerio = require('cheerio')

test('All systems are go', () => {
  expect(true).toBeTruthy()
})

test('Root route returns one list of students', (done) => {
  request(server)
    .get('/')
    .expect(200)
    .expect('content-type', 'text/html; charset=utf-8')
    .end((err, res) => {
      expect(err).toBeNull()
      const $ = cheerio.load(res.text)
      const actual = $('.students').length
      expect(actual).toBe(1)
      done()
    })
})

test('/someone route works', (done) => {
  request(server)
    .get('/someone')
    .expect(200)
    .expect('content-type', 'text/html; charset=utf-8')
    .end((err, res) => {
      expect(err).toBeNull()

      const $ = cheerio.load(res.text)
      const actual = $('h1').text()

      console.log(actual)

      expect(actual).toMatch('Turing')
      done()
    })
})

// SEND a request to the route
// WAIT for a response
// WHEN the response comes,
//    COMPARE it what with we expected it to be

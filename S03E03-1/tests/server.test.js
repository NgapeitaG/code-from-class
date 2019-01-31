const request = require('supertest')
const cheerio = require('cheerio')

jest.mock('../db', () => ({
  getArtistAlbums: () => Promise.resolve([
    {artistName: 'artist 1', albumName: 'album 1'},
    {artistName: 'artist 2', albumName: 'album 2'}
  ])
}))

const server = require('../server')

test('GET /', () => {
  return request(server)
    .get('/')
    .expect(200)
    .then((res) => {
      const $ = cheerio.load(res.text)
      const firstLiText = $('li').first().text()
      expect(firstLiText).toBe('artist 1 (album 1)')
    })
    .catch(err => expect(err).toBeNull())
})

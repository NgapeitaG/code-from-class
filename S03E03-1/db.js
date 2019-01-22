const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getArtistAlbums: getArtistAlbums
}

function getArtistAlbums (db = connection) {
  return db('artists')
    .join('albums', 'artists.id', 'albums.artist_id')
    .select(['artists.name as artistName', 'albums.name as albumName'])
}

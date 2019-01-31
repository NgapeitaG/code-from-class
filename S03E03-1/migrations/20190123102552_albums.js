exports.up = (knex, Promise) => {
  return knex.schema.createTable('albums', (table) => {
    table.increments('id').primary()
    table.integer('artist_id').references('artists.id')
    table.string('name')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('albums')
}
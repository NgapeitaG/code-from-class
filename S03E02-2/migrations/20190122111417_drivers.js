exports.up = knex =>
  knex.schema.createTable('drivers', table => {
    table.increments('id')
    table.string('name')
    table.string('age')
  })

exports.down = knex => knex.schema.dropTable('drivers')

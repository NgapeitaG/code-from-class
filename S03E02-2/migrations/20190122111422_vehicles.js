exports.up = knex =>
  knex.schema.createTable('vehicles', table => {
    table.increments('id')
    table.string('make')
    table.string('model')
    table.string('number_plate')
  })

exports.down = knex => knex.schema.dropTable('vehicles')

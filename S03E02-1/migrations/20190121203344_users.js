exports.up = knex =>
  knex.schema.createTable('users', table => {
    table.increments('id')
    table.string('username')
    table.string('email')
  })

exports.down = knex => knex.schema.dropTable('users')

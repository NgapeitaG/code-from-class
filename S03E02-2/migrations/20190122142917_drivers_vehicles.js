exports.up = knex =>
  knex.schema.createTable('drivers_vehicles', table => {
    table.increments('id')
    table.integer('driver_id')
    table.integer('vehicle_id')
  })

exports.down = knex => knex.schema.dropTable('drivers_vehicles')

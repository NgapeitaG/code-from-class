exports.up = (knex, Promise) => {
  return knex.schema.createTable('tasks', (table) => {
    table.increments('id')
    table.string('name')
    table.boolean('completed')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('tasks')
}

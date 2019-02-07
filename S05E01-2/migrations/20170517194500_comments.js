exports.up = (knex, Promise) => {
  return knex.schema.createTable('Comments', function (table) {
    table.increments().primary()
    table.integer('post_id').references('post.id')
    table.date('date_created')
    table.string('text')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('Comments')
}

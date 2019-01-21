exports.up = knex =>
  knex.schema.createTable('posts', table => {
    table.increments('id')
    table.integer('user_id') // This stores the user id from the Users table
    table.string('subject')
    table.string('message')
    table.timestamps() // Explain that this makes created_at and updated_at columns
  })

exports.down = knex => knex.schema.dropTable('posts')

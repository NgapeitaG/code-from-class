exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('artists').del()
    .then(() => {
      // Inserts seed entries
      return knex('artists').insert([
        {id: 1, name: 'Michael Jackson'},
        {id: 2, name: 'Prince'}
      ])
    })
}

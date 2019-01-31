exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('albums').del()
    .then(() => {
      // Inserts seed entries
      return knex('albums').insert([
        {id: 1, name: 'Musicology', artist_id: 2},
        {id: 2, name: 'Purple Rain', artist_id: 2},
        {id: 3, name: 'Thriller', artist_id: 1}
      ])
    })
}

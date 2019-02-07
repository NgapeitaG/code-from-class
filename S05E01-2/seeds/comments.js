exports.seed = (knex, Promise) => {
  return knex('Comments').del()
    .then(function () {
      return knex('Comments').insert([
        {
          id: 1,
          post_id: 123,
          date_created: new Date(),
          text: 'Great blog'
        },
        {
          id: 2,
          post_id: 123,
          date_created: new Date(),
          text: 'Really Great blog'
        },
        {
          id: 3,
          post_id: 125,
          date_created: new Date(),
          text: 'Extremely great blog'
        }
      ])
    })
}

exports.seed = knex =>
  knex('drivers')
    .del()
    .then(() =>
      knex('drivers').insert([
        { id: 1, name: 'Angel', age: 24 },
        { id: 2, name: 'Bonnie', age: 63 },
        { id: 3, name: 'Clark', age: 32 }
      ])
    )

exports.seed = knex =>
  knex('users')
    .del()
    .then(() =>
      knex('users').insert([
        { id: 1, username: 'luminous', email: 'jbryan@me.com' },
        { id: 2, username: 'eidetic', email: 'hackerman@icloud.com' },
        { id: 3, username: 'rainbowpixie', email: 'dvdotnet@gmail.com' }
      ])
    )

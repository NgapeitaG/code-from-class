exports.seed = knex =>
  knex('posts')
    .del()
    .then(() =>
      knex('posts').insert([
        { id: 1, subject: 'Heard about this school?', message: 'It\'s called EDA and it totally rocks!', user_id: 1, created_at: knex.fn.now() },
        { id: 2, subject: 'Cheap flights to Wellington', message: 'JetStar on sale, woohoo!', user_id: 3, created_at: knex.fn.now() },
        { id: 3, subject: 'Need help with SQLite3', message: 'Can\'t figure out this error message...', user_id: 1, created_at: knex.fn.now() }
      ]))

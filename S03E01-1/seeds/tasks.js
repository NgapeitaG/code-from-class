exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { id: 1, name: 'Databases lecture', completed: false },
        { id: 2, name: 'Pack for festival', completed: false },
        { id: 3, name: 'Be awesome!', completed: true }
      ])
    })
}

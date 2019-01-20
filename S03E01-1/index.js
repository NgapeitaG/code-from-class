const knex = require('knex')
const config = require('./knexfile').development

const db = knex(config)

db('tasks')
  .select()
  .then(tasks => {
    tasks.forEach(task => {
      const status = task.completed ? 'done' : 'incomplete'
      console.log(`${task.id}: ${task.name} is ${status}`)
    })
  })
  .then(() => db.destroy())

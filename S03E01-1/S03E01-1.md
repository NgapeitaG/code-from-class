# S03E01-1 Intro to DBs

## Intro
### Whiteboard
* Schema (metadata)
* Relational databases (RDBMS)
* SQL
* CRUD

### Guidebook walk-through
* Files vs. databases
  * Can handle concurrent requests without overwrite
  * We can talk to it 
* SQL is a language you can use to query relational databases. Don't get hung up on the syntax, because we're going to use a library called Knex that handles it for us!
* The RDBMS we'll be using is called SQLite. It's a little different from most database management systems in that it saves our whole database into a single file. Postgres and MySQL and other database systems don't save everything into a single file - they're a server. A server just like our web server, that you access on a port, over the network, and will generally have many different files and directories managing the data.
* Knex is the JavaScript framework we'll be using to talk to our database. Essentially, we call functions built into Knex, and it builds SQL queries we can run against our database. One great thing about Knex is that it's compatible with multiple different database systems, so even though we're using SQLite locally, if we deploy it to the web and use a Postgres or Oracle db server, we don't need to rewrite any of our code. This is all managed by Knex and our Knex config.

## Knex setup (knex-demo)
Often when you're testing out a new concept or tech, especially in the early stages of your learning, it's helpful to try it out in isolation to make sense of how it works before adding it to what we already know.  
We're not gonna worry about the web at all today - let's just set up a database with a simple command-line app. 
* `yarn init -y`
* `yarn add knex sqlite3`
* `yarn knex init`
* Add `useNullAsDefault: true` to `knexfile.js`
* `e`

## Migration
Let's write a simple tasks lists application. The first thing we need is a table. This is where our migration happens. Remember, a migration is a script we run that will build our database schema. We've installed Knex and SQLite3, so let's write our first migration:
* `yarn knex migrate:make <TABLE_NAME>` (tasks)

This command will build a migration script that we'll have to populate with information about the table we want to create. Take a look at the filename...

Now we have to set up our metadata in the migration script:
```js
exports.up = (knex, Promise) => {
  return knex.schema.createTable('tasks', table => {
    table.increments('id')
    table.string('name')
    table.boolean('completed')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('tasks')
}
```

Run migrations with `yarn knex migrate:latest`

Open DB Browser to see what happened. Show `tasks` table and `migrations` table. Now show what happens when `yarn knex migrate:rollback` is run.


## Build seed data
`yarn knex seed:make <TABLE_NAME>`

```js
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(() => {
      // Inserts seed entries
      return knex('tasks').insert([
        { id: 1, name: 'Databases lecture', completed: false },
        { id: 2, name: 'Pack for festival', completed: false },
        { id: 3, name: 'Be awesome!', completed: true }
      ])
    })
}
```

Run seed with `yarn knex seed:run`, then show DB view.

## Code! 
### Connect to Knex (index.js)
```js
const knex = require('knex')
const config = require('./knexfile').development  // Check if people are familiar with this notation

const db = knex(config)
```

### Get data
```js
db('tasks').select().then(console.log)
```

```js
db('tasks')
  .select('id', 'name', 'completed')
  .then(tasks => {
    tasks.forEach(task => {
      console.log(task)
    })
  })
```

Run it! Now make console.log prettier:
```js
console.log(`${task.id}: ${task.title} - ${task.isComplete ? 'Complete' : 'Incomplete'}`)
```

Run it! Notice how the execution hasn't finished yet? It's still sitting waiting in the console. That's because the database connection is still open. We're only seeing this because we're in a command-line application. Tomorrow when we add the web, you'll be keeping the connection open all the time because that's how we want it to operate. But for today, we're gonna need to close the connection:
```js
  .then(() => {
    db.destroy()
  })
```

We sometimes call this object `conn` instead of `db` to make it clear that it's a database *connection*. Let's rename it...

## Wrap-up
For this exercise, the KnexJS docs are going to be your friend (pull up the CLI section):
* `knex init`
* `knex migrate:make <TABLE_NAME>`
* `knex migrate:latest`
* `knex seed:make <TABLE_NAME>`
* `knex seed:run`

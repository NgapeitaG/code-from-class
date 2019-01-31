# Joins

## Intro (relational DBs)
In a relational database, we break up our data into tables, then express relationships between each of these sets of data.

We want each table to represent *one thing*, one *entity*, then use metadata to describe how these entities are related.

To reiterate, *data* means the actual values we're storing in the tables, *metadata* is everything else - the structure, the data types, and the relations between the data.

## Table relationships (on whiteboard)
* One-to-one (e.g. author - biography)
* One-to-many (e.g. book -> pages)
* Many-to-many (e.g. textbook <-> author)

## Build schema
Like I mentioned earlier, we want each of our tables to represent *one* thing. We don't want to end up with tables with dozens of columns because then our data would get very difficult to query and reason about. If we split it up so that each entity we want to store has its own table, we'll have a good structure to work with.

To be clear, when I say 'each entity', I don't mean something that every record type - name, username, age etc., should have its own table. Think of an entity like a real world object that we can represent with data.

Suppose we were to use an online messaging board as an example. Users can create an account, login, and make posts to the page. We could model that with a 'Users' table, and a 'Posts' table.

Let's pull up a spreadsheet to model the data...

### Users
| id | username     | email                |
|:--:|--------------|----------------------|
|  1 | luminous     | jbryan@me.com        |
|  2 | eidetic      | hackerman@icloud.com |
|  3 | rainbowpixie | dvdotnet@gmail.com   |

### Posts
| id | subject                     | message                                | user_id |
|:--:|-----------------------------|----------------------------------------|:-------:|
|  1 | Heard about this school?    | It's called EDA and it totally rocks!  |    1    |
|  2 | Cheap flights to Wellington | JetStar on sale, woohoo!               |    3    |
|  3 | Need help with SQLite3      | Can't figure out this error message... |    1    |

## Model the schema on the whiteboard
* Explain that id is unique
* Draw relationship between users.id and user_id
* At the moment, this relationship isn't explicitly defined in our schema, but we'll cover defining this relationship tomorrow
* Encourage them to start on paper when coming up with a data structure as it will prevent issues in the long run

## Migrations

### 1. `yarn knex migrate:make users`
```js
exports.up = knex =>
  knex.schema.createTable('users', table => {
    table.increments('id')
    table.string('username')
    table.string('email')
  })

exports.down = knex => knex.schema.dropTable('users')
```

### 2. `yarn knex migrate:make posts`
```js
exports.up = knex =>
  knex.schema.createTable('posts', table => {
    table.increments('id')
    table.integer('user_id')  // This stores the user id from the Users table
    table.string('subject')
    table.string('message')
    table.timestamps()  // Explain that this makes created_at and updated_at columns
  })

exports.down = knex => knex.schema.dropTable('posts')
```

### 3. `yarn knex migrate:latest`

## Seeds

### 1. `yarn knex seed:make users`
```js
exports.seed = knex =>
  knex('users')
    .del()
    .then(() =>
      knex('users').insert([
        { id: 1, username: 'luminous', email: 'jbryan@me.com' },
        { id: 2, username: 'eidetic', email: 'hackerman@icloud.com' },
        { id: 3, username: 'rainbowpixie', email: 'dvdotnet@gmail.com' }
      ]))
```

### 2. `yarn knex seed:make posts`
```js
exports.seed = knex =>
  knex('posts')
    .del()
    .then(() =>
      knex('posts').insert([
        { id: 1, subject: 'Heard about this school?', message: 'It\'s called EDA and it totally rocks!', user_id: 1, created_at: knex.fn.now() },
        { id: 2, subject: 'Cheap flights to Wellington', message: 'JetStar on sale, woohoo!', user_id: 3, created_at: knex.fn.now() },
        { id: 3, subject: 'Need help with SQLite3', message: 'Can\'t figure out this error message...', user_id: 1, created_at: knex.fn.now() }
      ]))
```

### 3. `yarn knex seed:run`

## Code!
Start with creating DB connection:
```js
const knex = require('knex')
const config = require('./knexfile').development

const db = knex(config)
```

Pull out some data:
```js
db('users')
  .select()
  .then(users => console.log(users))
```

Add nodemon!  
`yarn add nodemon`

Now make a join (look at syntax in docs):
```js
db('users')
  .join('posts', 'users.id', 'posts.user_id')
  .select('username', 'subject')
  .then(users =>
    users.forEach(user =>
      console.log(`${user.username}:\t${user.subject}`)))
```

Add `id` to select statement so code fails. Now add error handling:
```js
.catch(err => console.error(err.message))
```

## Chuck it in a web app!
Add express and express-handlebars  
`yarn add express express-handlebars`

Pull in code from `_S03E02-1` and explain nice clean structure

### Move DB calls into `db.js`
db.js should contain:
* knex config
* database functions:
  * `getUsers()`
  * `getUserPosts()`

Call DB functions in `routes.js`:
```js
router.get('/', (req, res) => {
  db.getUsers()
    .then(users =>
      users.forEach(user =>
        console.log(`${user.username}:\t${user.subject}`)))
    .catch(displayError)
})
```

Get students to tell you where in the chain we want to send our response.

Replace `console.log` with `res.render('users', { users })`

### Add `/posts` route for `db.getUserPosts()`
```js
db.getUserPosts() // etc.
```

### Clean up code with the beauty of promises
```js
router.get('/', (req, res) => {
  db.getUsers()
    .then(displayUsers)
    .catch(displayError)

  function displayUsers (users) {
    res.render('users', { users })
  }

  function displayError (err) {
    res.status(500).send(err.message)
  }
})
```

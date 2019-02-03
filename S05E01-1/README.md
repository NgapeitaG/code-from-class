# S05E01-1 Intro to APIs

## Cool schtuff
`yarn run` shows you the script options in `package.json`

`"<property_name>" in obj` returns `true` or `false` depending on whether the key exists in the object (demo it in the repl!)

## Intro
Have teaching-guide open on projector.

### What is an API?
Application Programming Interface. The best way I've seen an API described is actually in your student handbook which states:
> Web APIs are interfaces for other applications, instead of users.

We can think of it like a standardised pattern for how things can talk to our server. This could be our own client-side code, or - if it's in production and we expose our API publicly - any other application or website can consume it.

Those might be new terms - expose, and consume. Expose just means *make visible* or *make available* to other code. And to Consume an API just means to *use* it, although we tend to talk about code we write as consuming an API more than a user consuming it.

There are thousands, possibly even millions of APIs available online that we can consume in our code, but I'll leave that for Chris to talk about on Wednesday. For now, we'll just be creating a simple local API to work with a database.

### What is REST
REpresentational State Transfer

This is a design paradigm cooked up by a student called Roy Fielding back in 2000 that really caught on. He described a structure that has become the most widely used today, and generally the APIs we create are considered *RESTful APIs* because of this.

The core idea is that we have *Collections* of things, e.g. `/users`, and the API might expose several routes that we use to perform operations on these collections.

We also have *Resources* which represent an individual item in a collection. Each of this may have its own HTTP methods.

This design gives us a way of organising the data we have in our API with a consistent method for accessing and modifying the data.

## Code walk-through
### `server.js`
Explain `server.use(express.json())` - this tells the Express server how to process the body of incoming POST requests. When there's a POST request, it's gonna be JSON, so use JSON to parse that input.

Remember express.urlencoded? That was so we could send form data in the body. We could set the form method to be POST, then it'd add our form data to the body and we could read that POST on the server-side.

Now we want to send JSON data to the server so we can save it in the database. SO this line is telling Express that we're going to be sending JSON data so you need to expect it.

### `users.js`
Explain `res.send()` vs `res.json()` - stringify will happen automatically in `res.json()`, and it's more expressive.

### Hit `localhost:3000/users` in Chrome and Firefox
Show that JSON received is just raw text - but Firefox prettifies it

## Postman
Step through the application and how it works. Run some GET requests - `/users` and `/users/:id`.

## C(reate)
### Make a new POST route
```js
router.post('/', (req, res) => {
  const newUser = req.body
  db.createUser(newUser)
    .then(user => {
      res.status(200).end()
      // Explain why we use .end()
      // It needs end(), send(), render(), json() etc. to actually send the response
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
```

### We'll need a db function for that...
```js
function createUser (newUser) {
  return db('users')
    .insert(newUser)
}
```

### Test it in Postman
```json
{
  "name": "Test user",
  "email": "user@mail.com"
}
```

## U(pdate)
### Start with db function this time
```js
function updateUser (id, updatedUser) {
  return db('users')
    .where('id', id)
    .update(updatedUser)
}
```

### Follow with our route
```js
router.put('/:id', (req, res) => {
  const id = Number(req.params.id)
  const updatedUser = req.body

  db.updateUser(id, updatedUser)
    .then(res.redirect('/users'))
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
```

## D(elete)
```js
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)

  db.deleteUser(id)
    .then(res.redirect('/users'))
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
```

```js
function deleteUser (id) {
  return db('users')
    .where('id', id)
    .delete()
}
```

## Wrap-up
* An API is a structure we use to build how clients will talk to our application, where they can *CRUD* the data
* We're sending and receiving JSON data from our APIs - this is the most common
* We can use Postman to talk to our API - particularly useful during development

## Talk through exercise
Make sure you use the `semantic-ui` branch - not master!

In this instance, all the front-end has been built for you. It's your job to build out the db functions and routes.

If you do a bit of digging in the client folder you'll get a preview of what we'll be learning tomorrow - how to consume APIs from the front-end.

Again, make sure you use the `semantic-ui` branch - not master!

# Many-to-many joins

## Intro
Why we need many-to-many joins.

## Get physical! (whiteboard)
Have data pre-prepared.

Use lots of arrows.

Clean it all up with a join table!

## Make join table
`yarn knex migrate:make drivers_vehicles`
```js
exports.up = knex =>
  knex.schema.createTable('drivers_vehicles', table => {
    table.increments('id')
    table.integer('driver_id')
    table.integer('vehicle_id')
  })

exports.down = knex => knex.schema.dropTable('drivers_vehicles')
```

Run migration: `yarn knex migrate:latest`

## Seed join table
`yarn knex seed:make drivers_vehicles`
```js
exports.seed = knex =>
  knex('drivers_vehicles')
    .del()
    .then(() =>
      knex('drivers_vehicles').insert([
        { id: 1, driver_id: 1, vehicle_id: 1 },
        { id: 2, driver_id: 1, vehicle_id: 2 },
        { id: 3, driver_id: 2, vehicle_id: 3 },
        { id: 4, driver_id: 3, vehicle_id: 2 },
        { id: 5, driver_id: 2, vehicle_id: 4 }
      ]))
```

## Data check (are we seeing it in the front-end?)
Check everything display properly.

Add Back link: 
```html
<a href="javascript:history.back()">Go back</a>
```

## Modify drivers view to link to `/driver/:id`
```html
<li>
  <a href="/driver/{{id}}">{{name}}, {{age}}</a>
</li>
```

This will likely require modification of our `db.getDrivers()` function (add `id` to select statement).

## Create driver view (`driver.hbs`)
```html
<!-- name -->
<!-- age -->
<!-- list of vehicles -->

<a href="javascript:history.back()">Go back</a>
```

## Make join function
```js
function getDriver (id) {
  return db('drivers_vehicles')
    .join('drivers', 'drivers.id', 'driver_id')
    .join('vehicles', 'vehicle_id', 'vehicles.id')
    .where('drivers.id', id)
}
```

## Add GET route for `/driver/:id`
### Same setup as before
```js
router.get('/driver/:id', (req, res) => {
  db.getDriver()
    .then(displayDriver)
    .catch(displayError)

  function displayDriver (driver) {
    res.render('driver', driver)
  }

  function displayError (err) {
    res.status(500).send(err.message)
  }
})
```

### We'll need to pass the id as an argument go `getDriver()`
```js
const driverId = Number(req.params.id)
db.getDriver(driverId)
```

## Update driver view
```html
<h1>{{name}}, {{age}}</h1>
<ul>
  {{#each vehicles}}
  <li>{{this}}</li>
  {{/each}}
</ul>
```

## Modify data structure to suit
```js
.then(formatData) // Add before displayDriver function

function formatData (driver) {
  return {
    name: driver[0].name,
    age: driver[0].age,
    vehicles: driver.map(vehicle => vehicle.number_plate)
  }
}
```

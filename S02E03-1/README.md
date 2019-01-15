# S02E03-1 express-router-demo

## Intro
* Step through basic Handlebars site
  * Explain `()` after the require on line 2
* Provide context for routing
  * Routing becomes a lot more useful when our apps increase in size. At the moment, we just have a few GET routes defined in `server.js`, but in a larger app we may have hundreds of routes defined to hit various paths within our website.
  * Routing is about scability. We want a clear and concise way to define our routes, and putting each subset into its own module can make the code a lot cleaner, easier to read, and less verbose.
* Ideally, we want `server.js` to hold just the configuration of our web server

## Set up express-router (in `routes.js`)
```js
const express = require('express')
const router = express.Router()

module.exports = router

// Routes
// ...
```
*Note*: The capital in `Router()` is not a typo. This isn't something you've seen yet and we'll get to later. For now, simply think of a capital in a function as creating something.

Let's use that in `server.js`:
```js
const router = require('./routes')
server.use('/', router)
```
Now check it works!

## Create a new router for `/portfolio`
* Pull out /portfolio routes into `portfolio.js`
* Use new router in `server.js`:
```js
const portfolioRouter = require('./portfolio')
server.use('/portfolio', portfolioRouter)
```

## Shift routes into `/routes/`
Now we can perform a bit of code cleanup and keep all our routes in the same place:
```js
// Require routes
const homeRoutes = require('./routes/home')
const portfolioRoutes = require('./routes/portfolio')

// Use routes
server.use('/', homeRoutes)
server.use('/portfolio', portfolioRoutes)
```
Anything that uses /portfolio uses `portfolioRoutes`, and anything at / uses `homeRoutes`.

In fact, let's add some comments so it's even easier to read. It's not mandatory, but a lot of developers use the following convention:
```js
// GET /blog
router.get('/blog', ...)  // etc.
```

## Ordering
What happens if we write a route for /portfolio in our `homeRoutes` file?

Let's find out...
```js
router.get('/portfolio', (req, res) => {
  console.log('/portfolio route hit in home.js')
  res.send('Cool things are happening. We\'re learning.')
})
```
*Note*: Explain escape character.

This becomes particularly important if we are using params:
```js
router.get('/:name', (req, res) => {
  res.send(`Hello ${req.params.name}!`)
})

router.get('/blog', (req, res) => {
  res.sendFile(path.join(__dirname, 'blog.html'))
})
```
What do you think would happen if we entered the name 'blog'? Our server's gonna run through the routes and hit the first GET route that matches our path, which in this case, is `/:name`.

Express routes are order-dependent or order-significant, we want to make sure our more specific routes are at the top, and our more generic wild-card routes (like those with parameters or query-strings) come after it.

## Colour play
Let's extend our home view to output a list of colours. There are several steps involved here:
* Create colour data to input
* Modify our GET route to use it
* Update our view to render it  
But I'm going to make it even more difficult and add:
* Read the colour data in from a file (fun with callbacks)  

### 1. Create colour data (`colors.json`)
```json
[
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet"
]
```

### 2. Read the colour data in from a file (`home.js`)
```js
const filePath = path.join(__dirname, 'colors.json')

fs.readFile(filePath, (err, contents) => {
  if (err) return res.status(500).send('Uh-oh!\n' + err)
  const colors = JSON.parse(contents)
  // ...
})
```

### 3. Modify our GET route to use it
```js
const data = {
  title: 'Harakeke',
  colors
}
res.render('home', data)
```

### 4. Update our view to render it
```html
<ul>
  {{#each colors}}
  <li>{{this}}</li>
  {{/each}}
</ul>
```
^Now make it cooler and render each colour in its colour!:
```html
<li><span style="color: {{this}}">{{this}}</span></li>
```

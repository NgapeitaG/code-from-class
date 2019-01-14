# Server-side rendering with Handlebars

## Steps

* `yarn init -y`
* `yarn add express express-handlebars nodemon`
* `touch README.md index.js server.js`
* Completed `index.js`
* Configure `server.js` with Handlebars

    ```js
    server.engine('hbs', hbs({
      extname: 'hbs'
    }))
    server.set('view engine', 'hbs')
    ```

* Create the `views` folder
* Create a `/` route

    ```js
    server.get('/', (req, res) => {
      res.render('home')
    })
    ```

* Write a `start` script in `package.json`
* Render a template

    ```js
    const data = {
      user: {
        name: 'Don',
        loves: 'beach'
      }
    }
    res.render('home', data)
    ```

    - the properties of the object are directly available to the template
    - always use a JS object as the data

* Add a conditional with `{{#if}}`
* Add a loop with `{{#each}}`
* Add a partial with `{{> partialName}}` in the `views/partials` folder
* Add a layout in the `views/layouts` folder
  - use `{{{body}}}` to define the location of the route template

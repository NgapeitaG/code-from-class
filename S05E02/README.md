# S05E02 Consuming APIs with React

## Intro
### Consuming APIs with React
* We make API calls from stateful components
* We initiate the API call from the component's `componentDidMount` lifecycle method
* We store part or all of the response that we get from the API in the component's internal memory bank, a.k.a. `state`, which is just an object

### React component lifecycle
These are methods that are special to React components, and they are always called at particular times during the component's lifetime.

http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

Talk through diagram... React defines this idea of 'Mounting' and 'Unmounting', which you can think of like Creating and Destroying.

1. `constructor` - set initial state of the component  
1. `render` - returns HTML to add to the DOM)
1. `componentDidMount` - fires after component mounts to the DOM (good place to load in external data, i.e. from our APIs)

There are many more lifecycle methods staged at various places during the rendering, updating, mounting, and unmounting of components, but these are the main ones that we'll be using today.

I encourage you to have a look through the React documentation to get a feel for when to use these, you'll start using them a lot in the next couple of weeks.

## Demo
### constructor & render in `Home.jsx`
```js
import React from 'react'

export default class Home extends React.Component {
  constructor (props) {
    console.log('Home\tconstructor')
    super(props)
    this.state = { }
  }

  render () {
    console.log('Home\trender')
    return (
      <h1>Hello world!</h1>
    )
  }
}
```

### componentDidMount & componentDidUpdate
```js
componentDidMount () {
  console.log('Home\tcomponentDidMount')
  this.setState({ text: 'blah' })
}

componentDidUpdate () {
  console.log('Home\tcomponentDidUpdate')
}
```

### Add child component `NavBar.jsx`
Same as above but `NavBar`.

## CORS
Play Rich's video

## Build React app
### Turn into class-based component
```js
import React from 'react'

export default class App extends React.Component {
  state = {     // This may be a new concept
    message: ''
  }
  // If you're not using props, you don't need a constructor method
  // This is called 'alternative class syntax'

  render () {
    return (
      <React.Fragment>
        <h1>The server said:</h1>
        <h2>{this.state.message}</h2>
      </React.Fragment>
    )
  }
}
```

### Add componentDidMount
What's the lifecycle method we said was the best place for adding external data?
```js
componentDidMount () {
  
}
```
Before we can add anything here, we're going to need to build some routes.

### `server.js`
```js
server.post('/', (req, res) => {
  res.json({
    message: 'POST REQUEST SUCCESSFUL'
  })
})

server.put('/', (req, res) => {
  res.json({
    message: 'PUT REQUEST SUCCESSFUL'
  })
})
```

## SuperAgent!
Remember `supertest`? That's the package we used to test routes back in week 2. Well, that's actually built from another package known as `superagent` (pull up npm docs)

SuperAgent lets us send HTTP requests from the client-side, which effectively bridges the gap between the front-end and back-end.

It's all starting to come together! It may not sound like much at the moment but this is a BIG deal. We're finally connecting the pieces of the puzzle!

### Add superagent to componentDidMount
```js
import request from 'superagent'

componentDidMount () {
  request
    .post('http://localhost:3000')
    .send({
      greeting: 'Hi, this is a POST request!'
    })
    .then(res => {
      this.setState({ message: res.body.message })
    })
    .catch(err => {
      this.setState({ message: err.message })
    })
}
```

## Split server and client
Show `server` and `client` scripts in `package.json`.

webpack-dev-server is a cool little tool that allows you to run a React application without setting up a server if you just want to run them by themselves. It's really handy during development.

Run them side-by-side, then hit `localhost:8080`.

Show CORS error!

## Fix CORS situation
Conveniently, there is a library that will take care of this for us.

`yarn add cors`
```js
const cors = require('cors')

server.use(cors())
```

Now this is wide-open. It doesn't care where the requests are coming from.

Obviously we don't want this in production, but there are ways of configuring CORS to limit requests to your domain name, that is, restricting access to your API.

Show Network tab to see `OPTIONS` request.

const greetings = require('./greetings.js')

const hello = greetings.sayHello

function runThisFunction (fn) {
  console.log(typeof fn)
  fn()
}

runThisFunction(hello)

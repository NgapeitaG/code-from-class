const greetings = require('./greetings.js')
//Creates a variable which grabs the greetings.js file with the hello and goodbye functions

const hello = greetings.sayHello
//This const will print 'Hello" in the console from the greetins const which requires the greetings file with the functions

function runThisFunction (fn) {
  console.log(typeof fn)
  fn()
}
// runThisFunction is a function
// console log fn will return the type of function. This will display function in the console.


runThisFunction(hello)
// The runThisFunction will call the hello const as it's parametre and will display 'Hello" in the console.  
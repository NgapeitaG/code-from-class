function sayHello () {
  console.log('Hello!')
}
// Same function in previous episode
// Outputs "Hello" in console
function sayGoodbye () {
  console.log('Goodbye!')
}
// Same function in previous episode
// Outputs "Goodbye" in console
const num = 42

module.exports = {
  sayHello: sayHello,
  sayGoodbye: sayGoodbye,
  num: num
}
// Exports the functions

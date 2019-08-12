function sayHello () {
  console.log('Hello!')
}
// outputs 'Hello' in console when function is called
function sayGoodbye () {
  console.log('Goodbye!')
}
// outputs 'Goodbye' in console when function is called
module.exports = {
  sayHello,
  sayGoodbye
}
// Exports functions
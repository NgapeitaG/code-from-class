const cowsay = require('cowsay')
const colors = require('colors')
// creates a const which requires the cowsay and colors dependancies

console.log(colors.rainbow(cowsay.say({
  text: "I'm a moooodule",
  e: 'oO',
  T: 'U '
})))
// console logs colors with a rainbow property, a parametre of cowsay with the object that contains text.

//yarn install
// yarn run or yarn start
// node index.js
// text will be displayed in console in various colours
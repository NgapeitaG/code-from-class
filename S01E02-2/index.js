const cowsay = require('cowsay')
const colors = require('colors')

console.log(colors.rainbow(cowsay.say({
  text: "I'm a moooodule",
  e: 'oO',
  T: 'U '
})))

//yarn install
// yarn run or yarn start
// node index.js
// text will be displayed in console in various colours
const cowsay = require("cowsay")
const colors = require("colors")

const output = cowsay.say({

	text : colors.rainbow("I am a cat"),
	e : colors.inverse("88"),
	T : colors.magenta("UU")
})

console.log(output)
// Runs I am a cat and displays a cow using numbers and letters


// const colouredOutput = colors.rainbow(output)
// console.log(colouredOutput)

// Install yarn
// type yarn install in terminal, then yarn run or yarn start
// type node index.js to see console.log
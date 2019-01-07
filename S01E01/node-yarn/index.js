const cowsay = require("cowsay")
const colors = require("colors")

const output = cowsay.say({
	text : colors.rainbow("I am a cat"),
	e : colors.inverse("88"),
	T : colors.magenta("UU")
})

console.log(output)

// const colouredOutput = colors.rainbow(output)

// console.log(colouredOutput)

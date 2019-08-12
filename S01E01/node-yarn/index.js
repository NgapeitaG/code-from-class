const cowsay = require("cowsay")
const colors = require("colors")

const output = cowsay.say({
	text : colors.rainbow("I am a cat"),
	e : colors.inverse("88"),
	T : colors.magenta("UU")
})

console.log(output)

// The console is on google chrome
// Add/install the wrap console log extension on VS Code

// const colouredOutput = colors.rainbow(output)

// console.log(colouredOutput)

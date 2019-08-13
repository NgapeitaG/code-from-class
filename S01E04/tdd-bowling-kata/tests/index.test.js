const game = require('../game')
// requires the game.js file
//references the code we intend to test
// ../ before game means we're going back into another directory

test('test setup working', function () {
  expect(true).toBeTruthy()
})
// This runs test on the command line with yarn test
// All of the tests below test he various outcomes of the code in game.js based on the function
test('scores a gutterball frame', function () {
  const frame = [0, 0]
  const expected = 0
  const actual = game.scoreFrame(frame)
  expect(actual).toBe(expected)
})
// Gutterball is obviously a score of 0 in bowling

test('scores a normal frame', function () {
  const frame = [2, 3]
  const expected = 5
  const actual = game.scoreFrame(frame)
  expect(actual).toBe(expected)
})


test('scores a spare frame', function () {
  const frame = [6, 4]
  const nextFrame = [3, 1]
  const expected = 13
  const actual = game.scoreFrame(frame, nextFrame)
  expect(actual).toBe(expected)
})
// If they knock down all pins, then the player gets to play another round
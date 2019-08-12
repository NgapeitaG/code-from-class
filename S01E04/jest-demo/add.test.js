const add = require('./add')

test('Jest is working correctly', () => {
  expect(true).toBe(true)
})

test('add can add 1 + 2', () => {
  // Arrange
  const num1 = 1
  const num2 = 2
  const expected = 3

  // Act
  const actual = add(num1, num2)

  // Assert
  expect(actual).toBe(expected)
})

test('add can add 3 + 4', () => {
  // Arrange
  const num1 = 3
  const num2 = 4
  const expected = 7

  // Act
  const actual = add(num1, num2)

  // Assert
  expect(actual).toBe(expected)
})

// yarn install
// yarn run
// choose jest
// this will run your test.js file and check if your test is correct
// Jest is a simple framework to use to make testing easier
// Here's a basic Jest test: test("test some basic js", () => { expect(2+2 === 4).toBeTruthy()...
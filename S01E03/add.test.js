const add = require('./add')
// requires the add.js file we're testing

test('Test suite is running', () => {
  expect(true).toBe(true)
})
// Declaring test

test('Test add function works for numbers', () => {
  // Arrange
  const num1 = 5
  const num2 = 4
  // listing parametres or values

  const expected = 9
  // Our expected outcome 

  // Act
  const actual = add(num1, num2)
  // What is going on 

  // Assert
  expect(actual).toBe(expected)
})
// Asserting that we expect what we have to be the same as expected

// Yarn install
// yarn test
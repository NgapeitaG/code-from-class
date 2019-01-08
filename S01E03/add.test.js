const add = require('./add')

test('Test suite is running', () => {
  expect(true).toBe(true)
})

test('Test add function works for numbers', () => {
  // Arrange
  const num1 = 5
  const num2 = 4

  const expected = 9

  // Act
  const actual = add(num1, num2)

  // Assert
  expect(actual).toBe(expected)
})

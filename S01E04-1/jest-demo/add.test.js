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

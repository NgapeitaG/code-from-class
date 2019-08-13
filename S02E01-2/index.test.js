const path = require('path')

const getData = require('./index').getData

test('Can read file contents', () => {
  // arrange
  const filename = path.join(__dirname, 'data.txt')
  // directs to file location and name of file
  const contents = 'This is data'

  // act
  getData(filename, data => {
    // assert
    expect(data).toMatch(contents)
  })
})

// Normal synchronous function
// function getData () {
//   return {
//     foo: 'data'
//   }
// }

// Synchronous function that accepts a callback
function getData (callback) {
  const data = {
    foo: 'data'
  }
  callback(null, data)
}
// This is displayed in the console
// A callback is a function that is to be executed after another function has finished executing
// The callback is passed two arguments (err, data), where data is the contents of the file.
function showData (err, data) {
  if (err) {
    console.error(err)
  } else {
    console.log(data)
  }
}

// Normal sync function call
// const data = getData()
// console.log(data)

// Call sync function with a callback
getData(showData)

console.log('All done!')
// This displays in the console 
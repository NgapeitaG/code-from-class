const types = {
  str: 'hello',
  bool: true,
  obj: {key: 'val'},
  arr: [],
  num: 42,
  und: undefined,
  nul: null,
  nan: NaN,
  fn: function () { console.log('I am a function!') }
}

console.log('This is a ?: string', typeof types.str) // Goes to the types const, looks at its str property and prints string in the console as the of this data
console.log('This is a ?: boolean', typeof types.bool) //Prints as boolean typeof in console. Boolean is either true or false.
console.log('This is a ?: object', typeof types.obj) // Objects have {} around them
console.log('This is a ?: object', typeof types.arr) // Arrays have data listed in []
console.log('This is a ?: number', typeof types.num) // Numbers are any numerical data
console.log('This is a ?: undefined', typeof types.und) // Undefined means the type cannot be identified
console.log('This is a ?: null', typeof types.nul) // Null means there is no identification for the type
console.log('This is a ?: NaN', typeof types.nan) //Not a number. This indicates that a value is not a legal number
console.log('This is a ?: function', typeof types.fn) // Function type

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

console.log('This is a ?: string', typeof types.str)
console.log('This is a ?: boolean', typeof types.bool)
console.log('This is a ?: object', typeof types.obj)
console.log('This is a ?: object', typeof types.arr)
console.log('This is a ?: number', typeof types.num)
console.log('This is a ?: undefined', typeof types.und)
console.log('This is a ?: null', typeof types.nul)
console.log('This is a ?: NaN', typeof types.nan)
console.log('This is a ?: function', typeof types.fn)

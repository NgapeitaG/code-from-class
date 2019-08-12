const people = [
  {name: 'Wally', location: 'Moscow'},
  {name: 'Jess', location: 'Auckland'},
  {name: 'Bruce Wayne', location: 'Gotham'}
]

const wally = people.find(function (person) {
  return person.name === 'Wally'

// wally has a find function within it which will go in the people const to find a person
// it will return a name if 'Wally'is equal to a name in the people const

// This is equivalent to:
  if (person.name === 'Wally') {
    return true
  } else {
    return false
  }

  // boolean expression ? do this if true : do this if false
  wally ? console.log('Wally lives in:', wally.location) : console.log('Wally not found 😔')

  // Only evaluate the right side of the expression if the left side is true
  wally && console.log('Wally lives in:', wally.location)
})

// This is the same as above but using ES6 syntax (arrow functions)
const wallyAgain = people.find(person => person.name === 'Wally')

const produce = [
  'eggplant',
  'banana',
  'breadfruit',
  'zucchini',
  'carrot',
  'lychee',
  'apple',
  'taro'
]

const shortProduce = produce.filter(yum => yum.length <= 6)
// console logs the values with 6 or less letters

// console.log(produce)
// console.log(shortProduce)

const harakeke = [
  'Jason',
  'Francine',
  'Grant',
  'Aubrey',
  'Jenny',
  'Rebecca',
  'Micah',
  'Lane',
  'Evandah',
  'Fetuolemoana',
  'Jess',
  'Ari',
  'Ngapeita',
  'David',
  'Ben',
  'Riki'
]
// harakeke is a const which contains an array of names
const capitalisedNames = harakeke.map(student => student.toUpperCase())

// console.log(capitalisedNames)
// console.log(harakeke)

const fn = (text) => console.log(text)

fn('Hello!')

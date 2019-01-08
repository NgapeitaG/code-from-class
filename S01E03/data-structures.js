const bryce = {
  id: 123,
  firstName: 'Bryce',
  surname: 'Kehoe',
  dateOfBirth: '19-03-XXXX', // you'll never know...
  active: false,
  papers: {
    CompSci320: {
      test1: 'A+',
      test2: 'A++',
      exam: 'A+++'
    },
    CompSci373: {
      test1: 'C',
      test2: 'B',
      exam: 'A+'
    }
  }
}

// console.log(bryce.papers.CompSci373.exam)

console.log(Object.keys(bryce))
console.log(Object.values(bryce))

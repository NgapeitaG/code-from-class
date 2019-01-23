class Dog {
  constructor (working) {
    this.isWorkingDog = working
  }

  detectContraband () {
    if (this.isWorkingDog) {
      console.log('Ok, sniffing for fruit at the border.')
    } else {
      console.log('Sorry, I am just a pet! Feed me!')
    }
  }
}

class Terrier extends Dog {
  constructor () {
    super(false)
  }
}

// const sheppard = new Dog(true)
// console.log(sheppard.isWorkingDog)
// sheppard.detectContraband()

const jumpy = new Terrier()
jumpy.detectContraband()

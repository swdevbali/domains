// @flow
class Dog {
  name: string

  constructor(name: string) {
    this.name = name
  }

  bark() {
    return `Guk guk! dari ${this.name}`
  }
}

module.exports = Dog

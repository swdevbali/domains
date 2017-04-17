class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return `Guk guk! dari ${this.name}`;
  }
}

module.exports = Dog;

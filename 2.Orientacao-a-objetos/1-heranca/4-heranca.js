function Animal() {
  this.quantasPatas = 4
}

const gato = new Animal()

console.log(gato.__proto__ === Animal.prototype) // true
console.log(Animal.__proto__ === Function.prototype) // true
console.log(gato instanceof Animal) // true
console.log(gato instanceof Function) // false

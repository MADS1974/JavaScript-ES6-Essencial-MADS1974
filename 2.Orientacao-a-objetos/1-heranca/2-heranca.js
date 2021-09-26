function Animal() { }

console.log(Animal.constructor); // f Function() {[native code]}
// f Animal.constructor -> f Function -> Function.prototype.constructor -> f Object() {} -> Object.prototype = null;

function Animal() {
    this.quantasPatas = 4;
}

const Gatos = new Animal();

console.log(Gatos.quantasPatas); // 4
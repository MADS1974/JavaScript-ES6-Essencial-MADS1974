// Privado / Público

function Person(initialName) {
    let name = initialName;

    this.getName = function () {
        return name;
    }

    this.setName = function (newName) {
        name = newName;
    }
}

const p = new Person('Márcio');

console.log(p);
// Person {getName: [Function (anonymous)], setName: [Function (anonymous)]}

console.log(p.getName());
// "Márcio"

console.log(p.name);
// undefined

p.setName('Luiza');
console.log(p.getName());
// "Luiza"
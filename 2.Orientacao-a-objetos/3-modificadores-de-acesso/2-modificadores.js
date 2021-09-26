class Person {
    #name = '';

    constructor(initialName) {
        this.#name = initialName;
    }

    getName() {
        return this.#name;
    }

    setName(name) {
        this.#name = name;
    }
}

const p = new Person('Márcio');

console.log(p);
// Person {}

console.log(p.getName());
// "Márcio"

console.log(p.name);
// undefined

p.setName('Adriano');
console.log(p.getName());
// "Adriano"
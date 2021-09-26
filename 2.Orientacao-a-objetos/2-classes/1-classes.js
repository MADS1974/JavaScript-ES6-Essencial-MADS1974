/*
function Animal(quantasPatas) {
    this.quantasPatas = quantasPatas;
}

function gato(arranha) {
    Animal.call(this, 4);

    this.arranha = arranha;
}

const cat = new gato(false);
console.log(cat); // gato { quantasPatas: 4, arranha: false }
*/

class Animal {
    constructor(quantasPatas) {
        this.quantasPatas = 4;
    }
}

class gato extends Animal {
    constructor(arranha) {
        super(4);
        this.arranha = arranha;
    }
}

const cat = new gato(false);
console.log(cat); // gato { quantasPatas: 4, arranha: false }
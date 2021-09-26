

class Animal {
    constructor() {
        this.quantasPatas = 0;
    }

    saltar() { }
}

class gato extends Animal {
    constructor(arranha) {
        super();
        this.quantasPatas = 4;
        this.arranha = arranha;
    }

    miar() {
        console.log('miau! miau!');
    }
}

const cat = new gato(false);
const Mutano = new gato(true);
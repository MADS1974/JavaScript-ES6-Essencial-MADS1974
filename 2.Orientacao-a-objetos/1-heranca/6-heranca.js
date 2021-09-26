function Animal(quantasPatas) {
    this.quantasPatas = quantasPatas;
    this.movimentar = function () { }
}

function gato(arranha) {
    Animal.call(this, 4);

    this.arranha = arranha;
    this.mia = function () {
        console.log('Miau! Miau!');
    }
}

const cat = new gato(false);
const Mutano = new gato(true);

// refatorando
function Animal() { }

Animal.prototype.quantasPatas = 0;
Animal.prototype.saltar = function () { }

function gato(arranha) {
    this.quantasPatas = 4;
    this.arranha = arranha;
}

gato.prototype = Object.create(Animal);
gato.prototype.miar = function () {
    console.log('Miau! Miau!');
}

const cat = new gato(false);
const Mutano = new gato(true);

// Alerta! Muita cautela com o uso do prototype e nunca utilizar prototype em funções pré-existentes. Usar classe é a melhor opção
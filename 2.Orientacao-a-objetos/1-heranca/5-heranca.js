function Animal(quantasPatas) {
    this.quantasPatas = quantasPatas;
}

function gato(mia) {
    Animal.call(this, 4);

    this.mia = mia;
}

const pug = new gato(false);
console.log(pug); // gato { quantasPatas: 4, mia: false }
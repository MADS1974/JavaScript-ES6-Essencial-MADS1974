// new Foo(...);
/*
O que ocorre?
1 - Um novo objeto é criado, herdando Foo.prototype
2 - A função construtora Foo é chamada com os argumentos especificados e com o 'this' vinculado ao novo objeto criado
3 - Caso a função construtora tenha um retorno explícito, será respeitado o seu 'return'. Senão, será retornado o objeto criado no passo 1
*/

function Pessoa(name) {
    this.name = name;
}

const p = new Pessoa('Márcio'); // Pessoa { name: 'Adriano' }

console.log(p);

function Pessoa2(name) {
    this.name = name;

    return {
        name: 'Adriano'
    }
}

const p2 = new Pessoa2('Márcio');

console.log(p2); // { name: 'Adriano' }
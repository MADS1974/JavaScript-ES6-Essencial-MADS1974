

function Pessoa(customProperties) {
    return {
        name: 'Márcio',
        lastName: 'Adriano',
        ...customProperties
    }
}

const p = Pessoa({ name: 'Custom Name', age: 47 });
console.log(p);
// { name: 'Custom Name', lastName: 'Márcio', age: 47 }
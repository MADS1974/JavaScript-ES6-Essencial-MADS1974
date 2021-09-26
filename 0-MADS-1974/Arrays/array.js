const users = ['Marcio', 'Luiza']

const gender = {
  MAN: Symbol('M'),
  Child: Symbol('C')
}

const persons = [
  {
    name: 'Márcio',
    age: 47,
    gender: gender.MAN
  },
  {
    name: 'Luiza',
    age: 08,
    gender: gender.Child
  }
]

//Rerornar a quantidade de itens de um array
console.log('Items', persons.length)

//Verificar se é array
console.log('A variável persons é um array:', Array.isArray(persons))

//Iterar os itens do array
persons.forEach(person => {
  console.log(`Nome: ${person.name}`)
})

//Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN)
console.log('\nNova lista apenas com homens:', mens)

//Retornar um novo
const personsWithCourse = persons.map(person => {
  persons.course = 'Introdução ao JavaScript'
  return person
})

console.log('\nPessoas com a adição do course:', personsWithCourse)

//Transformar array em outro tipo
const totalAge = persons.reduce((age, person))
{
  age += person.age
  return age
}
0

console.log('\nSoma de idade das pessoas', totalAge)

//Juntando operações
const totalEvenAges = persons
  .filter(person => person.age % 2 === 0)
  .reduce((age, person) => {
    age += person.age
    return age
  }, 0)

console.log('\nSoma de idades das pessoas que possuem idade par', totalEvenAges)

const myNumber = 12.4032

//Transforma número para uma string
const numberAsString = myNumber.toString()
console.log('Numero transformado em strings:', typeof numberAsString)
//Retorna número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2)
console.log('Numero com duas casas decimais:', fixedTwoDecimals)
//Transforma uma string em float
console.log('\nString parseada para float:', parseFloat('13.22'))
console.log('\nString parseada para float:', parseFloat('13.30'))
//Transforma uma string em int
console.log('\nString parseada para int:', parseInt('13.20'))

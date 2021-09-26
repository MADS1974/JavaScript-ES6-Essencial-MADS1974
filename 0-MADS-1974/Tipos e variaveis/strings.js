//Retorna o tamanho de uma string
//const textSize = 'Texto'; <<< criando uma váriavel
const textSize = 'Texto'.length
console.log(`quantidade de letras: ${textSize}`)

//Retorna um array quebrando a string por um delimitador
const SplittedText = 'Texto'.split('x')
console.log('\narray com as posições separadas pelo delimitador:', SplittedText)

//Busca por uma valor e substitui por outro, aceita rejects
const replacedText = 'Texto'.replace('Text', 'txeT')
console.log('\nSubstituição de valor:', replacedText)

//Retorna a "fatia de um valor"
const lastChar = 'Texto'.slice(-1)
console.log('\nÚltima letra de uma string:', lastChar)

const allWithoutLastChar = 'Texto'.slice(0, -1)
console.log(
  '\nValor da string da primeira letra menos a última:',
  allWithoutLastChar
)

const secondToEnd = 'Texto'.slice(1)
console.log('\nValor da string da segunda letra até a última:', secondToEnd)

//Retorna N caracteres a partir de uma posição
const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2)
console.log('\nAs duas primeiras letras são:', twoCharsBeforeFirstPos)

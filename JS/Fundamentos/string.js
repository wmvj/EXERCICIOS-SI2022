const curso = 'Web2'

console.log(curso.charAt(3))
console.log(curso.charAt(6))
console.log(curso.indexOf("b"))

console.log(curso.substring(1))
console.log(curso.substring(0,3))
console.log("Curso ".concat(curso).concat("!"))

console.log(curso.replace(2,"e"))
console.log('Ana,Maria,Pedro'.split(","))

// Template String

const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

// expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)



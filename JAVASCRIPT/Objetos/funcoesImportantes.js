const pessoa = {
    nome: 'Alex',
    idade: 20,
    peso: 80
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true,
    writable: false,
    value: '01/01/2021'
})

// console.log(pessoa)
pessoa.dataNascimento = '01/01/2022'
console.log(pessoa.dataNascimento)

const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

console.log(obj)
Object.freeze(obj)
obj.c = 1234
console.log(obj)

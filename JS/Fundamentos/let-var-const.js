// Declaração de let, var e const

var firstNumber = 3
let second_number = 4

var firstNumber = 30

console.log(firstNumber,second_number)

firstNumber = 300
second_number = 400

console.log(firstNumber,second_number)

const c = 5
// c = 50
console.log(c)

// Diferença entre let e var

var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

// Hoisting - Jogar para cima

console.log('a =', a)
var a = 2
console.log('a =', a)

console.log('b =', b)
let b = 2
console.log('b =', b)
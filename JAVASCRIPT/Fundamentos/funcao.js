// funcao sem retorno
function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(2,10,5,8,14,34)
imprimirSoma()

// funcao com retorno
function soma(a, b = 1){
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma())

// armazenando uma funcao em uma variavel
const imprimirSoma2 = function(a, b){
    console.log(a+b)
}

imprimirSoma2(2,3)

// armazenando uma funcao arrow em uma variavel
const soma2 = (a, b) => {
    return a+b
}

console.log(soma2(2,5))

// retorno implicito
const subtracao = (a,b) => a-b
console.log(subtracao(2,6))
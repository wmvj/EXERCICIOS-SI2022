// Somar todos os numeros pares ou impares (reduce)

const numeros = [5, 50, 80, 1, 2, 3, 4, 8, 11, 22, 27]
const total = numeros.reduce(function(acumulador, valor, indice){
    if(valor % 2 !== 0){
        acumulador += valor
    }
    return acumulador
}, 0)

console.log(total)
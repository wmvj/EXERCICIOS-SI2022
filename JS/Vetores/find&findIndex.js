// o método findIndex() que é responsável por retornar o índice do primeiro 
// elemento que satisfaz uma condição em um array. Se nenhum elemento satisfizer 
// a condição, ele retorna "-1". É importante lembrar que o índice retornado 
// começa em 0. O método utiliza uma função de callback para percorrer o array e 
// verificar a condição definida. Caso nenhum elemento satisfaça a condição, ele 
// retorna "-1". O findIndex() é útil para encontrar a posição do primeiro elemento 
// que atende a uma condição específica no array.


const values = [4,6,8,12]

// primeiro indice que é maior que 4
const index = values.findIndex(value => value > 4)
console.log(index)
console.log(values[index])

// exemplo de quando não encontra o valor
const index2 = values.findIndex(value => value > 12)

// exemplo de quando encontra o valor maior que 8
const found = values.find(value => value > 8)
console.log(found)


const fruits = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'oranges', quantity: 5}
]


const result = fruits.find(fruit => fruit.name === 'oranges')
console.log(result)
// O operador de spread permite expandir o conteúdo de um objeto iterável, 
// como um array ou uma string, para ser usado em zero ou mais argumentos. 
// É possível utilizar o spread para manipular e interagir com objetos de 
// forma mais flexível. Com exemplos práticos, vamos demonstrar como o spread 
// pode ser utilizado para expandir arrays e objetos, facilitando a manipulação 
// e a interação com seus elementos de forma separada.

const numbers = [1, 2, 3, 4, 5];
console.log(numbers)

// com o spread
console.log(...numbers)

const data = [
    {
        name: 'Alex',
        email: 'alex@gmail.com',
        avatar: "alex.png"
    },
        {
        name: 'Joãolex',
        email: 'joao@gmail.com',
        avatar: "joao.png"
    }
]

console.log(data)
// com o spread
console.log(...data)


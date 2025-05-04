const frutas = ['Pera', "Maçã", "Uva", "Abacate"]

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    idade: 30
}

// for (let i = 0; i<frutas.length; i++){
//     console.log(frutas[i])
// }

// for (let index in frutas){
//     console.log(frutas[index])
// }

// for (let chave in pessoa){
//     console.log(chave, pessoa[chave])
// }


for (let index of frutas){
    console.log(index)
}

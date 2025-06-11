console.log(typeof Array, typeof new Array, typeof [])

const alunos = ['Alex', 'Samuel', 'Luna', 'Ruan']
alunos.pop() // remove o ultimo elemento do array
console.log(alunos)

alunos.push('Ruan') // adiciona um elemento no final do array
console.log(alunos)

alunos.shift() // remove o primeiro elemento do array
console.log(alunos)

alunos.unshift('Alex') // adiciona um elemento no inicio do array
console.log(alunos)

alunos.splice(2, 0, 'Pedro', 'Wesley') // add elementos do array no indice 2
console.log(alunos)

alunos.splice(0, 1) // remove um elemento do array no indice 0
console.log(alunos)

const alunos2 = alunos.slice(2) // cria um novo array a partir do indice 2 do array original
console.log(alunos2)

const alunos3 = alunos.slice(1,4) // cria um novo array a partir do indice 1 até o indice 4 do array original
console.log(alunos3)




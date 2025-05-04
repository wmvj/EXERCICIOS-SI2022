console.log(typeof Array, typeof new Array, typeof [])

const alunos = ['Alex', 'Samuel', 'Luna', 'Ruan']
alunos.pop()
console.log(alunos)

alunos.push('Ruan')
console.log(alunos)

alunos.shift()
console.log(alunos)

alunos.unshift('Alex')
console.log(alunos)

alunos.splice(2, 0, 'Pedro', 'Wesley')
console.log(alunos)

alunos.splice(0, 1)
console.log(alunos)

const alunos2 = alunos.slice(2)
console.log(alunos2)

const alunos3 = alunos.slice(1,4)
console.log(alunos3)




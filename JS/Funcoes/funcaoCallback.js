// Passar uma função como argumento para outra função para ser executada uma ou várias vezes

const fabricantes = ['Fiat', 'Byd', 'Ford']


function imprimir(nome, indice){
    console.log(`${indice+1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))
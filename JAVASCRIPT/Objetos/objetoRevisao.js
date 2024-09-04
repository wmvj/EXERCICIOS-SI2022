// coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)


const carro = {
    modelo: 'Gol',
    valor: 150000,
    proprietario: {
        nome: 'Eusebio',
        idade: 20,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores:[{
            nome: 'Alex',
            idade: 19
        },{
            nome: 'Samuel',
            idade: 20
        }],
    calcularValorSeguro: function(){
        // ...
    }
}

carro.proprietario.endereco.numero = 2000
carro['proprietario']['endereco']['logradouro'] = 'Av Novo Horizonte'
console.log(carro)
delete carro.calcularValorSeguro
console.log(carro)

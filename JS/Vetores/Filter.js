const produtos = [
    {nome: 'Notebook', preco: 5000, fragil: true},
    {nome: 'Smartphone', preco: 9000, fragil: true},
    {nome: 'Calculadora', preco: 90.50, fragil: false},
    {nome: 'Caixa de som', preco: 120, fragil: true},
]

console.log(produtos.filter(function(p){
    return p.fragil
}))

const caro = produto => produto.preco >= 5000
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))
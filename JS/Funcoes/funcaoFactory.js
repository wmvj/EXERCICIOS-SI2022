function criarProduto(nome, preco){
    return{
        nome,
        preco,
        deconto: 0.1
    }
}

console.log(criarProduto('Notebook', 3999.00))
console.log(criarProduto('iPhone', 7999.00))
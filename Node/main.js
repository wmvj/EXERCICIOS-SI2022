// utilizando o fetch para fazer requisições com then

const response = fetch('http://localhost:3333/products')
.then(res => res.json())
.then(data => console.log(data))

async function fetchProducts(){
    const response = await fetch('http://localhost:3333/products')
    const data = await response.json()
    console.log(data)
}
fetchProducts()
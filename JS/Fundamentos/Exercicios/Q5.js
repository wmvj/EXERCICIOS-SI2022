const prompt = require("prompt-sync")()

let nome = prompt("Digite um nome: ")

if (nome.charAt(0).toUpperCase() === "A"){
    console.log("O nome começa com a letra A")
} else {
    console.log("O nome não começa com a letra A")
}
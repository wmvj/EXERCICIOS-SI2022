const peso1 = 1.4
const peso2 = Number('2.5')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.876
const avaliacao2 = 6.789

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1+peso2)

console.log(media.toFixed(2))
console.log(media.toString())
console.log(typeof media)
console.log(typeof Number)

// Alguns cuidados com números

console.log(7 / 0)
console.log("10" / 2)
console.log('3' + 2) // string ganha!
console.log('3' - 2)
console.log("Show!" * 2)
console.log(0.1 + 0.7)
// console.log(10.toString())
console.log((10.345).toFixed(2))
// Declarcao de funcao (Hoisting)
falaOi()

function falaOi(){
    console.log('oi')
}

// Armazenar em um array
const array = [function(a,b){return a+b},falaOi()]
console.log(array[0](2,3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){return 'Opa'}
console.log(obj.falar())

// Passar funcao como parametro
function run(fun){
    fun()
}

run(function(){console.log('Executando...')})

// Uma funcao pode retornar/conter uma funcao
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(2,3)(4)
const resultado = soma(2,3)
resultado(4)

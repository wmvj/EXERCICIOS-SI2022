function incrementarContador(){
    const counter = document.getElementById("contador")
    let value = parseInt(counter.textContent)
    value++
    counter.textContent = value.toString().padStart(2,"0")
}

function decrementarContador(){
    const counter = document.getElementById("contador")
    let value = parseInt(counter.textContent)
    if(value > 1){
        value--
        counter.textContent = value.toString().padStart(2,"0")
    }    
}
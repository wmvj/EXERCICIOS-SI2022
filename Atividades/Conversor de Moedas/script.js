const USD = 4.87
const EUR = 5.38;
const GBP = 6.22;

// Obter os elementos do formulario
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

amount.addEventListener("input",() =>{
    const hasCaracter = /\D+/g
    amount.value = amount.value.replace(hasCaracter, "");
})


form.onsubmit = (event) => {
    event.preventDefault();
    switch(currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$");
        break;
        case "EUR":
            convertCurrency(amount.value, EUR, "€");
        break;
        case "GBP":
            convertCurrency(amount.value, GBP, "£");
        break;
    }
}

// funcao para converter moedas
function convertCurrency(amount, price, symbol){
    try {
        //Exibi a cotacao da moeda selecionada
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

        let total = amount * price;

        total = formatCurrencyBRL(total);

        result.textContent = `${total} Reais`

        footer.classList.add("show-result")
        
    } catch {
        footer.classList.remove("show-result")
    }
}

// formata a moeda para o padrao brasileiro
function formatCurrencyBRL(value){
    return Number(value).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
}
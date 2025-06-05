// Lista dos elementos selecionados do formulario
const form = document.querySelector('form');
const amount = document.getElementById('amount');
const expense = document.getElementById('expense');
const category = document.getElementById('category');

const expenseList = document.querySelector('ul');
const expenseTotal = document.querySelector('aside header h2');
const expenseQuantity = document.querySelector('aside header p span');

amount.oninput = () => {
    let value = amount.value.replace(/\D/g, '');
    value = Number(value) / 100;
    amount.value = formatCurrencyBR(value);
}

function formatCurrencyBR (value){
    value = value.toLocaleString('pt-BR', 
        { 
            style: 'currency', 
            currency: 'BRL' 
        });
     return value   
}

// Captura o evento de submit do formulário para obter os valores 
form.onsubmit = (event) => {

    // Previne o comportamento padrão de recarregar a página
    event.preventDefault();

    // Cria um objeto com os detalhes da nova despesa
    const newExpense = {
        id: new Date().getTime(),
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        amount: amount.value,
        createAt: new Date()
    }

    expenseAdd(newExpense);

}

function expenseAdd(newExpense){
    try {

        const expenseItem = document.createElement('li');
        expenseItem.classList.add("expense")

        const expenseIcon = document.createElement('img');
        expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`)
        expenseIcon.setAttribute("alt", newExpense.category_name) 
        
        const expenseInfo = document.createElement('div');
        expenseInfo.classList.add("expense-info")

        const expenseName = document.createElement('strong');
        expenseName.textContent = newExpense.expense;

        const expenseCategory = document.createElement('span');
        expenseCategory.textContent = newExpense.category_name;

        // Cria o valor da despesa
        const expenseAumount = document.createElement('span');
        expenseAumount.classList.add("expense-amount");
        expenseAumount.innerHTML = `<small>R$</small>${newExpense.amount.toUpperCase().replace('R$',"")}`;

        //Cria o icone de exclusão
        const removeIcon = document.createElement('img');
        removeIcon.classList.add("remove-icon")
        removeIcon.setAttribute("src", "img/remove.svg")
        removeIcon.setAttribute("alt", "Remover")
    
        expenseInfo.append(expenseName, expenseCategory)

        expenseItem.append(expenseIcon, expenseInfo, expenseAumount, removeIcon)

        expenseList.append(expenseItem)

        updateTotals();

        
    } catch (error) {
        alert("Não foi possível adicionar a despesa.");
    }
}


function updateTotals(){
    try {
        const items = expenseList.children
        expenseQuantity.textContent = `${items.length} ${items.length > 1 ? "despesas" : "despesa"}`;

        // Variável para armazenar o total
        let total = 0;

        for (let item=0; item<items.length; item++){
            const itemAmount = items[item].querySelector(".expense-amount");

            // Remove caracateres não numéricos e substitui a virgula por ponto
            let value = itemAmount.textContent.replace(/[^|\d,]/g, '').replace(',', '.');

            value = parseFloat(value);

            if (isNaN(value)){
                return alert("Não foi possível calcular o total. O valor não é um número válido.");
            }

            total += Number(value);
        }

        // Cria a span para adicionar o R$ formatado
        const symbolBRL = document.createElement('small');
        symbolBRL.textContent = "R$";

        total = formatCurrencyBR(total).toUpperCase().replace('R$', '');

        expenseTotal.innerHTML = ""

        expenseTotal.append(symbolBRL, total);

    } catch (error) {
        console.log("Não foi possível atualizar os totais.");
    }
}


expenseList.addEventListener("click", (event) => {
  console.log(event)
})

// Lista dos elementos selecionados do formulario
const form = document.querySelector('form');
const amount = document.getElementById('amount');
const expense = document.getElementById('expense');
const category = document.getElementById('category');

const expenseList = document.querySelector('ul');


amount.oninput = () => {
    let value = amount.value.replace(/\D/g, '');
    value = Number(value) / 100;
    console.log(value);
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

form.onsubmit = (event) => {
    event.preventDefault();

    const newExpense = {
        id: new Date().getTime(),
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        amount: amount.value,
        createAt: new Date()
    }
}
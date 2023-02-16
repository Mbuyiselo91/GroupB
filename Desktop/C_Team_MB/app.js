
var data = {
    balance: 1000,
    income: 400,
    expense: 100,
    transactions:[

    ]
}

var balanceEl = document.getElementById('balance');
var incomeEl = document.getElementById('income');
var expenseEl = document.getElementById('expense');
var transactionsEl = document.getElementById('transaction');
var incomeBtnEl = document.getElementById('incomeBtn');
var expenseBtnEl = document.getElementById('expenseBtn');
var nameInputEl = document.getElementById('name');
var amountInputEl = document.getElementById('amount');


function displayShow(){
    var localState = JSON.parse(localStorage.getItem('expenseTrackerState'));

    if (localState !== null) {
        data = localState;
    }
    updateState();
    
}

function uniqueId(){
    return Math.round(Math.random() * 1000000);
}

function onAddIncomeClick(){
    addTransaction(nameInputEl.value, amountInputEl.value, 'income');
}

function addTransaction(name, amount, type){
    var name = nameInputEl.value;
    var amount = amountInputEl.value;


    if (name !== '' || amount !== '') {
        var transaction =  {id: uniqueId(), name: name, amount: parseInt(amount), type: type};
        data.transactions.push(transaction);
        updateState();
    }
    else {
        alert("Please add input");
    }

    nameInputEl.value = '';
    amountInputEl.value = '';
}

function onAddExpenseClick(){
    addTransaction(nameInputEl.value, amountInputEl.value, 'expense');
}

function onDeleteClick(event){
    var id = parseInt(event.target.getAttribute('data-id'));
    var deleteIndex;
    for (let i = 0; i < data.transactions.length; i++) {
        if (data.transactions[i].id === id) {
            deleteIndex = i;
            break;
        }
    }

    data.transactions.splice(deleteIndex, 1);

    updateState();
}

function clearData(){
    localStorage.clear();
    // select the target element
    const e = document.getElementById("transaction");
    // remove the last list item
    e.parentElement.removeChild(e);

}

function updateState(){
    var balance = 0,
    income = 0,
    expense = 0,
    item;

    for (var i = 0; i < data.transactions.length; i++) {
        item = data.transactions[i];

        if (item.type === 'income') {
            income += item.amount;
        }
        else if (item.type === 'expense') {
            expense += item.amount;
        }
    }

    balance = income - expense;

    data.balance = balance;
    data.income = income;
    data.expense = expense;

    localStorage.setItem('expenseTrackerState', JSON.stringify(data));

    render();
}

function render(){
    balanceEl.innerHTML = `R${data.balance}`;
    incomeEl.innerHTML = `R${data.income}`;
    expenseEl.innerHTML = `R${data.expense}`;

    var transactionEl, containerEl, amountEl, item, btnEl;

    transactionsEl.innerHTML = '';

    for (let i = 0; i < data.transactions.length; i++) {
        item = data.transactions[i];
        transactionEl = document.createElement('li'); 
        transactionEl.append(item.name);

        transactionsEl.appendChild(transactionEl);

        containerEl = document.createElement('div');
        amountEl = document.createElement('span');
        if (item.type === 'income') {
            amountEl.classList.add('income-amt');
        }
        else if (item.type === 'expense') {
            amountEl.classList.add('expense-amt');
        }
        amountEl.innerHTML = `R${item.amount}`;

        containerEl.appendChild(amountEl);

        btnEl = document.createElement('button');
        btnEl.setAttribute('data-id', item.id);
        btnEl.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32"><path fill="none" stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M28 6H6l2 24h16l2-24H4m12 6v12m5-12l-1 12m-9-12l1 12m0-18l1-4h6l1 4"/></svg>`;

        btnEl.addEventListener('click', onDeleteClick);

        containerEl.appendChild(btnEl);

        transactionEl.appendChild(containerEl);
    }
}


displayShow();

























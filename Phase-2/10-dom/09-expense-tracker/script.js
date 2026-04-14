const EXPENSE = document.getElementById('expense')
const AMOUNT = document.getElementById('amount')
const DATE = document.getElementById('date')
const TOTAL = document.getElementById('total')
const EXPENSE_DISPLAY = document.getElementById('expense-list')
let Expenses = JSON.parse(localStorage.getItem('expenses')) || []
const ADD = document.getElementById('add-expense')

renderExpenses()
// totalCalc()

ADD.addEventListener('click', () => {
    let newExpense = {
        id: Date.now(),
        expensename: EXPENSE.value.trim(),
        amount: Number(AMOUNT.value),
        date: DATE.value
    }
    if (!newExpense.expensename || !newExpense.amount || !newExpense.date)
        return alert('Enter valid Data')
    console.log(newExpense);
    Expenses.push(newExpense)
    renderExpenses()
    saveExpenses()
    EXPENSE.value = ''
    AMOUNT.value = ''
    DATE.value = ''
})

function saveExpenses() {
    localStorage.setItem('expenses', JSON.stringify(Expenses))
}

function renderExpenses() {
    EXPENSE_DISPLAY.innerHTML = ''
    if (Expenses.length == 0) {
        EXPENSE_DISPLAY.innerHTML = '<p>No Expenses</p>'
        TOTAL.innerHTML = 'Total: ₹0'
    }
    Expenses.forEach(exp => {
        const li = document.createElement('li')
        const deleteBtn = document.createElement('button')
        deleteBtn.classList.add('delete-btn', 'hidden')
        li.innerText = `₹${exp.amount} @${exp.date} - ${exp.expensename}`
        // li.innerHTML = `<div>
        // <strong>${exp.expensename}</strong>
        // <small>${exp.date}</small></div>
        // <span>₹${exp.amount}</span>`
        deleteBtn.innerText = 'Delete'
        deleteBtn.addEventListener('click', function () {
            li.remove()
            Expenses = Expenses.filter(Exp => exp.id != Exp.id)
            renderExpenses()
            saveExpenses()
        })
        li.appendChild(deleteBtn)
        EXPENSE_DISPLAY.appendChild(li)
    });
    totalCalc()
}

function totalCalc() {
    let total = 0
    Expenses.forEach(exp => {
        total += Number(exp.amount)
    });
    TOTAL.innerHTML = `Total: ₹${total}`
}
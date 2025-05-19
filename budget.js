const form = document.getElementById('budget-form');
const expenseName = document.getElementById('expense-name');
const expenseAmount = document.getElementById('expense-amount');
const totalDisplay = document.getElementById('total-expenses');
const expenseList = document.getElementById('expense-list');

let total = 0;

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = expenseName.value.trim();
  const amount = parseFloat(expenseAmount.value);

  if (name && amount > 0) {
    total += amount;
    totalDisplay.textContent = total.toFixed(2);

    const li = document.createElement('li');
    li.textContent = `${name}: ₹${amount.toFixed(2)}`;
    expenseList.appendChild(li);

    form.reset();
  }
});

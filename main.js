const balance = document.querySelector(".balance");
const incomeMoney = document.querySelector("#money-plus");
const expenseMoney = document.querySelector("#money-minus");
const list = document.querySelector("#list");
const form = document.querySelector("#form");
const text = document.querySelector("#text");
const amount = document.querySelector("#amount");

const dumyTransactions = [
  { id: 1, text: "Flower", amount: -20 },
  { id: 2, text: "Salary", amount: 500 },
  { id: 3, text: "Book", amount: -20 },
  { id: 4, text: "Camera", amount: 100 },
  { id: 4, text: "Camera", amount: 00 },
];

let transactions = dumyTransactions;

// Add transactions to DOM List
function addTransactionDOM(transaction) {
  // Get sign
  const sign = transaction.amount < 0 ? "-" : "+";

  const item = document.createElement("li");

  // Add class based on value
  item.classList.add(transaction.amount < 0 ? "minus" : "plus");

  item.innerHTML = `${transaction.text} <span> ${sign}${Math.abs(
    transaction.amount
  )}</span><button class="delete_btn">x</button>`;

  list.appendChild(item);
}

// Update the Balance, income & Expense
function updateValue() {
  const amounts = transactions.map((transaction) => transaction.amount);

  // total Summetion Balance
  const total = amounts.reduce((prev, curr) => (prev += curr), 0).toFixed(2);

  // Total Summetion Income
  const income = amounts
    .filter((item) => item > 0)
    .reduce((prev, curr) => (prev += curr))
    .toFixed(2);

  // Total Summetion Expense
  const expense = (
    amounts.filter((item) => item < 0).reduce((prev, curr) => (prev += curr)) *
    -1
  ).toFixed(2);

  // update the Total Balance On DOM
  balance.innerHTML = `$${total}`;

  // update the Total Income On DOM
  incomeMoney.innerHTML = `$${income}`;

  // update the Total Expense On DOM
  expenseMoney.innerHTML = `$${expense}`;
}

// Init app
function init() {
  list.innerHTML = "";

  transactions.forEach(addTransactionDOM);
  updateValue();
}

init();

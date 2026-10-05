// SpendWise Dynamic Budget Management Script

// --- 1. Global Application State Data ---
let globalBudget = 50000; // OPTION 3: Pre-loaded initial budget tracking metric
let expensesArray = [
    { description: "Entertainment", cost: 4500 },
    { description: "Transport", cost: 1200 },
    { description: "Rent", cost: 15000 }
]; // OPTION 3: Pre-loaded array collection entries for test validation

// --- 2. DOM Selection Elements ---
const budgetInput = document.getElementById('budget-input');
const setBudgetBtn = document.getElementById('set-budget-btn');
const expenseForm = document.getElementById('expense-form');
const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');

const displayBudget = document.getElementById('display-budget');
const displayExpenses = document.getElementById('display-expenses');
const displayBalance = document.getElementById('display-balance');
const budgetAlert = document.getElementById('budget-alert');
const expenseList = document.getElementById('expense-list');

// --- 3. Event Listener Registrations ---
if (setBudgetBtn) setBudgetBtn.addEventListener('click', handleSetBudget);
if (expenseForm) expenseForm.addEventListener('submit', handleAddExpense);

// --- 4. Event Handler Actions ---
function handleSetBudget() {
    const value = parseFloat(budgetInput.value);
    if (!isNaN(value) && value >= 0) {
        globalBudget = value;
        budgetInput.value = '';
        updateDashboard();
    } else {
        alert("Please enter a valid positive budget amount.");
    }
}

function handleAddExpense(event) {
    event.preventDefault(); // Intercept and block default web page document reload execution
    
    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value);

    if (name && !isNaN(amount) && amount > 0) {
        // Create descriptive item mapping and push straight to state data array collections
        const newExpense = { description: name, cost: amount };
        expensesArray.push(newExpense);

        // Wipe HTML entry fields
        expenseNameInput.value = '';
        expenseAmountInput.value = '';

        updateDashboard();
    }
}

// --- 5. Application Computations, Loops & DOM Updates ---
function updateDashboard() {
    let totalExpensesSum = 0;

    // Requirement Checklist: Process data objects using loops to calculate dynamic expense summation
    for (let i = 0; i < expensesArray.length; i++) {
        totalExpensesSum += expensesArray[i].cost;
    }

    // Perform operational conditional calculation routines
    const remainingBalance = globalBudget - totalExpensesSum;

    // Mutate text nodes across targeted elements directly inside the active DOM tree safely
    if (displayBudget) displayBudget.textContent = `KES ${globalBudget.toFixed(2)}`;
    if (displayExpenses) displayExpenses.textContent = `KES ${totalExpensesSum.toFixed(2)}`;
    if (displayBalance) displayBalance.textContent = `KES ${remainingBalance.toFixed(2)}`;

    // Build modern history layout segments by parsing dynamic items across array structures cleanly
    if (expenseList) {
        expenseList.innerHTML = ''; // Restarts element string layers safely to clear structural duplication
        expensesArray.forEach(function(item) {
            const li = document.createElement('li');
            li.innerHTML = `<span>${item.description}</span> <strong>KES ${item.cost.toFixed(2)}</strong>`;
            expenseList.appendChild(li);
        });
    }

    // Requirement Checklist: Process dynamic layout changes using Conditional Statements (Decision Making)
    if (budgetAlert) {
        if (globalBudget === 0 && expensesArray.length === 0) {
            budgetAlert.classList.add('hidden');
        } else if (remainingBalance < 0) {
            budgetAlert.textContent = `⚠️ Overbudget Alert! You have exceeded limits by KES ${Math.abs(remainingBalance).toFixed(2)}!`;
            budgetAlert.className = "alert warning";
        } else {
            budgetAlert.textContent = "✅ Financial targets active: Your spending matches parameters safely.";
            budgetAlert.className = "alert success";
        }
    }
}

// --- 6. Initial Application Lifecycle Load Trigger ---
// Automatically trigger calculations and display Option 3 starter data arrays immediately on page load
window.onload = updateDashboard;

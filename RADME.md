# SpendWise - Interactive Budget Tracker

## Improvements Made to SpendWise
This phase migrates the application from prompt input dialogue routines into a fully dynamic responsive viewport dashboard layer. The tracking framework handles complex object state inputs instantly inside a central form interface layer. To demonstrate robustness immediately upon loading, the application is intentionally initialized with a default starter budget of KES 50,000.00 alongside three pre-loaded sample records.

## Conditionals Implementation
Conditional logical blocks (`if / else if / else`) continuously trace calculations from the remaining balance data channels. If expenses exceed active constraints, dynamic class manipulations fire, changing status containers to red warning messages showing the debt amount.

## Array Management Data Models
State storage tracking transitions away from individual variable declarations into an structured array collection (`expensesArray`). Each entry maps descriptions and values inside single objects to handle bulk ledger entry histories smoothly.

## Document Object Model (DOM) Synchronization
DOM configurations synchronize natively using `.textContent` and `.innerHTML` targeting commands. Values calculate inside independent modules and write straight to the designated webpage grid selectors without requiring document context resets.

## Event Listeners Framework
Dynamic input hooks attach to forms and dashboard interaction keys using `.addEventListener()`. This intercepts button clicks and entry submit patterns, invoking programmatic recalculation workflows while checking active conditions via `preventDefault()`.

## Challenges Faced & Troubleshooting Methods
* **Problem:** Layout logs appended historical duplicates to the history field every time new variables pushed into arrays.
* **Resolution:** Cleared matching text contexts (`expenseList.innerHTML = ''`) before firing data collection maps inside loop tracks.

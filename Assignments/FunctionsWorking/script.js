function calculate(operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers.";
    } else {
        switch (operation) {
            case "add":
                result = add(num1, num2);
                break;
            case "subtract":
                result = subtract(num1, num2);
                break;
            case "multiply":
                result = multiply(num1, num2);
                break;
            case "divide":
                result = divide(num1, num2);
                break;
            default:
                result = "Invalid operation.";
        }
    }

    // Display the result and update history
    document.getElementById("result").textContent = `Result: ${result}`;
    updateHistory(`${num1} ${getOperatorSymbol(operation)} ${num2} = ${result}`);
}

// Update history log
function updateHistory(entry) {
    const historyList = document.getElementById("history-list");
    const listItem = document.createElement("li");
    listItem.textContent = entry;
    historyList.appendChild(listItem);
}

// Clear the calculator and history
function clearCalculator() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").textContent = "";
    document.getElementById("history-list").innerHTML = "";
}

// Helper functions for basic operations
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return b === 0 ? "Error: Division by zero." : (a / b).toFixed(2);
}

// Returns symbol for the operation
function getOperatorSymbol(operation) {
    switch (operation) {
        case "add": return "+";
        case "subtract": return "-";
        case "multiply": return "×";
        case "divide": return "÷";
        default: return "";
    }
}

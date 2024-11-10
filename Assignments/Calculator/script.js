// Calculator state
const calculatorState = {
    currentInput: "0",
    previousInput: null,
    operator: null,
    awaitingSecondOperand: false
};

// Input a number
function inputNumber(number) {
    if (calculatorState.awaitingSecondOperand) {
        calculatorState.currentInput = number.toString();
        calculatorState.awaitingSecondOperand = false;
    } else {
        calculatorState.currentInput =
            calculatorState.currentInput === "0" ? number.toString() : calculatorState.currentInput + number;
    }
    updateDisplay();
}

// Input a decimal point
function inputDecimal() {
    if (calculatorState.awaitingSecondOperand) return;
    if (!calculatorState.currentInput.includes(".")) {
        calculatorState.currentInput += ".";
    }
    updateDisplay();
}

// Choose an operation
function chooseOperation(operation) {
    if (calculatorState.previousInput === null) {
        calculatorState.previousInput = calculatorState.currentInput;
    } else if (calculatorState.operator) {
        calculatorState.previousInput = operate(calculatorState.operator, calculatorState.previousInput, calculatorState.currentInput);
    }
    calculatorState.operator = operation;
    calculatorState.awaitingSecondOperand = true;
    updateDisplay();
}

// Perform calculation based on operator
function operate(operator, num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (operator) {
        case "add":
            return num1 + num2;
        case "subtract":
            return num1 - num2;
        case "multiply":
            return num1 * num2;
        case "divide":
            return num2 === 0 ? "Error" : num1 / num2;
        default:
            return num2;
    }
}

// Calculate the result when "=" is pressed
function calculate() {
    if (!calculatorState.operator) return;
    calculatorState.currentInput = operate(calculatorState.operator, calculatorState.previousInput, calculatorState.currentInput);
    calculatorState.operator = null;
    calculatorState.awaitingSecondOperand = false;
    calculatorState.previousInput = null;
    updateDisplay();
}

// Clear all states and reset the calculator
function clearCalculator() {
    calculatorState.currentInput = "0";
    calculatorState.previousInput = null;
    calculatorState.operator = null;
    calculatorState.awaitingSecondOperand = false;
    updateDisplay();
}

// Update display based on current input
function updateDisplay() {
    const display = document.getElementById("display");
    display.textContent = calculatorState.currentInput;
}

// Initialize display
document.addEventListener("DOMContentLoaded", () => {
    updateDisplay();
});

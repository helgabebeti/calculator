let display = document.getElementById("display");
let currentNumber = "";
let operator = null;

function appendNumber(number) {
    currentNumber += number;
    display.value = currentNumber;
}

function setOperator(op) {
    if (operator !== null || currentNumber === "") return;
    operator = op;
    currentNumber += " " + operator + " ";
    display.value = currentNumber;
}

function calculateResult() {
    if (operator === null || currentNumber.slice(-2) === " ") return;
    try {
        let result = eval(currentNumber);
        display.value = result;
        currentNumber = "" + result;
        operator = null;
    } catch (error) {
        display.value = "Error";
        currentNumber = "";
        operator = null;
    }
}

function clearDisplay() {
    currentNumber = "";
    operator = null;
    display.value = "";
}
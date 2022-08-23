const screenResult = document.querySelector(".result");
const showOperation = document.querySelector(".showOperation");
const numberSelection = document.querySelectorAll('[data-number]');
const operands = document.querySelectorAll('[data-operand]');
const clearButton = document.querySelector('[data-clear]');
const equalsButton = document.querySelector('[data-equals]');
const delButton = document.querySelector('[data-delete]');
const decimalPoint = document.querySelector('[data-decimal]');
let operand = null;
screenResult.textContent = "0";
showOperation.textContent = "0";
let currentNumber = "";
let prevNumber = "";
let isDecimal = false;

numberSelection.forEach((button) => {
    button.addEventListener('click', () => populateScreen(button.textContent));
})

operands.forEach((oButton) => {
    oButton.addEventListener('click', () => setOpetation(oButton.textContent));
})

clearButton.addEventListener('click', clear);
delButton.addEventListener('click', deleteNumber);
equalsButton.addEventListener('click', evaluate);
decimalPoint.addEventListener('click', checkDecimal);

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function percent(a) {
    return a / 100;
}

function power(a) {
    return a = Math.pow(a, 2);
}

function operation(a, b, operand) {

    a = Number(a);
    b = Number(b);
    switch (operand) {
        case "+":
            return add(a, b);
        case "-":
            return substract(a, b);

        case "*":
            return multiply(a, b);

        case "/":

            if (b === 0) {
                return null
            }
            else {
                return divide(a, b);
            }

        default:
            return null;

    }
}

function singleDigitOperations(a, operand) {
    a = Number(a);

    switch (operand) {

        case "%":
            return percent(a);

        case "x²":
            return power(a);
        default: 
            return null;
    }
}

function clear() {
    operand = null;
    screenResult.textContent = "0";
    showOperation.textContent = "0";
    currentNumber = "";
    prevNumber = "";
    removeLowerCase();
}

function populateScreen(number) {

    if (screenResult.textContent === "0" && number !== ".") {
        screenResult.textContent = "";
    }
    
    screenResult.textContent += number;
    addLowerCase();
    checkNumberLength(screenResult);
}

function deleteNumber() {
    screenResult.textContent = screenResult.textContent.slice(0, -1);
    if (screenResult.textContent === "") {
        screenResult.textContent = "0";
    }
    removeLowerCase()
}

function removeLowerCase() {
    if (screenResult.textContent.length <= 13) {
        screenResult.classList.remove("lower-case");
    }
}

function addLowerCase() {
    if (screenResult.textContent.length > 13) {
        screenResult.classList.add("lower-case");
    }
}

function checkNumberLength(numberLength) {
    if (numberLength.textContent.length > 15) {
        alert("Cannot have more than 15 symbols");
        screenResult.textContent = screenResult.textContent.slice(0, -1);
    }
}

function checkDecimal() {
    if(screenResult.textContent.includes('.')) return
    screenResult.textContent += '.';
}

function setOpetation(sign) {

    if (operand !== null) {
        evaluate()
    }

    prevNumber = screenResult.textContent;
        operand = sign;
        screenResult.textContent = "0";

    if (operand === "%") {
        showOperation.textContent = `${prevNumber} / 100`;
        evaluate();
    } else if (operand === "x²") {
        showOperation.textContent = `${prevNumber} ^ 2`;
        evaluate();
    }   else {
        showOperation.textContent = `${prevNumber} ${operand}`;
    }
}

function evaluate() {
    if (screenResult.textContent === "0" && operand === "/") {
        alert("You cannot divide by 0");
        return
    }
    if (operand === null) return;

    currentNumber = screenResult.textContent;
    

    if (operand === "%") {
        showOperation.textContent = `${prevNumber} / 100 =`;
        screenResult.textContent = formatResult(singleDigitOperations(prevNumber, operand));
    } else if (operand === "x²") {
        showOperation.textContent = `${prevNumber} ^ 2 =`;
        screenResult.textContent = formatResult(singleDigitOperations(prevNumber, operand));
    }   else {
        showOperation.textContent = `${prevNumber} ${operand} ${currentNumber} =`;
        screenResult.textContent = formatResult(operation(prevNumber, currentNumber, operand));
    }

    operand = null

}

function formatResult(number) {
    return Math.round(number * 1000) / 1000;
}
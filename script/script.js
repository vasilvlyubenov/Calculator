const screenResult = document.querySelector(".result");
const showOperation = document.querySelector(".showOperation");
const numberSelection = document.querySelectorAll('[data-number]');
const operation = document.querySelectorAll('[data-operand]');
const clearButton = document.querySelector('[data-delete]');
const equalsButton = document.querySelector('[data-equals]');
const delButton = document.querySelector('[data-delete]');


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
    return a = Math.pow(a);
}

function operation(a, b ,operand) {
    switch(operand){
        case "+":
            add(a, b);
            break;
        case "-":
            substract(a, b);
            break;
        case "*":
            multiply(a, b);
            break;
        case "/":
            divide(a, b);
            break;
        case "%":
            percent(a);
            break;
        case "x²":
            power(a);
            break;
    }
}


const screenResult = document.querySelector(".result");
const showOperation = document.querySelector(".showOperation");
const numberSelection = document.querySelectorAll('[data-number]');
const operands = document.querySelectorAll('[data-operand]');
const clearButton = document.querySelector('[data-clear]');
const equalsButton = document.querySelector('[data-equals]');
const delButton = document.querySelector('[data-delete]');
let operand = undefined;
screenResult.textContent = "0";
showOperation.textContent = "0";
let number ="";

numberSelection.forEach((button) => {
    button.addEventListener('click', () => populateScreen(button.textContent));
})

clearButton.addEventListener('click', clear);
delButton.addEventListener('click', deleteNumber);

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

function operation(a, b, operand) {
    switch (operand) {
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

function clear() {
    a = 0;
    b = 0;
    operand = undefined;
    screenResult.textContent = "0";
    showOperation.textContent = "0";
    number = "";
    removeLowerCase();
}

function populateScreen(number) {

    if(screenResult.textContent === "0") {
        screenResult.textContent = "";
    }
    
    screenResult.textContent += number; 
    addLowerCase();
    

}

function deleteNumber() {
    screenResult.textContent = screenResult.textContent.slice(0, -1);
    if(screenResult.textContent === "") {
        screenResult.textContent = "0";
    }
   removeLowerCase()
}

function removeLowerCase() {
    if(screenResult.textContent.length <= 13){
        screenResult.classList.remove("lower-case");

    }
}

function addLowerCase() {
    if(screenResult.textContent.length > 13){
        screenResult.classList.add("lower-case");

    }
}
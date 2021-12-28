//function to add two numbers
function add(a, b) {
    return a + b;
}

//function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

//function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

//function to divide two numbers
function divide(a, b) {
    return a / b;
}

function operate(a,b,operation){
    return operation(a,b);
}

console.log(operate(2,3,add));
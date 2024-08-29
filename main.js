let firstNumber;
let operator;
let secondNumber;

//const input = document.

function sum(a,b){
    return a + b;
} 
function diff(a,b){
    return a - b;
}
function mul(a,b){
    return a * b;
}
function division(a,b){
    return a / b;
}
function operate(firstNumber,operator,secondNumber){
    switch (operator){
        case "+":
            return sum(firstNumber,secondNumber);
        case "-":
            return diff(firstNumber,secondNumber);
        case "*":
            return mul(firstNumber,secondNumber);
        case "/":
            return division(firstNumber,secondNumber);
        default:
            return "error";
    }
}

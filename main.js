let firstNumber = "";
let operator;
let secondNumber ="";
let first = true;
let end = false;
let dotFirst = false;
let dotSecond = false;
const dot = document.querySelector("#dot");
const keys = document.querySelector(".keys");
const input = document.querySelector("#inp");
const input2 = document.querySelector("#inp2");
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
    if(b === 0){
        return "ERROR division by zero";
    }
    return a / b;
}
function addOperatinInInput(){
        input.textContent += operator;
        first = false;
}
function replaceInput(){
    first ? input.textContent = firstNumber: input2.textContent = secondNumber;
}
function clear(){
    input.textContent = "";
    input2.textContent = "";
    firstNumber = "";
    secondNumber ="";
    first = true;
    dotFirst = false;
    dotSecond = false;
}
function del(){
    if(first){
        firstNumber = firstNumber.slice(0,firstNumber.length - 1);
        replaceInput();
        
        return;
    }
    else{
        secondNumber = secondNumber.slice(0,secondNumber.length - 1);
        replaceInput();
        return;
    }
}
keys.addEventListener("click",function(e){

    switch (e.target.id){
        case "0":
            if(!first){
                secondNumber += "0";
                replaceInput()
                
                return;
            }
            firstNumber += "0";
            replaceInput()
            
            return;
        case "1":
            if(!first){
                secondNumber += "1";
                replaceInput()
                return;
            }
            firstNumber += "1";
            replaceInput()
            console.log(firstNumber);
            return;
        case "2":
            if(!first){
                secondNumber += "2";
                replaceInput()
                return;
            }
            firstNumber += "2";
            replaceInput()
            console.log(firstNumber);
            return;
        case "3":
            if(!first){
                secondNumber += "3";
                replaceInput()
                return;
            }
            firstNumber += "3";
            replaceInput()
            console.log(firstNumber);
            return;
        case "4":
            if(!first){
                secondNumber += "4";
                replaceInput()
                return;
            }
            firstNumber += "4";
            replaceInput()
            console.log(firstNumber);
            return;
        case "5":
            if(!first){
                secondNumber += "5";
                replaceInput()
                return;
            }
            firstNumber += "5";
            replaceInput()
            console.log(firstNumber);
            return;
        case "6":
            if(!first){
                secondNumber += "6";
                replaceInput()
                return;
            }
            firstNumber += "6";
            replaceInput()
            console.log(firstNumber);
            return;
        case "7":
            if(!first){
                secondNumber += "7";
                replaceInput()
                return;
            }
            firstNumber += "7";
            replaceInput()
            console.log(firstNumber);
            return;
        case "8":
            if(!first){
                secondNumber += "8";
                replaceInput()
                return;
            }
            firstNumber += "8";
            replaceInput()
            console.log(firstNumber);
            return;
        case "9":
            if(!first){
                secondNumber += "9";
                replaceInput()
                return;
            }
            firstNumber += "9";
            replaceInput()
            console.log(firstNumber);
            return;
        case "dot":{
            
            if(first && !dotFirst){
               
                firstNumber += ".";
                replaceInput()
                dotFirst = true;
            }
            else if(!first && !dotSecond){
                secondNumber += ".";
                replaceInput()
                dotSecond = true;
            }
            return;
        }
        case "CE":
            clear();
            return;
        case "DEL":
            del();
            
            return;
    }
    if(first){
        switch(e.target.textContent){
            case "+":
                operator = "+";
                addOperatinInInput();
                return;
            case "-":
                operator = "-";
                addOperatinInInput();
                return;
            case "/":
                operator = "/";
                addOperatinInInput();
                return;
            case "*":
                operator = "*";
                addOperatinInInput();
                return;
        }
    }
    if(!first){
        if(e.target.textContent === "="){
            end = true;
            input2.textContent = "";
            firstNumber = operate(firstNumber,operator,secondNumber);
            first = true;
            dotSecond =false;
            input.textContent = firstNumber;
            secondNumber = "";
        }
    }
    
    
});
function operate(firstNumber,operator,secondNumber){
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
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

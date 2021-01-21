const display = document.querySelector(".display"),
    buttons = document.querySelector(".buttons");

let firstNum = "";
let secondNum = "";
let operator = "";


function handleClick (e) {
   const target = e.target;
   if (target.matches("button")){
       const targetCname = target.className;
       const buttonContent = target.textContent;
       const displayValue = display.textContent; 
       let firstNum;
       if (targetCname === "number") {
        if (displayValue === "0") {
            display.textContent = buttonContent;
           } else {
            display.textContent = displayValue + buttonContent;
           }
       }
       if (targetCname === "plus" || 
           targetCname === "minus" ||
           targetCname === "multiply" ||
           targetCname === "divide") {
            firstNum = displayValue;
            operator = targetCname;
           }
           
        
        if (targetCname === "clear") {
            display.textContent = "0";
            secondNum = "";
            firstNum = "";
            operator = "";
        }
        if (targetCname === "equals") {
            
        }
   }
}

function init() {
    buttons.addEventListener("click", handleClick);
}

init();
// Selecting the numbers 
const numbers = document.querySelectorAll(".number");
// Selecting operants
const operators = document.querySelectorAll(".operator");
// Selecting clearButton
const clearBtn = document.querySelector(".clear");
// Selecting DeleteButton
const deleteBtn = document.querySelector(".delete");
// Selecting equalsButton
const equalsBtn = document.querySelector(".equals");
// Selecting dotButton
const dotBtn = document.querySelector(".dot");
// Selecting outputSreen1
const outputScrn1 = document.querySelector(".output1");
// Selecting outputSreen2
const outputScrn2 = document.querySelector(".output2");

// some global variable
let firstNumber;
let secondNumber;

// adding event listener onclick for all buttons 
  // number buttons
numbers.forEach(value =>{
  value.addEventListener("click", functionForButtons);
});
  // declaring the fucntion for numbers
  function functionForButtons(e){
    outputScrn2.innerText += e.target.innerText;
  }
  // operators buttons
operators.forEach(value => {
  value.addEventListener("click", functionForOperators);
})
  // declaring the function for operators
  function functionForOperators(e){
      outputScrn1.innerText = +outputScrn2.innerText + e.target.innerText;
      firstNumber = +outputScrn2.innerText;
      outputScrn2.innerText = 0;
  }

  // clear button
clearBtn.addEventListener("click", functionForAC);
  // declaring the function for clear button
  function functionForAC(){
    outputScrn1.innerText = " ";
    outputScrn2.innerText = " ";
    firstNumber = null;
  }

  //delete button
deleteBtn.addEventListener("click", functionForDelete);
  //declaring the function for delete button
  function functionForDelete(){
    let newNumber = "";
    for(let i=0; i<outputScrn2.innerText.length-1; i++){
      newNumber += outputScrn2.innerText[i];
    }
    outputScrn2.innerText = newNumber;
  }

  // equals button
equalsBtn.addEventListener("click",functionForEquality);
  // declaring the function for equality
  function functionForEquality(){
    let operator = outputScrn1.innerText[outputScrn1.innerText.length-1];
    secondNumber = +outputScrn2.innerText;
    outputScrn1.innerText = operate(operator, firstNumber, secondNumber);
    firstNumber =  outputScrn1.innerText;
    outputScrn2.innerText = firstNumber;
    }

    // dot button
dotBtn.addEventListener("click", functionForDot);
    // declaring the function
  function functionForDot(e){
    if(outputScrn2.innerText.includes("."))
      return;
    else 
      outputScrn2.innerText += e.target.innerText;
  }

// some usefull function for our program
   // addition
  function add(a,b){
    return (a+b);
  }
  // substraction
  function substract(a,b){
    return (a-b);
  }
  // multiplication
  function multiply(a,b){
    return (a*b);
  }
  // division
  function divide(a,b){
    return (a/b);
  }
// operate funciton which will find and execute the operator
function operate (operator, a, b){
  let result = 0;
  
  switch(operator){
    case "/":
      result = divide(a,b);
      break;
    case "*":
      result = multiply(a,b);
      break;
    case "-":
      result = substract(a,b);
      break;
    case "+":
      result = add(a,b);
      break;
  }
  return result;
} 
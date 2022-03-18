let num1 = 2
let num2 = 3
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2 
let result = document.getElementById('result-el');

function add(){

    result.textContent = num1 + num2;
    
}
function subtract(){

    result.textContent = num1 - num2;
    
}
function multiply(){

    result.textContent = num1 * num2;
    
}
function divide(){

    result.textContent = num1 / num2;
    
}
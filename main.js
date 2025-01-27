const resultScreen = document.getElementById('result');


const add = function (a, b) {

    return a + b

};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (array) {
    return array.reduce((total, curr) => { total * curr }, 0)
};

const divide = function (a, b) {
    return a / b;
};

var num1 = '';
var num2 = '';
var temp = '';
var operator = '';
var display = '';
function operate() {

    num2 = parseInt(temp);
    if (operator === '+') {
        display = num1 + num2;
    } else if (operator === '-') {
        display = num1 - num2;
    } else if (operator === '*') {
        display = num1 * num2;
    } else if (operator === '/') {
        if (num2 !== 0) {
            display = num1 / num2;
        } else {
            return "Error: Division by zero";
        }
    }
    console.log( "Temp: "+ temp+  " num1: "+num1+" num2: "+ num2 +"   ="+ display);
    clear();
    updateDisplay('', display);
    


}


function setOperator(x) {
   

 
    if (operator === '') {
    if(display==''){
        console.log("used temp: "+temp);
        num1 = parseInt(temp);
    }else{
        console.log("used "+resultScreen.innerText);

        num1=parseInt(resultScreen.innerText);
    }

        
        temp = '';
       

            operator = x;
            updateDisplay(display, x);
     }else{
       resultScreen.innerText=resultScreen.innerText .slice(0,-1);
       operator=x;
       updateDisplay(display,x);


     }

        
 


}

function appendNumber(x) {
    
   
    display = resultScreen.innerText
    if (operator === '' && display != '') {
        temp = display + x;

    } else if (operator === '') {

        temp = x;
    }
    else {

        temp += x;

    }
    console.log( "Temp: "+ temp+  " num1: "+num1+" num2: "+ num2);
    updateDisplay(display, x);


}
function updateDisplay(display, update) {

    if (update == '') {

        display = '';
        resultScreen.innerText = display;

    }

    resultScreen.innerText += update;




    display = resultScreen.innerText;
    



}
const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", () => clear())
function clear() {

    num1 = '';
    operator='';
    num2='';

   
    temp = '';

    resultScreen.innerText = ' ';

   

}






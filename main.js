const resultScreen=document.getElementById('result');






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
    return a/b;
};

var num1='';
var num2='';
var temp='';
var operator='';
var display='';
function operate() {
    
    num2=parseInt(temp);
    if (operator === '+') {
       display= num1 + num2;
    } else if (operator === '-') {
        display= num1 - num2;
    } else if (operator === '*') {
        display= num1 * num2;
    } else if (operator === '/') {
        if (num2 !== 0) {
            display= num1 / num2;
        } else {
            return "Error: Division by zero";
        }
    } 
    clear();
    updateDisplay('',display);
}

function setOperator(x){
    if(display!==''){
        num1=parseInt(temp);
        console.log("num 1 is "+num1)
         temp='';
        operator=x;
        updateDisplay(display,x);

    }
}

function appendNumber(x){
    display=resultScreen.innerText
    if(operator ==='' && display!=''){
        temp=display+ x;
       
    }else if(operator ==='')
    {
        temp=x;
    }
    else{

        temp+=x;

    } 
    updateDisplay(display,x);

    
}
function updateDisplay(display,update){
   
    if(update==''){
       
        display=''; 
        resultScreen.innerText=display;

    }
    
     resultScreen.innerText+=update;
    
   


     display=resultScreen.innerText;
  console.log("Display updated to: "+ display);



}
const clearBtn=document.getElementById("clear");
clearBtn.addEventListener("click",()=>clear())
function clear(){
   
    num1='';
    num2='';
    operator='';
    temp='';

   resultScreen.innerText=' ';
   
   console.log("Clear to: "+resultScreen.innerText);

}




//++++++++++++++++++++++ functions calculation ++++++++++++++++++++++++
function add(num1, num2) {
    // addition
    return num1 + num2;
}

function substract(num1, num2) {
    // subtraction
    return num1 - num2;
}

function multiply(num1, num2) {
    // multiplication
    return num1 * num2;
}

function divide(num1, num2) {
    // division

    if(num2 === 0) {
        RESULT = 0;
        CURRENT_NUMBER_STRING = '';
        CURRENT_NUMBER_FLOAT = 0;
        
        OPERATOR_ARRAY.length = 0;
        used = false;
        return display.textContent = 'Zero Divison ist  not allowed';
    } else {
        return num1 / num2;
    }
    
}

function operator(num1, num2, operator) {
    // call the right function based on the input operator
    if(operator === '+') {
       return add(num1, num2);
    } else if(operator === '-') {
        return substract(num1, num2);
    } else if(operator === '*') {
        return multiply(num1, num2);
    } else if(operator === '/') {
        return divide(num1, num2);
    }
}


function numberString(userInput) {
    /*The function manipulates the CURRENT_NUMBER_STRING
     * the CURRENT_NUMBER_STRINGS holds the numbers the user clicks on
     */
    if(userInput === '.' && !CURRENT_NUMBER_STRING.includes('.')) {
        CURRENT_NUMBER_STRING += userInput;   
        display.textContent = CURRENT_NUMBER_STRING;
    } else if(userInput === '.' && CURRENT_NUMBER_STRING.includes('.')) {

    } else {
        CURRENT_NUMBER_STRING += userInput;   
    
        display.textContent = CURRENT_NUMBER_STRING;
        console.log('RESULT: ' + RESULT);
        console.log('CURRENT_NUMBER_STRING: ' + CURRENT_NUMBER_STRING);
        console.log('CURRENT_NUMBER_FLOAT: ' + CURRENT_NUMBER_FLOAT);
    }
    
    
    
    

}

function evaluate(userInput) {
    // this function handles the input of operators
    // the arguments passed to this function are operators

    // store operators in array. the array will be updated with the new oprators
    OPERATOR_ARRAY.push(userInput);
     
    //if (USER_INPUT_HISTORY_ARRAY)

    console.log('OPERATOR_ARRAY: ' + OPERATOR_ARRAY);

    
    if (RESULT === 0 && used === false && CURRENT_NUMBER_STRING !=='' ||
        RESULT === 'Zero Divison ist  not allowed' && used === false && CURRENT_NUMBER_STRING !=='') {
    // this case will only be used in the beginning and after pressing the 'CLR' 
    // Button. When the user enters his first number and inputs an operator
    // the RESULT needs to be updated to the CURRENT_NUMBER_STRING value.     
        
        RESULT = parseFloat(CURRENT_NUMBER_STRING);
        CURRENT_NUMBER_STRING = '';
        CURRENT_NUMBER_FLOAT = 0;
        // change state in order to avoid this case
        used = true;

        //console.log('RESULT: ' + RESULT);
    } else if(RESULT === 0 && CURRENT_NUMBER_STRING === '' && OPERATOR_ARRAY.length === 1){
    // this case is used when user enters an operator without entering a number 
    // first. it prevents the calculator malfunctioning
        clearAll();
        display.textContent = 'Please Start by entering a number';

    } else if(RESULT !== 0 && CURRENT_NUMBER_STRING ==='' && OPERATOR_ARRAY.length === 2) {
    // this case???
    // Remove first element of array
        OPERATOR_ARRAY.shift()
        
    } else {
        // this case is the general calculation
        // 
        CURRENT_NUMBER_FLOAT = parseFloat(CURRENT_NUMBER_STRING);
        interimResult = operator(RESULT, CURRENT_NUMBER_FLOAT, OPERATOR_ARRAY[0]);
        RESULT = interimResult;
       
        display.textContent = RESULT;
        // Clear CURRENT_NUMBER_STRING
        CURRENT_NUMBER_STRING = '';
        CURRENT_NUMBER_FLOAT = 0;

        // Remove first element of array
        OPERATOR_ARRAY.shift()

        //console.log('RESULT: ' + RESULT);
        //console.log('Shifted array: ' + OPERATOR_ARRAY)
    }
}

function equalSign() {
    // this function calculates the current result and resets
    // variables
    
    if (RESULT === 0 && 
    // this case is used when user the user presses the equal button first.
        CURRENT_NUMBER_STRING === '' && 
        OPERATOR_ARRAY.length === 0) {
            display.textContent = 'Please Start by entering a number';

    } else if(CURRENT_NUMBER_STRING === '' && OPERATOR_ARRAY.length === 1) {

    
    } else {
    // this case is used when the user has inputted data and wants to know the 
    // current RESULT

        // convert current_Number_STRING into a float
        currentNumberFloat = parseFloat(CURRENT_NUMBER_STRING)
        interimResult = operator(RESULT, currentNumberFloat, OPERATOR_ARRAY[0]);
        
        display.textContent = interimResult.toPrecision(3);
        RESULT = 0;
        CURRENT_NUMBER_STRING = '';
        CURRENT_NUMBER_FLOAT = 0;
        OPERATOR_ARRAY.length = 0;
        used = false;

    }

    
  
    
}


function clearAll() {
    // Clear All data
    
    RESULT = 0;
    CURRENT_NUMBER_STRING = '';
    CURRENT_NUMBER_FLOAT = 0;
    display.textContent = RESULT;
    OPERATOR_ARRAY.length = 0;
    used = false;

    
    console.log('CLEAR');
    console.log('RESULT: ' + RESULT);
    console.log('CURRENT_NUMBER_STRING: ' + CURRENT_NUMBER_STRING);
    console.log('CURRENT_NUMBER_FLOAT: ' + CURRENT_NUMBER_FLOAT);
    console.log('OPERATOR_ARRAY: ' + OPERATOR_ARRAY);

}
//+++++++++++++++++++++++ functions controls ++++++++++++++++++++++++++++++
function writeToDisplay(btnInput) {
    /*  The CURRENT_NUMBER_STRING variable will be filled with the numbers the 
        user clicks until the user clicks on an operator
        If the user clicks on an operator the operator will be pushed into the 
        operator array.
        calculation will be executed
     */
    console.log(typeof(btnInput))
    console.log(parseFloat(btnInput))

    USER_INPUT_HISTORY_ARRAY.push(btnInput);
    // Ceck if btnInput is a number or an operator
    if (parseFloat(btnInput) || btnInput === '0' || btnInput === '.') {

        numberString(btnInput);
        // console.log('CURRENT_NUMBER_STRING: ' + CURRENT_NUMBER_STRING);
        // console.log('CURRENT_NUMBER_FLOAT: ' + CURRENT_NUMBER_FLOAT);
    } else {
    

        evaluate(btnInput);

        

    }


    
}



//+++++++++++++++++++++++ general logic +++++++++++++++++++++++++++++++++++
// Global variable current number as a string  
let CURRENT_NUMBER_STRING = '';
// Global variable that saves the current number as a float
let CURRENT_NUMBER_FLOAT = 0;
// Global variable that stores the overall result
let RESULT = 0;
// Current  Operator
let CURRENT_OPERATOR ='';
// Operator Array
let OPERATOR_ARRAY = [];
// user input history array, needs to be checked if opeartors a cllicked in a row
let USER_INPUT_HISTORY_ARRAY = [];
// state for first use of evaluate() function
let used = false; 

// select the display of the calculator 
let display = document.querySelector('.display p');
display.textContent = 'Please Start by entering a number';

// insert numbers
const btn_0 = document.querySelector('.btn-0');
btn_0.addEventListener('click',function(){writeToDisplay('0')});

const btn_1 = document.querySelector('.btn-1');
btn_1.addEventListener('click',function(){writeToDisplay('1')});

const btn_2 = document.querySelector('.btn-2');
btn_2.addEventListener('click',function(){writeToDisplay('2')});

const btn_3 = document.querySelector('.btn-3');
btn_3.addEventListener('click',function(){writeToDisplay('3')});

const btn_4 = document.querySelector('.btn-4');
btn_4.addEventListener('click',function(){writeToDisplay('4')});

const btn_5 = document.querySelector('.btn-5');
btn_5.addEventListener('click',function(){writeToDisplay('5')});

const btn_6 = document.querySelector('.btn-6');
btn_6.addEventListener('click',function(){writeToDisplay('6')});

const btn_7 = document.querySelector('.btn-7');
btn_7.addEventListener('click',function(){writeToDisplay('7')});

const btn_8 = document.querySelector('.btn-8');
btn_8.addEventListener('click',function(){writeToDisplay('8')});

const btn_9 = document.querySelector('.btn-9');
btn_9.addEventListener('click',function(){writeToDisplay('9')});

// insert operators
const btnAdd = document.querySelector('.btn-add');
btnAdd.addEventListener('click',function(){writeToDisplay('+')});

const btnSubstract = document.querySelector('.btn-substract');
btnSubstract.addEventListener('click',function(){writeToDisplay('-')});

const btnMultiply = document.querySelector('.btn-multiply');
btnMultiply.addEventListener('click',function(){writeToDisplay('*')});

const btnDivide = document.querySelector('.btn-divide');
btnDivide.addEventListener('click',function(){writeToDisplay('/')});

const btnPoint = document.querySelector('.btn-point');
btnPoint.addEventListener('click',function(){writeToDisplay('.')});

// write evalute function
const btnEvaluate = document.querySelector('.btn-evaluate');
btnEvaluate.addEventListener('click',function(){equalSign()});

const btnClear = document.querySelector('.btn-clr');
btnClear.addEventListener('click',function(){clearAll()});

// Implementation 
// zero division 
// FIX following bug: 8 = 
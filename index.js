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
    return num1 / num2;
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



//+++++++++++++++++++++++ functions controls ++++++++++++++++++++++++++++++
function writeToDisplay(btnInput) {
    //console.log('input btn:' + btnInput)
    //console.log(typeof(btnInput))

    //checkInput = parseFloat(btnInput)
    //console.log(checkInput)

    let display = document.querySelector('.display p');

    // Ceck if btnInput is a number or an operator
    if (parseFloat(btnInput)) {
        // if btnInput is a number save it to current term
        //console.log('is number');
        CURRENT_NUMBER_STRING += btnInput;
        
         
        display.textContent = CURRENT_NUMBER_STRING;

        console.log('CURRENT_NUMBER_STRING: ' + CURRENT_NUMBER_STRING);
        console.log('CURRENT_NUMBER_FLOAT: ' + CURRENT_NUMBER_FLOAT);
    

        

    } else if(btnInput === '=') {
        // turn string to float in order to call the function
        CURRENT_NUMBER_FLOAT = parseFloat(CURRENT_NUMBER_STRING);

        if (RESULT === 0) {
            // if user press '=' as first input
            display.textContent = RESULT;
        } else {
            // evaluate current result do not change state of variables
            console.log(btnInput);
            let evaluate = operator(RESULT, CURRENT_NUMBER_FLOAT, OPERATOR_ARRAY[0]);
            console.log(evaluate);
            display.textContent = evaluate;
        }
        
    
    } else {
        /**if btnInput is an operator call the operator() function
         * Save the result to a global variable
         * clear CURRENT_NUMBER_STRING so that a new number can saves 
         */
        // CURRENT_OPERATOR += btnInput;
        // console.log('CURRENT_OPERATOR: ' + CURRENT_OPERATOR)

        OPERATOR_ARRAY.push(btnInput);
        console.log('OPERATOR_ARRAY: ' + OPERATOR_ARRAY);


        if (RESULT === 0) {
            RESULT = parseFloat(CURRENT_NUMBER_STRING);
            console.log('RESULT: ' + RESULT);
            CURRENT_NUMBER_STRING = '';
        } else {
            CURRENT_NUMBER_FLOAT = parseFloat(CURRENT_NUMBER_STRING);
            interimResult = operator(RESULT, CURRENT_NUMBER_FLOAT, OPERATOR_ARRAY[0]);
            RESULT = interimResult;
            console.log('RESULT: ' + RESULT);
            display.textContent = RESULT;
            // Clear CURRENT_NUMBER_STRING
            CURRENT_NUMBER_STRING = '';
            CURRENT_NUMBER_FLOAT = 0;

            // Remove first element of array
            OPERATOR_ARRAY.shift()
            console.log('Shifted array: ' + OPERATOR_ARRAY)
        }

        

    }


    
}



//+++++++++++++++++++++++ general logic +++++++++++++++++++++++++++++++++++
// Global variable that stores the current 'Display' string 
let STRING_DISPLAY = '';
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
btnEvaluate.addEventListener('click',function(){writeToDisplay('=')});



// btn_7.addEventListener('click',() => {
//     console.log(7);
//     STRING_DISPLAY += '7';
//     console.log(STRING_DISPLAY)
//     let display = document.querySelector('.display p'); 
//     console.log(display)
//     //let textDisplay = display.
//     display.textContent = STRING_DISPLAY;

// }) 
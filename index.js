//++++++++++++++++++++++ functions calculation ++++++++++++++++++++++++
function add(num1, num2) {
    return num1 + num2;
}

function substract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// console.log(add(4, 2))
// console.log(substract(2, 4))
// console.log(multiply(2, 4))
// console.log(divide(4, 2)

function operator(num1, num2, operator) {
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

function evaluateTerm(term) {
    console.log(term)
    let termArray = term.split('');
    console.log(termArray)
    operator(parseFloat())
}


// console.log(operator(4,2,'+'))
// console.log(operator(4, 2, '-'))
// console.log(operator(2, 4, '*'))
// console.log(operator(4, 2, '/'))


//+++++++++++++++++++++++ functions controls ++++++++++++++++++++++++++++++
function writeToDisplay(btnInput) {
    console.log('input btn:' + btnInput)


    // String that is shown on Calculator display
    //STRING_DISPLAY += btnInput;
    // string that saves the terms
    CURRENT_TERM += btnInput;
    console.log('Current Term: ' + CURRENT_TERM)
    
    // check if 1st or 2nd term is defined
    if(CURRENT_TERM.charAt(CURRENT_TERM.length-1) === '+' ||
       CURRENT_TERM.charAt(CURRENT_TERM.length-1) === '-' ||
       CURRENT_TERM.charAt(CURRENT_TERM.length-1) === '*' ||
       CURRENT_TERM.charAt(CURRENT_TERM.length-1) === '/' ){

        console.log('lol')
        // get term
        let slicedString = CURRENT_TERM.slice(0, -1);
        // get operation
        let operation = CURRENT_TERM.slice(-1);
        console.log('current operator: ' + operation)

        // test
        console.log('sliced String ' + slicedString)
        console.log('String Display ' + STRING_DISPLAY);
        console.log('operators')

        // Array that holds the two values that are supposed to be combined 
        ARR_VAL.push(slicedString);
        console.log(ARR_VAL);

        // reset current Term
        CURRENT_TERM = ''
        
        /**
         * if ARR_VAL holds two values call the operator function with the 
         * corresponding operator
         */
        if(ARR_VAL.length == 2) {
            // evaluate term
            let evaluation = operator(
                parseFloat(ARR_VAL[0]), parseFloat(ARR_VAL[1]), operation)
            console.log(evaluation)
            // Update global RESULT variable
            RESULT += evaluation
            console.log('RESULT: ' + RESULT)    
            // Reset ARR_VAL    
            ARR_VAL= [];

            let display = document.querySelector('.display p');
            display.textContent = evaluation;

        }
        STRING_DISPLAY += btnInput;
    } else {
        STRING_DISPLAY += btnInput;
        //ARR_STR_DIS.push(btnInput)

        console.log(ARR_VAL)
        let display = document.querySelector('.display p');
        display.textContent = STRING_DISPLAY;
    }
    
    

    //let ARR_STR_DIS = STRING_DISPLAY.split('').filter(ele => ele !== ' ')
    


    // display STRING_DISPLAY
    


    
}



//+++++++++++++++++++++++ general logic +++++++++++++++++++++++++++++++++++
// Global variable that stores the current 'Display' string 
let STRING_DISPLAY = '';
// Global variable that saves the different terms  
let CURRENT_TERM = '';
// Global variable that stores the overall result
let RESULT = 0;
// Array that stores the parts of the term that is supposed to be calculated
let ARR_VAL = [];

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
btnEvaluate.addEventListener('click',function(){evaluateTerm(STRING_DISPLAY)});



// btn_7.addEventListener('click',() => {
//     console.log(7);
//     STRING_DISPLAY += '7';
//     console.log(STRING_DISPLAY)
//     let display = document.querySelector('.display p'); 
//     console.log(display)
//     //let textDisplay = display.
//     display.textContent = STRING_DISPLAY;

// }) 
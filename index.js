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

// console.log(operator(4,2,'+'))
// console.log(operator(4, 2, '-'))
// console.log(operator(2, 4, '*'))
// console.log(operator(4, 2, '/'))


//+++++++++++++++++++++++ functions controls ++++++++++++++++++++++++++++++
function writeToDisplay(btnNum) {
    console.log(btnNum)
    STRING_DISPLAY += `${btnNum}`;
    let display = document.querySelector('.display p');
    display.textContent = STRING_DISPLAY;
}

//+++++++++++++++++++++++ general logic +++++++++++++++++++++++++++++++++++
// Global variable that stores the 'Display' string 
let STRING_DISPLAY = ''

const btn_7 = document.querySelector('.btn-7');
btn_7.addEventListener('click',function(){writeToDisplay('7')})

// btn_7.addEventListener('click',() => {
//     console.log(7);
//     STRING_DISPLAY += '7';
//     console.log(STRING_DISPLAY)
//     let display = document.querySelector('.display p'); 
//     console.log(display)
//     //let textDisplay = display.
//     display.textContent = STRING_DISPLAY;

// }) 
// fucntions
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

console.log(operator(4,2,'+'))
console.log(operator(4, 2, '-'))
console.log(operator(2, 4, '*'))
console.log(operator(4, 2, '/'))
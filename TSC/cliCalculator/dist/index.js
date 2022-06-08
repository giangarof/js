"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = require("readline-sync");
function main() {
    const firstString = (0, readline_sync_1.question)('Enter first number:\n');
    const operator = (0, readline_sync_1.question)('Enter operator:\n');
    const secondString = (0, readline_sync_1.question)('Enter second number\n');
    //const firstNum = isNumber(firstString);
    //const op = isOperator(operator);
    const input = isNumber(firstString) && isOperator(operator) && isNumber(secondString);
    if (input) {
        //console.log('is valid')
        const firstNum = parseInt(firstString);
        const secondNum = parseInt(secondString);
        const result = calculate(firstNum, operator, secondNum);
        console.log(result);
    }
    else {
        console.log('Invalid input\n');
        main();
    }
}
;
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
    }
}
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '/':
        case '*':
            return true;
        default: return false;
    }
}
function isNumber(str) {
    const maybeNum = parseInt(str);
    const isNum = !isNaN(maybeNum);
    return isNum;
}
main();

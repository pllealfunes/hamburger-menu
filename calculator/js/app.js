"use strict"

const buttons = document.querySelectorAll('button');
let input = document.querySelector('#userInput');
let firstNum = '';
let secondNum = '';
let operator = '';
let total = '';
let secOperator = '';

buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
        if (isNaN(Number(btn.value)) && operator == '' && btn.value != '.' && btn.value != '%' && btn.value != '=' && btn.value != 'back') {
            operator += btn.value;
        } else if (operator === '' && btn.value != '=' && btn.value != 'back') {
            if (!firstNum.includes('.')) {
                firstNum += btn.value;
                input.value = firstNum;
            } else {
                firstNum += btn.value;
                input.value = firstNum;
            }
        } else if (firstNum != '' && operator != '' && btn.value != '=' && btn.value != 'back') {
            if (!secondNum.includes('.')) {
                secondNum += btn.value;
                input.value = secondNum;
            } else {
                secondNum += btn.value;
                input.value = secondNum;
            }
        } else if (btn.value === '=' && firstNum != '' && secondNum != '') {
            findAnswer();
            secondNum = '';
            operator = '';
        } else if (isNaN(Number(btn.value)) && operator != '' && btn.value != '.' && btn.value != '%' && btn.value != 'back') {
            findAnswer();
            secondNum = '';
            operator = btn.value
        } else if (btn.value === 'back') {
            if (firstNum.length > 0 && operator == '' && secondNum.length == 0) {
                input.value = input.value.substring(0, input.value.length - 1);
                firstNum = input.value;
            } else if (firstNum.length > 0 && operator != '' && secondNum.length == 0) {
                operator = '';
                input.value = firstNum;
            } else if (firstNum.length > 0 && operator != '' && secondNum.length > 0) {
                input.value = input.value.substring(0, input.value.length - 1);
                secondNum = input.value;
                if (secondNum.length == 0) {
                    input.value = operator;
                }
            } else {
                console.log('try again 1');
            }
        } else {
            console.log('try again 2');
        }
        if (btn.value === 'C' || btn.value === 'c') {
            firstNum = '';
            secondNum = '';
            operator = '';
            input.value = '';
        }
        console.log('The first number is: ' + firstNum);
        console.log('The second number is: ' + secondNum);
        console.log('The operator number is: ' + operator);
        console.log('The equation is: ' + total);
        console.log(input.value.length);
    });
});

function findAnswer() {
    switch (true) {
        case operator === '+':
            total = Number(firstNum) + Number(secondNum);
            firstNum = total;
            input.value = total;
            break;
        case operator === '-':
            total = Number(firstNum) - Number(secondNum);
            firstNum = total;
            input.value = total;
            break;
        case operator === 'x':
            if (firstNum.includes('%')) {
                total = (Number(firstNum.substring(0, firstNum.length - 1) / 100)) * Number(secondNum);
                firstNum = total;
                input.value = total;
            } else if (secondNum.includes('%')) {
                total = Number(firstNum) * (Number(secondNum.substring(0, secondNum.length - 1) / 100));
                firstNum = total;
                input.value = total;
            } else {
                total = Number(firstNum) * Number(secondNum);
                firstNum = total;
                input.value = total;
            }
            break;
        case operator === '/':
            if (Number(secondNum) == 0) {
                console.log("Cannot divide by zero!");
            } else {
                total = Number(firstNum) / Number(secondNum);
                firstNum = total;
                input.value = total;
            }
            break;
        default:
            total = 0;
            firstNum = total;
            input.value = total;
    }
}
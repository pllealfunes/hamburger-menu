"use strict"

const buttons = document.querySelectorAll('button');
let input = document.querySelector('#userInput');
let firstNum = '';
let secondNum = '';
let operator = '';
let total = '';

buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
        if (isNaN(Number(btn.value)) && operator == '' && btn.value) {
            operator += btn.value;
        } else if (Number(btn.value) && operator === '') {
            firstNum += btn.value;
            input.value = firstNum;
        } else if (firstNum != '' && operator != '' && Number(btn.value) || btn.value === '0') {
            secondNum += btn.value;
            input.value = secondNum;
        } else if (btn.value === '=' && firstNum != '' && secondNum != '') {
            findAnswer();
            secondNum = '';
            operator = '';
        } else if (isNaN(Number(btn.value)) && operator != '') {
            findAnswer();
            secondNum = '';
            operator = btn.value
        } else {
            console.log('try again');
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
        console.log(input.value);
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
            total = Number(firstNum) * Number(secondNum);
            firstNum = total;
            input.value = total;
            break;
        case operator === '/':
            total = Number(firstNum) / Number(secondNum);
            firstNum = total;
            input.value = total;
            break;
        default:
            total = 0;
            firstNum = total;
            input.value = total;
    }
}
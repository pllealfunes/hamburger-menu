"use strict"

const buttons = document.querySelectorAll('button');
let input = document.querySelector('#userInput');
let firstNum = '';
let secondNum = '';
let operator = '';
let equation;
buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
        if (isNaN(Number(btn.value)) && operator === '') {
            operator += btn.value;
            input.value += operator;
        } else if (operator === '') {
            firstNum += btn.value;
            //input.value += firstNum;
        } else if (firstNum != '' && operator != '' && Number(btn.value) || btn.value === '0') {
            secondNum += btn.value;
            input.value += secondNum;
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
            equation = '';
            input.value = '';
            console.log('hi');
        }
        console.log('The first number is: ' + firstNum);
        console.log('The second number is: ' + secondNum);
        console.log('The operator number is: ' + operator);
        console.log('The equation is: ' + equation);
        console.log(firstNum);
    });
});

function findAnswer() {
    switch (true) {
        case operator === '+':
            equation = Number(firstNum) + Number(secondNum);
            console.log(equation);
            firstNum = equation;
            input.value = equation;
            console.log(equation);
            break;
        case operator === '-':
            equation = Number(firstNum) - Number(secondNum);
            console.log(equation);
            firstNum = equation;
            input.value = equation;
            console.log(equation);
            break;
        case operator === 'x':
            equation = Number(firstNum) * Number(secondNum);
            console.log(equation);
            firstNum = equation;
            input.value = equation;
            console.log(equation);
            break;
        case operator === '/':
            equation = Number(firstNum) / Number(secondNum);
            console.log(equation);
            firstNum = equation;
            input.value = equation;
            console.log(equation);
            break;
        default:
            console.log(equation);
            equation === 0;
            firstNum = equation;
            input.value = equation;
            console.log(equation);
    }
}
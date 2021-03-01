"use strict"

const buttons = document.querySelectorAll('button');
let input = document.querySelector('#userInput');
let firstNum = '';
let secondNum = '';
let operator = '';
let equation;
buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
        if (isNaN(Number(btn.innerText)) && operator === '') {
            operator += btn.innerText;
            input.value += operator;
        } else if (firstNum === '' || firstNum != '' && secondNum === '' && operator === '' && Number(btn.innerText)) {
            firstNum += Number(btn.innerText);
            input.value = firstNum;
        } else if (secondNum === '' || secondNum != '' && Number(btn.innerText) && firstNum != '' && operator != '') {
            secondNum += Number(btn.innerText);
            input.value += secondNum;
        } else if (btn.innerText === '=' && firstNum != '' && secondNum != '' && operator != '') {
            findAnswer();
            secondNum = '';
            operator = '';
        } else {
            console.log('try again');
        }

        if (btn.innerText === 'C' || btn.innerText === 'c') {
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
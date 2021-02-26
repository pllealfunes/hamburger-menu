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
            operator = btn.innerText;
        } else if (firstNum === '' && Number(btn.innerText)) {
            firstNum += Number(btn.innerText);
        } else if (secondNum === '' && Number(btn.innerText)) {
            secondNum += Number(btn.innerText);
        } else if (btn.innerText === '=' && firstNum != '' && secondNum != '' && operator != '') {
            findAnswer();
            //console.log("hi");

        }

        else {
            console.log('try again');
        }
        //console.log('This is the first number:' + firstNum);
        //console.log('This is the second number:' + secondNum);
        //console.log('This is the operator:' + operator);
    });
});

function findAnswer() {
    switch (true) {
        case operator === '+':
            equation = Number(firstNum) + Number(secondNum);
            console.log(equation);
            break;
        case operator === '-':
            equation = Number(firstNum) - Number(secondNum);
            console.log(equation);
            break;
        case operator === 'x':
            equation = Number(firstNum) * Number(secondNum);
            console.log(equation);
            break;
        case operator === '/':
            equation = Number(firstNum) / Number(secondNum);
            console.log(equation);
            break;
        default:
            equation === 0;
            console.log(equation);
    }
}
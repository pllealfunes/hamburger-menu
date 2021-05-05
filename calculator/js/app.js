"use strict"

let input = document.querySelector('#userInput');
let operatorBtn = document.querySelectorAll('.btn-operator');
let numberBtn = document.querySelectorAll('.btn-number');
let otherBtn = document.querySelectorAll('.btn-other');
let hint = document.querySelector('.hint');
let firstNum = '';
let secondNum = '';
let operator = '';
let total = '';

numberBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
        if (operator == '') {
            firstNum += btn.value;
            input.value = firstNum;
            console.log(typeof firstNum);
        }
        else {
            secondNum += btn.value;
            input.value = secondNum;
        }
    });
});

operatorBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
        if (firstNum !== '' && operator == '') {
            operator = btn.value;
        } else if (total != '' && secondNum == '' && operator == '') {
            firstNum = total;
            operator = btn.value;
        } else if (firstNum !== '' && secondNum != '' && operator != '') {
            findAnswer();
            firstNum = total;
            secondNum = '';
            operator = btn.value;
        } else {
            operator = '';
        }
    });
});

otherBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
        if (operator == '') {
            if (firstNum.includes('.') && btn.value == '.') {
                btn.disabled = true;
                firstNum += btn.value;
            } else if (firstNum.includes('%') || firstNum.includes('.') && btn.value == '%') {
                btn.disabled = true;
                firstNum += btn.value;
            } else {
                firstNum += btn.value;
                input.value = firstNum;
            }
            btn.disabled = false;
        } //Add decimal to secondNum only once
        else if (firstNum != '' && operator != '') {
            if (secondNum.includes('.') && btn.value == '.') {
                btn.disabled = true;
                secondNum += btn.value;
            } else if (secondNum.includes('%') || secondNum.includes('.') && btn.value == '%') {
                btn.disabled = true;
                secondNum += btn.value;
            } else {
                secondNum += btn.value;
                input.value = secondNum;
            }
            btn.disabled = false;
        }
    });
});

document.querySelector(".clear-btn").addEventListener("click", function () {
    firstNum = '';
    secondNum = '';
    operator = '';
    input.value = '';
});

document.querySelector(".btn-back").addEventListener("click", function () {
    if (firstNum.length > 0 && operator == '' && secondNum.length == 0) {
        input.value = input.value.substring(0, input.value.length - 1);
        firstNum = input.value;
    } else if (firstNum.length > 0 && operator != '' && secondNum.length == 0) {
        operator = '';
        input.value = firstNum;
    } else if (firstNum.length > 0 && operator != '' && secondNum.length > 0) {
        input.value = input.value.substring(0, input.value.length - 1);
        secondNum = input.value;
        console.log(secondNum);
        if (secondNum.length == 0) {
            input.value = operator;
        }
    } else {
        hint.style.display = 'block';
        setTimeout(function () { hint.style.display = 'none' }, 2000);
        firstNum = '';
        secondNum = '';
        operator = '';
        input.value = '';
    }
});

document.querySelector(".equals-btn").addEventListener("click", function () {
    findAnswer();
    firstNum = '';
    secondNum = '';
    operator = '';
});

function findAnswer() {
    switch (true) {
        case operator === '+':
            total = Number(firstNum) + Number(secondNum);
            firstNum = total.toString();
            input.value = total.toString();
            break;
        case operator === '-':
            total = Number(firstNum) - Number(secondNum);
            firstNum = total.toString();
            input.value = total;
            break;
        case operator === 'x':
            if (firstNum.toString().indexOf('%') > -1) {
                total = (Number(firstNum.substring(0, firstNum.length - 1) / 100)) * Number(secondNum);
                if (total.toString().includes('.')) {
                    total.toFixed(2);
                    firstNum = total.toString();
                    input.value = total.toString();
                } else {
                    firstNum = total.toString();
                    input.value = total.toString();
                }
            } else if (secondNum.toString().indexOf('%') > -1) {
                total = Number(firstNum) * (Number(secondNum.substring(0, secondNum.length - 1) / 100));
                if (total.toString().includes('.')) {
                    total.toFixed(2);
                    firstNum = total.toString();
                    input.value = total.toString();
                } else {
                    firstNum = total.toString();
                    input.value = total.toString();
                }
            } else {
                total = Number(firstNum) * Number(secondNum);
                firstNum = total.toString();
                input.value = total.toString();
            }
            break;
        case operator === '/':
            if (Number(secondNum) == 0) {
                hint.style.display = 'block';
                setTimeout(function () { hint.style.display = 'none' }, 2000);
                input.value = '';
            } else {
                total = Number(firstNum) / Number(secondNum);
                if (total.toString().includes('.')) {
                    Number(total).toFixed(2);
                    firstNum = Number(total).toFixed(2);
                    input.value = Number(total).toFixed(2);
                } else {
                    firstNum = total.toString();
                    input.value = total.toString();
                }
            }
            break;
        default:
            total = 0;
            firstNum = total;
            input.value = total;
    }
}
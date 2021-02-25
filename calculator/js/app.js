"use strict"

const buttons = document.querySelectorAll('button');
let input = document.querySelector('#userInput');

buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
        const btnValue = parseInt(btn.innerHTML);
        console.log(btnValue);
        input.innerHTML = btnValue;
    });
});
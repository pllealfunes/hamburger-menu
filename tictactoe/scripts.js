"use strict"
let xBox = document.querySelector('#chose-x');
let oBox = document.querySelector('#chose-o');
let buttons = document.querySelectorAll('.gameBoard');
let playAgain = document.querySelector('#play-again');
let message = document.querySelector('#message');
var btnsArr = Array.from(buttons);
let playerArr = [];
let compArr = [];
var playerBox;
var compBox;
let winConditions = [
    ['boxOne', 'boxTwo', 'boxThree'],
    ['boxFour', 'boxFive', 'boxSix'],
    ['boxSeven', 'boxEight', 'boxNine'],
    ['boxOne', 'boxFour', 'boxSeven'],
    ['boxTwo', 'boxFive', 'boxEight'],
    ['boxThree', 'boxSix', 'boxNine'],
    ['boxOne', 'boxFive', 'boxNine'],
    ['boxThree', 'boxFive', 'boxSeven']
];



buttons.forEach(function (btn) {

    btn.addEventListener('click', function play() {

        if (btn.innerText === "" && btn.innerText != 'O' && btn.innerText != 'X' && btnsArr.length > 1) {
            btn.innerHTML = 'X';
            btn.setAttribute('class', 'playerChose');
            var spot = btnsArr.indexOf(btn);
            btnsArr.splice(spot, 1);
            playerArr.push(btn.id);
            checkForWin(playerArr);
            if (checkForWin(playerArr)) {
                message.innerText = 'Winner Player X';
                setTimeout(function () { window.location.reload() }, 1000);
            };

            let compMove = btnsArr[Math.floor(Math.random() * btnsArr.length)];
            compMove.innerHTML = 'O'
            compMove.setAttribute('class', 'compChose');
            let compChose = btnsArr.indexOf(compMove);
            btnsArr.splice(compChose, 1);
            compArr.push(compMove.id);
            checkForWin(compArr);
            if (checkForWin(compArr)) {
                message.innerText = 'Winner Player O';
                setTimeout(function () { message.innerText = 'Winner Player O'; window.location.reload() }, 1000);
            };

        } else if (btn.innerText === "" && btn.innerText != 'O' && btn.innerText != 'X' && btnsArr.length == 1) {
            btn.innerHTML = 'X';
            btn.setAttribute('class', 'playerChose');
            var spot = btnsArr.indexOf(btn);
            btnsArr.splice(spot, 1);
            playerArr.push(btn.id);
            checkForWin(playerArr);
            checkForWin(compArr);
            if (checkForWin(playerArr)) {
                message.innerText = 'Winner Player X';
                setTimeout(function () { message.innerText = '2. Winner Player X'; window.location.reload() }, 1000);
            } else if (checkForWin(compArr)) {
                message.innerText = 'Winner Player O';
                setTimeout(function () { message.innerText = '2. Winner Player O'; window.location.reload() }, 1000);
            } else {
                message.innerText = 'No Winner';
                setTimeout(function () { message.innerText = 'No Winner'; window.location.reload() }, 1000);
            }
        } else {
            message.innerText = 'Try Again';
            setTimeout(function () { message.innerText = ''; }, 1000);

        }

    });
});

function checkForWin(whichPlayer) {
    for (let i = 0; i < winConditions.length; i++) {
        for (var j = 0; j < winConditions[i].length; j++) {
            if (whichPlayer.includes(winConditions[i][0]) && whichPlayer.includes(winConditions[i][1]) && whichPlayer.includes(winConditions[i][2]) && whichPlayer.length >= 3) {
                return true;
            } else if (!whichPlayer.includes(winConditions[i][0]) && whichPlayer.includes(winConditions[i][1]) && whichPlayer.includes(winConditions[i][2]) && whichPlayer.length >= 3) {
                break;
            } else {
                false;
            }
        }
    }
}


playAgain.addEventListener('click', function () {
    window.location.reload();
});

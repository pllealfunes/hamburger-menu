'use strict'

generateGrid(16);

document.querySelector('#new-grid').addEventListener('click', event => {
    document.querySelector('#container').innerHTML = '';
    if (document.querySelector('#grid-number').value >= 2 && document.querySelector('#grid-number').value <= 64) {
        generateGrid(document.querySelector('#grid-number').value);
    } else {
        generateGrid(16);
    }
    document.querySelector('#grid-number').value = '';
})

function generateGrid(numDivs) {
    for (let number = 0; number < numDivs; number++) {
        let column = document.createElement('div');
        document.querySelector('#container').appendChild(column);
        for (let i = 0; i < numDivs; i++) {
            let block = document.createElement('div');
            block.classList.add('block');
            let height = 500 / parseInt(numDivs);
            block.style.height = `${height}px`;
            block.style.width = `${height}px`;
            column.appendChild(block);
        }
        document.querySelectorAll('.block').forEach(block => {
            block.addEventListener('mouseover', event => {
                block.style.backgroundColor = "#989898";
            })
        })
    }
}

document.querySelector('#clear-board').addEventListener('click', event => {
    document.querySelectorAll('.block').forEach(block => {
        block.style.backgroundColor = "";
        block.addEventListener('mouseover', event => {
            block.style.backgroundColor = "#989898";
        })
        block.style.backgroundColor = "#989898";
    })
})

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

document.querySelector('#rainbow').addEventListener('click', event => {
    document.querySelectorAll('.block').forEach(block => {
        block.addEventListener('mouseover', event => {
            block.style.backgroundColor = `rgb(${randomNumber(0, 250)}, ${randomNumber(0, 250)}, ${randomNumber(0, 250)})`;
        })
    })
})




'use strict'

generateGrid(16);

document.querySelector('#new-grid').addEventListener('click', event => {
    document.querySelector('#container').innerHTML = '';
    generateGrid(document.querySelector('#block-number').value);
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
                block.style.backgroundColor = "red";
            })
        })
    }
}

document.querySelector('#clear-board').addEventListener('click', event => {
    document.querySelectorAll('.block').forEach(block => {
        block.style.backgroundColor = "";
    })
})


//function genereateGrid() {
//let numDivs = document.querySelector('#block-number').value;
document.querySelector('#new-grid').addEventListener('click', event => {
    if (document.querySelector('#container').length > 0) {
        //document.querySelector('.block').parentNode.removeChild('.block');
        console.log('hi');
    } else {
        let numDivs = document.querySelector('#block-number').value;
        for (let number = 0; number < numDivs; number++) {
            let column = document.createElement('div');
            document.querySelector('#container').appendChild(column);
            for (let i = 0; i < numDivs; i++) {
                let block = document.createElement('div');
                block.classList.add('block');
                block.style.border = '1px solid';
                block.style.borderColor = 'pink';
                block.style.width = '30px';
                block.style.height = '30px';
                column.appendChild(block);
            }
        }
    }

})
//genereateGrid();
/*for (let number = 0; number < numDivs; number++) {
    let column = document.createElement('div');
    document.querySelector('#container').appendChild(column);
    for (let i = 0; i < numDivs; i++) {
        let block = document.createElement('div');
        block.classList.add('block');
        block.style.border = '1px solid';
        block.style.borderColor = 'pink';
        block.style.width = '30px';
        block.style.height = '30px';
        column.appendChild(block);
    }
}*/
//}

document.querySelectorAll('.block').forEach(block => {
    block.addEventListener('mouseover', event => {
        block.style.backgroundColor = "red";
    })
})

document.querySelector('#clear-board').addEventListener('click', event => {
    document.querySelectorAll('.block').forEach(block => {
        block.style.backgroundColor = "";
    })
})


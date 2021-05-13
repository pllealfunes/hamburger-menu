let numDivs;


for (let number = 0; number < 16; number++) {
    let column = document.createElement('div');
    document.querySelector('#container').appendChild(column);
    for (let i = 0; i < 16; i++) {
        let block = document.createElement('div');
        block.classList.add('block');
        block.style.border = '1px solid';
        block.style.borderColor = 'pink';
        block.style.width = '30px';
        block.style.height = '30px';
        column.appendChild(block);
    }
}

document.querySelector('.block').addEventListener("mouseover", mouseOver);

function mouseOver() {
    document.querySelector('.block').style.backgroundColor = "red";
}

/*function mouseOut() {
    document.getElementById("demo").style.color = "black";
}*/

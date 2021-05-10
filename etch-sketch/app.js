let numDivs;

for (let number = 0; number < 16; number++) {
    let start = document.createElement('div');
    start.classList.add('block');
    start.style.border = '1px solid';
    start.style.borderColor = 'pink';
    start.style.width = '100px';
    start.style.height = '100px';
    document.body.appendChild(start);
}
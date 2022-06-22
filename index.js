const container = document.querySelector('.container');


for (let i = 1; i <= 16*16; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);
}

const cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'grey';
    })
})
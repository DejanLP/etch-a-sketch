const container = document.querySelector('.container');


function createGrid(rows, columns) {
    const newCell = document.querySelector('.cell');
    if (newCell !== null) {
        container.style.setProperty('--rows', rows);
        container.style.setProperty('--columns', columns);
    }
    for (let i = 1; i <= rows*columns; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
        cell.addEventListener('mouseenter', () => {
            cell.style.backgroundColor = 'grey';
        })

    }
}
createGrid(16, 16);

const gridBtn = document.querySelector('button');
gridBtn.addEventListener('click', () => {newGrid()})

function newGrid() {
    const size = parseInt(prompt('Enter row number for the new grid'));
    if (isNaN(size)) {
        alert('Only enter a number');
        return;
    }
    createGrid(size, size);
}

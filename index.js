const container = document.querySelector('.container');

function createGrid(rows) {
    const newCell = document.querySelector('.cell');
    if (newCell !== null) {
        container.remove();
    }
    for (let i = 1; i <= rows*rows; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
        cell.addEventListener('mouseleave', () => {
            cell.style.backgroundColor = 'grey';
        })

    }
}
createGrid(16);

const gridBtn = document.querySelector('button');
gridBtn.addEventListener('click', () => {newGrid()})

function newGrid() {
    const size = parseInt(prompt('Enter row number for the new grid'));
    if (isNaN(size)) {
        alert('Only enter a number');
        return;
    }
    createGrid(size);
}

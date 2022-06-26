const container = document.querySelector('.container');

//default grid creation 
createGrid(16, 16);

const gridBtn = document.querySelector('#size');
gridBtn.addEventListener('click', () => {newGrid()})

//listen for correct color
let color = 'grey';
const colorBtns = document.querySelectorAll('.colorBtn');
colorBtns.forEach((colorBtn) => {
    colorBtn.addEventListener('click', () => {
        color = colorBtn.value;
    })
})

//delete grid on click
const deleteBtn = document.querySelector('#delete');
deleteBtn.addEventListener('click', () => {resetGrid()});

//Create a new grid and add Listeners for hover events
function createGrid(rows, columns) {
    const newCell = document.querySelector('.cell');
    if (newCell !== null) {
        resetGrid();
        container.style.setProperty('--rows', rows);
        container.style.setProperty('--columns', columns);
    }
    for (let i = 1; i <= rows*columns; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
        cell.addEventListener('mouseenter', () => {
            cell.style.backgroundColor = color;
        })

    }
}

//Ask the user to create a new grid
function newGrid() {
    const size = parseInt(prompt('Enter row number for the new grid'));
    if (isNaN(size)) {
        alert('Only enter a number');
        return;
    }
    else if (size > 100) {
        alert('The max. row number is 100');
        return;
    }
    createGrid(size, size);
}

//sets all cells back to white background
function resetGrid() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(((cell) => {
        cell.style.backgroundColor = 'white';
    }))
}

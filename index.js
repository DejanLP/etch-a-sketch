/**
 * ==========================================================
 *                          Init page
 * ==========================================================
 */

//default grid creation 
const container = document.querySelector('.sketch');
let mode = 'color';

let color = 'black';

createGrid(16, 16);

/**
 * ==========================================================
 *                     Listening for events
 * ==========================================================
 */

//listen for correct color
const colorBtns = document.querySelectorAll('.colorBtn');
colorBtns.forEach((colorBtn) => {
    colorBtn.addEventListener('click', () => {
        swapMode('color', colorBtn);
        removeHighlight();
        colorBtn.classList.add('highlighted');
    })
})

//delete grid on click
const deleteBtn = document.querySelector('#delete');
deleteBtn.addEventListener('click', () => {resetGrid()});

//create new grid on click
let newSize = false;

const gridBtn = document.querySelector('#size');
gridBtn.addEventListener('click', () => {
    newGrid();
    const blackBtn = document.querySelector('#black');
        swapMode('color', blackBtn);
        removeHighlight();
        blackBtn.classList.add('highlighted');
})

//rainbow mode
const rainbow = document.querySelector('#rainbow');
rainbow.addEventListener('click', () => {
    removeHighlight();
    swapMode('rainbow');
});

/**
 * ==========================================================
 *                          Methods
 * ==========================================================
 */

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
        cell.addEventListener('mouseenter', () => {
            cell.style.backgroundColor = color;
        })
        container.appendChild(cell);
    }
}

//Ask the user to create a new grid
function newGrid() {
    const size = parseInt(prompt('Enter row number for the new grid (max: 100)'));
    if (isNaN(size)) {
        alert('Only enter a number');
        return;
    }
    else if (size > 100) {
        alert('The max. row number is 100');
        return;
    }
    else if (size < 0) {
        alert('The row number needs to be positive');
        return;
    }
    createGrid(size, size);
}

//sets all cells back to white background
function resetGrid() {
    cells = getCells();
    cells.forEach(((cell) => {
        cell.style.backgroundColor = 'white';
    }))
}

function swapMode(mode, colorBtn) {
    cells = getCells();
    if(mode == 'color'){
        //set color directly for the first cell
        color = colorBtn.value;
        cells.forEach((cell) => {
            //needed in order to overwrite existing eventListeners
            cell.addEventListener('mouseover', () => {
                    color = colorBtn.value;
            })
        })
    }
    if(mode == 'rainbow') {
        //set color directly for the first cell
        color = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        cells.forEach((cell) => {
            //needed in order to overwrite existing eventListeners
            cell.addEventListener('mouseover', () => {
                if(!newSize) {
                    color = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
                }
            })
        })
    }
}

//Remove class for all buttons, and add only for clicked one, on each click
function removeHighlight() {
    colorBtns.forEach((id) => {
        id.classList.remove('highlighted');
    })
}

//rainbow mode
function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

function getCells() {
    return document.querySelectorAll('.cell');
}

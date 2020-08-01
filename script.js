//initializing the constants:

const grid = document.getElementById("grid");
const gridSquare = document.createElement("div");
const Buttonreset = document.querySelector(".buttonreset");
const ButtonBlack = document.querySelector(".buttonblack");
const colourButton = document.querySelector(".buttoncolour");
const gridButton = document.querySelector(".buttongrid");
let gridSquaresClass;

//initializing the board:
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function clearGridSquares() {
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.lastElementChild);
    }
}

function drawGrid(numSquares = 18) {
    for (let i = 0; i < numSquares ** 2; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-item");
        grid.appendChild(gridSquare);
    }
    grid.style.cssText = `grid-template-columns: repeat(${numSquares}, 1fr); grid-template-rows: repeat(${numSquares}, 1fr)`;
}
//set-up the color functions:
function addColourClass() {
    gridSquaresClass = Object.values(document.getElementsByClassName("grid-item"));
    gridSquaresClass.forEach(function(gridSquare) {
        gridSquare.addEventListener('mouseover', () => {
            gridSquare.classList.add("grid-item--colour");
        });
    });
}

function drawInitialGrid(numSquares) {
    drawGrid(numSquares)
    addColourClass();
}
drawInitialGrid(18);

function resetBoard() {
    gridSquaresClass.forEach(function(gridSquare) {
        gridSquare.classList.remove("grid-item--colour");
        gridSquare.style.removeProperty("background-color");
    });
}
Buttonreset.addEventListener('click', resetBoard);

function changeGrid() {
    let numSquares = (prompt("Enter the number of squares"));    
    clearGridSquares();
    drawGrid(parseInt(numSquares));
    addColourClass(); 
}
gridButton.addEventListener('click', changeGrid);

function randomColour() {
    return `rgb(${Math.round(Math.random() * 256)}, ${Math.round(Math.random() * 256)}, ${Math.round(Math.random() * 256)})`;
}

function randomRGB() {
    gridSquaresClass = Object.values(document.getElementsByClassName("grid-item"));
    gridSquaresClass.forEach(function(gridSquare) {
        gridSquare.addEventListener('mouseover', () => {
            gridSquare.style.cssText = `background-color: ${randomColour()}`;
        });
    });
}
colourButton.addEventListener('click', () => {
    randomRGB();
});

function black() {
    gridSquaresClass = Object.values(document.getElementsByClassName("grid-item"));
    gridSquaresClass.forEach(function(gridSquare) {
        gridSquare.addEventListener('mouseover', () => {
            gridSquare.style.cssText = `background-color: black`;
        });
    });
}
ButtonBlack.addEventListener('click', () => {
    black();
});
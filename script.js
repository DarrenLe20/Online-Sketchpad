const container = document.querySelector(".container");
const btnColor = document.querySelector("#colors");
const btnBlack = document.querySelector('#black');
const btnErase = document.querySelector('#eraser')
const btnClear = document.querySelector("#clear");
const btnNew = document.querySelector("#resize");
let isDown = false;

// Function to create grid 
function createGrid(cols, rows) {
    for (let i = 0; i < (cols * rows); i ++){
        const div = document.createElement('div');
        div.style.background = 'white';
        container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add("pixel");
    }
}

createGrid(16,16);


function paintRGB() {
    const pixels = container.querySelectorAll('.pixel');
    pixels.forEach(pixel => pixel.addEventListener('mousedown', () => {
        isDown = true;
    }))
    pixels.forEach(pixel => pixel.addEventListener('mouseup', () => {
        isDown = false;
    }))
    btnColor.addEventListener('click', () =>{
        pixels.forEach(pixel => pixel.addEventListener('mouseover', () => {
            if (isDown){
                let R = Math.floor(Math.random() * 256);
                let G = Math.floor(Math.random() * 256);
                let B = Math.floor(Math.random() * 256);
                const RGB = `rgb(${R},${G},${B}`;
                pixel.style.background = RGB;
            }
        }))
    })
}
paintRGB();

function paintBlack() {
    const pixels = container.querySelectorAll('.pixel');
    pixels.forEach(pixel => pixel.addEventListener('mousedown', () => {
        isDown = true;
    }))
    pixels.forEach(pixel => pixel.addEventListener('mouseup', () => {
        isDown = false;
    }))
    btnBlack.addEventListener('click', () =>{
        pixels.forEach(pixel => pixel.addEventListener('mouseover', () => {
            if (isDown){
                pixel.style.background = 'black';
            }
        }))
    })
}
paintBlack();

function erase() {
    const pixels = container.querySelectorAll('.pixel');
    pixels.forEach(pixel => pixel.addEventListener('mousedown', () => {
        isDown = true;
    }))
    pixels.forEach(pixel => pixel.addEventListener('mouseup', () => {
        isDown = false;
    }))
    btnErase.addEventListener('click', () =>{
        pixels.forEach(pixel => pixel.addEventListener('mouseover', () => {
            if (isDown) {
                pixel.style.background = 'white';
            }
        }))
    })
}
erase();

function clearAll() {
    const pixels = container.querySelectorAll('.pixel');
    btnClear.addEventListener('click', () => {
        pixels.forEach(pixel => pixel.style.background = 'white');
        pixels.forEach(pixel => pixel.addEventListener('mouseover', () => {
            pixel.style.background = 'white';
        }))
    })
}
clearAll();

function resetAll() {
    const pixels = container.querySelectorAll('.pixel');
    pixels.forEach(pixel => pixel.remove());
}

function newBoard() {
    btnNew.addEventListener('click', () => {
        let choice = prompt("Enter the size of the new pad (enter a number): ");
        if (choice === null || choice < 1){
            resetAll();
            createGrid(16, 16);
            paintBlack();
            paintRGB();
            erase();
            clearAll();
            newBoard();
        } else {
            resetAll();
            createGrid(choice, choice);
            paintBlack();
            paintRGB();
            erase();
            clearAll();
            newBoard();
        }
    })
}
newBoard();
const mainContainer = document.querySelector('div.mainContainer');
const resSlider = document.querySelector('div.resSlider');
const resRange = document.querySelector('#resRange');
const resetBtn = document.querySelector('button.resetBtn');
const blackBtn = document.querySelector('button.blackBtn');
const greyBtn = document.querySelector('button.greyBtn');
const rgbBtn = document.querySelector('button.rgbBtn');

let currentMode;
let currentClass;

const drawSketcher = (size) => {

    for (i = 0; i < size; i++) {

        const subContainer = document.createElement('div');
        subContainer.classList.add('etchRow');
        const percentHeight = (1 / size) * 100;
        subContainer.style.height = percentHeight.toString() + '%';
        mainContainer.appendChild(subContainer);

        for (j = 0; j < size; j++) {

            const square = document.createElement('div');
            square.classList.add('square');
            const percentWidth = (1 / size) * 100;
            square.style.width = percentWidth.toString() + '%';
            square.style.backgroundColor = 'white';
            subContainer.appendChild(square);
        }
    }
}

const getCurrentRows = () => {
    return document.querySelectorAll('.etchRow');
}

const getCurrentSquares = () => {
    return document.querySelectorAll('.square')
}

const deleteSketcher = () => {
    const rows = getCurrentRows();
    const squares = getCurrentSquares();
    squares.forEach(square => square.remove());
    rows.forEach(row => row.remove());
}

const resetSketcher = () => {
    const allSquares = getCurrentSquares();
    allSquares.forEach(square => {
        square.style.backgroundColor = 'white';
    })
}

const findCurrentMode = () => {
    if (currentMode == 'greyFill') {
        return turnGrey;
    } else if (currentMode =='rgbFill') {
        return turnRGB;
    } else {
        return turnBlack;
    }
}

function turnBlack(e) {
    e.target.style.backgroundColor = 'black';
}

function turnGrey(e) {
    let currBackgroundColor = e.target.style.backgroundColor;  
    let currBackgroundString = '';
    if (currBackgroundColor.length >= 12) {
        currBackgroundString = currBackgroundColor.slice(0, 12);
    }
    if (currBackgroundColor == 'rgb(0, 0, 0)') {
        e.target.style.backgroundColor = currBackgroundColor;
    } else if (currBackgroundString != 'rgba(0, 0, 0') {
        e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'; 
    } else {
        let rgbaValues = currBackgroundColor.slice(5, currBackgroundColor.length - 1);
        let currGreyLevel = rgbaValues.slice(rgbaValues.length - 3);
        backgroundColor = 'rgba(0, 0, 0, ' + (parseFloat(currGreyLevel) + 0.1).toString() + ')';
        e.target.style.backgroundColor = backgroundColor;
    }
}

function turnRGB(e) {
    let randRed = Math.floor(Math.random() * 256);
    let randGreen = Math.floor(Math.random() * 256);
    let randBlue = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = 'rgb(' + randRed.toString() + ', ' + randGreen.toString() + ', ' + randBlue.toString() + ')';
}

const blackFill = () => {
    const squares = getCurrentSquares();
    squares.forEach(square => square.removeEventListener('mouseover', findCurrentMode()));
    currentMode = 'blackFill';
    squares.forEach(square => square.addEventListener('mouseover', turnBlack));
}

const greyFill = () => {
    const squares = getCurrentSquares();
    squares.forEach(square => square.removeEventListener('mouseover', findCurrentMode()));
    currentMode = 'greyFill';
    squares.forEach(square => square.addEventListener('mouseover', turnGrey));
}

const rgbFill = () => {
    const squares = getCurrentSquares();
    squares.forEach(square => square.removeEventListener('mouseover', findCurrentMode()));
    currentMode = 'rgbFill';
    squares.forEach(square => square.addEventListener('mouseover', turnRGB))
}

resetBtn.addEventListener('click', resetSketcher);
resSlider.oninput = () => {
    deleteSketcher();
    drawSketcher(resRange.value);
}

blackBtn.addEventListener('click', blackFill);
greyBtn.addEventListener('click', greyFill);
rgbBtn.addEventListener('click', rgbFill);

drawSketcher(16);
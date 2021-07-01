const mainContainer = document.querySelector('div.mainContainer');
const resSlider = document.querySelector('div.resSlider');
const resRange = document.querySelector('#resRange');
const resetBtn = document.querySelector('button.resetBtn');

const drawSketcher = (size) => {

    for (i = 0; i < size; i++) {

        const subContainer = document.createElement('div');
        subContainer.classList.add('etchRow');
        const percentHeight = (1 / size) * 100;
        subContainer.style.height = percentHeight.toString() + '%';
        mainContainer.appendChild(subContainer);

        for (j = 0; j < size; j++) {

            const square = document.createElement('div');
            square.classList.add('squareBlank');
            const percentWidth = (1 / size) * 100;
            square.style.width = percentWidth.toString() + '%';
            square.addEventListener('mouseover', (e) => {
                e.target.classList.toggle('squareFilled', true);
            });
            subContainer.appendChild(square);
        }
    }
}

const getCurrentRows = () => {
    return document.querySelectorAll('.etchRow');
}

const getCurrentSquares = (selection) => {
    if(selection == "blank") {
        return document.querySelectorAll('.squareBlank');
    } else if (selection == "filled") {
        return document.querySelectorAll('.squareFilled');
    } else if (selection == "all") {
        return document.querySelectorAll('.squareBlank .squareFilled');
    } else {
        return document.querySelectorAll();
    }
}

const deleteSketcher = () => {
    const rows = getCurrentRows();
    const squares = getCurrentSquares("all");
    squares.forEach(square => square.remove());
    rows.forEach(row => row.remove());
}

const resetSketcher = () => {
    const filledSquares = getCurrentSquares("filled");
    filledSquares.forEach(filledSquare => filledSquare.classList.toggle('squareFilled', false));
}

resetBtn.addEventListener('click', resetSketcher);

resSlider.oninput = () => {
    deleteSketcher();
    drawSketcher(resRange.value);
}

drawSketcher(16);
function turnBlack(e) {
    e.style.background = 'black';
}

const mainContainer = document.querySelector('div.mainContainer');

function drawSketcher(size) {

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
                console.log(e);
                e.target.classList.add('squareFilled');
            });
            subContainer.appendChild(square);


        }
    }
}

function clearSketcher() {
    const rows = document.querySelectorAll('.etchRow');
    const squares = document.querySelectorAll('.squareBlank .squareFilled');

    squares.forEach(square => square.remove());
    rows.forEach(row => row.remove());
}

drawSketcher(16);

const resSlider = document.querySelector('div.resSlider');
const resRange = document.querySelector('#resRange');

resSlider.oninput = () => {
    clearSketcher();
    drawSketcher(resRange.value);
}
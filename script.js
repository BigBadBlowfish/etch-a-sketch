function turnBlack (e) {
    e.style.background = 'black';
}


const mainContainer = document.querySelector('div.mainContainer');

for (i=0; i<16; i++) {

    console.log('outer loop ran: ' + i+1 + ' times.')

    const subContainer = document.createElement('div');
    subContainer.classList.add('etchRow');
    subContainer.style.cssText = "display: flex; flex-direction: row;"

    mainContainer.appendChild(subContainer);


    for(j=0; j<16; j++) {

        console.log('inner loop loop ran: ' + j+1 + ' times.')
        const square = document.createElement('div');
        square.classList.add('square');

        square.style.width = '30px';
        square.style.height = '30px';
        square.style.border = '1px solid black';

        square.addEventListener('mouseover', (e) => {
            console.log(e);
            e.target.style.cssText = 'height: 30px; width: 30px; border: 1px solid black; background-color: black';
        });


        subContainer.appendChild(square);

    }

}
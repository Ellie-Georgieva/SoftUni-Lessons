function chessBoard(sizeInput) {
    const size = sizeInput;
    let firstColor = 'black';

    console.log('<div class="chessboard">');

    for (let row = 1; row <= size; row++) {

        console.log(    `<div>`);

        row % 2 == 0
            ? firstColor = 'white'
            : firstColor = 'black';

        for (let col = 1; col <= size; col++) {

            console.log(        `<span class="${firstColor}"></span>`)

            firstColor == 'black'
                ? firstColor = 'white'   
                : firstColor = 'black';
        }

        console.log(    '</div>');   
    }

    console.log('</div>');
}

chessBoard(3);
chessBoard(4);
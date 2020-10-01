function nXnMatrix(matrixSizeInput) {
    let matrixSize = matrixSizeInput;
    let element = matrixSize.toString() + ' ';

    for (let i = 0; i < matrixSize; i++) {
        console.log(element.repeat(matrixSize));
    }
}

nXnMatrix(3);
nXnMatrix(7);
nXnMatrix(2);
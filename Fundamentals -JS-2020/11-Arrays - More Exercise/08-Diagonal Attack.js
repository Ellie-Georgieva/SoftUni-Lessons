function diagonalAttack(matrixRows) {
    let matrix = matrixRows.map(row => row.split(' ').map(Number));
    let leftRightDiagonal = 0;
    let rightLeftDiagonal = 0;
    let j = matrix.length - 1;
    let leftRightDiagonalNumbers = [];
    let rightLeftDiagonalNumbers = [];

    for (let i = 0; i < matrix[0].length; i++) {
        leftRightDiagonal += matrix[i][i];
        leftRightDiagonalNumbers.push(matrix[i][i]);
        rightLeftDiagonal += matrix[i][j];
        rightLeftDiagonalNumbers.push(matrix[i][j]);
        j -= 1
    }

    if (rightLeftDiagonal == leftRightDiagonal) {
        let newMatrix= [];

        for (let i = 0; i < matrix.length; i++) {
            let element = [];
            
            for (let j = 0; j < matrix.length; j++) {
                element.push(rightLeftDiagonal);
            }
             newMatrix.push(element);
        }

        j = matrix.length - 1;
        for (let i = 0; i < matrix[0].length; i++) {
            newMatrix[i][i] = leftRightDiagonalNumbers[i]
            newMatrix[i][j] = rightLeftDiagonalNumbers[i]
            j -= 1
        }

        for (let i = 0; i < newMatrix.length; i++) {
            let finalMatrix = newMatrix[i].join(' ');
            console.log(finalMatrix)
        }     
    } else {
        for (let i = 0; i < matrix.length; i++) {
            let finalMatrix = matrix[i].join(' ');
            console.log(finalMatrix)
        }
    }
}

diagonalAttack(
    ['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);
diagonalAttack(
    ['1 1 1',
    '1 1 1',
    '1 1 0']
);
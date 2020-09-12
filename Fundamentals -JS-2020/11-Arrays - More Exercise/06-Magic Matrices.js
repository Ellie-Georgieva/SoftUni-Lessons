function magicMatrices(matrixInput) {
    let matrix = matrixInput.slice();
    let sumRow = row => matrix[row].reduce((a, b) => a + b);
    let sumCol = col => matrix.map(row => row[col])
        .reduce((a, b) => a + b);
    let flag = true;
     
    if (matrix.length > 0) {
        let targetSum = sumRow(0);
     
        for (let i = 1; i < matrix.length; i++) {
            let rowSum = sumRow(i);
               
            if (rowSum !== targetSum) {
                flag = false;
                break;
            }
        }
     
        for (let j = 0; j < matrix[0].length; j++) {
            let colSum = sumCol(j);
            
            if (colSum !== targetSum) {
                flag = false;
                break;
            }
        }
    }
     
    if (flag == true) {
        console.log('true')
    } else {
        console.log('false');
    }
}

magicMatrices(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
);
magicMatrices(
    [[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
);
magicMatrices(
    [[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
);
magicMatrices(
    [['2 0 0'],
    ['0 2 0'],
    ['0 0 1']]
);
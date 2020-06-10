function squareFrame(arr) {
    let n = Number(arr.shift());

    for (let i = 1; i <= n; i++) {
        let square = '';
            
        for (let a = 1; a <= n; a++) {
            let sign = '';

            if ((a == 1 || a == n) && (i == 1 || i == n)) {
                sign = '+ ';
            } else if (a == 1 || a == n) {
                sign = '| ';
            } else {
                sign = '- ';
            }
            square += sign;
        }
        console.log(square);
    }
}

squareFrame([3]);
squareFrame([4]);
squareFrame([5]);
squareFrame([6]);
function combinations(arr) {
    let n = Number(arr.shift());
    let combination = 0;

    for (let a = 0; a <= n; a++) {
        for (let b = 0; b <= n; b++) {
            for (let c = 0; c <= n; c++) {
                let result = a + b + c;

                if (result === n) {
                    combination++;
                }
            }
        }
    }

    console.log(combination);
}

combinations([25]);
combinations([20]);
combinations([5]);
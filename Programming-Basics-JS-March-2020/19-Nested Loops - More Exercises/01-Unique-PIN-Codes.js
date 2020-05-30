function uniquePINCodes(arr) {
    let oneNumLimit = Number(arr.shift());
    let twoNumLimit = Number(arr.shift());
    let threeNumLimit = Number(arr.shift());

    for (let i = 1; i <= oneNumLimit; i++) {
        
        for (let j = 1; j <= twoNumLimit; j++) {

            for (e = 1; e <= threeNumLimit; e++) {

                    if (i % 2 == 0 && e % 2 == 0 && [2, 3, 5, 7].includes(j)) {
                        console.log(`${i} ${j} ${e}`);
                    }
            }
        }
    }
}

uniquePINCodes([3, 5, 5]);
uniquePINCodes([8, 2, 8]);
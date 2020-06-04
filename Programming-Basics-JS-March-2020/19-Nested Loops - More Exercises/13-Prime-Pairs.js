function primePairs(arr) {
    let firstPairStart = Number(arr.shift());
    let secondPairStart = Number(arr.shift());
    let diffFirstPair = Number(arr.shift());
    let diffSecondPair = Number(arr.shift());
    let firstPairEnd = diffFirstPair + firstPairStart;
    let secondPairEnd = diffSecondPair + secondPairStart;

    for (let i = firstPairStart; i <= firstPairEnd; i++) {

        for (let j = secondPairStart; j <= secondPairEnd; j++) {
            let flagFirstPair = false;
            let flagSecondPair = false;

            for (let iCheck = 2; iCheck < i; iCheck++) {
            
                if (i % iCheck == 0) {
                    flagFirstPair = true;
                    break;
                }
            }

            for (let jCheck = 2; jCheck < j; jCheck++) {
            
                if (j % jCheck == 0) {
                    flagSecondPair = true;
                    break;
                }
            }

            if (flagFirstPair == false && flagSecondPair == false) {

                console.log(`${i}${j}`);
            }
        }
    }
}

primePairs([10, 20, 5, 5]);
primePairs([10, 30, 9, 6]);
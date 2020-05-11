function equalPairs(arr) {
    let pairs = Number(arr.shift());
    let firstNum = Number(arr.shift());
    let secondNum = Number(arr.shift());
    let value = firstNum + secondNum;
    let noEqual = false;
    let diff = Number.MIN_SAFE_INTEGER;
 

    for (let i = 0; i < pairs; i++) {
        let result = firstNum + secondNum;
        
        if (result != value) {
            noEqual = true;
            curent = Math.abs(result - value);
            value = result;
            if (curent > diff) {
                diff = curent
            }
        }

        firstNum = Number(arr.shift());
        secondNum = Number(arr.shift());
    }

    if (noEqual === false) {
    console.log(`Yes, value=${value}`);
    } else {
    console.log(`No, maxdiff=${diff}`);
    }
}

equalPairs([3, 1, 2, 0, 3, 4, -1]);
equalPairs([4, 1, 1, 3, 1, 2, 2, 0, 0]);
equalPairs([2, -1, 0, 0, -1]);
equalPairs([2, 1, 2, 2, 2]);
equalPairs([1, 5, 5]);
equalPairs([2, -1, 2, 0, -1]);
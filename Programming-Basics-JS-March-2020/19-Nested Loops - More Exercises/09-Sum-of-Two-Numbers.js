function sumOfTwoNumbers(arr) {
    let start = Number(arr.shift());
    let end = Number(arr.shift());
    let magicNum = Number(arr.shift());
    let combination = 0;
    let isFound = false;

    for (let a = start; a <= end; a++) {
        for (let b = start; b <= end; b++) {
            let result = a + b;
            combination++
            if (result == magicNum) {
                isFound = true;
                console.log(`Combination N:${combination} (${a} + ${b} = ${magicNum})`);
                break;
            }
        }
        if (isFound == true) {
            break;
        }
    }

    if (isFound == false) {
        console.log(`${combination} combinations - neither equals ${magicNum}`);
    }
}

sumOfTwoNumbers([1, 10, 5]);
sumOfTwoNumbers([23, 24, 20]);
sumOfTwoNumbers([88, 888, 1000]);
sumOfTwoNumbers([88, 888, 2000]);
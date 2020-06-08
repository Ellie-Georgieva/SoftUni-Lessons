function divisionWithoutResidue(arr) {
    let numbers = +arr.shift();
    let allNums = 0;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for (let i = 1; i <= numbers; i++) {
        let num = +arr.shift();
        allNums++;

        if (num % 2 == 0) {
            p1++;
        }

        if (num % 3 == 0) {
            p2++;
        }

        if (num % 4 == 0) {
            p3++;
        }  
    }

    let percentageP1 = (p1 / allNums) * 100;
    let percentageP2 = (p2 / allNums) * 100;
    let percentageP3 = (p3 / allNums) * 100;

    console.log(`${percentageP1.toFixed(2)}%`);
    console.log(`${percentageP2.toFixed(2)}%`);
    console.log(`${percentageP3.toFixed(2)}%`);
}

divisionWithoutResidue([10, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65]);
divisionWithoutResidue([3, 3,  6, 9]);
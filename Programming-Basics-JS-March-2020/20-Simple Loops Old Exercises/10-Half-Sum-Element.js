function halfSumElement(arr) {
    let elementNum = Number(arr.shift());
    let maxNum = 0;
    let allNum = 0;

    for (let i = 1; i <= elementNum; i++) {
        let num = Number(arr.shift());
        allNum += num;

        if (maxNum < num) {
            maxNum = num;
        }
    }

    if (maxNum == (allNum - maxNum)) {
        console.log('Yes');
        console.log(`Sum = ${maxNum}`);
    } else {
        let diff = Math.abs(maxNum - (allNum - maxNum));
        console.log('No');
        console.log(`Diff = ${diff}`);
    }
}

halfSumElement([7, 3, 4, 1, 1, 2, 12, 1]);
halfSumElement([4, 6, 1, 2, 3]);
halfSumElement([3, 1, 1, 10]);
halfSumElement([3, 5, 5, 1]);
halfSumElement([3, 1, 1, 1]);
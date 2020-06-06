function leftAndRightSum(arr) {
    let n = +arr.shift(0);
    let leftSum = 0;
    let rightSum = 0;

    for (let i = 1; i <= n; i++) {
        let num = Number(arr.shift());
        leftSum += num;
    }

    for (let i = 1; i <= n; i++) {
        let num = Number(arr.shift());
        rightSum += num;
    }

    if (leftSum == rightSum) {
        console.log(`Yes, sum = ${leftSum}`);
    } else {
        let diff = Math.abs(leftSum - rightSum);
        console.log(`No, diff = ${diff}`);
    }
}

leftAndRightSum([2, 10, 90, 60, 40]);
leftAndRightSum([2, 90, 9, 50, 50]);
function oddEvenSum(arr) {
    let controlNum = Number(arr.shift());
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 1; i <= controlNum; i++) {
        let num = Number(arr.shift());

        if (i % 2 == 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }

    if (evenSum == oddSum) {
        console.log('Yes');
        console.log(`Sum = ${oddSum}`);
    } else {
        let diff = Math.abs(oddSum - evenSum);
        console.log('No');
        console.log(`Diff = ${diff}`);
    }
}

oddEvenSum([4, 10, 50, 60, 20]);
oddEvenSum([4, 3, 5, 1, -2]);
oddEvenSum([3, 5, 8, 1]);
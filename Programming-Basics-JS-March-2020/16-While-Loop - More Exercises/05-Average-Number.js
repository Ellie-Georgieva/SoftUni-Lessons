function averageNumber(arr) {
    let average = Number(arr.shift());
    let taken = 0;
    let sum = 0;

    while (taken < average) {
        let num = Number(arr.shift());
        taken++;
        sum += num;
    }

    let averageNum = sum / average;
    console.log(averageNum.toFixed(2));
}

averageNumber([4, 3, 2, 4, 2]);
averageNumber([2, 6, 4]);
averageNumber([3, 82, 43, 22]);
averageNumber([4, 95, 23, 76, 23]);
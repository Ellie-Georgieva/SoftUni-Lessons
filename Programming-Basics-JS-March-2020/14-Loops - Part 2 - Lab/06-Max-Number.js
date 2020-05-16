function maxNumber(arr) {
    let count = Number(arr.shift());
    let maxNum = Number.NEGATIVE_INFINITY;


    for (i = 0; i <= count; i++) {
        let num = Number(arr.shift());
        if (maxNum < num) {
            maxNum = num;
        }
    }
    console.log(maxNum);
}

maxNumber([2, 100, 99]);
maxNumber([3, -10, 20, -30]);
maxNumber([4, 45, -20, 7, 99]);
maxNumber([1, 999]);
maxNumber([2, -1, -2]);
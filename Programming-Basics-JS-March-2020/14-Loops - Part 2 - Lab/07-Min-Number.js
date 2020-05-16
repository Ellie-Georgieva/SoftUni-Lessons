function minNumber(arr) {
    let count = Number(arr.shift());
    let minNum = Number.POSITIVE_INFINITY;


    for (i = 0; i <= count; i++) {
        let num = Number(arr.shift());
        if (minNum > num) {
            minNum = num;
        }
    }
    console.log(minNum);
}

minNumber([2, 100, 99]);
minNumber([3, -10, 20, -30]);
minNumber([4, 45, -20, 7, 99]);
minNumber([1, 999]);
minNumber([2, -1, -2]);
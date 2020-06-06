function minNumber(arr) {
    let n = Number(arr.shift());
    let minNum = Number.POSITIVE_INFINITY;
    
    for (let i = 0; i <= n; i++) {
        if (+arr[i] < minNum) {
            minNum = arr[i];
        }
    }
    console.log(minNum);
}

minNumber([2, 100, 99]);
minNumber([3, -10, 20, -30]);
minNumber([4, 45, -20, 7, 99]);
minNumber([1, 999]);
minNumber([2, -1, -2]);
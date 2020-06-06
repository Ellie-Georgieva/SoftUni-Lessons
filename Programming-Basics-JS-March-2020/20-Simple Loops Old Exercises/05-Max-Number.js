function maxNumber(arr) {
    let maxNum = Number.NEGATIVE_INFINITY;
    
    for (let i = 1; i <= arr.length; i++) {
       if (+arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }
    console.log(maxNum);
}

maxNumber([2, 100, 99]);
maxNumber([3, -10, 20, -30]);
maxNumber([4, 45, -20, 7, 99]);
maxNumber([1, 999]);
maxNumber([2, -1, -2]);
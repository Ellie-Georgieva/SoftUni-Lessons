function multiplyDivideNumber(input) {
    let n = Number(input[0]);
    let x = Number(input[1]);

    if (x >= n) {
        console.log(n * x)
    } else {
        console.log(n / x)
    }
}
multiplyDivideNumber([2, 3]);
multiplyDivideNumber([13, 13]);
multiplyDivideNumber([3, 2]);
multiplyDivideNumber([144, 12]);
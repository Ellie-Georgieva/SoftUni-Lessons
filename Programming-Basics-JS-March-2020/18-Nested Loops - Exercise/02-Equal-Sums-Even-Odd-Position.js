function equalSumsEvenOddPosition(arr) {
    let firstNum = Number(arr.shift());
    let secondNum = Number(arr.shift());
    let equalSum = '';

    for (let i = firstNum; i <= secondNum; i++) {
        let currentNum = '' + i;
        let even = 0;
        let odd = 0;

        for (let j = 0; j < currentNum.length; j++) {
            let num = Number(currentNum[j]);

            if (j % 2 == 0) {
                even += num;
            } else {
                odd += num;
            }
        }

        if (even == odd) {
            equalSum += i + ' ';
        }
    }

    console.log(equalSum);
}

equalSumsEvenOddPosition([100000, 100050]);
equalSumsEvenOddPosition([123456, 124000]);
equalSumsEvenOddPosition([299900, 300000]);
equalSumsEvenOddPosition([100115, 100120]);
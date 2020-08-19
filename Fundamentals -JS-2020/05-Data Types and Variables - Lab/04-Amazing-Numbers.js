function amazingNumbers(numInput) {
    let firstNum = numInput
    let num = firstNum;
    let sum = 0;

    while (num > 0) {
        let result = num % 10;
        sum += result;
        num = Math.trunc(num / 10);
    }

    sum.toString().includes(9) 
        ? console.log(`${firstNum} Amazing? True`)
        : console.log(`${firstNum} Amazing? False`);
}

amazingNumbers(1233);
amazingNumbers(999);
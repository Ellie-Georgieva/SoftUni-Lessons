function sumDigits(numInput) {
    let num = numInput;
    let sum = 0;

    while (num > 0) {
        sum += num % 10;
        num = Math.trunc(num / 10);
    }

    console.log(sum);
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);
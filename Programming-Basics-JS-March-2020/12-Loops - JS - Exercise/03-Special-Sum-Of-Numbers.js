function specialSumNumbers(start, end, divider) {
    start = Number(start);
    end = Number(end);
    divider = Number(divider);
    let sum = 0;

    for (let i = start; i <= end; i++) {
        if (i % divider === 0) {
            sum += i
        } 
    }
    console.log(sum);
}

specialSumNumbers(10, 30, 7);
specialSumNumbers(61, 125, 25);
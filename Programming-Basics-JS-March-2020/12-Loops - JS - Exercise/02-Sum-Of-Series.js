function sumOfSeries(n) {
    n = Number(n);
    let sum = 0;

    for (let i = 0; i <= n; i++) {
        sum += i * i;
    }
    
    console.log(sum);
}

sumOfSeries(7);
sumOfSeries(4);
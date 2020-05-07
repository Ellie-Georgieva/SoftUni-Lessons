function lotaryStatistics(n) {
    n = Number(n);
    let oddNumbers = 0;
    let evenNumbers = 0;
    let oddNumbers7 = 0;
    let numbersDivide100 = 0;

    for (let i = 1; i <= n; i++) {
        if (i <= 9 && i % 2 != 0) {
            oddNumbers += 1;
        }
        if (i % 2 === 0) {
            evenNumbers += 1;
        }
        if (i % 2 != 0 && i % 10 === 7) {
            oddNumbers7 += 1;
        }
        if (100 % i === 0) {
            numbersDivide100 += 1;
        }
    }

        oddNumbers = (oddNumbers / n) * 100;
        console.log(`${oddNumbers.toFixed(2)}%`);
        evenNumbers = (evenNumbers / n) * 100;
        console.log(`${evenNumbers.toFixed(2)}%`);
        oddNumbers7 = (oddNumbers7 / n) * 100;
        console.log(`${oddNumbers7.toFixed(2)}%`);
        numbersDivide100 = (numbersDivide100 / n) * 100;
        console.log(`${numbersDivide100.toFixed(2)}%`);
}

lotaryStatistics(49);
lotaryStatistics(35);
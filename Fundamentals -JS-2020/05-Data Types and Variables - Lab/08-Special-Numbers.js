function specialNumbers(numInput) {
    const num = numInput;

    for (let i = 1; i <= num; i++) {
        let sum = 0;
        let digits = i;

        while (digits > 0) {
            sum += digits % 10;
            digits = Math.trunc(digits / 10);
        }

        sum == 5 || sum == 7 || sum == 11
                ? console.log(`${i} -> True`)
                : console.log(`${i} -> False`);
    }
}

specialNumbers(15);
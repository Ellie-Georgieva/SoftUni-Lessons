function perfectNumber(numberInput) {
    let num = numberInput;
    let divisorsSum = 1;

    for (let i = 2; i < num; i++) {

        if (num % i == 0) {
            divisorsSum += i;
        }
    }

    divisorsSum == num
        ? console.log('We have a perfect number!')
        : console.log("It's not so perfect.");
}

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);
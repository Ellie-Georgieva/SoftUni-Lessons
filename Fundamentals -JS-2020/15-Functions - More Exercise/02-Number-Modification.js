function numberModification(numberInput) {
    let num = numberInput;

    let averageValueOfNumber = (numInput) => {
        let num = numInput;
        let numSum = 0;
        num = num.toString();
        let numLength = num.length;

        for (let i = 0; i < numLength; i++) {
            numSum += Number(num[i]);
        }

        let average = numSum / numLength;
        return average;
    }

    while (averageValueOfNumber(num) < 5) {
        num = num.toString() + '9';
        num = Number(num);
    }

    console.log(num);
}

numberModification(101);
numberModification(5835);
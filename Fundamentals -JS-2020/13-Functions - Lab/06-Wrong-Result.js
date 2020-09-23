function wrongResult(numOneInput, numTwoInput, numThreeInput) {
    let numOne = numOneInput;
    let numTwo = numTwoInput;
    let numThree = numThreeInput;
    let result = '';

    if (numOne < 0 && numTwo < 0 && numThree < 0) {
        result = 'Negative';
    } else if (numOne < 0 && numTwo > 0 && numThree > 0) {
        result = 'Negative';
    } else if (numOne > 0 && numTwo < 0 && numThree > 0) {
        result = 'Negative';
    } else if (numOne > 0 && numTwo > 0 && numThree < 0) {
        result = 'Negative';
    } else {
        result = 'Positive';
    }

    console.log(result);
}

wrongResult(5, 12, -15);
wrongResult(-6, -12, 14);
wrongResult(-1, -2, -3);
wrongResult(-1, 0, 1);


// array


function wrongResult(numOneInput, numTwoInput, numThreeInput) {
    let numbers = []
    numbers.push(numOneInput);
    numbers.push(numTwoInput);
    numbers.push(numThreeInput);
    let negativeCount = 0;

    for(let i = 0; i < numbers.length; i++) {
        if (numbers[i] == 0) {
            console.log('Positive');
            return;
        }
        if (numbers[i] < 0)
            negativeCount++;
    }
    console.log(negativeCount % 2 == 0 ? 'Positive' : 'Negative');
}

wrongResult(5, 12, -15);
wrongResult(-6, -12, 14);
wrongResult(-1, -2, -3);
wrongResult(-1, 0, 1);
function oddAndEvenSum(numImput) {
    let num = numImput;
    let oddSum = 0;
    let evenSum = 0;
    num = num.toString();

    for (let i = 0; i < num.length; i++) {
        let currentNum = Number(num[i]);

        currentNum % 2 == 0
            ? evenSum += currentNum
            : oddSum += currentNum;
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);
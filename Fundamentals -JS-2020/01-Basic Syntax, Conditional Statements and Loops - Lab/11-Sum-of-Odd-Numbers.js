function sumOfOddNumbers(nInput) {
    const n = Number(nInput);
    let oddNum = 1;
    let oddNumSum = 0;
    let counter = 0;

    while (counter != n) {
        console.log(oddNum);
        oddNumSum += oddNum;
        oddNum += 2;
        counter++;    
    }

    console.log(`Sum: ${oddNumSum}`);
}

sumOfOddNumbers(5);
sumOfOddNumbers(3);
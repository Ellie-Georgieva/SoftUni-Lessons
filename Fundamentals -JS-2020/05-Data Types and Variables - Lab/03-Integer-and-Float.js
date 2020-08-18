function integerAndFloat(firstNumInput, secondNumInput, thirdNumInput) {
    const firstNum = firstNumInput;
    const secondNum = secondNumInput;
    const thirdNum = thirdNumInput;

    const result = firstNum + secondNum + thirdNum;

    parseInt(result) == result
    ? console.log(`${result} - Integer`)
    : console.log(`${result} - Float`);
}

integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);
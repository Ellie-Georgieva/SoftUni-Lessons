function biggestOf3Numbers(firstNumInput, secondNumInput, thirdNumInput) {
    const firstNum = firstNumInput;
    const secondNum = secondNumInput;
    const thirdNum = thirdNumInput;

    const maxNum = Math.max(firstNum, secondNum, thirdNum);
    console.log(maxNum);
}

biggestOf3Numbers(-2, 7, 3);
biggestOf3Numbers(130, 5, 99);
biggestOf3Numbers(43, 43.2, 43.1);
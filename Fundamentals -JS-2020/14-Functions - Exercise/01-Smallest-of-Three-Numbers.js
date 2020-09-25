function smallestOfThreeNumbers(numOneInput, numTwoInput, numThreeInput) {
    let numOne = numOneInput;
    let numTwo = numTwoInput;
    let numThree = numThreeInput;

    let result = Math.min(numOne, numTwo, numThree);

    console.log(result);
}

smallestOfThreeNumbers(2, 5, 3);
smallestOfThreeNumbers(600, 342, 123);
smallestOfThreeNumbers(25, 21, 4);



/////////////////////////////////////////////////////////////////////////////////


function smallestOfThreeNumbers(numOneInput, numTwoInput, numThreeInput) {
    let numOne = numOneInput;
    let numTwo = numTwoInput;
    let numThree = numThreeInput;
    let minNum = numThree;

    if (numOne <= numTwo && numOne <= numThree) {
        minNum = numOne;
    } else if (numTwo <= numOne && numTwo <= numThree) {
        minNum = numTwo;
    }

    console.log(minNum);
}

smallestOfThreeNumbers(2, 5, 3);
smallestOfThreeNumbers(600, 342, 123);
smallestOfThreeNumbers(25, 21, 4);
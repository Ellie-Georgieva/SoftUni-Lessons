function condenseArrayToNumber(arr) {
    let numbers = arr;
    let firstNum = 0;
    let secondNum = 0;

    while (numbers.length != 1) {
        let result = [];

        for (let i = 0; i < numbers.length - 1; i++) {
            firstNum = numbers[i + 0];
            secondNum = numbers[i + 1];

            result.push(firstNum + secondNum);
        }

        numbers = result;
    }

    console.log(numbers[0]);
}

condenseArrayToNumber([2,10,3]);
condenseArrayToNumber([5,0,4,1,2]);
condenseArrayToNumber([1]);
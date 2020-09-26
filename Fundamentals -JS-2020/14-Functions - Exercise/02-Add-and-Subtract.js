function addAndSubtract(firstNumInput, secondNumInput, thirdNumInput) {
    let firstNum = firstNumInput;
    let secondNum = secondNumInput;
    let thirdNum = thirdNumInput;

    let sum = (firstNum, secondNum) => {
        return firstNum + secondNum;    
    }

    let subtract = (firstNum, secondNum, thirdNum) => {
        return sum(firstNum, secondNum) - thirdNum;    
    }

    console.log(subtract(firstNum, secondNum, thirdNum));
}

addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);
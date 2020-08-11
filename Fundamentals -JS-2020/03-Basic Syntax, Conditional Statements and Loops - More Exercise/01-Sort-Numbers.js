function sortNumbers(firstNumInput, secondNumInput, thirdNumInput) {
    const firstNum = firstNumInput;
    const secondNum = secondNumInput;
    const thirdNum = thirdNumInput;
    let one = 0;
    let two = 0;
    let three = 0;

    if (firstNum >= secondNum && firstNum >= thirdNum) {
        one = firstNum;
    } else if ((firstNum > secondNum && firstNum < thirdNum) || (firstNum < secondNum && firstNum > thirdNum)) {
        two = firstNum;    
    } else {
        three = firstNum;
    }

    if (secondNum >= firstNum && secondNum >= thirdNum) {
        one = secondNum;
    } else if ((secondNum > firstNum && secondNum < thirdNum) || (secondNum < firstNum && secondNum > thirdNum)) {
        two = secondNum;    
    } else {
        three = secondNum;
    }

    if (one == 0) {
        one = thirdNum;
    } else if (two == 0) {
        two = thirdNum;    
    } else if (three == 0) {
        three = thirdNum;
    }

    if (firstNum == secondNum && secondNum == thirdNum) {
        one = firstNum;
        two = secondNum;
        three = thirdNum;
    }

    console.log(`${one}\n${two}\n${three}`);
}

sortNumbers(2, 1, 3);
sortNumbers(-2, 1, 3);
sortNumbers(0, 0, 2);


// short 

function sortNumbers(num1, num2, num3) {
    const array = [num1, num2, num3];
    const sorted = array.sort((a, b) => (b > a ? 1 : -1));
  
    const sortedFinal = sorted.map(num => {
      console.log(num);
    });
  }

sortNumbers(2, 1, 3);
sortNumbers(-2, 1, 3);
sortNumbers(0, 0, 2);
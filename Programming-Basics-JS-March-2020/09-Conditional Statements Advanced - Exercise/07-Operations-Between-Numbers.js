function operationsBetweenNumbers(firstNum, secondNum, operator) {
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    let result;
    let type;
    let resultType;

    if (operator == '+') {
        result = firstNum + secondNum;
        resultType = result % 2;
        if (resultType == 0) {
            type = 'even';
        } else {
            type = 'odd';
        }
    } else if (operator == '-') {
        result = firstNum - secondNum;
        resultType = result % 2;
        if (resultType == 0) {
            type = 'even';
        } else {
            type = 'odd';
        }
    } else if (operator == '*') {
        result = firstNum * secondNum;
        resultType = result % 2;
        if (resultType == 0) {
            type = 'even';
        } else {
            type = 'odd';
        }
    } else if (operator == '/') {
        result = firstNum / secondNum;
    } else if (operator == '%') {
        result = firstNum % secondNum;
    }

    if ((operator == '/' || operator == '%') && secondNum === 0) {
        console.log(`Cannot divide ${firstNum} by zero`);
    } else if (operator == '%') {
        console.log(`${firstNum} % ${secondNum} = ${result}`);
    } else if (operator == '/') {
        console.log(`${firstNum} / ${secondNum} = ${result.toFixed(2)}`);
    } else {
        console.log(`${firstNum} ${operator} ${secondNum} = ${result} - ${type}`);
    }
}

operationsBetweenNumbers(10, 12, '+');
operationsBetweenNumbers(10, 1, '-');
operationsBetweenNumbers(7, 3, '*');
operationsBetweenNumbers(123, 12, '/');
operationsBetweenNumbers(10, 3, '%');
operationsBetweenNumbers(112, 0, '/');
operationsBetweenNumbers(10, 0, '%');
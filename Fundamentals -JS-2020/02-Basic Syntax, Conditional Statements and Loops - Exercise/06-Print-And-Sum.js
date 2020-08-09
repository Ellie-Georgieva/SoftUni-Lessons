function printAndSum(firstNumInput, secondNumInput) {
    const firstNum = firstNumInput; 
    const secondNum = secondNumInput;
    let sum = 0;
    let numbers = '';

    for (let i = firstNum; i <= secondNum; i++) {
        numbers += i + ' ';
        sum += i;
    }

    console.log(numbers);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);
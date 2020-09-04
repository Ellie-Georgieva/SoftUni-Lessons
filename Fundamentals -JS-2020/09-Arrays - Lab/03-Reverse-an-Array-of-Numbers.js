function reverseArrayOfNumbers(numInput, arr) {
    const num = numInput;
    let numbers = arr;
    let shortArr = [];
    let finalNums = '';

    for (let i = 0; i < num; i++) {
        shortArr.push(numbers[i]);
    }

    for (let i = shortArr.length - 1; i >= 0; i--) {
        finalNums += `${shortArr[i]} `;  
    }

    console.log(finalNums);
}

reverseArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseArrayOfNumbers(2, [66, 43, 75, 89, 47]);


// short

function reverseArrayOfNumbers(numInput, arr) {
    const num = numInput;
    let numbers = arr;
    let shortArr = [];

    for (let i = 0; i < num; i++) {
        shortArr.push(numbers[i]);
    }

    let finalNums = shortArr.join(', ');

    console.log(finalNums);
}

reverseArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseArrayOfNumbers(2, [66, 43, 75, 89, 47]);
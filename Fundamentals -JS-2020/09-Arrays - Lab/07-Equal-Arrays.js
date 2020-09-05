function equalArrays(firstArrInput, secondArrInput) {
    let firstArr = firstArrInput;
    let secondArr = secondArrInput;
    let diffIndex = 0;
    let sum = 0;
    let isIdentical = true;

    for (let i = 0; i <= firstArr.length; i++) {
        let one = firstArr[i];
        let two = secondArr[i];

        if (one != two) {
            diffIndex = i;
            isIdentical = false;
            break;
        } 
    }

    for (let num of firstArr) {
        num = Number(num);
        sum += num;
    }

    diffIndex == 0 && isIdentical == true
        ? console.log(`Arrays are identical. Sum: ${sum}`)
        : console.log(`Arrays are not identical. Found difference at ${diffIndex} index`);
}

equalArrays(['10','20','30'], ['10','20','30']);
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);
equalArrays(['1'], ['10']);
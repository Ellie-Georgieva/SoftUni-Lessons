function maxNumber(arrInput) {
    let arr = arrInput;
    let max = '';
    isBigger = true;

    while (arr.length != 1) {
        let num = arr.shift();

        for (let i = 0; i < arr.length; i++) {

            if (num > arr[i]) {
                isBigger = true;
            } else {
                isBigger = false;
                break;
            }
        }

        if (isBigger == true) {
            max += num + ' ';
       }
    }

    max += arr.shift();

    console.log(max);
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);



// short 

function maxNumber(arrInput) {
    let arr = arrInput;
    let bigNums = [];

    arr.forEach((number, i) => {
        let biggestElement = arr.slice(i + 1).sort((a, b) => b - a)[0];

        if (number > biggestElement) {
            bigNums.push(number);
        }
    });

    bigNums.push(arr.slice(-1)[0]);
    console.log(bigNums.join(' '));
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);
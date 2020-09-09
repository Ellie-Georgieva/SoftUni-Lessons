function magicSum(arrInput, numInput) {
    let arr = arrInput;
    let num = numInput;

    while (arr.length != 1) {
        let currentNum = arr.shift();

        for (let i = 0; i < arr.length; i++) {
            let sum = currentNum + arr[i];

            if (sum == num) {
                let magicalSum = currentNum.toString() + ' ' + arr[i].toString();
                console.log(magicalSum);            
            }
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8);
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
magicSum([1, 2, 3, 4, 5, 6], 6);
function specialNumbers(arr) {
    let num = Number(arr.shift());
    let specialNum = '';

    for (let i = 1111; i <= 9999; i++) {
        let currentNum = '' + i;
        let success = 0;

        for (let j = 0; j <= currentNum.length; j++) {
            let number = Number(currentNum[j]);

            if (num % number == 0) {
                success++;
            }
        }

        if (success == 4) {
            specialNum += currentNum + ' ';
        }
    }

    console.log(specialNum);
}

specialNumbers([3]);
specialNumbers([11]);
specialNumbers([16]);
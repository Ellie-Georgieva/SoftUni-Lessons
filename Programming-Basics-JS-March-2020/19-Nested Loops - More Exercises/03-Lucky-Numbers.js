function luckyNumbers(arr) {
    let num = Number(arr.shift());
    let allLuckyNums = '';

    for (let one = 1; one <= 9; one++) {

        for (let two = 1; two <= 9; two++) {

            for (let three = 1; three <= 9; three++) {

                for (let four = 1; four <= 9; four++) {

                    if ((one + two) == (three + four)) {

                        if (num % (one + two) == 0) {

                            let luckyNum = '' + one + '' + two + '' + three + '' + four;
                            allLuckyNums += luckyNum + ' ';
                        }
                    }
                }
            }
        }
    }

    console.log(allLuckyNums);
}

luckyNumbers([3]);
luckyNumbers([7]);
luckyNumbers([24]);
function carNumber(arr) {
    let start = Number(arr.shift());
    let end = Number(arr.shift());
    let carNum = '';

    for (let one = start; one <= end; one++) {

        for (let two = start; two <= end; two++) {

            for (let three = start; three <= end; three++) {

                for (let four = start; four <= end; four++) {

                    if ((one % 2 == 0 && four % 2 != 0) || (one % 2 != 0 && four % 2 == 0)) {

                        if (one > four) {

                            if ((two + three) % 2 == 0) {

                                let num = '' + one + '' + two + '' + three + '' + four;
                                carNum += num + ' ';
                            }
                        }
                    }
                }
            }
        }
    }

    console.log(carNum);
}

carNumber([2, 3]);
carNumber([3, 5]);
carNumber([5, 8]);
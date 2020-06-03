function profit(arr) {
    let oneLev = Number(arr.shift());
    let twoLeva = Number(arr.shift());
    let fiveLeva = Number(arr.shift());
    let sum = Number(arr.shift());

    for (let one = 0; one <= oneLev; one++) {

        for (let two = 0; two <= twoLeva; two++) {

            for (let five = 0; five <= fiveLeva; five++) {

                if ((one + (two * 2) + (five * 5)) == sum) {

                    console.log(`${one} * 1 lv. + ${two} * 2 lv. + ${five} * 5 lv. = ${sum} lv.`);
                }
            }
        }
    }
}

profit([3, 2, 3, 10]);
profit([5, 3, 1, 7]);
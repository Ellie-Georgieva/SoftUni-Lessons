function histogram(arr) {
    let numbers = +arr.shift();
    let allNums = 0;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i <= numbers; i++) {
        let num = +arr.shift();

        if (num < 200) {
            p1++;
            allNums++;
        }

        if (num >= 200 && num <= 399) {
            p2++;
            allNums++;
        }

        if (num >= 400 && num <= 599) {
            p3++;
            allNums++;
        }

        if (num >= 600 && num <= 799) {
            p4++;
            allNums++;
        }

        if (num >= 800) {
            p5++;
            allNums++;
        }
    }

    let percentageP1 = (p1 / allNums) * 100;
    let percentageP2 = (p2 / allNums) * 100;
    let percentageP3 = (p3 / allNums) * 100;
    let percentageP4 = (p4 / allNums) * 100;
    let percentageP5 = (p5 / allNums) * 100;

    console.log(`${percentageP1.toFixed(2)}%`);
    console.log(`${percentageP2.toFixed(2)}%`);
    console.log(`${percentageP3.toFixed(2)}%`);
    console.log(`${percentageP4.toFixed(2)}%`);
    console.log(`${percentageP5.toFixed(2)}%`);
}

histogram([3, 1, 2, 999]);
histogram([4, 53, 7, 56, 999]);
histogram([7, 800, 801, 250, 199, 399, 599, 799]);
histogram([9, 367, 99, 200, 799, 999, 333, 555, 111, 9]);
histogram([14, 53, 7, 56, 180, 450, 920, 12, 7, 150, 250, 680, 2, 600, 200]);
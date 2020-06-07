function oddEvenPosition(arr) {
    let controlNum = Number(arr.shift());
    let oddSum = 0;
    let oddMax = Number.NEGATIVE_INFINITY;
    let oddMin = Number.POSITIVE_INFINITY;
    let evenSum = 0;
    let evenMax = Number.NEGATIVE_INFINITY;
    let evenMin = Number.POSITIVE_INFINITY;

    for (let i = 1; i <= controlNum; i++) {
        let num = Number(arr.shift());

        if (i % 2 == 0) {
            evenSum += num;

            if (evenMax < num) {
                evenMax = num;
            }

            if (evenMin > num) {
                evenMin = num;
            }
        } else {
            oddSum += num;

            if (oddMax < num) {
                oddMax = num;
            }

            if (oddMin > num) {
                oddMin = num;
            }
        }
    }

    console.log(oddMin)

    console.log(`OddSum=${oddSum}`);

    if (oddMin == 0 || oddMin == Infinity) {
        console.log(`OddMin=No`);
    } else {
        console.log(`OddMin=${oddMin}`);
    }

    if (oddMax == 0 || oddMax == -Infinity) {
        console.log(`OddMax=No`);
    } else {
        console.log(`OddMax=${oddMax}`);
    }

    console.log(`EvenSum=${evenSum}`);

    if (evenMin == 0 || evenMin == Infinity) {
        console.log(`EvenMin=No`);
    } else {
        console.log(`EvenMin=${evenMin}`);
    }

    if (evenMax == 0 || evenMax == -Infinity) {
        console.log(`EvenMax=No`);
    } else {
        console.log(`EvenMax=${evenMax}`);
    }
}

oddEvenPosition([6, 2, 3, 5, 4, 2, 1]);
oddEvenPosition([2, 1.5, -2.5]);
oddEvenPosition([1, 1]);
oddEvenPosition([0]);
oddEvenPosition([5, 3, -2, 8, 11, -3]);
oddEvenPosition([4, 1.5, 1.75, 1.5, 1.75]);
oddEvenPosition([1, -5]);
oddEvenPosition([3, -1, -2, -3]);
function sequence2k1(arr) {
    let n = Number(arr.shift());
    let number = 1;

    while (number <= n) {
        console.log(number);
        number = (number * 2) + 1;
    }
}

sequence2k1([3]);
sequence2k1([8]);
sequence2k1([17]);
sequence2k1([31]);
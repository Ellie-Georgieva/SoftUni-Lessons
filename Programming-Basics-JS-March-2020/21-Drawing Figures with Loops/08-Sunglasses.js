function sunglasses(arr) {
    let n = Number(arr.shift());
    let height = n;
    let glassWidth = 2 * n;
    let frameIndex = Math.floor((n / 2) - 1);
    if (n % 2 == 0) {
        frameIndex = Math.floor(((n / 2) -1) - 1);
    }

    let frame = ' '.repeat(n);
    console.log(`${'*'.repeat(glassWidth)}${frame}${'*'.repeat(glassWidth)}`);

    for (let row = 0; row < height - 2; row++) {
        if (row == frameIndex) {
            frame = '|'.repeat(n);
        } else {
            frame = ' '.repeat(n);
        }

        console.log(`*${'/'.repeat(glassWidth - 2)}*${frame}*${'/'.repeat(glassWidth - 2)}*`);
    }
    frame = ' '.repeat(n);
    console.log(`${'*'.repeat(glassWidth)}${frame}${'*'.repeat(glassWidth)}`);
}

sunglasses([3]);
sunglasses([4]);
sunglasses([5]);
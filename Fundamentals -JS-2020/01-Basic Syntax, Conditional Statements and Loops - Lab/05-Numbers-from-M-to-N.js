function numbersFromMtoN(mInput, nInput) {
    const m = Number(mInput);
    const n = Number(nInput);

    for (let i = m; i >= n; i--) {
        console.log(i);
    }
}

numbersFromMtoN(6, 2);
numbersFromMtoN(4, 1);
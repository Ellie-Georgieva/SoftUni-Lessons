function evenPowersOf2(n) {
    n = Number(n);

    for (let i = 0; i <= n; i += 2) {
        console.log(2 ** i);
    }
}

evenPowersOf2(3);
evenPowersOf2(4);
evenPowersOf2(5);
evenPowersOf2(6);
evenPowersOf2(7);
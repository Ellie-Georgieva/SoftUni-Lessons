function triangleOfDollars(arr) {
    let n = Number(arr.shift());
    let triangle = '';
    let dollar = '$ ';

    for (let i = 1; i <= n; i++) {
        triangle += dollar;
        console.log(triangle);
    }
}

triangleOfDollars([2]);
triangleOfDollars([3]);
triangleOfDollars([4]);
triangleOfDollars([5]);
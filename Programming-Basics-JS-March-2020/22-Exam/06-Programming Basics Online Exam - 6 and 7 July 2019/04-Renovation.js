function renovation(arr) {
    let height = Number(arr.shift());
    let width = Number(arr.shift());
    let unpaintedPart = Number(arr.shift());
    let paintLiters = arr.shift();

    let area = height * width * 4;
    let areaPaint = Math.ceil(area - (area * unpaintedPart) / 100);

    while (paintLiters != 'Tired!') {
        paintLiters = Number(paintLiters);

        areaPaint -= paintLiters;

        if (areaPaint <= 0) {
            break;
        }

        paintLiters = arr.shift();
    }

    if (areaPaint < 0) {
        console.log(`All walls are painted and you have ${Math.abs(areaPaint)} l paint left!`);
    } else if (areaPaint == 0) {
        console.log(`All walls are painted! Great job, Pesho!`)
    } else if (paintLiters == 'Tired!') {
        console.log(`${areaPaint} quadratic m left.`);
    }
}

renovation([3, 5, 10, 2, 3, 4, 'Tired!']);
renovation([2, 3, 25, 6, 7, 8]);
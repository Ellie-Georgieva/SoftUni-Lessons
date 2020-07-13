function club(arr) {
    let budget = Number(arr.shift());
    let cocktailName = arr.shift();
    let profit = 0;
    
    while ( cocktailName != 'Party!') {
        let cocktailNum = Number(arr.shift());
        let cocktailPrice = cocktailName.length;
        let totalcocktailPrice = cocktailPrice * cocktailNum;

        if (totalcocktailPrice % 2 != 0) {
            totalcocktailPrice -= (totalcocktailPrice * 0.25);
        }
        profit += totalcocktailPrice;

        if (profit >= budget) {
            console.log(`Target acquired.`);
            break;
        }

        cocktailName = arr.shift();
    }

    if (cocktailName == 'Party!') {
        let diff = budget - profit;
        console.log(`We need ${diff.toFixed(2)} leva more.`);
    }

    console.log(`Club income - ${profit.toFixed(2)} leva.`);
}

club([500, 'Bellini', 6, 'Bamboo', 7, 'Party!']);
club([100, 'Sidecar', 7, 'Mojito', 5, 'White Russian', 10]);
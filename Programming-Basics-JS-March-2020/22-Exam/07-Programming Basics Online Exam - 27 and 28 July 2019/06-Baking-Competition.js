function bakingCompetition(arr) {
    let bakersNum = Number(arr.shift());
    let bakerName = arr.shift();
    let cookiesTotal = 0;
    let cakesTotal = 0;
    let wafflesTotal = 0;

    for (let i = 1; i <= bakersNum; i++) {
        let cookies = 0;
        let cakes = 0;
        let waffles = 0;
        let cakeType = arr.shift();

        while (cakeType != 'Stop baking!') {
            let numCakes = Number(arr.shift());

            if (cakeType == 'cookies') {
                cookies += numCakes;
                cookiesTotal += numCakes
            } else if (cakeType == 'cakes') {
                cakes += numCakes;
                cakesTotal += numCakes;
            } else if (cakeType == 'waffles') {
                waffles += numCakes;
                wafflesTotal += numCakes;
            }

            cakeType = arr.shift();
        }

        console.log(`${bakerName} baked ${cookies} cookies, ${cakes} cakes and ${waffles} waffles.`);
        bakerName = arr.shift();
    }

    let totalSold = cookiesTotal + cakesTotal + wafflesTotal;
    let totalSoldMoney = (cookiesTotal * 1.5) + (cakesTotal * 7.8) + (wafflesTotal * 2.3);

    console.log(`All bakery sold: ${totalSold}`);
    console.log(`Total sum for charity: ${totalSoldMoney.toFixed(2)} lv.`);
}

bakingCompetition([3, 'Iva', 'cookies', 5, 'cakes', 3, 'Stop baking!', 'George', 'cakes', 7, 'waffles', 2, 'Stop baking!', 'Ivan', 'cookies', 6, 'Stop baking!']);
bakingCompetition([2, 'Annie', 'cakes', 3, 'waffles', 6, 'cookies', 2, 'Stop baking!', 'Petya', 'waffles', 8, 'Stop baking!']);
bakingCompetition([3, 'George', 'cookies', 10, 'Stop baking!', 'Annie', 'waffles', 8, 'Stop baking!', 'Ivan', 'cookies', 6, 'waffles', 3, 'Stop baking!']);
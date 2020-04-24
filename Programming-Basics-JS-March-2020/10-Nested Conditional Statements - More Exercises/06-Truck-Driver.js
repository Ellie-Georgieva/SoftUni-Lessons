function truckDriver(season, kilometers) {
    kilometers = Number(kilometers);
    let profit;

    if (kilometers <= 5000) {
        if (season === 'Spring' || season === 'Autumn') {
            profit = (kilometers * 0.75) * 4;
        } else if (season === 'Summer') {
            profit = (kilometers * 0.9) * 4;
        } else if (season === 'Winter') {
            profit = (kilometers * 1.05) * 4;
        }
    } else if (kilometers > 5000 && kilometers <= 10000) {
        if (season === 'Spring' || season === 'Autumn') {
            profit = (kilometers * 0.95) * 4;
        } else if (season === 'Summer') {
            profit = (kilometers * 1.1) * 4;
        } else if (season === 'Winter') {
            profit = (kilometers * 1.25) * 4;
        }
    } else if (kilometers > 10000 && kilometers <= 20000) {
        profit = (kilometers * 1.45) * 4;
    }
    
    let finalProfit = profit - (profit * 0.1);
    console.log(finalProfit.toFixed(2));
}

truckDriver('Summer', 3455);
truckDriver('Winter', 4350);
truckDriver('Spring', 1600);
truckDriver('Winter', 5678);
truckDriver('Autumn', 8600);
truckDriver('Winter', 16042);
truckDriver('Spring', 16942);
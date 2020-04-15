function journey(budget, season) {
    budget = Number(budget);
    let destination;
    let placeType;
    let price;

    if (budget <= 100) {
        destination = 'Bulgaria';
        if (season == 'summer') {
            placeType = 'Camp';
            price = budget * 0.3;
        } else if (season == 'winter') {
            placeType = 'Hotel';
            price = budget * 0.7;
        }
    } if (budget <= 1000 && budget > 100) {
        destination = 'Balkans';
        if (season == 'summer') {
            placeType = 'Camp';
            price = budget * 0.4;
        } else if (season == 'winter') {
            placeType = 'Hotel';
            price = budget * 0.8;
        }
    } if (budget > 1000) {
        destination = 'Europe';
        placeType = 'Hotel';
        price = budget * 0.9;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${placeType} - ${price.toFixed(2)}`);
}

journey(50, 'summer');
journey(75, 'winter');
journey(312, 'summer');
journey(678.53, 'winter');
journey(1500, 'summer');
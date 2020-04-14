function fishingBoat(budget, season, fishermen) {
    budget = +budget; 
    fishermen = +fishermen;
    let price = 0;

    if (fishermen <= 6) {
        if (season == 'Spring') {
            price = 3000 - (3000 * 0.1);
        } else if (season == 'Summer' || season == 'Autumn') {
            price = 4200 - (4200 * 0.1);
        }  else if (season == 'Winter') {
            price = 2600 - (2600 * 0.1);
        }
    } else if (fishermen >= 7 && fishermen <= 11) {
        if (season == 'Spring') {
            price = 3000 - (3000 * 0.15);
        } else if (season == 'Summer' || season == 'Autumn') {
            price = 4200 - (4200 * 0.15);
        }  else if (season == 'Winter') {
            price = 2600 - (2600 * 0.15);
        }
    } else if (fishermen >= 12) {
        if (season == 'Spring') {
            price = 3000 - (3000 * 0.25);
        } else if (season == 'Summer' || season == 'Autumn') {
            price = 4200 - (4200 * 0.25);
        }  else if (season == 'Winter') {
            price = 2600 - (2600 * 0.25);
        }
    }

    if (fishermen % 2 == 0 && season != 'Autumn') {
        price = price - (price * 0.05);
    }

    if (budget >= price) {
        let difference = budget - price;
        console.log(`Yes! You have ${difference.toFixed(2)} leva left.`);
    } else {
        let difference = price - budget;
        console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`);
    }
}

fishingBoat(3000, 'Summer', 11);
fishingBoat(3600, 'Autumn', 6);
fishingBoat(2000, 'Winter', 13);
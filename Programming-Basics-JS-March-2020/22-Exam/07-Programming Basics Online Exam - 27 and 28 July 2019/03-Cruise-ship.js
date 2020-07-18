function cruiseShip(arr) {
    let cruise = arr.shift();
    let cabin = arr.shift();
    let nights = Number(arr.shift());
    let price = 0;

    if (cruise == 'Mediterranean') {
        if (cabin == 'standard cabin') {
            price = 27.50 * nights * 4;
        } else if ( cabin == 'cabin with balcony') {
            price = 30.20 * nights * 4;
        } else if ( cabin == 'apartment') {
            price = 40.50 * nights * 4;
        }
    } else if (cruise == 'Adriatic') {
        if (cabin == 'standard cabin') {
            price = 22.99 * nights * 4;
        } else if ( cabin == 'cabin with balcony') {
            price = 25.00 * nights * 4;
        } else if ( cabin == 'apartment') {
            price = 34.99 * nights * 4;
        }
    } else if (cruise == 'Aegean') {
        if (cabin == 'standard cabin') {
            price = 23.00 * nights * 4;
        } else if ( cabin == 'cabin with balcony') {
            price = 26.60 * nights * 4;
        } else if ( cabin == 'apartment') {
            price = 39.80 * nights * 4;
        }
    }

    if (nights > 7) {
        price -= (price * 0.25);
    }

    console.log(`Annie's holiday in the ${cruise} sea costs ${price.toFixed(2)} lv.`);
}

cruiseShip(['Aegean', 'standard cabin', 10]);
cruiseShip(['Adriatic', 'apartment', 5]);
cruiseShip(['Mediterranean', 'cabin with balcony', 12]);
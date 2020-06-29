function safari(arr) {
    let budget = Number(arr.shift());
    let fuelNeeded = Number(arr.shift());
    let day = arr.shift();

    let fuel = fuelNeeded * 2.10;
    let price = fuel + 100;

    if (day == 'Saturday') {
        price -= (price * 0.1);
    } else if (day == 'Sunday') {
        price -= (price * 0.2);
    }

    if (budget >= price) {
        let diff = budget - price;
        console.log(`Safari time! Money left: ${diff.toFixed(2)} lv.`);
    } else {
        diff = price - budget;
        console.log(`Not enough money! Money needed: ${diff.toFixed(2)} lv.`);
    }
}

safari(['1000', '10', 'Sunday']);
safari(['120', '30', 'Saturday']);
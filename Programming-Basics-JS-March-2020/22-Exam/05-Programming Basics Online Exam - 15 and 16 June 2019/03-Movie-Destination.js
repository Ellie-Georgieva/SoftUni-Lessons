function movieDestination(arr) {
    let budget = Number(arr.shift());
    let destination = arr.shift()
    let season = arr.shift()
    let days = Number(arr.shift());
    let price = 0;

    if (destination == 'Dubai') {
        if (season == 'Winter') {
            price = 45000 * days;
        } else if (season == 'Summer') {
            price = 40000 * days;
        }
    } else if (destination == 'Sofia') {
        if (season == 'Winter') {
            price = 17000 * days;
        } else if (season == 'Summer') {
            price = 12500 * days;
        }
    } else if (destination == 'London') {
        if (season == 'Winter') {
            price = 24000 * days;
        } else if (season == 'Summer') {
            price = 20250 * days;
        }
    }

    if (destination == 'Dubai') {
        price -= (price * 0.3);
    } else if (destination == 'Sofia') {
        price += (price * 0.25);
    }

    if (budget >= price) {
        let diff = budget - price;
        console.log(`The budget for the movie is enough! We have ${diff.toFixed(2)} leva left!`);
    } else {
        let diff = price - budget;
        console.log(`The director needs ${diff.toFixed(2)} leva more!`);
    }
}

movieDestination([400000, 'Sofia', 'Winter', 20]);
movieDestination([1000000, 'Dubai', 'Summer', 5]);
movieDestination([200000, 'London', 'Summer', 7]);
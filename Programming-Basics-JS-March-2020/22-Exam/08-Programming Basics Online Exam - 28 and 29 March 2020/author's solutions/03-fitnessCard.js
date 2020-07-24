function solve(input) {
    // input data
    let moneyOwned = Number(input.shift());
    let gender = input.shift();
    let age = Number(input.shift());
    let sport = input.shift();

    // declare variables
    let price = 0;

    // check for age gender and sport
    if (gender == 'm') {
        switch (sport) {
            case 'Gym':
                price = 42;
                break;
            case 'Boxing':
                price = 41;
                break;
            case 'Yoga':
                price = 45;
                break;
            case 'Zumba':
                price = 34;
                break;
            case 'Dances':
                price = 51;
                break;
            case 'Pilates':
                price = 39;
                break;
        }
    } else {
        switch (sport) {
            case 'Gym':
                price = 35;
                break;
            case 'Boxing':
                price = 37;
                break;
            case 'Yoga':
                price = 42;
                break;
            case 'Zumba':
                price = 31;
                break;
            case 'Dances':
                price = 53;
                break;
            case 'Pilates':
                price = 37;
                break;
        }
    }

    // apply condintional discount
    if (age <= 19) {
        price *= 0.8;
    }

    // print result
    if (moneyOwned >= price) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
        let moneyMore = price - moneyOwned;
        console.log(`You don't have enough money! You need $${moneyMore.toFixed(2)} more.`);
    }
}

solve([ '20', 'f', '15', 'Yoga' ]);
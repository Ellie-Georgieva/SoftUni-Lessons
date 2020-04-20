function bikeRace(juniors, seniors, track) {
    juniors = +juniors;
    seniors = +seniors;
    let feeJuniors;
    let feeSeniors;

    switch(track) {
        case 'trail':
            feeJuniors = juniors * 5.50;
            feeSeniors = seniors * 7;
            break;
        case 'cross-country':
            feeJuniors = juniors * 8;
            feeSeniors = seniors * 9.50;
            break;
        case 'downhill':
            feeJuniors = juniors * 12.25;
            feeSeniors = seniors * 13.75;
            break;
        case 'road':
            feeJuniors = juniors * 20;
            feeSeniors = seniors * 21.50;
            break;
    }

    if (track === 'cross-country' && (juniors + seniors) >= 50) {
        feeJuniors = feeJuniors - (feeJuniors * 0.25);
        feeSeniors = feeSeniors - (feeSeniors * 0.25);
    }

    let profit = (feeSeniors + feeJuniors);
    let expense = profit - (profit * 0.05);

    console.log(expense.toFixed(2));
}

bikeRace(10, 20, 'trail');
bikeRace(20, 25, 'cross-country');
bikeRace(30, 25, 'cross-country');
bikeRace(10, 10, 'downhill');
bikeRace(3, 40, 'road');
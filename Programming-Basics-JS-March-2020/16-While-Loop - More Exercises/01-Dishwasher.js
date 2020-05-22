function dishwasher(arr) {
    let detergent = Number(arr.shift()) * 750;
    let totalPlates = 0;
    let totalPots = 0;
    let days = 0;

    while (true) {
        let dishes = arr.shift();
        days++;

        if (dishes == 'End') {
            break; 
        } 

        dishes = Number(dishes);

        if (days % 3 == 0) {
            detergent -= (dishes * 15);
            totalPots += dishes;
        } else {
            detergent -= (dishes * 5);
            totalPlates += dishes;
        }

        if (detergent < 0) {
            console.log(`Not enough detergent, ${Math.abs(detergent)} ml. more necessary!`);
            break;
        }
    }
    if (detergent >= 0) {
        console.log('Detergent was enough!');
        console.log(`${totalPlates} dishes and ${totalPots} pots were washed.`);
        console.log(`Leftover detergent ${detergent} ml.`);
    }
}

dishwasher([2, 53, 65, 55, 'End']);
dishwasher([1, 10, 15, 10, 12, 13, 30]);
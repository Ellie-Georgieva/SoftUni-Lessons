function catWalking(arr) {
    let walkMinutes = +arr.shift();
    let walkNum = +arr.shift();
    let caloriesTaken = +arr.shift();
    let caloriesNeededBurned = caloriesTaken / 2;

    let totalMinutes = walkMinutes * walkNum;
    let caloriesBurned = totalMinutes * 5;

    if (caloriesBurned >= caloriesNeededBurned) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurned}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurned}.`);
    }
}

catWalking([30, 3, 600]);
catWalking([15, 2, 500]);
catWalking([40, 2, 300]);
function solve(input) {
    // input data
    let days = Number(input.shift());
    let totalFood = Number(input.shift());

    // declare variables for statistics
    let foodEatenByDog = 0;
    let foodEatenByCat = 0;
    let biscuits = 0;

    // loop for days
    for (let i = 1; i <= days; i++) {
        // read eaten food
        let currentEatenFoodByDog = Number(input.shift());
        let currentEatenFoodByCat = Number(input.shift());

        foodEatenByDog += currentEatenFoodByDog;
        foodEatenByCat += currentEatenFoodByCat;

        // check for third day
        if (i % 3 == 0) {
            // calculate biscuits
            let currentBiscuits = (currentEatenFoodByDog + currentEatenFoodByCat) * 0.1;

            biscuits += currentBiscuits;
        }
    }

    // Calculate statistics
    let totalEatenFood = foodEatenByCat + foodEatenByDog;
    let eatenFoodPercen = (totalEatenFood / totalFood) * 100;
    let eatenFoodByDogPercent = (foodEatenByDog / totalEatenFood) * 100;
    let eatenFoodByCatPercent = (foodEatenByCat / totalEatenFood) * 100;

    // Print statistics
    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
    console.log(`${eatenFoodPercen.toFixed(2)}% of the food has been eaten.`);
    console.log(`${eatenFoodByDogPercent.toFixed(2)}% eaten from the dog.`);
    console.log(`${eatenFoodByCatPercent.toFixed(2)}% eaten from the cat.`);
}

solve([
    '3',   '1000',
    '300', '20',
    '100', '30',
    '110', '40'
]);
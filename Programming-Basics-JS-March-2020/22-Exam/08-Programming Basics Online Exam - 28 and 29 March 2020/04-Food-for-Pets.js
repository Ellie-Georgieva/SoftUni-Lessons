function foodForPets(arr) {
    let days = +arr.shift();
    let food = +arr.shift();
    let totalDog = 0;
    let totalCat = 0;
    let cookies = 0;

    for (let i = 1; i <= days; i++) {
        let dogEats = +arr.shift();
        let catEats = +arr.shift();
        totalDog += dogEats;
        totalCat += catEats;

        if (i % 3 == 0) {
            let totalDayFood = dogEats + catEats;
            cookies += totalDayFood * 0.1
        }
    }

    let totalEatenFood = totalCat + totalDog;
    let totalEatenFoodРercentage = (totalEatenFood / food) * 100;
    let dogРercentage = (totalDog / totalEatenFood) * 100;
    let catРercentage = (totalCat / totalEatenFood) * 100;

    console.log(`Total eaten biscuits: ${cookies.toFixed(0)}gr.`);
    console.log(`${totalEatenFoodРercentage.toFixed(2)}% of the food has been eaten.`);
    console.log(`${dogРercentage.toFixed(2)}% eaten from the dog.`);
    console.log(`${catРercentage.toFixed(2)}% eaten from the cat.`);
}

foodForPets([3, 1000, 300, 20, 100, 30, 110, 40]);
foodForPets([3, 500, 100, 30, 110, 25, 120, 35]);
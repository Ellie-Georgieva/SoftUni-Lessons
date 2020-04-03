function pets(days, food, dogFood, catFood, turtleFood) {
    days = Number(days);
    food = Number(food);
    dogFood = Number(dogFood);
    catFood = Number(catFood);
    turtleFood = Number(turtleFood);

    let turtleFoodKg = turtleFood / 1000;
    let eatenFood = (dogFood + catFood + turtleFoodKg) * days;
    let eatenFood2 = Math.ceil(eatenFood);

    if (eatenFood2 > food) {
        let difference = eatenFood2 - food;
        let difference2 = Math.ceil(difference);
        console.log(`${difference2} more kilos of food are needed.`);
    } else {
        let difference = food - eatenFood2;
        let difference2 = Math.ceil(difference);
        console.log(`${difference2} kilos of food left.`);
    }
}

pets(2, 10, 1, 1, 1200);
pets(5, 10, 2.1, 0.8, 321);
function newHouse(flowers, numberOfFlowers, budget) {
    numberOfFlowers = Number(numberOfFlowers);
    budget = Number(budget);
    let price = 0;

    if (flowers == 'Roses') {
        if (numberOfFlowers > 80) {
            priceWithoutDiscount = (numberOfFlowers * 5);
            price = priceWithoutDiscount - (priceWithoutDiscount * 0.1);
        } else {
            price = numberOfFlowers * 5;
        }
    } else if (flowers == 'Dahlias') {
        if (numberOfFlowers > 90) {
            priceWithoutDiscount = (numberOfFlowers * 3.8);
            price = priceWithoutDiscount - (priceWithoutDiscount * 0.15);
        } else {
            price = numberOfFlowers * 3.8;
        }
    } else if (flowers == 'Tulips') {
        if (numberOfFlowers > 80) {
            priceWithoutDiscount = (numberOfFlowers * 2.8);
            price = priceWithoutDiscount - (priceWithoutDiscount * 0.15);
        } else {
            price = numberOfFlowers * 2.8;
        }
    } else if (flowers == 'Narcissus') {
        if (numberOfFlowers < 120) {
            priceWithoutDiscount = (numberOfFlowers * 3);
            price = priceWithoutDiscount + (priceWithoutDiscount * 0.15);
        } else {
            price = numberOfFlowers * 3;
        }
    } else if (flowers == 'Gladiolus') {
        if (numberOfFlowers < 80) {
            priceWithoutDiscount = (numberOfFlowers * 2.5);
            price = priceWithoutDiscount + (priceWithoutDiscount * 0.2);
        } else {
            price = numberOfFlowers * 2.5;
        }
    }

    if (price <= budget) {
        let money = budget - price;
        console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flowers} and ${money.toFixed(2)} leva left.`)
    } else {
        let money = price - budget;
        console.log(`Not enough money, you need ${money.toFixed(2)} leva more.`)
    }
}

newHouse('Roses', 55, 250);
newHouse('Tulips', 88, 260);
newHouse('Narcissus', 119, 360);
function touristShop(arr) {
    let budget = Number(arr.shift());
    let product = arr.shift();
    let startBudget = budget;
    let productNum = 0;

    while (product != 'Stop') {
        let price = Number(arr.shift());
        productNum++;

        if (productNum % 3 == 0) {
            price = (price / 2);
        }

        if (price > budget) {
            let diff = price - budget;
            console.log(`You don't have enough money!`);
            console.log(`You need ${diff.toFixed(2)} leva!`);
            break;
        }

        budget -= price;
        product = arr.shift();
    }

    if (product == 'Stop') {
        let diff = startBudget - budget;
        console.log(`You bought ${productNum} products for ${diff.toFixed(2)} leva.`);
    }
}

touristShop([153.20, 'Backpack', 25.20, 'Shoes', 54, 'Sunglasses', 30, 'Stop']);
touristShop([54, 'Thermal underwear', 24, 'Sunscreen', 45]);
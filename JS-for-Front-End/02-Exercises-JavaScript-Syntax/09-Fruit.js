function fruit(fruits, weight, price) {
    let weightKG = (weight / 1000);
    let weightKGFix = weightKG.toFixed(2);
    let money = (weightKG * price);
    let moneyFix = money.toFixed(2);
    console.log(`I need $${moneyFix} to buy ${weightKGFix} kilograms ${fruits}.`);
    }

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);
function gladiatorExpenses(lostFightsCountInput, helmetPriceInput, swordPriceInput, shieldPriceInput, armorPriceInput) {
    const lostFightsCount = lostFightsCountInput;
    const helmetPrice = helmetPriceInput; 
    const swordPrice = swordPriceInput;
    const shieldPrice = shieldPriceInput;
    const armorPrice = armorPriceInput;
    let helmet = 0;
    let sword = 0;
    let shield = 0;
    let shieldNum = 0;
    let armor = 0;

    for (let i = 1; i <= lostFightsCount; i++) {

        if (i % 2 == 0) {
            helmet += helmetPrice;
        }

        if (i % 3 == 0) {
            sword += swordPrice;
        }

        if (i % 2 == 0 && i % 3 == 0) {
            shield += shieldPrice;
            shieldNum++;
        }

        if (shieldNum == 2) {
            armor += armorPrice;
            shieldNum = 0;
        }
    }

    let totalPrce = helmet + sword + shield + armor;
    console.log(`Gladiator expenses: ${totalPrce.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200);
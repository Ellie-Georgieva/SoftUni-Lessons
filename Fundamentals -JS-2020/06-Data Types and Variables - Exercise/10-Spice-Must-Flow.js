function spiceMustFlow(startingYieldInput) {
    let startingYield = startingYieldInput;
    let totalSpice = 0;
    let days = 0;

    while (startingYield >= 100) {
        totalSpice += startingYield;
        days++;

        if (totalSpice < 26) {
            totalSpice = 0;
        } else {
            totalSpice -= 26;
        }

        startingYield -= 10;

        if (startingYield < 100) {
            if (totalSpice < 26) {
                totalSpice = 0;
            } else {
                totalSpice -= 26;
            }
        }
    }

    console.log(days);
    console.log(totalSpice);
}

spiceMustFlow(111);
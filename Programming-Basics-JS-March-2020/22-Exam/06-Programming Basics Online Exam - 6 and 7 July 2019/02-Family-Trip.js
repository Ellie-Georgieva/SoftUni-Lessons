function familyTrip(arr) {
    let budget = Number(arr.shift());
    let nightsNum = Number(arr.shift());
    let nightsPrice = Number(arr.shift());
    let extraCostsPercentage = Number(arr.shift());

    let nightsCosts = nightsNum * nightsPrice;

    if (nightsNum > 7) {
        nightsCosts = nightsCosts - (nightsCosts * 0.05);
    }

    let extraCosts = (budget * extraCostsPercentage) / 100;
    let totalCosts = extraCosts + nightsCosts;

    if (budget >= totalCosts) {
        let diff = budget - totalCosts;
        console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`);
    } else {
        let diff = totalCosts - budget;
        console.log(`${diff.toFixed(2)} leva needed.`);
    }
}

familyTrip([800.50, 8, 100, 2]);
familyTrip([500, 7, 66, 15]);
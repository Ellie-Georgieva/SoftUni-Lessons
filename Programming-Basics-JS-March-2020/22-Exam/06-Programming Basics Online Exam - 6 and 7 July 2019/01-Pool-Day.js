function poolDay(arr) {
    let employees = Number(arr.shift());
    let entrance = Number(arr.shift());
    let deckChair = Number(arr.shift());
    let umbrella = Number(arr.shift());

    let entranceTax = employees * entrance;
    let umbrellaPrice = Math.ceil(employees / 2) * umbrella;
    let deckChairPrice = Math.ceil(employees * 0.75) * deckChair;

    let moneyNeeded = entranceTax + umbrellaPrice + deckChairPrice;
    console.log(`${moneyNeeded.toFixed(2)} lv.`);
}

poolDay([21, 5.50, 4.40, 6.20]);
poolDay([50, 6, 8, 4]);
poolDay([100, 8, 6, 4]);
function vegetableMarket(vegetablesPrice, fruitsPrice, vegetablesKG, fruitsKG) {
    vegetablesPrice = Number(vegetablesPrice);
    fruitsPrice = Number(fruitsPrice);
    vegetablesKG = Number(vegetablesKG);
    fruitsKG = Number(fruitsKG);
    let vegeFruits = (vegetablesPrice * vegetablesKG) + (fruitsPrice * fruitsKG);
    console.log((vegeFruits / 1.94).toFixed(2));
}
vegetableMarket(0.194, 19.4, 10, 10);
vegetableMarket(1.5, 2.5, 10, 10);
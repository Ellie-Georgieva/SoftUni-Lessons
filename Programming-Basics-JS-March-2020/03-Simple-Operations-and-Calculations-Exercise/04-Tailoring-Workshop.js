function tailoringWorkshop(rectTables, lengthRectMasses, widthRectMasses) {
    let edge = 0.30;
    rectTables = Number(rectTables)
    lengthRectMasses = Number(lengthRectMasses)
    widthRectMasses = Number(widthRectMasses)

    let areaTablecloths = rectTables * (lengthRectMasses + 0.6) * (widthRectMasses + 0.6);
    let areaCarriage = rectTables * (lengthRectMasses / 2) * (lengthRectMasses / 2);
    let fabricRectPriceUSD = 7;
    let fabricQuadsPriceUSD = 9;
    
    let dollarPrice = ((areaTablecloths * fabricRectPriceUSD) + (areaCarriage * fabricQuadsPriceUSD));
    let levPrice = (dollarPrice * 1.85);
    console.log(`${dollarPrice.toFixed(2)} USD`);
    console.log(`${levPrice.toFixed(2)} BGN`);
}

tailoringWorkshop(5, 1.00, 0.50);
tailoringWorkshop(10, 1.20, 0.65);
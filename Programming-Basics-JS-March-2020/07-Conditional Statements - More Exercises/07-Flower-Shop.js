function flowerShop(magnolias, hyacinths, roses, cactus, giftPrice) {
    magnolias = Number(magnolias);
    hyacinths = Number(hyacinths);
    roses = Number(roses);
    cactus = Number(cactus);
    giftPrice = Number(giftPrice);

    let flowerPrice = (magnolias * 3.25) + (hyacinths * 4) + (roses * 3.5) + (cactus * 8);
    let profit = flowerPrice - (flowerPrice * 0.05);

    if (profit >= giftPrice) {
        let difference = profit - giftPrice;
        let difference2 = Math.floor(difference);
        console.log(`She is left with ${difference2} leva.`);
    } else {
        let difference = giftPrice - profit;
        let difference2 = Math.ceil(difference);
        console.log(`She will have to borrow ${difference2} leva.`);
    }
}

flowerShop(2, 3, 5, 1, 50);
flowerShop(15, 7, 5, 10, 100);
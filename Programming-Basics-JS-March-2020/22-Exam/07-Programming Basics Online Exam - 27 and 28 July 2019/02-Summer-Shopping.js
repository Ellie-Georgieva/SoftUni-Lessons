function summerShopping(arr) {
    let budget = Number(arr.shift());
    let beacTowelPrice = Number(arr.shift());
    let discount = Number(arr.shift());

    let umbrellaPrice = (beacTowelPrice / 3) * 2;
    let flipflopsPrice = umbrellaPrice * 0.75;
    let bagPrice = (flipflopsPrice + beacTowelPrice) / 3;
    
    let totalPrice = beacTowelPrice + umbrellaPrice + flipflopsPrice + bagPrice;
    let priceDiscount = totalPrice - ((totalPrice * discount) / 100);

    if (budget >= priceDiscount) {
        let diff = budget - priceDiscount;
        console.log(`Annie's sum is ${priceDiscount.toFixed(2)} lv. She has ${diff.toFixed(2)} lv. left.`);
    } else {
        let diff = priceDiscount - budget;
        console.log(`Annie's sum is ${priceDiscount.toFixed(2)} lv. She needs ${diff.toFixed(2)} lv. more.`);
    }
}

summerShopping([40, 15, 5]);
summerShopping([25, 6, 10]);
summerShopping([30, 17, 3]);
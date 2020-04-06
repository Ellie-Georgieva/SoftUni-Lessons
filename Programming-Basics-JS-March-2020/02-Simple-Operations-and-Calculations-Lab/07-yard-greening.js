function yardGreening(meters) {
    let price = meters * 7.61 ;
    let discount = 0.18 * price;
    let finalPrice = price.toFixed(2);
    let finalPersent = discount.toFixed(2);
    let priceFinal = (finalPrice - finalPersent).toFixed(2);
    console.log(`The final price is: ${priceFinal} lv.`);
    console.log(`The discount is: ${finalPersent} lv.`);
}

yardGreening(540);
function solve(input) {
    let pensPrice = 5.8;
    let markersPrice = 7.2;
    let detergentPrice = 1.2;

    // Input data
    let penCount = Number(input.shift());
    let markerCount = Number(input.shift());
    let detergentVolume = Number(input.shift());
    let discountPercent = Number(input.shift());

    // calculation
    let pensTotalPrice = penCount * pensPrice;
    let merkersTotalPrice = markerCount * markersPrice;
    let detergentTotalPrice = detergentVolume * detergentPrice;

    let totalPrice = pensTotalPrice + merkersTotalPrice + detergentTotalPrice;

    let discount = discountPercent / 100;
    let totalPriceWithDiscount = totalPrice * (1 - discount);

    // print output
    console.log(totalPriceWithDiscount.toFixed(3));
}

solve([ '2', '3', '2.5', '25' ]);
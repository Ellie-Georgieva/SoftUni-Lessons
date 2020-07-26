function suppliesForSchool(arr) {
    let pensNum = +arr.shift();
    let markersNum = +arr.shift();
    let boardCleanerLiters = +arr.shift();
    let discount = +arr.shift();

    let pensPrice = pensNum * 5.80;
    let markersPrice = markersNum * 7.20;
    let boardCleanerLitersPrice = boardCleanerLiters * 1.20;

    let totalPrice = pensPrice + markersPrice + boardCleanerLitersPrice;
    let price = totalPrice - (totalPrice * discount) / 100;

    console.log(price.toFixed(3));
}

suppliesForSchool([2, 3, 2.5, 25]);
suppliesForSchool([4, 2, 5, 13]);
suppliesForSchool([7, 8, 0.5, 45]);
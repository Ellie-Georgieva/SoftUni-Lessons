function foodDelivery(arr) {
    let chickenMenuNum = Number(arr.shift());
    let fishMenuNum = Number(arr.shift());
    let vegetarianMenuNum = Number(arr.shift());

    let chickenMenuPrice = chickenMenuNum * 10.35;
    let fishMenuPrice = fishMenuNum * 12.40;
    let vegetarianMenuPrice = vegetarianMenuNum * 8.15;
    let totalPrice = chickenMenuPrice + fishMenuPrice + vegetarianMenuPrice;
    let dessert = totalPrice * 0.2;
    totalPrice += dessert + 2.50;

    console.log(`Total: ${totalPrice.toFixed(2)}`);
}

foodDelivery([2, 4, 3]);
foodDelivery([10, 0, 6]);
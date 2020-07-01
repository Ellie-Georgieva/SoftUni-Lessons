function vetParking(arr) {
    let days = Number(arr.shift());
    let hours = Number(arr.shift());
    let totalPrice = 0;

    for (let d = 1; d <= days; d++) {
        let price = 0;

        for (let h = 1; h <= hours; h++) {

            if (d % 2 == 0 && h % 2 != 0) {
                price += 2.5;
            } else if (d % 2 != 0 && h % 2 == 0) {
                price += 1.25;
            } else {
                price += 1;
            }
        }

        console.log(`Day: ${d} - ${price.toFixed(2)} leva`);
        totalPrice += price;
    }

    console.log(`Total: ${totalPrice.toFixed(2)} leva`);
}

vetParking([2, 5]);
vetParking([5, 2]);
function energyBooster(arr) {
    let fruit = arr.shift();
    let size = arr.shift();
    let num = +arr.shift();
    let price = 0;

    if (fruit == 'Watermelon') {
        if (size == 'small') {
            price = num * 56 * 2;
        } else {
            price = num * 28.70 * 5;
        }
    } else if (fruit == 'Mango') {
        if (size == 'small') {
            price = num * 36.66 * 2;
        } else {
            price = num * 19.60 * 5;
        }
    } else if (fruit == 'Pineapple') {
        if (size == 'small') {
            price = num * 42.10 * 2;
        } else {
            price = num * 24.80 * 5;
        }
    } else if (fruit == 'Raspberry') {
        if (size == 'small') {
            price = num * 20 * 2;
        } else {
            price = num * 15.20 * 5;
        }
    }

    if (price >= 400 && price <= 1000) {
        price -= (price * 0.15);
    } else if (price > 1000) {
        price -= (price * 0.50);
    }

    console.log(`${price.toFixed(2)} lv.`)
}

energyBooster(['Watermelon', 'big', 4]);
energyBooster(['Pineapple', 'small', 1]);
energyBooster(['Raspberry', 'small', 50]);
energyBooster(['Mango', 'big', 8]);
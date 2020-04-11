function fruitShop(fruit, day, amount) {
    amount = Number(amount);
    let price = 0;

    if (day == 'Saturday' || day == 'Sunday') {
        if (fruit == 'banana') {
            price = amount * 2.70;
        } else if (fruit == 'apple') {
            price = amount * 1.25;
        } else if (fruit == 'orange') {
            price = amount * 0.90;
        } else if (fruit == 'grapefruit') {
            price = amount * 1.60;
        } else if (fruit == 'kiwi') {
            price = amount * 3.00;
        } else if (fruit == 'pineapple') {
            price = amount * 5.60;
        } else if (fruit == 'grapes') {
            price = amount * 4.20;
        }
    } else if (day == 'Monday' || day == 'Tuesday' || day == 'Wednesday' || day == 'Thursday' || day == 'Friday') {
        if (fruit == 'banana') {
            price = amount * 2.50;
        } else if (fruit == 'apple') {
            price = amount * 1.20;
        } else if (fruit == 'orange') {
            price = amount * 0.85;
        } else if (fruit == 'grapefruit') {
            price = amount * 1.45;
        } else if (fruit == 'kiwi') {
            price = amount * 2.70;
        } else if (fruit == 'pineapple') {
            price = amount * 5.50;
        } else if (fruit == 'grapes') {
            price = amount * 3.85;
        }
    } 
    
    if (price != 0) {
        console.log(price.toFixed(2));
    } else if (price === 0) {
        console.log('error');
    }
}

fruitShop('apple', 'Workday', 2);
fruitShop('apple', 'Tuesday', 2);
fruitShop('orange', 'Sunday', 3);
fruitShop('kiwi', 'Monday', 2.5);
fruitShop('grapes', 'Saturday', 0.5);
fruitShop('tomato', 'Monday', 0.5);
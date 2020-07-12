function coffeeMachine(arr) {
    let drink = arr.shift();
    let sugar = arr.shift();
    let drinkNum = Number(arr.shift());
    let price = 0;

    if (sugar == 'Without') {
        if (drink == 'Espresso') {
            price = drinkNum * 0.9;
            price = price - (price * 0.35);

            if (drinkNum >= 5) {
                price = price - (price * 0.25);
            }
        } else if (drink == 'Cappuccino') {
            price = drinkNum * 1;
            price = price - (price * 0.35);
        } else if (drink == 'Tea') {
            price = drinkNum * 0.5;
            price = price - (price * 0.35);
        }
    } else if (sugar == 'Normal') {
        if (drink == 'Espresso') {
            price = drinkNum * 1;
           
            if (drinkNum >= 5) {
                price = price - (price * 0.25);
            }
        } else if (drink == 'Cappuccino') {
            price = drinkNum * 1.2;
        } else if (drink == 'Tea') {
            price = drinkNum * 0.6;
        }
    } else if (sugar == 'Extra') {
        if (drink == 'Espresso') {
            price = drinkNum * 1.2;
           
            if (drinkNum >= 5) {
                price = price - (price * 0.25);
            }
        } else if (drink == 'Cappuccino') {
            price = drinkNum * 1.6;
        } else if (drink == 'Tea') {
            price = drinkNum * 0.70;
        }
    }

    if (price > 15) {
        price = price - (price * 0.2);
    }

    console.log(`You bought ${drinkNum} cups of ${drink} for ${price.toFixed(2)} lv.`);
}

coffeeMachine(['Espresso', 'Without', 10]);
coffeeMachine(['Cappuccino', 'Normal', 13]);
coffeeMachine(['Tea', 'Extra', 3]);
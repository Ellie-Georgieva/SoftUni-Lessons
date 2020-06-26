function easterShop(arr) {
    let eggsInStore = Number(arr.shift());
    let action = arr.shift();
    let eggsSold = 0;

    while (action != 'Close') {
        let eggs = Number(arr.shift());

        if (action == 'Buy' && eggsInStore < eggs) {
            break;
        }

        if (action == 'Buy') {
            eggsSold += eggs;
            eggsInStore -= eggs;
        } else {
            eggsInStore += eggs;
        }

        action = arr.shift();
    }

    if (action == 'Close') {
        console.log(`Store is closed!`);
        console.log(`${eggsSold} eggs sold.`);
    } else {
        console.log(`Not enough eggs in store!`);
        console.log(`You can buy only ${eggsInStore}.`);
    }
}

easterShop([13, 'Buy', 8, 'Fill', 3, 'Buy', 10]);
easterShop([20, 'Fill', 30, 'Buy', 15, 'Buy', 20, 'Close']);
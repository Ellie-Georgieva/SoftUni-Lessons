function easterGuests(arr) {
    let guests = Number(arr.shift());
    let budget = Number(arr.shift());

    let eggs = guests * 2;
    let eggsPrice = eggs * 0.45;
    let easterBread = Math.ceil(guests / 3);
    let easterBreadPrice = easterBread * 4;
    let price = eggsPrice + easterBreadPrice;

    if (budget >= price) {
        let diff = budget - price;
        console.log(`Lyubo bought ${easterBread} Easter bread and ${eggs} eggs.`);
        console.log(`He has ${diff.toFixed(2)} lv. left.`);
    } else {
        let diff = price - budget;
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${diff.toFixed(2)} lv. more.`);
    }
}

easterGuests([10, 35]);
easterGuests([9, 12]);
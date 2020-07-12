function travelAgency(arr) {
    let city = arr.shift();
    let type = arr.shift();
    let discount = arr.shift();
    let days = Number(arr.shift());
    let price = 0;

    if (days > 7) {
        days--;
    }

    if (city == 'Bansko' || city == 'Borovets') {
        if (type == 'withEquipment') {
            price = 100 * days;
            if (discount == 'yes') {
                price -= (price * 0.1);
            }
        } else if (type == 'noEquipment') {
            price = 80 * days;
            if (discount == 'yes') {
                price -= (price * 0.05);
            }
        }
    }  else if (city == 'Varna' || city == 'Burgas') {
        if (type == 'withBreakfast') {
            price = 130 * days;
            if (discount == 'yes') {
                price -= (price * 0.12);
            }
        } else if (type == 'noBreakfast') {
            price = 100 * days;
            if (discount == 'yes') {
                price -= (price * 0.07);
            }
        }
    }

    if (days < 1) {
        console.log(`Days must be positive number!`);
    } else if (price != 0) {
        console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
    } else {
        console.log(`Invalid input!`);
    }
}

travelAgency(['Borovets', 'noEquipment', 'yes', 6]);
travelAgency(['Bansko', 'withEquipment', 'no', 2]);
travelAgency(['Varna', 'withBreakfast', 'yes', 5]);
travelAgency(['Burgas', 'noBreakfast', 'no', 4]);
travelAgency(['Varna', 'withBreakfast', 'no', 0]);
travelAgency(['Gabrovo', 'noBreakfast', 'no', 3]);
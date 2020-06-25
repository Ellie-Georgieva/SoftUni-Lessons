function easterTrip(arr) {
    let destination = arr.shift();
    let days = arr.shift();
    let nights = Number(arr.shift());
    let price = 0;

    if (destination == 'France') {
        if (days == '21-23') {
            price = 30 * nights;
        } else if (days == '24-27') {
            price = 35 * nights;
        } else if (days == '28-31') {
            price = 40 * nights;
        }
    } else if (destination == 'Italy') {
        if (days == '21-23') {
            price = 28 * nights;
        } else if (days == '24-27') {
            price = 32 * nights;
        } else if (days == '28-31') {
            price = 39 * nights;
        }
    } else if (destination == 'Germany') {
        if (days == '21-23') {
            price = 32 * nights;
        } else if (days == '24-27') {
            price = 37 * nights;
        } else if (days == '28-31') {
            price = 43 * nights;
        }
    }

    console.log(`Easter trip to ${destination} : ${price.toFixed(2)} leva.`);
}

easterTrip(['Germany', '24-27', '5']);
easterTrip(['Italy', '21-23', '7']);
easterTrip(['France', '28-31', '8']);
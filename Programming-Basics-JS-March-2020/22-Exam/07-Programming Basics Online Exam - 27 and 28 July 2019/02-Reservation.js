function reservation(arr) {
    let reservationDay = Number(arr.shift());
    let reservationMonth = Number(arr.shift());
    let accommodationDay = Number(arr.shift());
    let accommodationMonth = Number(arr.shift());
    let leavingDay = Number(arr.shift());
    let leavingMonth = Number(arr.shift());
    let price = 0;
    
    let stay = leavingDay - accommodationDay;

    if (reservationMonth == accommodationMonth) {
        let diff = accommodationDay - reservationDay;

        if (diff >= 10) {
            price = 25 * stay;
        } else {
            price = 30 * stay;
        }
    } else if (reservationMonth < accommodationMonth) {
        price = 25 * stay;
        price -= price * 0.2;        
    } else {
        price = 30 * stay;
    }

    console.log(`Your stay from ${accommodationDay}/${accommodationMonth} to ${leavingDay}/${leavingMonth} will cost ${price.toFixed(2)}`);
}

reservation([21, 7, 28, 8, 30, 8]);
reservation([10, 5, 15, 5, 18, 5]);
reservation([20, 10, 5, 11, 10, 11]);
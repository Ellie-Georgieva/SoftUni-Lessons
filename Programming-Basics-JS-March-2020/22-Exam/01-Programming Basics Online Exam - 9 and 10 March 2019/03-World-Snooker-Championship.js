function worldSnookerChampionship(arr) {
    let round = arr.shift();
    let ticket = arr.shift();
    let ticketNum = Number(arr.shift());
    let photo = arr.shift();
    let price = 0;
    let totalPrice = 0;

    if (round == 'Quarter final') {
        if (ticket == 'Standard') {
            price = 55.50 * ticketNum;
        } else if (ticket == 'Premium') {
            price = 105.20 * ticketNum;
        } else if (ticket == 'VIP') {
            price = 118.90 * ticketNum;
        }
    } else if (round == 'Semi final') {
        if (ticket == 'Standard') {
            price = 75.88 * ticketNum;
        } else if (ticket == 'Premium') {
            price = 125.22 * ticketNum;
        } else if (ticket == 'VIP') {
            price = 300.40 * ticketNum;
        }
    } else if (round == 'Final') {
        if (ticket == 'Standard') {
            price = 110.10 * ticketNum;
        } else if (ticket == 'Premium') {
            price = 160.66 * ticketNum;
        } else if (ticket == 'VIP') {
            price = 400 * ticketNum;
        }
    }

    if (price > 4000) {
        totalPrice = price - (price * 0.25);
    } else if (price > 2500) {
        totalPrice = price - (price * 0.1);
    } else {
        totalPrice = price;
    }

    if (price <= 4000 && photo == 'Y') {
        totalPrice += 40 * ticketNum;
    }

    console.log(totalPrice.toFixed(2));
}

worldSnookerChampionship(['Final', 'Premium', '25', 'Y']);
worldSnookerChampionship(['Semi final', 'VIP', '9', 'Y']);
worldSnookerChampionship(['Quarter final', 'Standard', '11', 'N']);
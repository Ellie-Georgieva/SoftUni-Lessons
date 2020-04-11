function skiTrip(days, room, rating) {
    days = Number(days);
    let price = 0;
 
    if (days < 10) {
        if (room == 'room for one person') {
            price = (days - 1) * 18;
        } else if (room == 'apartment') {
            let priceRoom = (days - 1) * 25;
            price = priceRoom - (priceRoom * 0.3);
        } else if (room == 'president apartment') {
            let priceRoom = (days - 1) * 35;
            price = priceRoom - (priceRoom * 0.1);
        }
    } else if (days >= 10 && days < 15) {
        if (room == 'room for one person') {
            price = (days - 1) * 18;
        } else if (room == 'apartment') {
            let priceRoom = (days - 1) * 25;
            price = priceRoom - (priceRoom * 0.35);
        } else if (room == 'president apartment') {
            let priceRoom = (days - 1) * 35;
            price = priceRoom - (priceRoom * 0.15);
        }
    } else if (days >= 15) {
        if (room == 'room for one person') {
            price = (days - 1) * 18;
        } else if (room == 'apartment') {
            let priceRoom = (days - 1) * 25;
            price = priceRoom - (priceRoom * 0.50);
        } else if (room == 'president apartment') {
            let priceRoom = (days - 1) * 35;
            price = priceRoom - (priceRoom * 0.2);
        }
    }

    let finalPrice = 0;

    if (rating == 'positive') {
        finalPrice = price + (price * 0.25); 
    } else if (rating == 'negative') {
        finalPrice = price - (price * 0.1);
    }

    console.log(finalPrice.toFixed(2));
}

skiTrip(14, 'apartment', 'positive');
skiTrip(30, 'president apartment', 'negative');
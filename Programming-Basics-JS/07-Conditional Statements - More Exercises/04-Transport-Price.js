function transportPrice(kilometers, period) {
    kilometers = Number(kilometers);
    
    if (kilometers <= 19) {
        if (period == 'day') {
            let price = (kilometers * 0.79) + 0.70;
            console.log(price.toFixed(2));
        } else if (period == 'night') {
            let price = (kilometers * 0.90) + 0.70;
            console.log(price.toFixed(2));
        }
    } else if (kilometers >= 100) {
        let price = kilometers * 0.06;
        console.log(price.toFixed(2));
    } else {
        let price = kilometers * 0.09;
        console.log(price.toFixed(2));
    }
}

transportPrice(5, 'day');
transportPrice(7, 'night');
transportPrice(25, 'day');
transportPrice(180, 'night');
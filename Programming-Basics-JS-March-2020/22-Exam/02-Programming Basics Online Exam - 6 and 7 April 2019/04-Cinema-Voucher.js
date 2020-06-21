function cinemaVoucher(arr) {
    let voucher = Number(arr.shift());
    let product = arr.shift();
    let tickets = 0;
    let others = 0;

    while (product != 'End') {
        let price = 0;

        if (product.length <= 8) {
            price = product.charCodeAt(0);

            if (voucher < price) {
                break;
            }
            others++;
        } else {
            price = product.charCodeAt(0) + product.charCodeAt(1);

            if (voucher < price) {
                break;
            }
            tickets++;
        }

        voucher -= price;
        product = arr.shift();
    }

    console.log(`${tickets}`);
    console.log(`${others}`);
}

cinemaVoucher([300, 'Captain Marvel', 'popcorn', 'Pepsi']);
cinemaVoucher([1500, 'Avengers: Endgame', 'Bohemian Rhapsody', 'Deadpool 2', 'End']);
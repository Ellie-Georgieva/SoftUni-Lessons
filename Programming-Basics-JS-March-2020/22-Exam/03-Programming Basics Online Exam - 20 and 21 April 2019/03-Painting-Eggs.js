function paintingEggs(arr) {
    let size = arr.shift();
    let color = arr.shift();
    let num = Number(arr.shift());
    let price = 0;

    if (size == 'Large') {
        if (color == 'Red') {
            price = 16 * num;
        } else if (color == 'Green') {
            price = 12 * num;
        } else if (color == 'Yellow') {
            price = 9 * num;
        }
    } else if (size == 'Medium') {
        if (color == 'Red') {
            price = 13 * num;
        } else if (color == 'Green') {
            price = 9 * num;
        } else if (color == 'Yellow') {
            price = 7 * num;
        }
    } else if (size == 'Small') {
        if (color == 'Red') {
            price = 9 * num;
        } else if (color == 'Green') {
            price = 8 * num;
        } else if (color == 'Yellow') {
            price = 5 * num;
        }
    }

    let totalPrice = price - (price * 0.35);
    console.log(`${totalPrice.toFixed(2)} leva.`);
}

paintingEggs(['Large', 'Red', 7]);
paintingEggs(['Medium', 'Green', 5]);
paintingEggs(['Small', 'Yellow', 3]);
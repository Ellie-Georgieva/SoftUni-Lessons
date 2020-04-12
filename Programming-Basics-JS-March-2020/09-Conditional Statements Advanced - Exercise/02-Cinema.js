function cinema(type, rows, columns) {
    rows = Number(rows);
    columns = Number(columns);
    let seats = rows * columns;
    let price = 0;

    if (type == 'Premiere') {
        price = seats * 12;
    } else if (type == 'Normal') {
        price = seats * 7.5;
    } else if (type == 'Discount') {
        price = seats * 5;
    }

    console.log(price.toFixed(2));
}

cinema('Premiere', 10, 12);
cinema('Normal', 21, 13);
cinema('Discount', 12, 30);
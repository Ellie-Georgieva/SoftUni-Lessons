function cinema(arr) {
    let hallCapacity = Number(arr.shift());
    let movieAudience = arr.shift();
    let profit = 0;

    while (movieAudience != 'Movie time!') {
        movieAudience = Number(movieAudience);

        if (movieAudience > hallCapacity) {
            console.log(`The cinema is full.`);
            break;
        } else {
            hallCapacity -= movieAudience;
        }

        profit += (5 * movieAudience);

        if (movieAudience % 3 == 0) {
            profit -= 5;
        }

        movieAudience = arr.shift();
    }

    if (movieAudience == 'Movie time!') {
        console.log(`There are ${hallCapacity} seats left in the cinema.`);
    }

    console.log(`Cinema income - ${profit} lv.`);
}

cinema([60, 10, 6, 3, 20, 15, 'Movie time!']);
cinema([50, 15, 10, 10, 15, 5]);
cinema([100, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 'Movie time!']);
function filmPremiere(arr) {
    let projection = arr.shift();
    let food = arr.shift();
    let tickets = Number(arr.shift());
    let price = 0;

    if (projection == 'John Wick') {
       
        if (food == 'Drink') {
            price = 12 * tickets;
        } else if (food == 'Popcorn') {
            price = 15 * tickets;
        } else if (food == 'Menu') {
            price = 19 * tickets;
        }
    } else if (projection == 'Star Wars') {
       
        if (food == 'Drink') {
            price = 18 * tickets;
        } else if (food == 'Popcorn') {
            price = 25 * tickets;
        } else if (food == 'Menu') {
            price = 30 * tickets;
        }

        if (tickets >= 4) {
            price -= (price * 0.3)
        }
    } else if (projection == 'Jumanji') {
       
        if (food == 'Drink') {
            price = 9 * tickets;
        } else if (food == 'Popcorn') {
            price = 11 * tickets;
        } else if (food == 'Menu') {
            price = 14 * tickets;
        }

        if (tickets == 2) {
            price -= (price * 0.15)
        }
    }

    console.log(`Your bill is ${price.toFixed(2)} leva.`);
}

filmPremiere(['John Wick', 'Drink', 6]);
filmPremiere(['Star Wars', 'Popcorn', 4]);
filmPremiere(['Jumanji', 'Menu', 2]);
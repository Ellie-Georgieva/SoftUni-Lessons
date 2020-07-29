function fitnessCard(arr) {
    let budget = +arr.shift();
    let gender = arr.shift();
    let age = +arr.shift();
    let sport = arr.shift();
    let price = 0;

    if (sport == 'Gym') {
        if (gender == 'm') {
            price = 42;
        } else if (gender = 'f') {
            price = 35;
        }
    } else if (sport == 'Boxing') {
        if (gender == 'm') {
            price = 41;
        } else if (gender = 'f') {
            price = 37;
        }
    } else if (sport == 'Yoga') {
        if (gender == 'm') {
            price = 45;
        } else if (gender = 'f') {
            price = 42;
        }
    } else if (sport == 'Zumba') {
        if (gender == 'm') {
            price = 34;
        } else if (gender = 'f') {
            price = 31;
        }
    } else if (sport == 'Dances') {
        if (gender == 'm') {
            price = 51;
        } else if (gender = 'f') {
            price = 53;
        }
    } else if (sport == 'Pilates') {
        if (gender == 'm') {
            price = 39;
        } else if (gender = 'f') {
            price = 37;
        }
    }

    if (age <= 19) {
        price -= (price * 0.2);
    }

    if (budget >= price) {
        console.log(`You purchased a 1 month pass for ${sport}.`)
    } else {
        let diff = price - budget;
        console.log(`You don't have enough money! You need $${diff.toFixed(2)} more.`)
    }
}

fitnessCard([50, 'm', 23, 'Gym']);
fitnessCard([20, 'f', 15, 'Yoga']);
fitnessCard([10, 'm', 50, 'Pilates']);
function movieStars(arr) {
    let budget = Number(arr.shift());
    let actor = arr.shift();
    let salary = 0;

    while (actor != 'ACTION') {

        if (actor.length > 15) {
            salary = budget * 0.2;
        } else {
            salary = Number(arr.shift());
        }

        budget -= salary;

        if (budget < 0) {
            break;
        }

        actor = arr.shift();
    }

    if (budget < 0) {
        budget = Math.abs(budget);
        console.log(`We need ${budget.toFixed(2)} leva for our actors.`);
    } else {
        console.log(`We are left with ${budget.toFixed(2)} leva.`);
    }   
}

movieStars([90000, 'Christian Bale', 70000.50, 'Leonard DiCaprio', 'Kevin Spacey', 24000.99]);
movieStars([170000, 'Ben Affleck', 40000.50, 'Zahari Baharov', 80000, 'Tom Hanks', 2000.99, 'ACTION']);
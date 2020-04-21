function carToGo(budget, season) {
    budget = Number(budget);
    let car;
    let carClass;
    let price;

    if (budget <= 100) {
        carClass = 'Economy class';
        if (season === 'Summer') {
            car = 'Cabrio';
            price = budget * 0.35;
        } else if (season === 'Winter') {
            car = 'Jeep';
            price = budget * 0.65;
        }
    } else if (budget > 100 && budget <= 500) {
        carClass = 'Compact class';
        if (season === 'Summer') {
            car = 'Cabrio';
            price = budget * 0.45;
        } else if (season === 'Winter') {
            car = 'Jeep';
            price = budget * 0.8;
        }
    } else if (budget > 500) {
        carClass = 'Luxury class';
        car =  'Jeep';
        price = budget * 0.9;
    }

    console.log(carClass);
    console.log(`${car} - ${price.toFixed(2)}`);
}

carToGo(450, 'Summer');
carToGo(450, 'Winter');
carToGo(1010, 'Summer');
carToGo(99.99, 'Summer');
carToGo(1010, 'Winter');
carToGo(70.50, 'Winter');
function fuelTank(fuel, liters) {
    liters = Number(liters);

    if (fuel == 'Diesel') {
        if (liters >= 25) {
            console.log(`You have enough diesel.`);
        } else {
            console.log(`Fill your tank with diesel!`);
        } 
    } else if (fuel == 'Gasoline') {
        if (liters >= 25) {
            console.log(`You have enough gasoline.`);
        } else {
            console.log(`Fill your tank with gasoline!`);
        }
    } else if (fuel == 'Gas') {
        if (liters >= 25) {
            console.log(`You have enough gas.`);
        } else {
            console.log(`Fill your tank with gas!`);
        }
    } else {
        console.log('Invalid fuel!');
    }
}

fuelTank('Diesel', 10);
fuelTank('Gasoline', 40);
fuelTank('Gas', 25);
fuelTank('Kerosene', 20);
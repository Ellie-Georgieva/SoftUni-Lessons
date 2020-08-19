function fuelMoney(distanceInput, passengersInput, dieselPriceInput) {
    const distance = distanceInput;
    const passengers = passengersInput;
    const dieselPrice = dieselPriceInput;

    const passengersFuel = passengers * 0.100;
    const neededFuel  = passengersFuel + ((distance / 100) * 7);
    const totalPrice = neededFuel * dieselPrice;

    console.log(`Needed money for that trip is ${totalPrice}lv.`);
}

fuelMoney(260, 9, 2.49);
fuelMoney(90, 14, 2.88);
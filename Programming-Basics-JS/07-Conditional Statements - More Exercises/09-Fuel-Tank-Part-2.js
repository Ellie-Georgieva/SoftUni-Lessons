function fuelTankPart2(fuel, liters, clubCard) {
    liters = Number(liters);

    if (fuel == 'Gas') {
       if (clubCard == 'Yes') {
        let fuelPrice = (0.93 - 0.08) * liters
            if (liters >= 26) {
                fuelPrice = fuelPrice - (0.1 * fuelPrice);
                console.log(`${fuelPrice.toFixed(2)} lv.`)
            } else if (liters >= 20 && liters <= 25) {
                fuelPrice = fuelPrice - (0.08 * fuelPrice);
                console.log(`${fuelPrice.toFixed(2)} lv.`)
            } else {
                console.log(`${fuelPrice.toFixed(2)} lv.`)
            }
       } else if (clubCard == 'No') {
        let fuelPrice = 0.93 * liters
        if (liters >= 26) {
            fuelPrice = fuelPrice - (0.1 * fuelPrice);
            console.log(`${fuelPrice.toFixed(2)} lv.`)
        } else if (liters >= 20 && liters <= 25) {
            fuelPrice = fuelPrice - (0.08 * fuelPrice);
            console.log(`${fuelPrice.toFixed(2)} lv.`)
        } else {
            console.log(`${fuelPrice.toFixed(2)} lv.`)
        }
       }
    }
    if (fuel == 'Gasoline') {
        if (clubCard == 'Yes') {
         let fuelPrice = (2.22 - 0.18) * liters
             if (liters >= 26) {
                 fuelPrice = fuelPrice - (0.1 * fuelPrice);
                 console.log(`${fuelPrice.toFixed(2)} lv.`)
             } else if (liters >= 20 && liters <= 25) {
                 fuelPrice = fuelPrice - (0.08 * fuelPrice);
                 console.log(`${fuelPrice.toFixed(2)} lv.`)
             } else {
                 console.log(`${fuelPrice.toFixed(2)} lv.`)
             }
        } else if (clubCard == 'No') {
         let fuelPrice = 2.22 * liters
         if (liters >= 26) {
             fuelPrice = fuelPrice - (0.1 * fuelPrice);
             console.log(`${fuelPrice.toFixed(2)} lv.`)
         } else if (liters >= 20 && liters <= 25) {
             fuelPrice = fuelPrice - (0.08 * fuelPrice);
             console.log(`${fuelPrice.toFixed(2)} lv.`)
         } else {
             console.log(`${fuelPrice.toFixed(2)} lv.`)
         }
        }
     }
     if (fuel == 'Diesel') {
        if (clubCard == 'Yes') {
         let fuelPrice = (2.33 - 0.12) * liters
             if (liters >= 26) {
                 fuelPrice = fuelPrice - (0.1 * fuelPrice);
                 console.log(`${fuelPrice.toFixed(2)} lv.`)
             } else if (liters >= 20 && liters <= 25) {
                 fuelPrice = fuelPrice - (0.08 * fuelPrice);
                 console.log(`${fuelPrice.toFixed(2)} lv.`)
             } else {
                 console.log(`${fuelPrice.toFixed(2)} lv.`)
             }
        } else if (clubCard == 'No') {
         let fuelPrice = 2.33 * liters
         if (liters >= 26) {
             fuelPrice = fuelPrice - (0.1 * fuelPrice);
             console.log(`${fuelPrice.toFixed(2)} lv.`)
         } else if (liters >= 20 && liters <= 25) {
             fuelPrice = fuelPrice - (0.08 * fuelPrice);
             console.log(`${fuelPrice.toFixed(2)} lv.`)
         } else {
             console.log(`${fuelPrice.toFixed(2)} lv.`)
         }
        }
     }
}

fuelTankPart2('Gas', 30, 'Yes');
fuelTankPart2('Gasoline', 25, 'No');
fuelTankPart2('Diesel', 19, 'No');
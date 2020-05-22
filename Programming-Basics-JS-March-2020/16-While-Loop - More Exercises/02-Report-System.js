function reportSystem(arr) {
    let total = Number(arr.shift());
    let card = 0;
    let cash = 0;
    let totalCash = 0;
    let totalCard = 0;
    let day = 0;

    
    while (true) {
        let payment = arr.shift();
        let cardPayment = 0;
        let cashPayment = 0;
        day++;

        if (payment == 'End') {
            console.log('Failed to collect required money for charity.');
            break;
        }

        if(day % 2 == 0) {
            cardPayment = +payment;
                if (cardPayment < 10) {
                    console.log('Error in transaction!');
                } else {
                    console.log('Product sold!');
                    totalCard += cardPayment;
                    card++;
                } 
        } else {
            cashPayment = +payment;
                if (cashPayment > 100) {
                    console.log('Error in transaction!');
                } else {
                    console.log('Product sold!');
                    totalCash += cashPayment;
                    cash++;
                }
        }        

        if ((totalCard + totalCash) >= total) {
            let averageCash = totalCash / cash;
            let averageCard = totalCard / card;
    
            console.log(`Average CS: ${averageCash.toFixed(2)}`);
            console.log(`Average CC: ${averageCard.toFixed(2)}`);
            break;
        }
    }
}

reportSystem([500, 120, 8, 63, 256, 78, 317]);
reportSystem([600, 86, 150, 98, 227, 'End']);
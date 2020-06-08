function cleverLily(age, washingMachine, toy) {
    let age = Number(age);
    let washingMachine = Number(washingMachine);
    let toy = Number(toy);
    let bDays = 0;
    let bDayMoney = 0;
    let brotherMoney = 0;
    let bDayToys = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            bDays += 10
            bDayMoney += bDays;
            brotherMoney += 1;

        } else {
            bDayToys += 1;
        }
    }
    
    let budget = (bDayToys * toy) + (bDayMoney - brotherMoney);

    if (budget >= washingMachine) {
        let diff = budget - washingMachine;
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else if (budget < washingMachine) {
        diff = washingMachine - budget;
        console.log(`No! ${diff.toFixed(2)}`);
    }
}

cleverLily(10, 170.00, 6);
cleverLily(21, 1570.98, 3);
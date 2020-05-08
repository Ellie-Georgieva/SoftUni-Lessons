//short version

function backToThePast(arr) {
    let money = Number(arr.shift());
    let year = arr.shift();
    let ivanchoYears = 17;

    for (let i = 1800; i <= year; i++) {
        if (i % 2 === 0) {
            money = money - 12000;
        } 
    }

    for (let i = 1800; i <= year; i++) {
        ivanchoYears += 1
        if (i % 2 != 0) {
        money = money - 12000 - (50 * (ivanchoYears));
        }
    }

    if (0 <= money) {
        console.log(`Yes! He will live a carefree life and will have ${money.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${Math.abs(money).toFixed(2)} dollars to survive.`);
    }
}

backToThePast([50000, 1802]);
backToThePast([100000.15, 1808]);

//long version

function backToThePast(arr) {
    let money = Number(arr.shift());
    let year = arr.shift();

    let evenYear = 0;
    let oddYear = 0;
    let ivanchoYears = 17;

    for (let i = 1800; i <= year; i++) {
        if (i % 2 === 0) {
            evenYear += 12000;
        } 
    }

    for (let i = 1800; i <= year; i++) {
        ivanchoYears += 1
        if (i % 2 != 0) {
        oddYear = oddYear + 12000 + (50 * (ivanchoYears));
        }
    }

    let expense = oddYear + evenYear;

    if (expense <= money) {
        let diff = money - expense;
        console.log(`Yes! He will live a carefree life and will have ${diff.toFixed(2)} dollars left.`);
    } else {
        let diff = expense - money;
        console.log(`He will need ${diff.toFixed(2)} dollars to survive.`);
    }
}

backToThePast([50000, 1802]);
backToThePast([100000.15, 1808]);
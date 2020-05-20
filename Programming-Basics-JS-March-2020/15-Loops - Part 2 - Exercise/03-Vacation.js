function vacation(arr) {
    let moneyNeeded = Number(arr.shift());
    let savedMoney = Number(arr.shift());
    let spend = 0;
    let days = 0;

    while (savedMoney < moneyNeeded && spend < 5) {
        let action = arr.shift();
        let money = Number(arr.shift());
        days ++

        if (action == 'spend') {
            spend++            
            savedMoney -= money;
                if (savedMoney < 0) {
                    savedMoney = 0;
                }
        } else if (action == 'save') {
            spend = 0;
            savedMoney += money
        }
    }

    if (spend == 5) {
        console.log("You can't save the money.");
        console.log(days);
    }
    if (savedMoney >= moneyNeeded) {
        console.log(`You saved the money for ${days} days.`)
    }
}

vacation([2000, 1000, 'spend', 1200, 'save', 2000]);
// vacation([110, 60, 'spend', 10, 'spend', 10, 'spend', 10, 'spend', 10, 'spend', 10]);
// vacation([250, 150, 'spend', 50, 'spend', 50, 'save', 100, 'save', 100]);
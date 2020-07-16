function savings(arr) {
    let budget = Number(arr.shift());
    let monthsNum = Number(arr.shift());
    let personalЕxpenses = Number(arr.shift());
    
    let unexpectedCosts = budget * 0.3;
    let savedMoney = (budget * monthsNum) - ((unexpectedCosts + personalЕxpenses) * monthsNum);
    let savedMoneyPercentage = (savedMoney / (budget * monthsNum)) * 100;

    console.log(`She can save ${savedMoneyPercentage.toFixed(2)}%`);
    console.log(`${savedMoney.toFixed(2)}`);
}

savings([1500, 3, 800]);
savings([2050, 5, 900]);
savings([3500, 3, 997]);

// https://judge.softuni.bg/Contests/Compete/Index/1988#0
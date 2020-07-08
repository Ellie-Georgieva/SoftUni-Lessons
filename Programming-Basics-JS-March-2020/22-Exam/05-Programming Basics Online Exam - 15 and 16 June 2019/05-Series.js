function series(arr) {
    let budget = Number(arr.shift());
    let seriesNum = Number(arr.shift());

    for (let i = 1; i <= seriesNum; i++) {
        let serialName = arr.shift();
        let serialPrice = Number(arr.shift());

        if (serialName == 'Thrones') {
            serialPrice -= (serialPrice * 0.5);
        } else if (serialName == 'Lucifer') {
            serialPrice -= (serialPrice * 0.4);
        } else if (serialName == 'Protector') {
            serialPrice -= (serialPrice * 0.3);
        } else if (serialName == 'TotalDrama') {
            serialPrice -= (serialPrice * 0.2);
        } else if (serialName == 'Area') {
            serialPrice -= (serialPrice * 0.1);
        }
        
        budget -= serialPrice;
    }

    if (budget < 0) {
        budget = Math.abs(budget);
        console.log(`You need ${budget.toFixed(2)} lv. more to buy the series!`)
    } else {
        console.log(`You bought all the series and left with ${budget.toFixed(2)} lv.`);
    }
}

series(['10', '3', 'Thrones', '5', 'Riverdale', '5', 'Gotham', '2']);
series(['25', '6', 'Teen Wolf', '8', 'Protector', '5', 'TotalDrama', '5', 'Area', '4', 'Thrones', '5', 'Lucifer', '9']);
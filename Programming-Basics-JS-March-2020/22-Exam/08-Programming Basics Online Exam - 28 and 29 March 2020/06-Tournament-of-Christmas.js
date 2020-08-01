function tournamentOfChristmas(arr) {
    let tournamentDays = +arr.shift();
    let moneyTotal = 0;
    let daysWin = 0;
    let daysLose = 0;

    for (let i = 1; i <= tournamentDays; i++) {
        let totalWin = 0;
        let totalLose = 0;
        let money = 0;
        let sport = arr.shift();

        while (sport != 'Finish') {
            let result = arr.shift();

            if (result == 'win') {
                totalWin++;
                money += 20;
            } else {
                totalLose++;
            }

            sport = arr.shift();
        }

        if (totalWin > totalLose ) {
            money += (money * 0.1);
            daysWin++;
        } else {
            daysLose++;
        }

        moneyTotal += money;
    }

    if (daysWin > daysLose) {
        moneyTotal += (moneyTotal * 0.2);
        console.log(`You won the tournament! Total raised money: ${moneyTotal.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${moneyTotal.toFixed(2)}`);
    }
}

tournamentOfChristmas([2, 'volleyball', 'win', 'football', 'lose', 'basketball', 'win', 'Finish', 'golf', 'win', 'tennis', 'win', 'badminton', 'win', 'Finish']);
tournamentOfChristmas([3, 'darts', 'lose', 'handball', 'lose', 'judo', 'win', 'Finish', 'snooker', 'lose', 'swimming', 'lose', 'squash', 'lose', 'table tennis', 'win', 'Finish', 'volleyball', 'win', 'basketball', 'win', 'Finish']);
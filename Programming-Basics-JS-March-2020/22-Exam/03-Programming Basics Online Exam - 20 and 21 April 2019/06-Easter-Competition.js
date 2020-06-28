function easterCompetition(arr) {
    let easterBreadNum = Number(arr.shift());
    let bakerWin = '';
    let pointsWin = 0;

    for (let i = 1; i <= easterBreadNum; i++) {
        let totalPoints = 0;
        let baker = arr.shift();
        let points = arr.shift();

        while (points != 'Stop') {
            totalPoints += Number(points);
            points = arr.shift();
        }

        console.log(`${baker} has ${totalPoints} points.`);

        if (totalPoints > pointsWin) {
            pointsWin = totalPoints;
            bakerWin = baker;
            console.log(`${baker} is the new number 1!`);
        }
    }

    console.log(`${bakerWin} won competition with ${pointsWin} points!`);
}

easterCompetition([3, 'Chef Manchev', 10, 10, 10, 10, 'Stop', 'Natalie', 8, 2, 9, 'Stop', 'George', 9, 2, 4, 2, 'Stop']);
easterCompetition([2, 'Chef Angelov', 9, 9, 9, 'Stop', 'Chef Rowe', 10, 10, 10, 10, 'Stop']);
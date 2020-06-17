function tennisRanklist(arr) {
    let tournamentsNum = Number(arr.shift());
    let startPoints = Number(arr.shift());
    let winner = 0;
    let points = 0;

    for (let i = 1; i <= tournamentsNum; i++) {
        let phase = arr.shift();

        if (phase == 'W') {
            winner++;
            points += 2000;
        } else if (phase == 'F') {
            points += 1200;
        } else if (phase == 'SF') {
            points += 720;
        }
    }

    let finalPoints = points + startPoints;
    let pointsAverage = points / tournamentsNum;
    let tournamentsWins = (winner / tournamentsNum) * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(pointsAverage)}`);
    console.log(`${tournamentsWins.toFixed(2)}%`);
}

tennisRanklist(['5', '1400', 'F', 'SF', 'W', 'W', 'SF']);
tennisRanklist(['4', '750', 'SF', 'W', 'SF', 'W']);
tennisRanklist(['7', '1200', 'SF', 'F', 'W', 'F', 'W', 'SF', 'W']);
function footballTournament(arr) {
    const footballTeam = arr.shift();
    const matchesPlayed = Number(arr.shift());
    let totalPoints = 0;
    let w = 0;
    let d = 0;
    let l = 0;

    for ( let i = 1; i <= matchesPlayed; i++) {
        let points = arr.shift();

        if (points == 'W') {
            totalPoints += 3;
            w++;
        } else if (points == 'D') {
            totalPoints++;
            d++;
        } else if (points == 'L') {
            l++;
        }
    }

    let wins = (w / matchesPlayed) * 100;

    if (totalPoints == 0 && l != 0) {
        console.log(`${footballTeam} has won ${totalPoints} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${w}`);
        console.log(`## D: ${d}`);
        console.log(`## L: ${l}`);
        console.log(`Win rate: ${wins.toFixed(2)}%`);
    } else if (totalPoints == 0) {
        console.log(`${footballTeam} hasn't played any games during this season.`);
    } else {
        console.log(`${footballTeam} has won ${totalPoints} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${w}`);
        console.log(`## D: ${d}`);
        console.log(`## L: ${l}`);
        console.log(`Win rate: ${wins.toFixed(2)}%`);
    }
}

footballTournament(['Liverpool', '10', 'W', 'D', 'D', 'W', 'L', 'W', 'D', 'D', 'W', 'W']);
footballTournament(['Barcelona', '7', 'W', 'D', 'L', 'L', 'W', 'W', 'D']);
footballTournament(['Chelsea', 0]);
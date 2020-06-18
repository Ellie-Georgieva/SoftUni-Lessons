function basketballTournaments(arr) {
    let tournamentName = arr.shift();
    let wins = 0;
    let lost = 0;
    let totalMatches = 0;

    while (tournamentName != 'End of tournaments') {
        let matches = Number(arr.shift());
        totalMatches += matches;
        let matchesNum = 0;

        for (let i = 1; i <= matches; i++) {
            let desiTeamPoints = Number(arr.shift());
            let opponentsTeamPoints = Number(arr.shift());
            matchesNum++;

            if (desiTeamPoints > opponentsTeamPoints) {
                wins++;
                let diff = desiTeamPoints - opponentsTeamPoints;
                console.log(`Game ${matchesNum} of tournament ${tournamentName}: win with ${diff} points.`);
            } else {
                lost++;
                let diff = opponentsTeamPoints - desiTeamPoints;
                console.log(`Game ${matchesNum} of tournament ${tournamentName}: lost with ${diff} points.`)
            }
        }

        tournamentName = arr.shift();
    }

    let winPercentage = (wins / totalMatches) * 100;
    let lostPercentage = (lost / totalMatches) * 100;

    if (tournamentName == 'End of tournaments') {
        console.log(`${winPercentage.toFixed(2)}% matches win`);
        console.log(`${lostPercentage.toFixed(2)}% matches lost`);
    }
}

basketballTournaments(['Dunkers', 2, 75, 65, 56, 73, 'Fire Girls', 3, 67, 34, 83, 98, 66, 45, 'End of tournaments']);
basketballTournaments(['Ballers', 3, 87, 63, 56, 65, 75, 64, 'Sharks', 4, 64, 76, 65, 86, 68, 99, 45, 78, 'End of tournaments']);
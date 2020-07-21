function cruiseGames(arr) {
    let playerName = arr.shift();
    let gamesPlayed = Number(arr.shift());
    let volleyballPoints = 0;
    let tennisPoints = 0;
    let badmintonPoints = 0;
    let volleyball = 0;
    let tennis = 0;
    let badminton = 0;

    for (let i = 1; i <= gamesPlayed; i++) {
        let game = arr.shift();
        let points = Number(arr.shift());

        if (game == 'volleyball') {
            volleyballPoints += points + (points * 0.07);
            volleyball++;
        } else if (game == 'tennis') {
            tennisPoints += points + (points * 0.05);
            tennis++;
        } else if (game == 'badminton') {
            badmintonPoints += points + (points * 0.02);
            badminton++;
        }
    }

    let volleyballAverage = Math.floor(volleyballPoints / volleyball);
    let tennisAverage = Math.floor(tennisPoints / tennis);
    let badmintonAverage = Math.floor(badmintonPoints / badminton);

    let totalPoints = volleyballPoints + tennisPoints + badmintonPoints;

    if (volleyballAverage >= 75 && tennisAverage >= 75 && badmintonAverage >= 75) {
        console.log(`Congratulations, ${playerName}! You won the cruise games with ${Math.floor(totalPoints)} points.`);
    } else {
        console.log(`Sorry, ${playerName}, you lost. Your points are only ${Math.floor(totalPoints)}.`);
    }    
}

cruiseGames(['Pepi', 3, 'volleyball', 78, 'tennis', 98, 'badminton', 105]);
cruiseGames(['Annie', 5, 'badminton', 34, 'tennis', 76, 'badminton', 10, 'volleyball', 62, 'badminton', 56]);
cruiseGames(['Ivan', 7, 'volleyball', 70, 'tennis', 100, 'badminton', 64, 'volleyball', 125, 'tennis', 62, 'tennis', 72, 'badminton', 87]);
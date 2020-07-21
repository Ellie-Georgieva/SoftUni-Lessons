function dartsTournament(arr) {
    let startingPoints = Number(arr.shift());
    let moves = 0;

    while (startingPoints > 0) {
        let section = arr.shift();
        let points = Number(arr.shift());
        moves++;

        if (section == 'number section') {
            startingPoints -= points;
        } else if (section == 'double ring') {
            startingPoints -= points * 2;
        } else if (section == 'triple ring') {
            startingPoints -= points * 3;
        } else if (section == 'bullseye') {
            console.log(`Congratulations! You won the game with a bullseye in ${moves} moves!`);
            break;
        }

        if (startingPoints == 0) {
            console.log(`Congratulations! You won the game in ${moves} moves!`);
            break;
        } else if (startingPoints < 0) {
            console.log(`Sorry, you lost. Score difference: ${Math.abs(startingPoints)}.`);
        }
    }
}

dartsTournament([150, 'double ring', 20, 'triple ring', 10, 'number section', 20, 'triple ring', 20]);
dartsTournament([101, 'triple ring', 7, 'double ring', 19, 'bullseye']);
dartsTournament([75, 'triple ring', 17, 'number section', 16, 'triple ring', 13, 'double ring', 10]);
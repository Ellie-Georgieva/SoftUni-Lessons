function nameGame(arr) {
    let playerName = arr.shift();
    let winnerName = '';
    let winnerPoints = 0;

    while (playerName != 'Stop') {
        let totalPoints = 0;

        for (let i = 0; i < playerName.length; i++) {
            let points = Number(arr.shift());

            if (playerName.charCodeAt(i) == points) {
                totalPoints += 10;
            } else {
                totalPoints += 2;
            }
        }

        if (totalPoints >= winnerPoints) {
            winnerPoints = totalPoints;
            winnerName = playerName;
        }

        playerName = arr.shift();
    }

    console.log(`The winner is ${winnerName} with ${winnerPoints} points!`);
}

nameGame(['Ivan', 73, 20, 98, 110, 'Ivo', 80, 65, 87, 'Stop']);
nameGame(['Pesho', 124, 34, 111, 97, 99, 'Gosho', 98, 124, 88, 76, 18, 'Stop']);
function footballResults(arr) {
    let wins = 0;
    let losses = 0;
    let drawn = 0;

    for (let i = 1; i <= 3; i++) {
        let game = arr.shift();

        if (game[0] > game[2]) {
            wins++;
        } else if (game[0] == game[2]) {
            drawn++;
        } else if (game[0] < game[2]) {
            losses++;
        }
    }

    console.log(`Team won ${wins} games.`);
    console.log(`Team lost ${losses} games.`);
    console.log(`Drawn games: ${drawn}`);
}

footballResults(['3:1', '0:2', '0:0']);
footballResults(['4:2', '0:3', '1:0']);
footballResults(['0:2', '0:1', '3:3']);
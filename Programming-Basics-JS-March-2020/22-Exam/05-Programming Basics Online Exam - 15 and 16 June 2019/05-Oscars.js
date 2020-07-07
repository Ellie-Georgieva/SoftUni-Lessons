function oscars(arr) {
    let actor = arr.shift();
    let academyPoints = Number(arr.shift());
    let juryNum = Number(arr.shift());
    let totalPoints = academyPoints;

    for (let i = 0; i < juryNum; i++) {
        let jury = arr.shift();
        let juryPoints = Number(arr.shift());
        let points = 0;

        points = (jury.length * juryPoints) / 2;
        totalPoints += points;

        if (totalPoints >= 1250.5) {
            break;
        }
    }

    if (totalPoints >= 1250.5) {
        console.log(`Congratulations, ${actor} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
    } else {
        let diff = 1250.5 - totalPoints;
        console.log(`Sorry, ${actor} you need ${diff.toFixed(1)} more!`);
    }
}

oscars(['Zahari Baharov', 205, 4, 'Johnny Depp', 45, 'Will Smith', 29, 'Jet Lee', 10, 'Matthew Mcconaughey', 39]);
oscars(['Sandra Bullock', 340, 5, 'Robert De Niro', 50, 'Julia Roberts', 40.5, 'Daniel Day-Lewis', 39.4, 'Nicolas Cage', 29.9, 'Stoyanka Mutafova', 33]);
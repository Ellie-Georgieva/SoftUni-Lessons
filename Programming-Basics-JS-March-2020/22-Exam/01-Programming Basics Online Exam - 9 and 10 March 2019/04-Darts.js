function darts(arr) {
    let playerName = arr.shift();
    let sector = arr.shift();
    let startPoints = 301;
    let successfulShots = 0;
    let unsuccessfulShots = 0;

    while (sector != 'Retire') {
        let points = Number(arr.shift());

        if (sector == 'Single') {
            if (points <= startPoints) {
                startPoints -= points;
                successfulShots++
            } else {
                unsuccessfulShots++
            }
        } else if (sector == 'Double') {
            points *= 2;

            if (points <= startPoints) {
                startPoints -= points;
                successfulShots++
            } else {
                unsuccessfulShots++
            }
        } else if (sector == 'Triple') {
            points *= 3;
            
            if (points <= startPoints) {
                startPoints -= points;
                successfulShots++
            } else {
                unsuccessfulShots++
            }
        }

        if (startPoints == 0) {
            console.log(`${playerName} won the leg with ${successfulShots} shots.`);
            break;
        }

        sector = arr.shift();
    }

    if (sector == 'Retire') {
        console.log(`${playerName} retired after ${unsuccessfulShots} unsuccessful shots.`);
    }
}

darts(['Michael van Gerwen', 'Triple', '20', 'Triple', '19', 'Double', '10', 'Single', '3', 'Single', '1', 'Triple', '20', 'Triple', '20', 'Double', '20']);
darts(['Stephen Bunting', 'Triple', '20', 'Triple', '20', 'Triple', '20', 'Triple', '20', 'Triple', '20', 'Triple', '20', 'Double', '7', 'Single', '12', 'Double', '1', 'Single', '1']);
darts(['Rob Cross', 'Triple', '20', 'Triple', '20', 'Triple', '20', 'Triple', '20', 'Double', '20', 'Triple', '20', 'Double', '5', 'Triple', '10', 'Double', '6', 'Retire']);
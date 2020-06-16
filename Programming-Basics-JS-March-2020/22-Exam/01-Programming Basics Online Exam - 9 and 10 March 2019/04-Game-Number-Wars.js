function gameNumberWars(arr) {
    let firstPlayer = arr.shift();
    let secondPlayer = arr.shift();
    let pointsFirst = 0;
    let pointsSecond = 0;
    let firstCard = arr.shift();

    while (firstCard != 'End of game') {
        let secondCard = Number(arr.shift());
        firstCard = Number(firstCard);

        if (firstCard > secondCard) {
            let diff = firstCard - secondCard;
            pointsFirst += diff;
        } else if (secondCard > firstCard) {
            let diff = secondCard - firstCard;
            pointsSecond += diff;
        } else if (firstCard == secondCard) {
            firstCard = Number(arr.shift());
            secondCard = Number(arr.shift());
            console.log(`Number wars!`);

            if (firstCard > secondCard) {
                console.log(`${firstPlayer} is winner with ${pointsFirst} points`);
            } else {
                console.log(`${secondPlayer} is winner with ${pointsSecond} points`);
            }

            break;
        }

        firstCard = arr.shift();
    }
    
    if (firstCard == 'End of game') {
        console.log(`${firstPlayer} has ${pointsFirst} points`);
        console.log(`${secondPlayer} has ${pointsSecond} points`);
    }
}

gameNumberWars(['Desi', 'Niki', 7, 5, 3, 4, 3, 3, 5, 3]);
gameNumberWars(['Elena', 'Simeon', 6, 3, 2, 5, 8, 9, 'End of game']);
gameNumberWars(['Aleks', 'Georgi', 4, 5, 3, 2, 4, 3, 4, 4, 5, 2]);
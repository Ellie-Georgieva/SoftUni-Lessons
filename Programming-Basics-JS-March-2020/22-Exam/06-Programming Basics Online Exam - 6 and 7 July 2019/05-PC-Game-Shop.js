function pcGameShop(arr) {
    let gamesSoldNum = Number(arr.shift());
    let hearthstone = 0;
    let fornite = 0;
    let overwatch = 0;
    let others = 0;

    for (let i = 1; i <= gamesSoldNum; i++) {
        let gameName = arr.shift();

        if (gameName == 'Hearthstone') {
            hearthstone++;
        } else if (gameName == 'Fornite') {
            fornite++;
        } else if (gameName == 'Overwatch') {
            overwatch++;
        } else {
            others++;
        }
    }

    let hearthstonePercentage = (hearthstone / gamesSoldNum) * 100;
    let fornitePercentage = (fornite / gamesSoldNum) * 100;
    let overwatchPercentage = (overwatch / gamesSoldNum) * 100;
    let othersPercentage = (others / gamesSoldNum) * 100;

    console.log(`Hearthstone - ${hearthstonePercentage.toFixed(2)}%`);
    console.log(`Fornite - ${fornitePercentage.toFixed(2)}%`);
    console.log(`Overwatch - ${overwatchPercentage.toFixed(2)}%`);
    console.log(`Others - ${othersPercentage.toFixed(2)}%`);
}

pcGameShop([4, 'Hearthstone', 'Fornite', 'Overwatch', 'Counter-Strike']);
pcGameShop([3, 'Hearthstone', 'Diablo 2', 'Star Craft 2']);
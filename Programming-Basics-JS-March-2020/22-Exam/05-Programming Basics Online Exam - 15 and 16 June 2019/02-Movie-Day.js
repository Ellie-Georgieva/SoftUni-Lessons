function movieDay(arr) {
    let shootingTime = Number(arr.shift());
    let scenesNum = Number(arr.shift());
    let scenesDuration = Number(arr.shift());

    let preparation = shootingTime * 0.15;
    let totalDuration = preparation + (scenesDuration * scenesNum);

    if (shootingTime >= totalDuration) {
        let diff = shootingTime - totalDuration;
        console.log(`You managed to finish the movie on time! You have ${diff.toFixed(0)} minutes left!`);
    } else {
        let diff = totalDuration - shootingTime;
        console.log(`Time is up! To complete the movie you need ${diff.toFixed(0)} minutes.`);
    }
}

movieDay([120, 10, 11]);
movieDay([60, 15, 3]);
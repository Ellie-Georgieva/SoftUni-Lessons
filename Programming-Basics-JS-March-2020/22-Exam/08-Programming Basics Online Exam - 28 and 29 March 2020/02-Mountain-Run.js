function mountainRun(arr) {
    let recordSecond = +arr.shift();
    let distanceMeters = +arr.shift();
    let time = +arr.shift();
    let slowdown = Math.floor(distanceMeters / 50);
    let georgiTime = (distanceMeters * time) + (slowdown * 30);

    if (georgiTime < recordSecond) {
        console.log(`Yes! The new record is ${georgiTime.toFixed(2)} seconds.`);
    } else {
        let diff = georgiTime - recordSecond;
        console.log(`No! He was ${diff.toFixed(2)} seconds slower.`);
    }
}

mountainRun([10164, 1400, 25]);
mountainRun([5554.36, 1340, 3.23]);
mountainRun([1377, 389, 3]);
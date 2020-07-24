function solve(input) {
    // Input data
    let record = Number(input.shift());
    let distance = Number(input.shift());
    let timePerMeter = Number(input.shift());
    
    // Calculation
    let totalTimeWithoutDelay = distance * timePerMeter;
    let delay = Math.floor(distance / 50) * 30;

    let totalTime = totalTimeWithoutDelay + delay;

    // Check record and print, note: equal time?
    if (totalTime < record) {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`)
    } else {
        let overtime = totalTime - record;
        console.log(`No! He was ${overtime.toFixed(2)} seconds slower.`);
    }
}

solve([ '5554.36', '1340', '3.23', '' ]);
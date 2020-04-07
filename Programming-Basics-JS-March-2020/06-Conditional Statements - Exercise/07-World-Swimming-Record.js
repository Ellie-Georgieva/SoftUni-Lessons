function worldSwimmingRecord(worldRecord, distance, time) {
    worldRecord = Number(worldRecord);
    distance = Number(distance);
    time = Number(time);

    let waterResistance = Math.floor(distance / 15) * 12.5;
    let ivanTime = (distance * time) + waterResistance;

    if (ivanTime < worldRecord) {
        console.log(`Yes, he succeeded! The new world record is ${ivanTime.toFixed(2)} seconds.`);
    } else if (ivanTime >= worldRecord) {
        let difference = ivanTime - worldRecord;
        console.log(`No, he failed! He was ${difference.toFixed(2)} seconds slower.`);
    }
}

worldSwimmingRecord(10464, 1500, 20);
worldSwimmingRecord(55555.67, 3017, 5.03);

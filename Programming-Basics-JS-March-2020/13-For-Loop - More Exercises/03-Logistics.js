function logistics(arr) {
    let packetNumber = Number(arr.shift());
    let totalPacketKg = 0;
    let minibus = 0;
    let truck = 0;
    let train = 0;

    for (let i = 1; i <= packetNumber; i++) {
        let packet = Number(arr.shift());
        totalPacketKg += packet;

        if (packet <= 3) {
            minibus += packet;
        } else if (packet <= 11) {
            truck += packet;
        } else if (packet >= 12) {
            train += packet;
        }
    }
    let averagePrice = ((minibus * 200) + (truck * 175) + (train * 120)) / totalPacketKg;
    let minibusPercent = (minibus/totalPacketKg) * 100;
    let truckPercent = (truck/totalPacketKg) * 100;
    let trainPercent = (train/totalPacketKg) * 100;

    console.log(averagePrice.toFixed(2));
    console.log(`${minibusPercent.toFixed(2)}%`);
    console.log(`${truckPercent.toFixed(2)}%`);
    console.log(`${trainPercent.toFixed(2)}%`);
}

logistics([4, 1, 5, 16, 3]);
logistics([5, 2, 10, 20, 1, 7]);
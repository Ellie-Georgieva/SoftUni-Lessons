function trekkingMania(arr) {
    let groupNum = +arr.shift();
    let totalClimbers = 0;
    let musala = 0;
    let montBlanc = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i <= groupNum; i++) {
        let climbers = +arr.shift();

        if (climbers <= 5) {
            musala += climbers;
            totalClimbers += climbers;
        } else if (climbers >= 6 && climbers <= 12) {
            montBlanc += climbers;
            totalClimbers += climbers;
        } else if (climbers >= 13 && climbers <= 25) {
            kilimanjaro += climbers;
            totalClimbers += climbers;
        } else if (climbers >= 26 && climbers <= 40) {
            k2 += climbers;
            totalClimbers += climbers;
        } else if (climbers >= 41) {
            everest += climbers;
            totalClimbers += climbers;
        }
    }

    let musalaРercentage = (musala / totalClimbers) * 100;
    let montBlancРercentage = (montBlanc / totalClimbers) * 100;
    let kilimanjaroРercentage = (kilimanjaro / totalClimbers) * 100;
    let k2Рercentage = (k2 / totalClimbers) * 100;
    let everestРercentage = (everest / totalClimbers) * 100;

    console.log(`${musalaРercentage.toFixed(2)}%`);
    console.log(`${montBlancРercentage.toFixed(2)}%`);
    console.log(`${kilimanjaroРercentage.toFixed(2)}%`);
    console.log(`${k2Рercentage.toFixed(2)}%`);
    console.log(`${everestРercentage.toFixed(2)}%`);
}

trekkingMania([10, 10, 5, 1, 100, 12, 26, 17, 37, 40, 78]);
trekkingMania([5, 25, 41, 31, 250, 6]);
function suitcasesLoad(arr) {
    let trunkCapacity = +arr.shift();
    let suitcaseVolume = arr.shift();
    let freeSpace = trunkCapacity;
    let suitcasesLoaded = 0;
    let time = 0;

    while (suitcaseVolume != 'End') {
        time++;
        suitcaseVolume = +suitcaseVolume;

        if (time % 3 == 0) {
            suitcaseVolume += suitcaseVolume * 0.1;
        }

        if (freeSpace < suitcaseVolume) {
            break;
        }

        freeSpace -= suitcaseVolume;
        suitcasesLoaded++;
        suitcaseVolume = arr.shift();
    }

    if (suitcaseVolume == 'End') {
        console.log('Congratulations! All suitcases are loaded!');
    } else {
        console.log('No more space!');
    }

    console.log(`Statistic: ${suitcasesLoaded} suitcases loaded.`);
}

suitcasesLoad(['550', '100', '252', '72', 'End']);
suitcasesLoad(['700.5', '180', '340.6', '126', '220']);
suitcasesLoad(['1200.2', '260', '380.5', '125.6', '305', 'End']);
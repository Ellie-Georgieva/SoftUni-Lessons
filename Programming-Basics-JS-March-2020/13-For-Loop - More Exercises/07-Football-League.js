function footballLeague(arr) {
    let stadiumCapacity = Number(arr.shift());
    let allFans = Number(arr.shift());
    let AFans = 0;
    let BFans = 0;
    let VFans = 0;
    let GFans = 0;

    for (let i = 1; i <= allFans; i++) {
        let fan = arr.shift();

        if (fan === 'A') {
            AFans++;
        } else if (fan === 'B') {
            BFans++;
        } else if (fan === 'V') {
            VFans++;
        } else if (fan === 'G') {
            GFans++;
        }
    }

    let totalFanPercent = (allFans / stadiumCapacity) * 100;
    let AFansPercent = (AFans / allFans) * 100;
    let BFansPercent = (BFans / allFans) * 100;
    let VFansPercent = (VFans / allFans) * 100;
    let GFansPercent = (GFans / allFans) * 100;

    console.log(`${AFansPercent.toFixed(2)}%`);
    console.log(`${BFansPercent.toFixed(2)}%`);
    console.log(`${VFansPercent.toFixed(2)}%`);
    console.log(`${GFansPercent.toFixed(2)}%`);
    console.log(`${totalFanPercent.toFixed(2)}%`);
}

footballLeague([76, 10, 'A', 'V', 'V', 'V', 'G', 'B', 'A', 'V', 'B', 'B']);
footballLeague([93, 16, 'A', 'V', 'G', 'G', 'B', 'B', 'G', 'B', 'A', 'B', 'B', 'B', 'A', 'B', 'B', 'A']);
footballLeague([1000, 12, 'A', 'A', 'V', 'V', 'A', 'G', 'A', 'A', 'V', 'G', 'V', 'A']);
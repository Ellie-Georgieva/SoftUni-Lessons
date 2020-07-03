function lunchBreak(arr) {
    let serialName = arr.shift();
    let episodeDuration = Number(arr.shift());
    let restDuration = Number(arr.shift());

    let lunchDuration = restDuration / 8;
    let rest = restDuration / 4;
    let freeTime = restDuration - (lunchDuration + rest);

    if (freeTime >= episodeDuration) {
        let diff = freeTime - episodeDuration;
        console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(diff)} minutes free time.`);
    } else {
        let diff = episodeDuration - freeTime;
        console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(diff)} more minutes.`);
    }
}

lunchBreak(['Game of Thrones', 60, 96]);
lunchBreak(['Teen Wolf', 48, 60]);
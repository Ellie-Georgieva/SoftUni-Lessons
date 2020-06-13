function skeleton(arr) {
    let minutesGoal = Number(arr.shift());
    let secondsGoal = Number(arr.shift());
    let chuteLength = Number(arr.shift());
    let seconds100Meters = Number(arr.shift());

    let goal = (minutesGoal * 60) + secondsGoal;
    let marinTime = (chuteLength / 100) * seconds100Meters;
    let diff = (chuteLength / 120) * 2.5;
    marinTime -= diff;

    if (marinTime <= goal) {
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${marinTime.toFixed(3)}.`);
    } else {
        let seconds = marinTime - goal;
        console.log(`No, Marin failed! He was ${seconds.toFixed(3)} second slower.`);
    }
}

skeleton([2, 12, 1200, 10]);
skeleton([1, 20, 1546, 12]);
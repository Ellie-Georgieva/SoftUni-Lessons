function sumSeconds(timeFirst, timeSecond, timeThird) {
    timeFirst = Number(timeFirst);
    timeSecond = Number(timeSecond);
    timeThird = Number(timeThird);

    let TotalTime = timeFirst + timeSecond + timeThird;
    let minutes = Math.floor(TotalTime / 60);
    let seconds = TotalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

sumSeconds(35, 45, 44);
sumSeconds(22, 7, 34);
sumSeconds(50, 50, 49);
sumSeconds(14, 12, 10);
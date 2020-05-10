function gameOfIntervals(arr) {
    let moves = Number(arr.shift());
    let result = 0;
    let numBelow10 = 0;
    let numBelow20 = 0;
    let numBelow30 = 0;
    let numBelow40 = 0;
    let numBelow50 = 0;
    let InvalidNum = 0;

    for (let i = 0; i <= moves; i++) {
        let num = Number(arr.shift());

        if (num >= 0 && num <= 9) {
            result += (num * 0.2);
            numBelow10++;
        } else if (num >= 10 && num <= 19) {
            result += (num * 0.3);
            numBelow20++;
        } else if (num >= 20 && num <= 29) {
            result += (num * 0.4);
            numBelow30++;
        } else if (num >= 30 && num <= 39) {
            result += 50; 
            numBelow40++;
        } else if (num >= 40 && num <= 50) {
            result += 100;
            numBelow50++;
        } else if (num < 0 || num > 50) {
            result /= 2;
            InvalidNum++;
        }
    }

    let numBelow10Percent = (numBelow10 / moves) * 100;
    let numBelow20Percent = (numBelow20 / moves) * 100;
    let numBelow30Percent = (numBelow30 / moves) * 100;
    let numBelow40Percent = (numBelow40 / moves) * 100;
    let numBelow50Percent = (numBelow50 / moves) * 100;
    let InvalidNumPercent = (InvalidNum / moves) * 100;

    console.log(result.toFixed(2));
    console.log(`From 0 to 9: ${numBelow10Percent.toFixed(2)}%`);
    console.log(`From 10 to 19: ${numBelow20Percent.toFixed(2)}%`);
    console.log(`From 20 to 29: ${numBelow30Percent.toFixed(2)}%`);
    console.log(`From 30 to 39: ${numBelow40Percent.toFixed(2)}%`);
    console.log(`From 40 to 50: ${numBelow50Percent.toFixed(2)}%`);
    console.log(`Invalid numbers: ${InvalidNumPercent.toFixed(2)}%`);

}

gameOfIntervals([10, 43, 57, -12, 23, 12, 0, 50, 40, 30, 20]);
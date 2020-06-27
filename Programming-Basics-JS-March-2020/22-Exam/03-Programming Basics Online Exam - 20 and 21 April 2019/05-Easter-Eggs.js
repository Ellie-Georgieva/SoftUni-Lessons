function easterEggs(arr) {
    let eggsNum = Number(arr.shift());
    let red = 0;
    let orange = 0;
    let blue = 0;
    let green = 0;
    let maxNumEggs = 0;
    let maxEggsColor = '';

    for (let i = 1; i <= eggsNum; i++) {
        let color = arr.shift();

        if (color == 'red') {
            red++;

            if (red > maxNumEggs) {
                maxNumEggs = red;
                maxEggsColor = 'red'
            }
        } else if (color == 'orange') {
            orange++;

            if (orange > maxNumEggs) {
                maxNumEggs = orange;
                maxEggsColor = 'orange'
            }
        } else if (color == 'blue') {
            blue++;

            if (blue > maxNumEggs) {
                maxNumEggs = blue;
                maxEggsColor = 'blue'
            }
        }  else if (color == 'green') {
            green++;

            if (green > maxNumEggs) {
                maxNumEggs = green;
                maxEggsColor = 'green'
            }
        }
    }

    console.log(`Red eggs: ${red}`);
    console.log(`Orange eggs: ${orange}`);
    console.log(`Blue eggs: ${blue}`);
    console.log(`Green eggs: ${green}`);
    console.log(`Max eggs: ${maxNumEggs} -> ${maxEggsColor}`);
}

easterEggs(['7', 'orange', 'blue', 'green', 'green', 'blue', 'red', 'green']);
easterEggs(['4', 'blue', 'red', 'blue', 'orange']);
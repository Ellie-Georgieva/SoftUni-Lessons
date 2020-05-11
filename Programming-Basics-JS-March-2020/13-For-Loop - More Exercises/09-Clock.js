//long version

function clock() {
    let hours = 0;
    let minutes = -1;

    while (true) {
        minutes += 1;

        if (minutes == 60) {
            hours += 1;
            minutes = 0;
        }

        console.log(`${hours} : ${minutes}`);
        
        if (hours == 23 && minutes == 59) {
            break;
        }
    }
}

clock();

//short version

function clock() {
    for (let hour = 0; hour <= 23; hour++) {
        for (let minute = 0; minute <= 59; minute++) {
            console.log(`${hour} : ${minute}`);
        }
    }
}

clock();
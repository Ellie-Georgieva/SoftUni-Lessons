function time15Minutes(hours, minutes) {
    hours = Number(hours);
    minutes = Number(minutes);

    if (minutes + 15 < 60) {
        let min = minutes + 15;
        console.log(`${hours}:${min}`);
    } else if (minutes + 15 >= 60 && hours >= 23) {
        let hour = (hours + 1) - 24;
        let min = (minutes + 15) - 60;
        if (min < 10) {
            console.log(`${hour}:0${min}`);
        } else {
            console.log(`${hour}:${min}`);
        }
    } else if (minutes + 15 >= 60 && hours < 23) {
        let hour = hours + 1;
        let min = (minutes + 15) - 60;
        if (min < 10) {
            console.log(`${hour}:0${min}`);
        } else {
            console.log(`${hour}:${min}`); 
        }
    }
}

time15Minutes(1, 46);
time15Minutes(0, 01);
time15Minutes(23, 59);
time15Minutes(11, 08);
time15Minutes(12, 49);
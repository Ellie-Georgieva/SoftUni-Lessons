function onTimeForExam(hoursExam, minutesExam, hoursArrival, minutesArrival) {
    hoursExam = Number(hoursExam);
    minutesExam = Number(minutesExam); 
    hoursArrival = Number(hoursArrival);
    minutesArrival = Number(minutesArrival);

    let examStart = (hoursExam * 60) + minutesExam;
    let arrival = (hoursArrival * 60) + minutesArrival;

    if (examStart > arrival) {
        let difference = examStart - arrival;
        if (difference <= 59 && difference > 30) {
            console.log('Early');
            console.log(`${difference} minutes before the start`);
        } else if (difference <= 30) {
            console.log('On time');
            console.log(`${difference} minutes before the start`);
        } else if (difference >= 60) {
            let hours = Math.floor(difference / 60);
            let minutes = difference % 60;
            if (minutes < 10) {
                console.log('Early');
                console.log(`${hours}:0${minutes} hours before the start`);
            } else {
                console.log('Early');
                console.log(`${hours}:${minutes} hours before the start`);
            }
        }
    } else if (examStart == arrival) {
        console.log('On time')
    } else if (examStart < arrival) {
        let difference = arrival - examStart;
        if (difference <= 59) {
            console.log('Late');
            console.log(`${difference} minutes after the start`);
        } else if (difference >= 60) {
            let hours = Math.floor(difference / 60);
            let minutes = difference % 60;
            if (minutes < 10) {
                console.log('Late');
                console.log(`${hours}:0${minutes} hours after the start`);
            } else {
                console.log('Late');
                console.log(`${hours}:${minutes} hours after the start`);
            }
        }
    }
}

onTimeForExam(9, 30, 9, 50);
onTimeForExam(9, 00, 8, 30);
onTimeForExam(16, 00, 15, 00);
onTimeForExam(9, 00, 10, 30);
onTimeForExam(14, 00, 13, 55);
onTimeForExam(11, 30, 8, 12);
onTimeForExam(10, 00, 10, 00);
onTimeForExam(11, 30, 10, 55);
onTimeForExam(11, 30, 12, 29);
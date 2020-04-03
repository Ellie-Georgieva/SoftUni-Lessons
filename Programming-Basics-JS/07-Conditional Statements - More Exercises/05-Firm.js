function firm(hours, days, employees) {
    hours = Number(hours);
    days = Number(days);
    employees = Number(employees);

    let workDays = (days - (days * 0.1)) * 8;
    let workHours = employees * (2 * days);
    let allTime = workDays + workHours

    if (allTime >= hours) {
        let difference = allTime - hours;
        let difference2 = Math.ceil(difference);
        console.log(`Yes!${difference2} hours left.`);
    } else { 
        let difference = hours - allTime;
        let difference2 = Math.ceil(difference);
        console.log(`Not enough time!${difference2} hours needed.`);
    }
}

firm(90, 7, 3);
firm(99, 3, 1);
firm(50, 5, 2);
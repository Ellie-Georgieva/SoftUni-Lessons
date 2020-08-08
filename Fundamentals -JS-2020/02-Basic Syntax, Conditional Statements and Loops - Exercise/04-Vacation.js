function vacation(groupNumInput, groupTypeInput, dayOfWeekInput) {
    const groupNum = +groupNumInput;
    const groupType = groupTypeInput;
    const dayOfWeek = dayOfWeekInput;
    let price = 0;

    if (groupType == 'Students') {
        if (dayOfWeek == 'Friday') {
            price = 8.45 * groupNum;
        } else if (dayOfWeek == 'Saturday') {
            price = 9.80 * groupNum;
        } else if (dayOfWeek == 'Sunday') {
            price = 10.46 * groupNum;
        }

        if (groupNum >= 30) {
            price -= (price * 0.15);
        }
    } else if (groupType == 'Business') {
        if (dayOfWeek == 'Friday') {
            price = 10.90 * groupNum;
        } else if (dayOfWeek == 'Saturday') {
            price = 15.60 * groupNum;
        } else if (dayOfWeek == 'Sunday') {
            price = 16 * groupNum;
        }

        if (groupNum >= 100) {
            singlePerson = price / groupNum;
            price -= singlePerson * 10;
        }
    } else if (groupType == 'Regular') {
        if (dayOfWeek == 'Friday') {
            price = 15 * groupNum;
        } else if (dayOfWeek == 'Saturday') {
            price = 20 * groupNum;
        } else if (dayOfWeek == 'Sunday') {
            price = 22.50 * groupNum;
        }

        if (groupNum >= 10 && groupNum <= 20) {
            price -= (price * 0.05);
        }
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
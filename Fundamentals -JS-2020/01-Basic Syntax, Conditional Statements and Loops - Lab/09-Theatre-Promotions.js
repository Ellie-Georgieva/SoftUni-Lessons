function theatrePromotions(dayInput, ageInput) {
    const day = dayInput;
    const age = ageInput;
    let price = '';

    if (0 <= age && age <= 18) {
        if (day == 'Weekday') {
            price = '12$';
        } else if (day == 'Weekend') {
            price = '15$';
        } else if (day == 'Holiday') {
            price = '5$';
        }
    } else if (18 <= age && age <= 64) {
        if (day == 'Weekday') {
            price = '18$';
        } else if (day == 'Weekend') {
            price = '20$';
        } else if (day == 'Holiday') {
            price = '12$';
        }
    } else if (64 <= age && age <= 122) {
        if (day == 'Weekday') {
            price = '12$';
        } else if (day == 'Weekend') {
            price = '15$';
        } else if (day == 'Holiday') {
            price = '10$';
        }
    } else {
        price = 'Error!';
    }

    console.log(price);
}

theatrePromotions('Weekday', 42);
theatrePromotions('Holiday', -12);
theatrePromotions('Holiday', 15);
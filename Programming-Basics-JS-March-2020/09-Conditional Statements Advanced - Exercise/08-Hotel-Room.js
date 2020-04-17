function hotelRoom(month, nights) {
    nights = Number(nights);
    let apartament;
    let studio;
  
    if (month == 'May' || month == 'October') {
        studio = 50;
        apartament = 65;
        if (nights > 7 && nights <= 14) {
            studio = 50 - (50 * 0.05);
        } else if (nights > 14) {
            studio = 50 - (50 * 0.3);
        }
    } else if (month == "June" || month == "September") {
        studio = 75.20;
        apartament = 68.70;
        if (nights > 14) {
            studio = 75.2 - (75.2 * 0.2);
        }
    } else if (month == "July" || month == "August") {
        studio = 76;
        apartament = 77;
    }

    if (nights > 14) {
        apartament *= 0.9;
    }

    let apartamentPrice = apartament * nights;
    let studioPrice = studio * nights;

    console.log(`Apartment: ${apartamentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}

hotelRoom('May', 15);
hotelRoom('June', 14);
hotelRoom('August', 20);    
function schoolCamp(season, gender, students, nights) {
    students = Number(students);
    nights = Number(nights);
    let price;
    let sport;

    if (season === 'Winter') {
        if (gender === 'boys') {
            price = nights * 9.6;
            sport = 'Judo';
        } else if (gender === 'girls') {
            price = nights * 9.6;
            sport = 'Gymnastics';
        } else if (gender === 'mixed') {
            price = nights * 10;
            sport = 'Ski';
        }
    } else if (season === 'Spring') {
        if (gender === 'boys') {
            price = nights * 7.20;
            sport = 'Tennis';
        } else if (gender === 'girls') {
            price = nights * 7.20;
            sport = 'Athletics';
        } else if (gender === 'mixed') {
            price = nights * 9.50;
            sport = 'Cycling';
        }
    } else if (season === 'Summer') {
        if (gender === 'boys') {
            price = nights * 15;
            sport = 'Football';
        } else if (gender === 'girls') {
            price = nights * 15;
            sport = 'Volleyball';
        } else if (gender === 'mixed') {
            price = nights * 20;
            sport = 'Swimming';
        }
    }

    let totalPrice = price * students;

    if (students >= 50) {
        totalPrice = totalPrice - (totalPrice * 0.5);
    } else if (students <= 49 && students >= 20) {
        totalPrice = totalPrice - (totalPrice * 0.15);
    } else if (students <= 19 && students >=10) {
        totalPrice = totalPrice - (totalPrice * 0.05);
    }

    console.log(`${sport} ${totalPrice.toFixed(2)} lv.`);
}

schoolCamp('Spring', 'girls', 20, 7);
schoolCamp('Winter', 'mixed', 9, 15);
schoolCamp('Summer', 'boys', 60, 7);
schoolCamp('Spring', 'mixed', 17, 14);
function bonusScore(num) {
    num = Number(num);
    let bonus = 0.0

    if (num <= 100) {
        bonus = 5;
        if (num % 2 == 0) {
            bonus = 5 + 1;
        } else if (num % 10 == 5) {
            bonus = 2 + 5;
        } 
    } else if (num > 100 && num < 1000) {
        bonus = num * 0.2;
        if (num % 2 == 0) {
            bonus = bonus + 1;
        } else if (num % 10 == 5) {
            bonus = 2 + bonus;
        } 
    } else {
        bonus = num * 0.1
        if (num % 2 == 0) {
            bonus = bonus + 1;
        } else if (num % 10 == 5) {
            bonus = 2 + bonus;
        } 
    }

    console.log(bonus);
    console.log(num + bonus);
}

bonusScore(20);
bonusScore(175);
bonusScore(2703);
bonusScore(15875);
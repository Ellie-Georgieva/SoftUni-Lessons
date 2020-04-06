function Numbers100To200(num) {

    if (num < 100 || num == 0) {
        console.log('Less than 100');
    } else if (num >= 100 && num <= 200) {
        console.log('Between 100 and 200');
    } else {
        console.log('Greater than 200');
    }
}

Numbers100To200(95);
Numbers100To200(120);
Numbers100To200(210);
Numbers100To200(0);
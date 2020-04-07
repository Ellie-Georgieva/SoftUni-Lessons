function scholarship(profit, gpa, salary) {
    profit = Number(profit); 
    gpa = Number(gpa);
    salary = Number(salary);

    let socialScholarship = 0;
    let gpaScholarship = 0;

    if ((profit < salary) && (gpa > 4.5)) {
        socialScholarship = salary * 0.35;
    }
    if (gpa >= 5.5) {
        gpaScholarship = gpa * 25;
    }
    if (socialScholarship === 0 && gpaScholarship === 0) {
        console.log('You cannot get a scholarship!');
    } else if (socialScholarship > gpaScholarship) {
        console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
    } else {
        console.log(`You get a scholarship for excellent results ${Math.floor(gpaScholarship)} BGN`);
    }
}

scholarship(480.00, 4.60, 450.00);
scholarship(300.00, 5.65, 420.00);
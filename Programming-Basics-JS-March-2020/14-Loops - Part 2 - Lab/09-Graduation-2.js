function graduation2(arr) {
    let studentName = arr.shift();
    let schoolYear = 1;
    let totalGrade = 0;
    let repeats = 0;

    while (schoolYear <= 12) {
        schoolGrade = Number(arr.shift());

        if (schoolGrade >= 4) {
            totalGrade += schoolGrade;
            schoolYear++
        } else {
            repeats++
                if (repeats > 1) {
                    console.log(`${studentName} has been excluded at ${schoolYear} grade`);
                    break;
                }
        }
    }

    let total = totalGrade / 12;

    if (schoolYear >= 12) {
        console.log(`${studentName} graduated. Average grade: ${total.toFixed(2)}`);
    }
}

graduation2(['Gosho', 5, 5.5, 6, 5.43, 5.5, 6, 5.55, 5, 6, 6, 5.43, 5]);
graduation2(['Mimi', 5, 6, 5, 6, 5, 6, 6, 2, 3]);
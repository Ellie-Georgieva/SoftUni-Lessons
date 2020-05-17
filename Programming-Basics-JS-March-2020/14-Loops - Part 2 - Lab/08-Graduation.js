function graduation(arr) {
    let studentName = arr.shift();
    let schoolYear = 1;
    let totalGrade = 0;

    while (schoolYear <= 12) {
        schoolGrade = Number(arr.shift());

        if (schoolGrade >= 4) {
        totalGrade += schoolGrade;
        schoolYear++
        }
    }

    let total = totalGrade / 12;
    
    console.log(`${studentName} graduated. Average grade: ${total.toFixed(2)}`);
}

graduation(['Pesho', '4', '5.5', '6', '5.43', '4.5', '6', '5.55', '5', '6', '6', '5.43', '5']);
graduation(['Ani', '5', '5.32', '6', '5.43', '5', '6', '5.5', '4.55', '5', '6', '5.56', '6']);
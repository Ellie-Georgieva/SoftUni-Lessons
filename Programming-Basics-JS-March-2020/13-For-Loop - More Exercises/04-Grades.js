function grades(arr) {
    let students = Number(arr.shift());
    let totalGrades = 0;
    let fail = 0;
    let three = 0;
    let four = 0;
    let topStudents = 0;

    for (let i = 1; i <= students; i++) {
        let examGrade = Number(arr.shift());
        totalGrades += examGrade;

        if (examGrade >= 2.00 && examGrade <= 2.99) {
            fail++;
        } else if (examGrade >= 3.00 && examGrade <= 3.99) {
            three++;
        } else if (examGrade >= 4.00 && examGrade <= 4.99) {
            four++;
        } else if (examGrade >= 5.00) {
            topStudents++
        }
    }
    let average = totalGrades / students;
    let failPercent = (fail / students) * 100;
    let threePercent = (three / students) * 100;
    let fourPercent = (four / students) * 100;
    let topStudentsPercent = (topStudents / students) * 100;

    console.log(`Top students: ${topStudentsPercent.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${fourPercent.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${threePercent.toFixed(2)}%`);
    console.log(`Fail: ${failPercent.toFixed(2)}%`);
    console.log(`Average: ${average.toFixed(2)}`);
}

grades([10, 3.00, 2.99, 5.68, 3.01, 4, 4, 6.00, 4.50, 2.44, 5]);
grades([6, 2, 3, 4, 5, 6, 2.2]);
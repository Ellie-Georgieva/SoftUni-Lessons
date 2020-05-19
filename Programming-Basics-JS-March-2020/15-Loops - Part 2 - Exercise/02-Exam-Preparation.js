function examPreparation(arr) {
    let numberBadGrades = Number(arr.shift());
    let numberProblems = 0;
    let badGrades = 0;
    let averageScore = 0;
    let lastProblem = ''

    while (badGrades < numberBadGrades) {
        problemName = arr.shift();

        if (problemName == "Enough") {
            let score = averageScore / numberProblems;
            console.log(`Average score: ${score.toFixed(2)}`);
            console.log(`Number of problems: ${numberProblems}`);
            console.log(`Last problem: ${lastProblem}`);
            break;
        }
        grade = Number(arr.shift());
        averageScore += grade;

            if (grade <= 4) {
                badGrades++
            }
            lastProblem = problemName;
            numberProblems++;
    }
    if (badGrades >= numberBadGrades) {
        console.log(`You need a break, ${badGrades} poor grades.`);
    }
}

examPreparation(['3', 'Money', '6', 'Story', '4', 'Spring Time', '5', 'Bus', '6', 'Enough']);
examPreparation(['2', 'Income', '3', 'Game Info', '6', 'Best Player', '4']);
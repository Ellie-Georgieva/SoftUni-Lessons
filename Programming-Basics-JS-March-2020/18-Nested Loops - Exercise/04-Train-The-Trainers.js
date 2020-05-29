function trainTheTrainers(arr) {
    let jury = Number(arr.shift());
    let presentationName = arr.shift();
    let avarageTotal = 0;
    let presentationNum = 0;

    while (presentationName != 'Finish') {
        let presentationTotal = 0;

        for (let i = 1; i <= jury; i++) {
            let grade = Number(arr.shift());
            presentationTotal += grade;
        }

        let avarage = presentationTotal / jury;
        console.log(`${presentationName} - ${avarage.toFixed(2)}.`);
        avarageTotal += avarage;
        presentationNum++
        presentationName = arr.shift();
    }

    gradeTotal = avarageTotal / presentationNum;
    console.log(`Student's final assessment is ${gradeTotal.toFixed(2)}.`);
}

trainTheTrainers([2, 'While-Loop', 6.00, 5.50, 'For-Loop', 5.84, 5.66, 'Finish']);
trainTheTrainers([3, 'Arrays', 4.53, 5.23, 5.00, 'Lists', 5.83, 6.00, 5.42, 'Finish']);
trainTheTrainers([2, 'Objects and Classes', 5.77, 4.23, 'Dictionaries', 4.62, 5.02, 'RegEx', 2.88, 3.42, 'Finish']);
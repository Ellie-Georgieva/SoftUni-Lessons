function hospital(arr) {
    let period = Number(arr.shift());
    let doctor = 7;
    let patientUntreated = 0;
    let patientTreated = 0;
    let days = 0;

    for (let i = 1; i <= period; i++) {
        days++;
        let patientForDay = Number(arr.shift());

        if (days % 3 === 0 && patientTreated < patientUntreated) {
            doctor++
        }
        if (patientForDay <= doctor) {
            patientTreated += patientForDay;
        } else {
            patientUntreated += (patientForDay - doctor);
            patientTreated += doctor;
        }
    }

    console.log(`Treated patients: ${patientTreated}.`);
    console.log(`Untreated patients: ${patientUntreated}.`);
}

hospital([4, 7, 27, 9, 1]);
hospital([6, 25, 25, 25, 25, 25, 2]);
hospital([3, 7, 7, 7]);
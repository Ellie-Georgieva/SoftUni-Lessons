function fitnessCenter(arr) {
    let people = Number(arr.shift());
    let back = 0;
    let chest = 0;
    let legs = 0;
    let abs = 0;
    let proteinShake = 0;
    let proteinBar = 0;
    let trainingPeople = 0;
    let buyingProtein = 0;

    for (let i = 1; i <= people; i++) {
        let activity = arr.shift(); 

        if (activity == 'Back') {
            back++;
        } else if (activity == 'Chest') {
            chest++;
        } else if (activity == 'Legs') {
            legs++;
        } else if (activity == 'Abs') {
            abs++;
        } else if (activity == 'Protein shake') {
            proteinShake++;
        } else if (activity == 'Protein bar') {
            proteinBar++;
        }

        if (activity == 'Protein shake' || activity == 'Protein bar') {
            buyingProtein++;
        } else {
            trainingPeople++;
        }
    }

    trainingPeoplePercentage = (trainingPeople / people) * 100;
    buyingProteinPercentage = (buyingProtein / people) * 100;

    console.log(`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${proteinShake} - protein shake`);
    console.log(`${proteinBar} - protein bar`);
    console.log(`${trainingPeoplePercentage.toFixed(2)}% - work out`);
    console.log(`${buyingProteinPercentage.toFixed(2)}% - protein`);
}

fitnessCenter(['10', 'Back', 'Chest', 'Legs', 'Abs', 'Protein shake', 'Protein bar', 'Protein shake', 'Protein bar', 'Legs', 'Abs']);
fitnessCenter(['7', 'Chest', 'Back', 'Legs', 'Legs', 'Abs', 'Protein shake', 'Protein bar']);
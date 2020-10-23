function carWash(arrInput) {
    let commands = arrInput;
    let startValue = 0;

    let soap = (startValueInput) => {
        startValue = startValueInput;

        startValue += 10;
        return startValue;
    }  

    let water = (startValueInput) => {
        let startValue = startValueInput;

        startValue += startValue * 0.2;
        return startValue;
    }

    let vacuumCleaner = (startValueInput) => {
        let startValue = startValueInput;

        startValue += startValue * 0.25;
        return startValue;
    }

    let mud = (startValueInput) => {
        let startValue = startValueInput;

        startValue -= startValue * 0.1;
        return startValue;
    }

    for (let i = 0; i < commands.length; i++) {
        let command = commands[i];

        if (command == 'soap') {
            startValue = soap(startValue);
        } else if (command == 'water') {
            startValue = water(startValue);
        } else if (command == 'vacuum cleaner') {
            startValue = vacuumCleaner(startValue);
        } else if (command == 'mud') {
            startValue = mud(startValue);
        }
    }

    console.log(`The car is ${startValue.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
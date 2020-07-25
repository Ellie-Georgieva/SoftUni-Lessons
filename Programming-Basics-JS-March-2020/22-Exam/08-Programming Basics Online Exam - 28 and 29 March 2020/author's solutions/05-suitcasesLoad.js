function anotherSolve(input) {
    // input data
    let maxVolume = Number(input.shift());

    // Declare initial variables
    let currentVolume = 0;
    let suitcaseCounter = 0;
    let suitcase = input.shift();
    let isFull = false;
    
    // loop for each suitcase -> End
    while (suitcase != 'End') {
        // Add volume to total
        let suitcaseVolume = Number(suitcase);
        
        // check for third suitcase
        if ((suitcaseCounter + 1) % 3 == 0) {
            // adjust volume
            suitcaseVolume *= 1.1
        } 

        if (currentVolume + suitcaseVolume <= maxVolume) {
            currentVolume += suitcaseVolume
            suitcaseCounter++;
        } else {
            isFull = true;
            break;
        }
        
        suitcase = input.shift();
    }
    
    // Print result
    if (isFull) {
        console.log('No more space!');
    } else {
        console.log(`Congratulations! All suitcases are loaded!`);
    }
    
    // Print statistics
    console.log(`Statistic: ${suitcaseCounter} suitcases loaded.`);
}

anotherSolve([ '550', '100', '252', '72', 'End', '' ]);
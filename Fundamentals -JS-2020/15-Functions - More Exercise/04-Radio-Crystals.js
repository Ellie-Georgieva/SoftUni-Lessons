function radioCrystals(arrInput) {
    let arr = arrInput.slice();
    let operations = ['Cut', 'Lap', 'Grind', 'Etch', 'X-ray'];
    let targetThickness = Number(arr[0]);
    let chunks = arr.slice(1).map(Number);

    for (let chunk of chunks) {
        let operationsLog = [`Processing chunk ${chunk} microns`];
        
        for (let operation of operations) {
            if (chunk == targetThickness) break;
            [chunk, operationsLog] = processChunk(operation, chunk, operationsLog);
        }

        operationsLog.push(`Finished crystal ${chunk} microns`);
        console.log(operationsLog.join('\n'));
    }

    function processChunk(operation, chunk, operationsLog) {
        let count = 0;

        switch (operation) {
            case 'Cut':
                while (chunk * 0.25 >= targetThickness) {
                    chunk *= 0.25;
                    count++;
                }
                [chunk, operationsLog] = updateLog(chunk, operation, count, operationsLog);
                break;
            case 'Lap':
                while (chunk * 0.8 >= targetThickness) {
                    chunk *= 0.8;
                    count++;
                }
                [chunk, operationsLog] = updateLog(chunk, operation, count, operationsLog);
                break;
            case 'Grind':
                while (chunk - 20 >= targetThickness) {
                    chunk -= 20;
                    count++;
                }
                [chunk, operationsLog] = updateLog(chunk, operation, count, operationsLog);
                break;
            case 'Etch':
                while (chunk - 2 >= targetThickness || chunk - 1 == targetThickness) {
                    chunk -= 2;
                    count++;
                }
                [chunk, operationsLog] = updateLog(chunk, operation, count, operationsLog);
                break;
            case 'X-ray':
                while (chunk + 1 <= targetThickness) {
                    chunk++;
                    count++;
                }
                [chunk, operationsLog] = updateLog(chunk, operation, count, operationsLog);
                break;
        }
        return [chunk, operationsLog];
    }

    function updateLog(chunk, operation, count, operationsLog) {
        if (count > 0) {
            operationsLog.push(`${operation} x${count}`);
            
            if (operation != 'X-ray') {
                operationsLog.push('Transporting and washing');
                chunk = Math.floor(chunk);
            }
        }
        return [chunk, operationsLog];
    }
}

radioCrystals([1375, 50000]);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function radioCrystals(arrInput) {
//     let arr = arrInput.slice();
//     let targetThickness = arr.shift();
//     let crystalThickness = arr.shift();

//     let cut = (crystalInput) => {
//         let crystal = crystalInput;

//         crystal /= 4;
//         return crystal;
//     }

//     let lap = (crystalThickness) => {
//         let crystal = crystalThickness;

//         crystal -= crystal * 0.2;
//         return crystal;
//     }

//     let grind = (crystalThickness) => {
//         let crystal = crystalThickness;

//         crystal -= 20;
//         return crystal;
//     }

//     let etch = (crystalThickness) => {
//         let crystal = crystalThickness;

//         crystal -= 2;
//         return crystal;
//     }

//     let xRay = (crystalThickness) => {
//         let crystal = crystalThickness;

//         crystal -= 1;
//         return crystal;
//     }

//     let transportingAndWashing = (crystalThickness) => {
//         let crystal = crystalThickness;

//         crystal = Math.floor(crystal);
//         return crystal;
//     }

//     console.log(`Processing chunk ${crystalThickness} microns`);
//     let counter = 0;

//     while (crystalThickness > targetThickness) {

//         crystalThickness = cut(crystalThickness);
//         counter++;
//     }

//     console.log(`Cut x${counter}`);
//     counter = 0;
//     crystalThickness = transportingAndWashing(crystalThickness);
//     console.log('Transporting and washing');

//     while (crystalThickness > targetThickness) {

//         crystalThickness = lap(crystalThickness);
//         counter++;
//     }

//     console.log(`Lap x${counter}`);
//     counter = 0;
//     crystalThickness = transportingAndWashing(crystalThickness);
//     console.log('Transporting and washing');

//     while (crystalThickness > targetThickness) {

//         crystalThickness = grind(crystalThickness);
//         counter++;
//     }

//     console.log(`Grind x${counter}`);
//     counter = 0;
//     crystalThickness = transportingAndWashing(crystalThickness);
//     console.log('Transporting and washing');

//     while (crystalThickness > targetThickness) {

//         crystalThickness = etch(crystalThickness);
//         counter++;
//     }

//     console.log(`Etch x${counter}`);
//     counter = 0;
//     crystalThickness = transportingAndWashing(crystalThickness);
//     console.log('Transporting and washing');

//     while (crystalThickness > targetThickness) {

//         crystalThickness = xRay(crystalThickness);
//         counter++;
//     }

//     console.log(`X-ray x${counter}`);
//     counter = 0;
//     crystalThickness = transportingAndWashing(crystalThickness);
//     console.log('Transporting and washing');

//     console.log(`Finished crystal ${targetThickness} microns`);
// }

// radioCrystals([1375, 50000]);
//  20/100 

function ladybugs(arrInput) {
    let arr = arrInput;
    let fieldSize = arr[0];
    let ladybugsPositions = arr[1].split(' ');
    let field = [];

    for (let i = 0; i < fieldSize; i++) {
        field.push(0);
    }

    for (let i = 0; i < ladybugsPositions.length; i++) {
        let ladybugsIndex = ladybugsPositions[i]
        
        if (ladybugsIndex >= 0 && ladybugsIndex <= fieldSize) {
            field[ladybugsIndex] = 1;
        }
    }

    for (let i = 2; i < arr.length; i++) {
        let ladybug = arr[i].split(' ');
        let position = Number(ladybug[0]);
        let direction = ladybug[1]
        let moves = Number(ladybug[2]);
        let action = 0;

            if (direction == 'right') {
            action = position + moves;
            } else {
                action = position - moves;
            }

            if (field[action] == 0) {
                field[position] = 0;
                field[action] = 1;
            } else {
                while (field[action] != 0) {
                    if (direction == 'right') {
                        action += moves
                        } else {
                            action -= moves;
                        }

                    if (field[action] == 0) {
                        field[position] = 0;
                        field[action] = 1;
                    }
                    
                    if (action + position > fieldSize || action  < 0) {
                        field[position] = 0;
                        break;
                    }
                }
            }
    }

    console.log(field.join(' '));
}

ladybugs([ 3, '0 1', '0 right 1', '2 right 1' ]);
ladybugs([ 3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
ladybugs([ 5, '3', '3 left 2', '1 left -2']);


//  100/100

function ladyBugs(arr) {
    let sizeOfField = arr[0];
    let ladybugsPositions = arr[1]
        .split(' ')
        .map(Number);
    let ladybugsArray = [];
 
    // fill the array with 0
    for (let i = 0; i < sizeOfField; i++) {
        ladybugsArray.push(0);
    }
    // mark starting ladybugs index
    for (let i = 0; i < sizeOfField; i++) {
        let ladybugIndex = ladybugsPositions[i];
        if (ladybugIndex >= 0 && ladybugIndex < sizeOfField) {
            ladybugsArray[ladybugIndex] = 1;
        }
    }
 
    for (let i = 2; i < arr.length; i++) {
        // JS destructuring
        let [ladybugIndex, command, jumpLength] = arr[i].split(' ');
        ladybugIndex = +ladybugIndex;
        jumpLength = +jumpLength;
 
        if (ladybugsArray[ladybugIndex] !== 1 || ladybugIndex < 0 || ladybugIndex >= ladybugsArray.length) {
            continue;
        }
        // check for negative steps
        if (jumpLength < 0) {
            jumpLength = Math.abs(jumpLength);
            if (command === 'right') {
                command = 'left';
            } else if (command === 'left') {
                command = 'right';
            }
        }
        // Free Position
        ladybugsArray[ladybugIndex] = 0;
        if (command === 'right') {
            // Ladybug jumps one time
            let newPosition = ladybugIndex + jumpLength;
            // Jump another time if there is a lady bug
            if (ladybugsArray[newPosition] === 1) {
                newPosition = newPosition + jumpLength;
            }
            if (newPosition <= ladybugsArray.length) {
                ladybugsArray[newPosition] = 1;
            }
 
        } else {
            // Lady bug jumps to the left
            let newPosition = ladybugIndex - jumpLength;
            // Jump another time if there is a lady bug
            if (ladybugsArray[newPosition] === 1) {
                newPosition = newPosition - jumpLength;
            }
            if(newPosition >= 0 ){
                ladybugsArray[newPosition] = 1;
            }
        }
 
    }
 
    console.log(ladybugsArray.join(' '));
 
}

ladyBugs([ 3, '0 1', '0 right 1', '2 right 1' ]);
ladyBugs([ 3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
ladyBugs([ 5, '3', '3 left 2', '1 left -2']);
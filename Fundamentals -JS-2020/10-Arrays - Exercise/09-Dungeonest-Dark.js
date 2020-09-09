function dungeonestDark(arrInput) {
    let arr = arrInput.toString();
    let health = 100;
    let coins = 0;
    let room = '';
    let iAmDied = false;
    let totalRooms = 0;
    let space = Number.POSITIVE_INFINITY;
    let numArr = '';

    for (let i = 0; i < arr.length; i++) {
        let arrI = arr[i]

        if (i == (arr.length - 1)) {
            arrI = '|';
        }
        
        if (arrI == ' ') {
            space = i;
            for (let j = space + 1; j < arr.length; j++) {
                numArr += arr[j];
                if (arr[j] == '|') {
                    numArr = numArr.replace('|', '');
                    break;
                }
            }
        } 
        if (arrI == '|') {
            numArr = Number(numArr);
            space = Number.POSITIVE_INFINITY;
            if (room.includes('potion')) {
                if (health + numArr > 100) {
                    let diff = 100 - health;
                    health += diff;
                    console.log(`You healed for ${diff} hp.`);
                } else {
                    health += numArr;
                    console.log(`You healed for ${numArr} hp.`);
                }
                console.log(`Current health: ${health} hp.`);
            } else if (room.includes('chest')) {
                coins += numArr;
                console.log(`You found ${numArr} coins.`);
            } else {
                health -= numArr;
                if (health > 0) {
                    console.log(`You slayed ${room}.`);
                } else {
                    console.log(`You died! Killed by ${room}.`);
                    iAmDied = true;
                }
            }
            totalRooms++;
            room = '';
            numArr = '';
        } else if (i < space) {
            room += arr[i];
        }

        if (iAmDied == true) {
            console.log(`Best room: ${totalRooms}`);
            break;
        }
    }

    if (iAmDied == false) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

dungeonestDark(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);
dungeonestDark(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110'])
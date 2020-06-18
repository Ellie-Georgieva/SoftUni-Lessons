function highJump(arr) {
    let heightGoal = Number(arr.shift());
    let startHeight = heightGoal - 30;
    let jumpNum = 0;
    let flag = false;

    while (startHeight <= heightGoal) {
        for (let i = 0; i < 3; i++) {
            let jump = Number(arr.shift());
            jumpNum++;

            if (jump > startHeight) {
                startHeight += 5;
                break;
            }
                
            if (i == 2) {
                console.log(`Tihomir failed at ${startHeight}cm after ${jumpNum} jumps.`);
                flag = true;
            }            
        }

        if (flag == true) {
            break;
        }
    }

    if (flag == false) {
        console.log(`Tihomir succeeded, he jumped over ${startHeight - 5}cm after ${jumpNum} jumps.`);
    }
}

highJump([231, 205, 212, 213, 228, 229, 230, 235]);
highJump([250, 225, 224, 225, 228, 231, 235, 234, 235]);
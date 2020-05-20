function walking(arr) {
    let goal = 10000;
    let steps = 0;

    while (steps < goal) {
        walk = arr.shift();
            if (walk == 'Going home') {
                steps += +arr.shift();
                if (steps < 10000) {
                let diff = goal - steps;
                console.log(`${diff} more steps to reach goal.`);
            }
                break;
            }
        steps += +walk;
    }

    if (steps >= goal) {
        console.log('Goal reached! Good job!');
    }
}

walking([1000, 1500, 2000, 6500]);
walking([1500, 3000, 250, 1548, 2000, 'Going home', 2000]);
walking([1500, 300, 2500, 3000, 'Going home', 200]);
walking([125, 250, 4000, 30, 2678, 4682]);
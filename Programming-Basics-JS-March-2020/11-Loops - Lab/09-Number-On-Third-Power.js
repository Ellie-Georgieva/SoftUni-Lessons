//short version

function numberOnThirdPower(n) {
    n = Number(n);
    let startNum = 1;
    
    if (n % 2 == 0) {
        startNum = 2;
    }

    for (let i = startNum; i <= n; i+=2) {
        let cube = i ** 3;

        console.log(`Current number: ${i}. Cube: ${cube}`);
    }
}

numberOnThirdPower(5);
numberOnThirdPower(6);


//long version

function numberOnThirdPower(n) {
    n = Number(n);

    if (n % 2 == 0) {
        for (let i = 1; i <= n; i++) {
            if (i % 2 == 0) {
                let b = i ** 3;
                console.log(`Current number: ${i}. Cube: ${b}`);
            } 
        }
    } else {
        for (let i = 1; i <= n; i+= 2) {
            let b = i ** 3;
            console.log(`Current number: ${i}. Cube: ${b}`);
        }
    }
}

numberOnThirdPower(5);
numberOnThirdPower(6);
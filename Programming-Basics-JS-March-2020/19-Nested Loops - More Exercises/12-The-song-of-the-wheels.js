function theSongOfTheWheels(arr) {
    let controlNum = Number(arr.shift());
    let password = '';
    let fourPassword = '';
    let passwordCounter = 0;

    for (let a = 1; a <= 9; a++) {

        for (let b = 1; b <= 9; b++) {

            for (let c = 1; c <= 9; c++) {

                for (let d = 1; d <= 9; d++) {

                    if (a < b && c > d) {

                        if ((a * b) + (c * d) == controlNum) {

                            password += a + '' + b + '' + c + '' + d + ' ';
                            passwordCounter++;
                            
                            if (passwordCounter == 4) {
                                fourPassword = a + '' + b + '' + c + '' + d;
                            }
                        }
                    }
                }
            }
        }
    }
    
    if (passwordCounter != 0) {
        console.log(password); 

        if (passwordCounter >= 4) {
            console.log(`Password: ${fourPassword}`);
        } else {
            console.log('No!');
        }

    } else {
        console.log('No!');
    }
}

theSongOfTheWheels([11]);
theSongOfTheWheels([139]);
theSongOfTheWheels([110]);
theSongOfTheWheels([55]);
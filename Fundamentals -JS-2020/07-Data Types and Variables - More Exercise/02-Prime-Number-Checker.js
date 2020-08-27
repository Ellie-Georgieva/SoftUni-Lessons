function primeNumberChecker(numInput) {
    const num = numInput;
    let flag = false;

    for (let i = 2; i < num; i++) {

        if (num % i == 0) {
            flag = true;
            break;
        }
    }

    flag == true 
    ? console.log('false')
    : console.log('true');
}

primeNumberChecker(7);
primeNumberChecker(8);
primeNumberChecker(81);
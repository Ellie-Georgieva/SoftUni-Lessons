function secretDoorsLock(arr) {
    let hundredLimit = Number(arr.shift());
    let tenLimit = Number(arr.shift());
    let oneLimit = Number(arr.shift());

    for (let hundred = 1; hundred <= hundredLimit; hundred++) {

        for (let ten = 1; ten <= tenLimit; ten++) {

            for (let one = 1; one <= oneLimit; one++) {

                if (one % 2 == 0 && hundred % 2 == 0 && [2, 3, 5, 7].includes(ten)) {

                    console.log(`${hundred} ${ten} ${one}`);
                }
            }
        }
    }
}

secretDoorsLock([3, 5, 5]);
secretDoorsLock([8, 2, 8]);
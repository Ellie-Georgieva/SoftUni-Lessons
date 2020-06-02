function safePasswordsGenerator(arr) {
    let endA = Number(arr.shift());
    let endB = Number(arr.shift());
    let maxPasswords = Number(arr.shift());
    let aSymbol = 35;
    let bSymbol = 64;
    let passwordsNum = 0;
    let totalPasswords = '';

    for (let x = 1; x <= endA; x++) {

        if ( maxPasswords == passwordsNum) {
            break;
        }

        for (let y = 1; y <= endB; y++) {

            if ( maxPasswords == passwordsNum) {
                break;
            }

            if (aSymbol > 55) {
                aSymbol = 35;
            }
            if (bSymbol > 96) {
                bSymbol = 64;
            }

            let password = `${String.fromCharCode(aSymbol)}${String.fromCharCode(bSymbol)}${x}${y}${String.fromCharCode(bSymbol)}${String.fromCharCode(aSymbol)}|`;
            totalPasswords += password;
            passwordsNum++;
            aSymbol++;
            bSymbol++;
        }
    }

    console.log(totalPasswords);
}

safePasswordsGenerator([2, 3, 10]);
safePasswordsGenerator([20, 50, 10]);
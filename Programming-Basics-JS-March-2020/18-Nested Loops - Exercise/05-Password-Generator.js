function passwordGenerator(arr) {
    let n = Number(arr.shift());
    let l = Number(arr.shift());
    let allPassword = '';

    for (let symbol1 = 1; symbol1 <= n; symbol1++) {
        
        for (symbol2 = 1; symbol2 <= n; symbol2++) {
            let lowercaseLetters = 97;
           
            for (let symbol3 = 1; symbol3 <= l; symbol3++) {
                let lowercaseSymbol = String.fromCharCode(lowercaseLetters);
                lowercaseLetters++;
                let lowercaseLetters2 = 97;

                for (let symbol4 = 1; symbol4 <= l; symbol4++) {
                    let lowercaseSymbol2 = String.fromCharCode(lowercaseLetters2);
                    lowercaseLetters2++;
                    
                    for (let symbol5 = 1; symbol5 <= n; symbol5++) {
                        if (symbol5 > symbol1 && symbol5 > symbol2) {
                            password = symbol1.toString() + symbol2.toString() + lowercaseSymbol + lowercaseSymbol2 + symbol5;
                            allPassword += password + ' ';
                        }
                    } 
                }
            } 
        } 
    } 

    console.log(allPassword);
}

passwordGenerator([2, 4]);
passwordGenerator([3, 1]);
passwordGenerator([3, 2]);
passwordGenerator([4, 2]);
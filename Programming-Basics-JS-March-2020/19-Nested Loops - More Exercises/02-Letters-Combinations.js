function lettersCombinations(arr) {
    let start = (arr.shift()).charCodeAt()
    let end = (arr.shift()).charCodeAt()
    let exception = (arr.shift()).charCodeAt()
    let combinations = '';
    let numCombinations = 0;

    for (let one = start; one <= end; one++) {

        for (let two = start; two <= end; two++) {

            for (let three = start; three <= end; three++) {

                if(one != exception && two != exception && three != exception) {
                    let numbers = String.fromCharCode(one) + String.fromCharCode(two) + String.fromCharCode(three);
                    combinations += numbers + ' ';
                    numCombinations++;
                }  
            }
        }
    }

    console.log(`${combinations}${numCombinations}`);
}

lettersCombinations(['a', 'c', 'b']);
lettersCombinations(['f', 'k', 'h']);
lettersCombinations(['a', 'c', 'z']);
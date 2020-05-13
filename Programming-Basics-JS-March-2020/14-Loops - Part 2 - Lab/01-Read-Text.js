function readText(arr) {
    let word = arr.shift();

    while (word != 'Stop') {
        console.log(word);
        word = arr.shift();
    }
}

readText(['Nakov', 'SoftUni', 'Sofia', 'Bulgaria', 'SomeText', 'Stop']);
readText(['Sofia', 'Berlin', 'Moscow', 'Athens', 'Madrid', 'London', 'Paris', 'Stop']);
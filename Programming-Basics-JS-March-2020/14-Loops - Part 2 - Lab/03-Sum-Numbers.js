function sumNumbers(arr) {
    let num = arr.shift();
    let result = 0;

    while (num !== 'Stop') {
        result += Number(num);
        num = arr.shift();
    }

    console.log(result);
}

sumNumbers(['10', '20', '30', '45', 'Stop']);
sumNumbers(['1', '2', '3', '4', '5', '6', 'Stop']);
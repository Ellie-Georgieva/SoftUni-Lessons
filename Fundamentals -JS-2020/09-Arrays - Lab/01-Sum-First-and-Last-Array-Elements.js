function sumFirstAndLastArrayElements(arr) {
    const firstNum = Number(arr.shift());
    const lastNum = Number(arr.pop());

    const result = firstNum + lastNum;
    console.log(result);
}

sumFirstAndLastArrayElements(['20', '30', '40']);
sumFirstAndLastArrayElements(['10', '17', '22', '33']);
sumFirstAndLastArrayElements(['11', '58', '69']);


// short 

function sumFirstAndLastArrayElements(arr) {

    console.log(Number(arr[0]) + Number(arr[arr.length - 1]));
}

sumFirstAndLastArrayElements(['20', '30', '40']);
sumFirstAndLastArrayElements(['10', '17', '22', '33']);
sumFirstAndLastArrayElements(['11', '58', '69']);
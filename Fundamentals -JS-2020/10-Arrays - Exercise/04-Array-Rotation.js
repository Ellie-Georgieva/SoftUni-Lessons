function arrayRotation(arrInput, numInput) {
    let arr = arrInput;
    let num = numInput;
    let counter = 0;

    while (counter < num) {
        let first = arr.shift();
        arr.push(first);
        counter++;
    }
    
    arr = arr.join(' ');

    console.log(arr);
}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);
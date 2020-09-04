function reverseArrayOfStrings(arr) {

    for (let i = 0; i < arr.length / 2; i++) {

        let firstElement = arr[i];
        let lastElement = arr.length - 1 - i;
        arr[i] = arr[lastElement];
        arr[lastElement] = firstElement;
    }

    console.log(arr.join(' '));
}

reverseArrayOfStrings(['a', 'b', 'c', 'd', 'e']);
reverseArrayOfStrings(['abc', 'def', 'hig', 'klm', 'nop']);
reverseArrayOfStrings(['33', '123', '0', 'dd']);
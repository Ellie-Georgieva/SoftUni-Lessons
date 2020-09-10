function printNthElement(arrInput) {
    let arr = arrInput.slice();
    let collections = [];
    const step = Number(arr.pop());

    for (let i = 0; i < arr.length; i += step) {
        collections.push(arr[i]);
    }

    collections = collections.join(' ');
    console.log(collections);
}

printNthElement(['5', '20', '31', '4', '20', '2']);
printNthElement(['dsa', 'asd', 'test', 'test', '2']);
printNthElement(['1', '2', '3', '4', '5', '6']);
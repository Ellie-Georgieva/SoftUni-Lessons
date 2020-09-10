function addAndRemove(arrInput) {
    let arr = arrInput.slice();
    let numbers = [];

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];
        
        command == 'add'
            ? numbers.push(i + 1)
            : numbers.pop();
    }

    if (numbers.length == 0) {
        numbers.push('Empty');
    }
    
    numbers = numbers.join(' ');
    console.log(numbers);
}

addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);
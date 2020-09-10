function rotateArray(arrInput) {
    let arr = arrInput.slice();
    let rotation = arr.pop();

    if (('1234567890').includes(rotation[0])) {
        rotation = Number(rotation);

        for (let i = 0; i < rotation; i++) {
            let element = arr.pop();
            arr.unshift(element);
        }
    
        arr = arr.join(' ');
        console.log(arr);
    } else {
        console.log(`Empty`);
    }
}

rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
rotateArray(['remove', 'remove', 'remove']);
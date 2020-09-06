function commonElements(firstArrInput, secondArrInput) {
    let firstArr = firstArrInput;
    let secondArr = secondArrInput;

    for (element of firstArr) {

        if (secondArr.includes(element)) {
            console.log(element);
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);


// forEach

function commonElements(firstArrInput, secondArrInput) {
    let firstArr = firstArrInput;
    let secondArr = secondArrInput;

    firstArr.forEach(element => {
        let includesElement = secondArr.includes(element);

        if (includesElement) {
            console.log(element);
        }
    });
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);



// arr.map

function commonElements(firstArrInput, secondArrInput) {
    let firstArr = firstArrInput;
    let secondArr = secondArrInput;

    firstArr.map((element) => {
        if (secondArr.includes(element)) {
            console.log(element);
        }
    });
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);
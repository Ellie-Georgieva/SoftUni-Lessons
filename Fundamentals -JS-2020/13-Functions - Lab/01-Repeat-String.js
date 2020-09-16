function repeatString(stringInput, repeatCountInput) {
    let string = stringInput;
    let repeatCount = repeatCountInput;
    let result = '';

    for (let i = 0; i < repeatCount; i++) {
        result += string;
    }

    return result 
}

repeatString('abc', 3);
repeatString('String', 2);



// short 

function repeatString(stringInput, repeatCountInput) {
    let string = stringInput;
    let repeatCount = repeatCountInput;

    return string.repeat(repeatCount);
}

repeatString('abc', 3);
repeatString('String', 2);
